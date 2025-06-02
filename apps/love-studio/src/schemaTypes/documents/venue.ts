import {FactoryIcon} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

export const venue = defineType({
  type: 'document',
  name: 'venue',
  title: 'Venue',
  icon: FactoryIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Venue Name',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'url',
      name: 'website',
      title: 'Venue Website',
    }),
    defineField({
      type: 'streetAddress',
      name: 'address',
      title: 'Venue Address',
    }),
    defineField({
      type: 'text',
      name: 'description',
      title: 'Description',
      rows: 3,
    }),
    defineField({
      type: 'array',
      name: 'contactInfo',
      title: 'Contact Information',
      of: [{type: 'reference', to: [{type: 'contact'}]}],
    }),
    defineField({type: 'number', name: 'capacity', title: 'Capacity'}),
    defineField({
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
      name: 'images',
      title: 'Venue Images',
      description: 'Add up to 5 images',
      validation: (rule) => rule.max(5).error('Maximum 5 images allowed'),
    }),
  ],
})
