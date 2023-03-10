import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'document',
      fields: [
        defineField({
          name: 'url',
          title: 'Url',
          type: 'url',
        }),
      ],
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter',
      type: 'document',
      fields: [
        defineField({
          name: 'url',
          title: 'Url',
          type: 'url',
        }),
      ],
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'email',
    },
  },
})
