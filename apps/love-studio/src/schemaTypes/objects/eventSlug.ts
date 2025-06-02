import {LinkSimpleIcon} from '@phosphor-icons/react'
import type {SanityDocument} from 'sanity'
import {defineField, defineType} from 'sanity'

interface EventDocument extends SanityDocument {
  name?: string
  date?: string | Date
}

export const eventSlug = defineType({
  type: 'object',
  name: 'eventSlug',
  icon: LinkSimpleIcon,
  fields: [
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Website path or permalink',
      options: {
        source: (doc: EventDocument): string => {
          const name = doc?.name || ''
          const date = doc?.date

          if (!date) return name

          // Format date as YYYY-MM-DD
          const dateObj = new Date(date)
          const year = dateObj.getFullYear()
          const month = String(dateObj.getMonth() + 1).padStart(2, '0')
          const day = String(dateObj.getDate()).padStart(2, '0')
          const formattedDate = `${year}-${month}-${day}`

          return name ? `${name}-${formattedDate}` : formattedDate
        },
      },
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
      hidden: ({document}) => !document?.name,
    }),
  ],
})
