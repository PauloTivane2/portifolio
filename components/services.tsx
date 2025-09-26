"use client"

import { Card } from "./card"
import { Code, Palette, Globe } from "lucide-react"
import { useState, useEffect } from "react"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
}

function ServiceCard({ icon, title, description, delay = 0 }: ServiceCardProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <Card className={`p-6 text-center hover:bg-gray-900 transition-all duration-500 hover-lift animate-glow font-mono ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'}`}>
      <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-white/10 animate-float hover-glow">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 gradient-text">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </Card>
  )
}

export function Services() {
  const [titleVisible, setTitleVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setTitleVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-16 relative particle-bg" id="services">
      <div className="text-center mb-12">
        <h2 className={`text-3xl font-bold mb-4 font-mono gradient-text transition-all duration-700 transform ${titleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
          O Que Eu Faço
        </h2>
        <p className={`text-gray-400 max-w-2xl mx-auto font-mono transition-all duration-700 transform ${titleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`} style={{ animationDelay: '200ms' }}>
          Ofereço uma ampla gama de serviços para ajudar empresas e indivíduos a criar experiências digitais impactantes.
          Veja como posso ajudá-lo a ter sucesso.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard
          icon={<Code size={24} />}
          title="Desenvolvimento de Software"
          description="Desenvolvimento de aplicações em Java, Python, C e SQL, focando em soluções eficientes e escaláveis."
          delay={400}
        />
        <ServiceCard
          icon={<Palette size={24} />}
          title="Suporte Técnico"
          description="Resolução de problemas técnicos, manutenção de sistemas e suporte ao utilizador com rapidez e eficiência."
          delay={600}
        />
        <ServiceCard
          icon={<Globe size={24} />}
          title="Análise de Dados"
          description="Organização, digitalização e análise de dados para insights valiosos e tomada de decisões informadas."
          delay={800}
        />
      </div>
    </section>
  )
}
