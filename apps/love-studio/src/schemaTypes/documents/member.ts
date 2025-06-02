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
  ],
})
