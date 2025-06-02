import {defineField, defineType} from 'sanity'

export const seoFields = defineType({
  name: 'seoFields',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'SEO Title',
      validation: (Rule) => Rule.required().max(60).warning('SEO titles should be under 60 characters'),
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
