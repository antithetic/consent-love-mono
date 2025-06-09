import {defineField, defineType} from 'sanity'
export const contactCard = defineType({
  name: 'contactCard',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Contact Name',
    }),
  ],
})
