import {UserRectangleIcon} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

import {genreTagsField} from '../definitions/genreTagsField'

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
    defineField({
      name: 'bio',
      type: 'text',
      title: 'Biography',
      rows: 3,
    }),
    {
      ...genreTagsField,
      title: 'Artist Tags',
    },
    defineField({
      name: 'image',
      type: 'imageBlock',
      title: 'Profile Image',
    }),
  ],
})
