import {defineField, defineType} from 'sanity'

export const imageBlock = defineType({
  name: 'imageBlock',
  type: 'object',
  fields: [
    defineField({
      name: 'description',
      type: 'string',
    }),
  ],
})
