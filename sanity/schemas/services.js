// sanity/schemas/services.js
export default {
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'General Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      name: 'services',
      title: 'Service List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Service Name',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'description',
              title: 'Service Description',
              type: 'text',
              rows: 3,
              validation: Rule => Rule.required()
            },
            {
              name: 'icon',
              title: 'Service Icon',
              type: 'string',
              description: 'Emoji or icon identifier for the service'
            }
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'description'
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(1)
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description'
    }
  }
}
