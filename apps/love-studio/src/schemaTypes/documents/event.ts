import {CalendarDotsIcon} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

import {DoorsOpenInput} from '../components/DoorsOpenInput'

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: CalendarDotsIcon,
  fields: [
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'name',
      title: 'Event Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Path',
      type: 'eventSlug',
    }),
    defineField({
      name: 'eventType',
      type: 'string',
      options: {
        list: ['in-person', 'virtual', 'hybrid'],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'date',
      type: 'datetime',
    }),
    // Replace "doorsOpen" in the array of fields:
    defineField({
      name: 'doorsOpen',
      description: 'Number of minutes before the start time for admission',
      type: 'number',
      initialValue: 60,
      components: {
        input: DoorsOpenInput,
      },
    }),
    defineField({
      name: 'venue',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'venue'}]}],
      readOnly: ({value, document}) =>
        !value && document?.eventType === 'virtual',
      validation: (rule) =>
        rule.custom((value, context) => {
          if (value && context?.document?.eventType === 'virtual') {
            return 'Only in-person events can have a venue'
          }
          return true
        }),
    }),
    defineField({
      name: 'artists',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'artist'}]}],
    }),
    defineField({
      name: 'details',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'tickets',
      type: 'url',
    }),
  ],
  // Preview
  preview: {
    select: {
      name: 'name',
      venue: 'venue.name',
      artists: 'artists.0.name',
      date: 'date',
      image: 'image',
    },
    prepare({name, venue, artists, date, image}) {
      const nameFormatted = name || 'Untitled event'
      const dateFormatted = date
        ? new Date(date).toLocaleDateString(undefined, {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
          })
        : 'No date'

      return {
        title: artists ? `${nameFormatted} (${artists})` : nameFormatted,
        subtitle: venue ? `${dateFormatted} at ${venue}` : dateFormatted,
        media: image || CalendarDotsIcon,
      }
    },
  },
})
