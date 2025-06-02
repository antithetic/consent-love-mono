import {ImageBrokenIcon} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

export const flyer = defineType({
  name: 'Flyer',
  title: 'Flyer',
  type: 'document',
  icon: ImageBrokenIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})
