import {FileTextIcon} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

import {singletonOptions} from '../definitions/singletonOptions'

export const about = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  icon: FileTextIcon,
  options: singletonOptions,
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'blockContent',
    }),
    defineField({
      name: 'team',
      title: 'Members',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'member'}]}],
    }),
  ],
})
