import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Paulo Tivane Logo"
                width={150}
                height={50}
                className="hover-glow transition-all duration-300"
              />
            </div>
            <p className="text-gray-400">
              Engenheiro Informático baseado na Beira, Moçambique. Disponível para projetos freelance e oportunidades profissionais.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Sobre</li>
              <li>Blog</li>
              <li>Contato</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Desenvolvimento de Software</li>
              <li>Suporte Técnico</li>
              <li>Análise de Dados</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacte-nos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>tivanepaulo2@gmail.com</li>
              <li>+258 846485506</li>
              <li>Beira, Moçambique</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 Paulo Tivane. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
