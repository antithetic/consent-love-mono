import {defineField} from 'sanity'

const normalizeTag = (value: string): string => {
  return value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')
}

export const genreTagsField = defineField({
  name: 'genreTags',
  type: 'tags',
  options: {
    includeFromRelated: 'genreTags',
    allowCreate: true,
    onCreate: (value: string) => ({
      label: value,
      value: normalizeTag(value),
    }),
    checkValid: (input: string, values: string[]) => {
      const normalizedInput = normalizeTag(input)
      return !!input && !values.includes(normalizedInput)
    },
  },
})
