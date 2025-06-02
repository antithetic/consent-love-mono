import {defineField} from 'sanity'

export const genreTagsField = defineField({
  name: 'genreTags',
  type: 'tags',
  options: {
    includeFromRelated: 'genreTags',
    allowCreate: true,
    onCreate: (value: string) => ({
      label: value,
      value: value
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, ''),
    }),
    checkValid: (input: string, values: string[]) => {
      const normalizedInput = input
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '')
      return (
        !!input && input.trim() === input && !values.includes(normalizedInput)
      )
    },
  },
})
