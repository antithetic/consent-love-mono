import {MapPinIcon} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

export const streetAddress = defineType({
  type: 'object',
  name: 'streetAddress',
  title: 'Street Address',
  icon: MapPinIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'street',
      title: 'Street Address',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'city',
      title: 'City',
      validation: (Rule) => Rule.required(),
    }),
    defineField({type: 'string', name: 'state', title: 'State'}),
    defineField({type: 'string', name: 'postalCode', title: 'Postal Code'}),
  ],
})
