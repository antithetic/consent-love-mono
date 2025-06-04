import {LinkSimpleIcon} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

import {genreTagsField} from '../definitions/genreTagsField'

export const link = defineType({
  name: 'link',
  title: 'Link',
  type: 'document',
  icon: LinkSimpleIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Display Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'URL',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      rows: 2,
    }),
    {
      ...genreTagsField,
      title: 'Link Tags',
    },
    defineField({
      name: 'openInNewTab',
      type: 'boolean',
      title: 'Open in new tab',
      initialValue: true,
    }),
  ],
})
