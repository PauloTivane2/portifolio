// sanity/schemas/siteSettings.js
export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      initialValue: 'Paulo Tivane - Portfolio'
    },
    {
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      rows: 3,
      initialValue: 'Professional portfolio of Paulo Babucho Issaca Tivane - Computer Engineer & Data Analyst'
    },
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          validation: Rule => Rule.required()
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{ type: 'string' }],
          options: {
            layout: 'tags'
          }
        },
        {
          name: 'ogImage',
          title: 'Open Graph Image',
          type: 'image',
          description: 'Image for social media sharing'
        }
      ]
    },
    {
      name: 'profile',
      title: 'Profile Section',
      type: 'reference',
      to: [{ type: 'profile' }],
      description: 'Reference to the main profile document'
    },
    {
      name: 'services',
      title: 'Services Section',
      type: 'reference',
      to: [{ type: 'services' }],
      description: 'Reference to the services document'
    },
    {
      name: 'projects',
      title: 'Featured Projects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'projects' }]
        }
      ],
      description: 'Select featured projects to display'
    },
    {
      name: 'expertise',
      title: 'Technical Expertise',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'expertise' }]
        }
      ],
      description: 'Select expertise categories to display'
    },
    {
      name: 'contact',
      title: 'Contact Information',
      type: 'reference',
      to: [{ type: 'contact' }],
      description: 'Reference to the contact information document'
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'GitHub', value: 'github' },
                  { title: 'Twitter', value: 'twitter' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'YouTube', value: 'youtube' },
                  { title: 'Medium', value: 'medium' },
                  { title: 'Other', value: 'other' }
                ]
              }
            },
            {
              name: 'url',
              title: 'Profile URL',
              type: 'url',
              validation: Rule => Rule.required()
            },
            {
              name: 'username',
              title: 'Username',
              type: 'string'
            }
          ],
          preview: {
            select: {
              title: 'platform',
              subtitle: 'username'
            }
          }
        }
      ]
    },
    {
      name: 'theme',
      title: 'Site Theme',
      type: 'object',
      fields: [
        {
          name: 'primaryColor',
          title: 'Primary Color',
          type: 'string',
          description: 'Hex color code for primary theme color'
        },
        {
          name: 'secondaryColor',
          title: 'Secondary Color',
          type: 'string',
          description: 'Hex color code for secondary theme color'
        },
        {
          name: 'fontFamily',
          title: 'Font Family',
          type: 'string',
          options: {
            list: [
              { title: 'Inter', value: 'inter' },
              { title: 'Roboto', value: 'roboto' },
              { title: 'Open Sans', value: 'open-sans' },
              { title: 'Space Mono', value: 'space-mono' },
              { title: 'JetBrains Mono', value: 'jetbrains-mono' }
            ]
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'siteName'
    }
  }
}
