import {ImageBrokenIcon} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

export const archiveFlyer = defineType({
  name: 'archiveFlyer',
  title: 'Archive Flyer',
  type: 'document',
  icon: ImageBrokenIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})
