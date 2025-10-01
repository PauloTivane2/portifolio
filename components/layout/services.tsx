"use client"

import React from "react"
import { Card } from "@/components/ui/card"
import { Code, Palette, Globe, Database, Smartphone, Shield } from "lucide-react"
import { getServices } from "@/lib/sanity-utils"

const iconMap = {
  Code,
  Palette,
  Globe,
  Database,
  Smartphone,
  Shield,
}

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
}

function ServiceCard({ icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <Card className="p-6 hover-lift bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="p-3 bg-blue-500/10 rounded-lg mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </Card>
  )
}

export function Services() {
  const [services, setServices] = React.useState(null)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  React.useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices()
        setServices(data)
      } catch (error) {
        console.error('Erro ao buscar serviços:', error)
      }
    }

    fetchServices()
  }, [])

  if (!services) {
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{services.title}</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {services.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.services?.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Code
            return (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard
                  icon={<IconComponent className="w-6 h-6 text-blue-400" />}
                  title={service.name}
                  description={service.description}
                  delay={index * 0.1}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
