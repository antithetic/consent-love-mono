import {LinkSimpleIcon} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

export const eventSlug = defineType({
  type: 'object',
  name: 'eventSlug',
  icon: LinkSimpleIcon,
  fields: [
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Website path or permalink',
      options: {source: 'name'},
      validation: (e) => e.required(),
    }),
  ],
})
