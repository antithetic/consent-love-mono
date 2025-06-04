import {NotepadIcon} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

export const linkList = defineType({
  name: 'linkList',
  title: 'Link List',
  type: 'document',
  icon: NotepadIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'List name',
      type: 'string',
    }),
  ],
})
