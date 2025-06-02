import {defineField, defineType} from 'sanity'
export const contact = defineType({
  name: 'contact',
  type: 'document',
  title: 'Contact',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Contact Name',
    }),
  ],
})
