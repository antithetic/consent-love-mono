import {NotepadIcon} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

export const linkList = defineType({
  name: 'linkList',
  title: 'Link List',
  type: 'document',
  icon: NotepadIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Website Path',
      type: 'slug',
    }),
    defineField({
      name: 'collections',
      title: 'Link Collections',
      description: 'Add link collections here',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'linkCollection'}]}],
    }),
  ],
})
