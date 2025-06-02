import {defineField, defineType} from 'sanity'

export const archiveFlyer = defineType({
  name: 'archiveFlyer',
  title: 'Archive Flyer',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})
