// sanity/schemas/index.js
import profile from './profile'
import services from './services'
import projects from './projects'
import expertise from './expertise'
import contact from './contact'
import siteSettings from './siteSettings'

export const schemaTypes = [
  // Main content schemas
  profile,
  services,
  projects,
  expertise,
  contact,

  // Site configuration
  siteSettings
]

export default schemaTypes
