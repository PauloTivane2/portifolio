// lib/sanity-utils.js
import { client, queries } from './sanity'

// Função genérica para buscar dados
export async function getSanityData(queryKey) {
  try {
    const query = queries[queryKey]
    if (!query) {
      throw new Error(`Query "${queryKey}" não encontrada`)
    }

    const data = await client.fetch(query)
    return data
  } catch (error) {
    console.error(`Erro ao buscar dados do Sanity (${queryKey}):`, error)
    return null
  }
}

// Função específica para configurações do site
export async function getSiteSettings() {
  return getSanityData('getSiteSettings')
}

// Função para obter dados do perfil
export async function getProfile() {
  return getSanityData('getProfile')
}

// Função para obter serviços
export async function getServices() {
  return getSanityData('getServices')
}

// Função para obter projetos em destaque
export async function getFeaturedProjects() {
  return getSanityData('getFeaturedProjects')
}

// Função para obter todos os projetos
export async function getAllProjects() {
  return getSanityData('getAllProjects')
}

// Função para obter expertise técnica
export async function getExpertise() {
  return getSanityData('getExpertise')
}

// Função para obter informações de contato
export async function getContact() {
  return getSanityData('getContact')
}
