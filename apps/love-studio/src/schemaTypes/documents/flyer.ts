import {ImageIcon} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

export const flyer = defineType({
  name: 'flyer',
  title: 'Flyer',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})
