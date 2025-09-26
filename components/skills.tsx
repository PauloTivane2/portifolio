"use client"

import React, { useState, useEffect } from "react"

interface SkillItemProps {
  name: string
  icon: string
  level?: string
}

interface SkillCategoryProps {
  title: string
  icon: string
  skills: SkillItemProps[]
  delay?: number
}

function SkillCategory({ title, icon, skills, delay = 0 }: SkillCategoryProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-700 transform hover-lift ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'} backdrop-blur-sm`}>
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mr-4 animate-glow">
          <div className="text-white text-2xl">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-white font-mono tracking-wide">{title}</h3>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`flex items-center justify-between p-3 rounded-lg bg-black/20 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 transform hover:translate-x-1 hover:bg-black/30 ${isVisible ? 'animate-fade-in-left' : 'opacity-0 translate-x-4'}`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mr-3">
                <div className="text-white text-lg">
                  {skill.icon}
                </div>
              </div>
              <span className="text-gray-300 font-mono font-medium">{skill.name}</span>
            </div>
            {skill.level && (
              <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-400 font-mono">
                {skill.level}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  const [titleVisible, setTitleVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setTitleVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Java", icon: "☕", level: "Advanced" },
        { name: "Python", icon: "🐍", level: "Advanced" },
        { name: "JavaScript", icon: "🟨", level: "Intermediate" },
        { name: "TypeScript", icon: "🔷", level: "Intermediate" },
        { name: "Dart", icon: "🎯", level: "Intermediate" }
      ],
      delay: 200
    },
    {
      title: "Frameworks & Libraries",
      icon: "🌐",
      skills: [
        { name: "React", icon: "⚛️", level: "Advanced" },
        { name: "Next.js", icon: "▲", level: "Intermediate" },
        { name: "Flutter", icon: "📱", level: "Intermediate" },
        { name: "TailwindCSS", icon: "🎨", level: "Advanced" }
      ],
      delay: 400
    },
    {
      title: "Cloud & Deployment",
      icon: "☁️",
      skills: [
        { name: "Vercel", icon: "🚀", level: "Intermediate" }
      ],
      delay: 600
    },
    {
      title: "Operating Systems",
      icon: "🖥️",
      skills: [
        { name: "Windows", icon: "🪟", level: "Expert" },
        { name: "Linux", icon: "🐧", level: "Intermediate" }
      ],
      delay: 800
    },
    {
      title: "Productivity Tools",
      icon: "🛠️",
      skills: [
        { name: "Microsoft Office", icon: "📊", level: "Expert" }
      ],
      delay: 1000
    }
  ]

  return (
    <section className="py-20 relative" id="skills">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/5 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 font-mono gradient-text transition-all duration-1000 transform ${titleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
              Technical Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto mb-6"></div>
          </div>
          <p className={`text-gray-400 max-w-3xl mx-auto text-lg font-mono leading-relaxed transition-all duration-1000 transform ${titleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '300ms' }}>
            Domínio técnico desenvolvido através de anos de experiência prática em desenvolvimento de software, 
            análise de dados e suporte técnico especializado.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              delay={category.delay}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-white/5 to-white/10 border border-white/20 transition-all duration-1000 transform ${titleVisible ? 'animate-scale-in' : 'opacity-0 scale-90'}`} style={{ animationDelay: '1200ms' }}>
            <span className="text-gray-300 font-mono text-sm">
              Sempre aprendendo e evoluindo tecnicamente
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
