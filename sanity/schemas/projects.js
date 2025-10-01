// sanity/schemas/projects.js
export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Project Description',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'demoLink',
      title: 'Demo Link',
      type: 'url',
      description: 'Link to live demo or deployed project'
    },
    {
      name: 'codeLink',
      title: 'Code Link',
      type: 'url',
      description: 'Link to source code repository'
    },
    {
      name: 'technologies',
      title: 'Technologies Used',
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
              name: 'category',
              title: 'Technology Category',
              type: 'string',
              options: {
                list: [
                  { title: 'Frontend', value: 'frontend' },
                  { title: 'Backend', value: 'backend' },
                  { title: 'Database', value: 'database' },
                  { title: 'DevOps', value: 'devops' },
                  { title: 'Other', value: 'other' }
                ]
              }
            }
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'category'
            }
          }
        }
      ]
    },
    {
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      description: 'Mark as featured to display prominently',
      initialValue: false
    },
    {
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          { title: 'Web Application', value: 'web-app' },
          { title: 'Mobile App', value: 'mobile-app' },
          { title: 'Desktop App', value: 'desktop-app' },
          { title: 'API/Backend', value: 'api-backend' },
          { title: 'Other', value: 'other' }
        ]
      }
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      media: 'image'
    }
  },
  orderings: [
    {
      title: 'Featured First',
      name: 'featuredOrder',
      by: [
        { field: 'featured', direction: 'desc' },
        { field: 'name', direction: 'asc' }
      ]
    }
  ]
}
