import type { Metadata } from 'next'
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
