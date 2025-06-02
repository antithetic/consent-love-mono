import {defineField, defineType} from 'sanity'

export const imageBlock = defineType({
  name: 'imageBlock',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Alt text / Description',
    }),
  ],
})
