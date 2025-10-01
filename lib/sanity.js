// lib/sanity.js
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

/**
 * Configuração do Sanity Client
 *
 * VARIÁVEIS DE AMBIENTE NECESSÁRIAS:
 * - NEXT_PUBLIC_SANITY_PROJECT_ID: Seu Project ID do Sanity
 * - NEXT_PUBLIC_SANITY_DATASET: Dataset (geralmente 'production')
 *
 * Como obter:
 * 1. Vá para sanity.io/manage
 * 2. Selecione seu projeto
 * 3. Copie o Project ID
 * 4. O dataset padrão é 'production'
 */

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'e69aec5k',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false, // Desabilitar CDN para desenvolvimento
  apiVersion: '2025-01-01',
  // Configurações adicionais para resolver problemas de conectividade
  fetch: (url, options = {}) => {
    return fetch(url, {
      ...options,
      // Headers adicionais se necessário
      headers: {
        ...options.headers,
      },
      // Timeout para evitar travamentos
      signal: AbortSignal.timeout(10000) // 10 segundos
    })
  }
})

// Helper para gerar URLs de imagens
const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

// GROQ Queries para buscar dados
export const queries = {
  // Buscar configurações do site
  getSiteSettings: `*[_type == "siteSettings"][0]{
    siteName,
    siteDescription,
    seo,
    profile->{
      name,
      title,
      image,
      bio,
      buttons,
      metrics
    },
    services->{
      title,
      description,
      services
    },
    projects[]->{
      name,
      description,
      image,
      demoLink,
      codeLink,
      technologies,
      featured,
      projectType
    },
    expertise[]->{
      category,
      technologies[]{
        name,
        proficiency,
        icon,
        yearsOfExperience,
        description
      }
    },
    contact->{
      title,
      description,
      contacts,
      location
    },
    socialLinks,
    theme
  }`,

  // Buscar apenas o perfil
  getProfile: `*[_type == "profile"][0]{
    name,
    title,
    image,
    bio,
    buttons,
    metrics
  }`,

  // Buscar serviços
  getServices: `*[_type == "services"][0]{
    title,
    description,
    services
  }`,

  // Buscar projetos em destaque
  getFeaturedProjects: `*[_type == "projects" && featured == true] | order(_createdAt desc)[0...6]{
    name,
    description,
    image,
    demoLink,
    codeLink,
    technologies,
    projectType
  }`,

  // Buscar todos os projetos
  getAllProjects: `*[_type == "projects"] | order(_createdAt desc){
    name,
    description,
    image,
    demoLink,
    codeLink,
    technologies,
    projectType
  }`,

  // Buscar expertise técnica
  getExpertise: `*[_type == "expertise"] | order(order asc){
    category,
    technologies[]{
      name,
      proficiency,
      icon,
      yearsOfExperience,
      description
    }
  }`,

  // Buscar informações de contato
  getContact: `*[_type == "contact"][0]{
    title,
    description,
    contacts,
    location
  }`
}
