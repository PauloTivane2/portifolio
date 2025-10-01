"use client"

import React from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { getFeaturedProjects } from "@/lib/sanity-utils"
import { urlFor } from "@/lib/sanity"

interface ProjectProps {
  title: string
  description: string
  image: string
  demoLink: string
  githubLink: string
  technologies?: Array<{ name: string; category: string }>
}

function ProjectCard({ title, description, image, demoLink, githubLink, technologies }: ProjectProps) {
  return (
    <Card className="group overflow-hidden bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300">
      <div className="relative overflow-hidden">
        <Image
          src={urlFor(image).width(400).height(250).url()}
          alt={title}
          width={400}
          height={250}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-4">
            {demoLink && (
              <Button size="sm" asChild>
                <a href={demoLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </a>
              </Button>
            )}
            {githubLink && (
              <Button size="sm" variant="outline" asChild>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-3">{description}</p>

        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
              >
                {tech.name}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                +{technologies.length - 3} mais
              </span>
            )}
          </div>
        )}
      </div>
    </Card>
  )
}

export function Projects() {
  const [projects, setProjects] = React.useState([])
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getFeaturedProjects()
        setProjects(data || [])
      } catch (error) {
        console.error('Erro ao buscar projetos:', error)
      }
    }

    fetchProjects()
  }, [])

  if (projects.length === 0) {
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Projetos em Destaque</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Alguns dos meus trabalhos mais recentes e desafiadores que demonstram minhas habilidades técnicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
