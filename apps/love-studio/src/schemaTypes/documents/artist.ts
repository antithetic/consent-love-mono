import {UserRectangleIcon} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

export const artist = defineType({
  name: 'artist',
  title: 'Artist',
  type: 'document',
  icon: UserRectangleIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})
