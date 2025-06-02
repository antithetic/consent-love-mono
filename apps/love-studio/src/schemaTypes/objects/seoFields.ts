import {defineField, defineType} from 'sanity'

export const seoFields = defineType({
  name: 'seoFields',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'logo',
      title: 'Site Logo',
      type: 'image',
    }),
  ],
})
