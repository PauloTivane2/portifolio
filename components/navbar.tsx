"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "./button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/98 backdrop-blur-lg shadow-lg animate-slide-in-down' : 'bg-black/95 backdrop-blur'} supports-[backdrop-filter]:bg-black/60`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0 animate-fade-in-left">
            <Image
              src="/logo.png"
              alt="Paulo Tivane Logo"
              width={120}
              height={40}
              className="hover-glow transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 animate-fade-in-right">
            <Link href="#services" className="text-white hover:text-primary transition-all duration-300 font-mono hover-glow">
              Serviços
            </Link>
            <Link href="#works" className="text-white hover:text-primary transition-all duration-300 font-mono hover-glow">
              Projetos
            </Link>
            <Link href="#skills" className="text-white hover:text-primary transition-all duration-300 font-mono hover-glow">
              Habilidades
            </Link>
            <Button className="hover-lift font-mono">Contact</Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 hover-glow transition-all duration-300">
              {isOpen ? <X size={24} className="animate-scale-in" /> : <Menu size={24} className="animate-scale-in" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden animate-slide-in-down">
            <div className="flex flex-col space-y-4 px-2 pt-2 pb-4 bg-black/90 backdrop-blur-lg rounded-b-lg">
              <Link
                href="#services"
                className="text-white hover:text-primary transition-all duration-300 font-mono hover-glow animate-fade-in-left"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: '0.1s' }}
              >
                Serviços
              </Link>
              <Link
                href="#works"
                className="text-white hover:text-primary transition-all duration-300 font-mono hover-glow animate-fade-in-left"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: '0.2s' }}
              >
                Projetos
              </Link>
              <Link
                href="#skills"
                className="text-white hover:text-primary transition-all duration-300 font-mono hover-glow animate-fade-in-left"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: '0.3s' }}
              >
                Habilidades
              </Link>
              <Button className="w-full hover-lift font-mono animate-fade-in-up" style={{ animationDelay: '0.4s' }}>Contact</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
