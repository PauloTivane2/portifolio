"use client"

import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Stats } from "@/components/layout/stats"
import { getProfile } from "@/lib/sanity-utils"
import { urlFor } from "@/lib/sanity"

export function HeroSection() {
  const [isVisible, setIsVisible] = React.useState(false)
  const [profile, setProfile] = React.useState(null)

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  React.useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile()
        setProfile(data)
      } catch (error) {
        console.error('Erro ao buscar perfil:', error)
      }
    }

    fetchProfile()
  }, [])

  if (!profile) {
    return (
      <section className="container mx-auto px-4 pt-32 pb-20 relative particle-bg">
        <div className="flex items-center justify-center h-96">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
        </div>
      </section>
    )
  }

  return (
    <section className="container mx-auto px-4 pt-32 pb-20 relative particle-bg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'animate-fade-in-left' : 'opacity-0 translate-x-[-50px]'}`}>
          <h1 className="text-4xl lg:text-6xl font-bold mb-4" style={{ fontFamily: 'var(--font-space-mono), monospace' }}>
            {profile.name}
          </h1>
          <h2 className="text-xl lg:text-2xl text-gray-300 mb-6">
            {profile.title}
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            {profile.bio}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            {profile.buttons?.map((button, index) => (
              <Button
                key={index}
                variant={button.type === 'primary' ? 'default' : 'outline'}
                asChild
              >
                <a href={button.link} target="_blank" rel="noopener noreferrer">
                  {button.text}
                </a>
              </Button>
            ))}
          </div>
        </div>

        {/* Profile Image and Stats */}
        <div className={`transition-all duration-1000 transform ${isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-[50px]'}`}>
          <div className="flex flex-col items-center">
            {profile.image && (
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-75 animate-pulse"></div>
                <Image
                  src={urlFor(profile.image).width(300).height(300).url()}
                  alt={profile.name}
                  width={300}
                  height={300}
                  className="relative rounded-full border-4 border-white/20 hover:border-white/40 transition-all duration-300"
                  priority
                />
              </div>
            )}

            {/* Stats */}
            <Stats metrics={profile.metrics} />
          </div>
        </div>
      </div>
    </section>
  )
}
