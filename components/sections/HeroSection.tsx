"use client"

import React from "react"
import Image from "next/image"
import { Button } from "@/components/button"
import { Stats } from "@/components/stats"

export function HeroSection() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="container mx-auto px-4 pt-32 pb-20 relative particle-bg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'animate-fade-in-left' : 'opacity-0 translate-x-[-50px]'}`}>
          <h1 className="text-4xl lg:text-6xl font-bold mb-4" style={{ fontFamily: 'var(--font-space-mono), monospace' }}>
            <span className="gradient-text">Eu sou Paulo Babucho</span>
            <span className="block text-white mt-2 animate-typewriter">Engenheiro Informático & Analista de Dados.</span>
          </h1>
          <p className={`text-gray-400 mb-8 transition-all duration-1000 transform ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'}`} style={{ animationDelay: '0.5s' }}>
            Estudante finalista de Engenharia Informática na Universidade Zambeze, especializado em suporte técnico, 
            desenvolvimento de software e análise de dados. Baseado na Cidade da Beira, Moçambique.
          </p>
          <div className={`flex gap-4 transition-all duration-1000 transform ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'}`} style={{ animationDelay: '0.8s' }}>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-black transition-all duration-300 hover-lift font-mono"
            >
              Contact Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent hover-glow font-mono"
            >
              Download CV
            </Button>
          </div>
        </div>
        <div className={`relative transition-all duration-1000 transform ${isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-[50px]'}`} style={{ animationDelay: '0.3s' }}>
          <div className="relative aspect-square max-w-[400px] mx-auto animate-float">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent animate-glow"></div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20(1)-36mT3cZRS54CSZtOrCfN1EpI4EI0tZ.png"
              alt="Profile"
              fill
              className="rounded-2xl object-cover hover-lift"
              priority
            />
          </div>
        </div>
      </div>

      <div className={`mt-16 transition-all duration-1000 transform ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'}`} style={{ animationDelay: '1.2s' }}>
        <Stats />
      </div>
    </section>
  )
}
