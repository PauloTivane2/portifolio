import type { Metadata } from 'next'
import Image from 'next/image'
import { Space_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Paulo Tivane - Engenheiro Informático',
  description: 'Portfólio de Paulo Babucho Issaca Tivane - Estudante finalista de Engenharia Informática na Universidade Zambeze, especializado em desenvolvimento de software, suporte técnico e análise de dados.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={spaceMono.variable}>
      <body className={`${spaceMono.className} antialiased`}>
        {/* Header with Logo */}
        <header className="bg-gray-900 border-b border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Paulo Tivane Logo"
                  width={120}
                  height={40}
                  className="hover-glow transition-all duration-300"
                  priority
                />
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#sobre" className="text-gray-300 hover:text-white transition-colors">
                  Sobre
                </a>
                <a href="#projetos" className="text-gray-300 hover:text-white transition-colors">
                  Projetos
                </a>
                <a href="#contato" className="text-gray-300 hover:text-white transition-colors">
                  Contato
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>

        <Analytics />
      </body>
    </html>
  )
}
