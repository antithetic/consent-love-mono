import {AddressBookTabsIcon} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

export const contact = defineType({
  name: 'contact',
  type: 'document',
  icon: AddressBookTabsIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      type: 'email',
      title: 'Contact Email',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'info',
      title: 'Contact notes',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'connections',
      title: 'Contact Connections',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'contact'}]}],
    }),
  ],
})
