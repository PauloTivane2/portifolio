import Image from "next/image"
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="Paulo Tivane Logo"
                width={150}
                height={50}
                className="hover-glow transition-all duration-300"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Engenheiro Informático baseado na Beira, Moçambique. Disponível para projetos freelance e oportunidades profissionais.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Empresa</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Sobre</li>
              <li className="hover:text-white transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-white transition-colors cursor-pointer">Contato</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Serviços</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition-colors">Desenvolvimento de Software</li>
              <li className="hover:text-white transition-colors">Suporte Técnico</li>
              <li className="hover:text-white transition-colors">Análise de Dados</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Contacte-nos</h4>
            <div className="space-y-4">
              {/* Social Media Icons Row */}
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/paulo-babucho-issaca-tivane-542b24363"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2 hover:bg-gray-800 rounded-lg"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/Paulotivane2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2 hover:bg-gray-800 rounded-lg"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
              </div>

              {/* Contact Details */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail size={16} className="flex-shrink-0" />
                  <a
                    href="mailto:tivanepaulo2@gmail.com"
                    className="hover:text-white transition-colors text-sm"
                  >
                    tivanepaulo2@gmail.com
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone size={16} className="flex-shrink-0" />
                  <a
                    href="tel:+258846485506"
                    className="hover:text-white transition-colors text-sm"
                  >
                    +258 846485506
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin size={16} className="flex-shrink-0" />
                  <span className="text-sm">Beira, Moçambique</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center text-gray-400 text-sm">
            <p>© 2025 Paulo Tivane. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
