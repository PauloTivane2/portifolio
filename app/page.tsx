import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/HeroSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      {/* Hero Section */}
      <HeroSection />

      {/* Other Sections */}
      <div className="container mx-auto px-4">
        <Services />
        <Projects />
        <Skills />

        {/* Contact Section */}
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}
