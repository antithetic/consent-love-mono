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
      title: 'Flyer Name',
    }),
    defineField({
      name: 'image',
      type: 'imageBlock',
      title: 'Flyer Image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'genreTags',
      title: 'Flyer Tags',
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
  ],
})
