// sanity/schemas/expertise.js
export default {
  name: 'expertise',
  title: 'Technical Expertise',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: Rule => Rule.required(),
      description: 'e.g., Programming Languages, Frameworks, Tools, etc.'
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Technology Name',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'proficiency',
              title: 'Proficiency Level',
              type: 'string',
              options: {
                list: [
                  { title: 'Beginner', value: 'beginner' },
                  { title: 'Intermediate', value: 'intermediate' },
                  { title: 'Advanced', value: 'advanced' },
                  { title: 'Expert', value: 'expert' }
                ]
              },
              validation: Rule => Rule.required()
            },
            {
              name: 'icon',
              title: 'Icon/Image',
              type: 'string',
              description: 'Emoji, icon class, or image URL'
            },
            {
              name: 'yearsOfExperience',
              title: 'Years of Experience',
              type: 'number',
              validation: Rule => Rule.min(0).max(20)
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
              description: 'Brief description of experience with this technology'
            }
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'proficiency'
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order for displaying categories (lower numbers appear first)'
    }
  ],
  preview: {
    select: {
      title: 'category',
      subtitle: 'technologies'
    }
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrder',
      by: [
        { field: 'order', direction: 'asc' },
        { field: 'category', direction: 'asc' }
      ]
    }
  ]
}
