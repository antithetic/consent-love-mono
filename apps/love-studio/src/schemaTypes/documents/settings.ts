import {GearIcon} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

import {singletonOptions} from '../definitions/singletonOptions'

export const settings = defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: GearIcon,
  options: singletonOptions,
  fields: [
    defineField({
      name: 'site',
      type: 'seoFields',
      title: 'Site Settings',
    }),
  ],
  preview: {
    select: {
      title: 'site.title',
      description: 'site.description',
      logo: 'site.logo',
    },
    prepare({title, description, logo}) {
      return {
        title: title || 'Untitled Settings',
        subtitle: description || 'No description',
        media: logo || GearIcon,
      }
    },
  },
})
