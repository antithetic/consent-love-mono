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
    defineField({
      name: 'bio',
      type: 'text',
      title: 'Biography',
      rows: 3,
    }),
    defineField({
      name: 'genreTags',
      title: 'Artist Tags',
      type: 'tags',
      options: {
        includeFromRelated: 'genreTags',
        allowCreate: true,
        onCreate: (value: string) => ({
          label: value,
          value: value.toLowerCase().replace(/\W/g, '-'),
        }),
        checkValid: (input: string, values: string[]) => {
          return (
            !!input &&
            input.trim() === input &&
            !values.includes(input.trim().toLowerCase().replace(/\W/g, '-'))
          )
        },
      },
    }),
    defineField({
      name: 'image',
      type: 'imageBlock',
      title: 'Profile Image',
    }),
  ],
})
