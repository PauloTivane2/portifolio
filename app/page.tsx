import { Button } from "@/components/button"
import { Stats } from "@/components/stats"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Testimonials } from "@/components/testimonials"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              I am Lukman
              <span className="block text-white mt-2">Next-Level Web Developer.</span>
            </h1>
            <p className="text-gray-400 mb-8">
              I help their company and experience problems by building accessible and inclusive web products and digital
              experiences.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-black transition-all duration-300"
              >
                Contact Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                Download CV
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-square max-w-[400px] mx-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20(1)-36mT3cZRS54CSZtOrCfN1EpI4EI0tZ.png"
                alt="Profile"
                fill
                className="rounded-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <Stats />
      </section>

      {/* Other Sections */}
      <div className="container mx-auto px-4">
        <Services />
        <Projects />
        <Skills />
        <Testimonials />

        {/* Contact Section */}
        <section className="py-16" id="contact">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Let's Get In Touch</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Have a project in mind or want to discuss potential opportunities? I'm just a message away.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-400">+91 7074399354</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-400">dev.lukmansk@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-400">Murshidabad, West Bengal, India</p>
                    </div>
                  </div>
                </div>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="bg-gray-900 border border-gray-700 rounded-lg p-3 w-full focus:outline-none focus:border-white text-white"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="bg-gray-900 border border-gray-700 rounded-lg p-3 w-full focus:outline-none focus:border-white text-white"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-900 border border-gray-700 rounded-lg p-3 w-full focus:outline-none focus:border-white text-white"
                />
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="bg-gray-900 border border-gray-700 rounded-lg p-3 w-full focus:outline-none focus:border-white text-white"
                />
                <Button size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Lukman</h3>
              <p className="text-gray-400">
                Full Stack Developer based in your location. Available for freelance work.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Web Development</li>
                <li>UI/UX Design</li>
                <li>Mobile Development</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@example.com</li>
                <li>+1234567890</li>
                <li>Your Address Here</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 Lukman. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
