// schemas/linkCollection.ts
import {BookmarksIcon} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

export const linkCollection = defineType({
  name: 'linkCollection',
  title: 'Link Collection',
  type: 'document',
  icon: BookmarksIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'link'}]}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon',
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrder',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
})
