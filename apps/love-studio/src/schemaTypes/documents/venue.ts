import {FactoryIcon} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

export const venue = defineType({
  type: 'document',
  name: 'venue',
  title: 'Venue',
  icon: FactoryIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'Name',
      title: 'Venue Name',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'url',
      name: 'website',
      title: 'Venue Website',
    }),
    defineField({
      type: 'streetAddress',
      name: 'address',
      title: 'Venue  Address',
    }),
    defineField({
      type: 'text',
      name: 'description',
      title: 'Description',
      rows: 2,
    }),
    defineField({
      type: 'string',
      name: 'contactInfo',
      title: 'Contact Information',
    }),
    defineField({type: 'number', name: 'capacity', title: 'Capacity'}),
    defineField({type: 'image', name: 'images', title: 'Gallery'}),
  ],
})
