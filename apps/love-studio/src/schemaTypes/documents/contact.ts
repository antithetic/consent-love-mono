import {defineField, defineType} from 'sanity'

export const contact = defineType({
  name: 'contact',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})
