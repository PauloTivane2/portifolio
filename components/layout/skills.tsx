"use client"

import React from "react"
import { getExpertise } from "@/lib/sanity-utils"

interface SkillItemProps {
  name: string
  icon: string
  proficiency?: string
  yearsOfExperience?: number
  description?: string
}

function SkillItem({ name, icon, proficiency, yearsOfExperience, description }: SkillItemProps) {
  const getProficiencyColor = (level: string) => {
    switch (level) {
      case 'expert': return 'bg-green-500/20 text-green-300 border-green-500/30'
      case 'advanced': return 'bg-blue-500/20 text-blue-300 border-blue-500/30'
      case 'intermediate': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30'
    }
  }

  return (
    <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 hover-lift">
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-3">{icon}</span>
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{name}</h3>
          {proficiency && (
            <span className={`inline-block px-2 py-1 text-xs rounded-full border mt-1 ${getProficiencyColor(proficiency)}`}>
              {proficiency}
            </span>
          )}
        </div>
      </div>

      {yearsOfExperience && (
        <p className="text-sm text-gray-400 mb-2">
          {yearsOfExperience} anos de experiência
        </p>
      )}

      {description && (
        <p className="text-sm text-gray-400">{description}</p>
      )}
    </div>
  )
}

export function Skills() {
  const [expertise, setExpertise] = React.useState([])
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 400)
    return () => clearTimeout(timer)
  }, [])

  React.useEffect(() => {
    const fetchExpertise = async () => {
      try {
        const data = await getExpertise()
        setExpertise(data || [])
      } catch (error) {
        console.error('Erro ao buscar expertise:', error)
      }
    }

    fetchExpertise()
  }, [])

  if (expertise.length === 0) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-48">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={`py-20 transition-all duration-1000 transform ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Expertise Técnica</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino, organizadas por categoria e nível de proficiência.
          </p>
        </div>

        <div className="space-y-12">
          {expertise.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-semibold mb-6 text-center">{category.category}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.technologies?.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (techIndex * 0.1)}s` }}
                  >
                    <SkillItem
                      name={tech.name}
                      icon={tech.icon || '💻'}
                      proficiency={tech.proficiency}
                      yearsOfExperience={tech.yearsOfExperience}
                      description={tech.description}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}