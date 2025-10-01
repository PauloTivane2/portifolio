// sanity/schemas/contact.js
export default {
  name: 'contact',
  title: 'Contact Information',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Let\'s Work Together'
    },
    {
      name: 'description',
      title: 'Contact Description',
      type: 'text',
      rows: 3,
      initialValue: 'Have a project in mind? I\'d love to hear from you. Send me a message and let\'s discuss how we can bring your ideas to life.'
    },
    {
      name: 'contacts',
      title: 'Contact Methods',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'type',
              title: 'Contact Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Email', value: 'email' },
                  { title: 'Phone', value: 'phone' },
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'GitHub', value: 'github' },
                  { title: 'Twitter', value: 'twitter' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'WhatsApp', value: 'whatsapp' },
                  { title: 'Telegram', value: 'telegram' },
                  { title: 'Discord', value: 'discord' },
                  { title: 'Skype', value: 'skype' },
                  { title: 'Other', value: 'other' }
                ]
              },
              validation: Rule => Rule.required()
            },
            {
              name: 'value',
              title: 'Contact Value',
              type: 'string',
              validation: Rule => Rule.required(),
              description: 'Email address, phone number, or URL'
            },
            {
              name: 'label',
              title: 'Display Label',
              type: 'string',
              description: 'Custom label (optional, defaults to type)'
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Icon class, emoji, or image for this contact method'
            },
            {
              name: 'primary',
              title: 'Primary Contact',
              type: 'boolean',
              description: 'Mark as primary contact method',
              initialValue: false
            }
          ],
          preview: {
            select: {
              title: 'type',
              subtitle: 'value'
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        {
          name: 'city',
          title: 'City',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'country',
          title: 'Country',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'timezone',
          title: 'Timezone',
          type: 'string',
          description: 'e.g., GMT+2, EST, PST'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'location.city'
    }
  }
}
