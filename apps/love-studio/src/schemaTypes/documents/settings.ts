import {GearIcon} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

export const settings = defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: GearIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})
