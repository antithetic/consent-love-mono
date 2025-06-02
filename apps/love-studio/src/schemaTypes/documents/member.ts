import {UserCircleGearIcon} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

export const member = defineType({
  name: 'member',
  title: 'Member',
  type: 'document',
  icon: UserCircleGearIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'artistProfile',
      type: 'reference',
      title: 'Artist Profile',
      description:
        'Link, or create, artist profile. This will be linked on the website.',
      to: [{type: 'artist'}],
    }),
  ],
})
