// sanity.config.js
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './sanity/schemas/index.js'

export default defineConfig({
  name: 'default',
  title: 'Paulo Tivane Portfolio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'e69aec5k',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2025-01-01',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
