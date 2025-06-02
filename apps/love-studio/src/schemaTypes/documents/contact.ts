import {defineField, defineType} from 'sanity'

export const contact = defineType({
  name: 'contact',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      type: 'email',
      title: 'Contact Email',
    }),
    defineField({
      name: 'info',
      title: 'Contact notes',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'connections',
      title: 'Contact Connections',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'contact'}]}],
    }),
  ],
})
