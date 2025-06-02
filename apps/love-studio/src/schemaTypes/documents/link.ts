import {LinkSimpleIcon} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

export const link = defineType({
  name: 'link',
  title: 'Link',
  type: 'document',
  icon: LinkSimpleIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})
