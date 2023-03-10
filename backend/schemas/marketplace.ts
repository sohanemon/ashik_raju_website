import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'marketplace',
  title: 'Marketplace',
  type: 'document',
  fields: [
    defineField({
      name: 'fiverr',
      title: 'Fiverr',
      type: 'document',
      fields: [
        defineField({
          name: 'url',
          title: 'Url',
          type: 'url',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'marketplace',
    },
  },
})
