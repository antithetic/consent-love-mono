import {ImageIcon} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

import {genreTagsField} from '../definitions/genreTagsField'

export const flyer = defineType({
  name: 'flyer',
  title: 'Flyer',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Flyer Name',
    }),
    defineField({
      name: 'image',
      type: 'imageBlock',
      title: 'Flyer Image',
      validation: (Rule) => Rule.required(),
    }),
    {
      ...genreTagsField,
      title: 'Flyer Tags',
    },
  ],
})
