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
    }),
    defineField({
      name: 'artistProfile',
      type: 'reference',
      description:
        'Link,  or create, artist profile. This will be linked on the website.',
      to: [{type: 'artist'}],
    }),
  ],
})
