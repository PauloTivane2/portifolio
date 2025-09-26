import Image from "next/image"
import { Card } from "./card"
import { Button } from "./button"
import { ExternalLink, Github } from "lucide-react"

interface ProjectProps {
  title: string
  description: string
  image: string
  demoLink: string
  githubLink: string
}

function ProjectCard({ title, description, image, demoLink, githubLink }: ProjectProps) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative h-48 mb-4">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="text-lg font-semibold group-hover:text-white transition-colors mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <div className="flex gap-4">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="text-white border-gray-600 hover:bg-white hover:text-black bg-transparent"
        >
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <ExternalLink size={16} /> Demo
          </a>
        </Button>
        <Button
          variant="outline"
          size="sm"
          asChild
          className="text-white border-gray-600 hover:bg-white hover:text-black bg-transparent"
        >
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Github size={16} /> Code
          </a>
        </Button>
      </div>
    </Card>
  )
}

export function Projects() {
  const projects = [
    {
      title: "Planilhas Automatizadas Acadêmicas",
      description: "Sistema de gestão académica com cálculos automáticos de notas e relatórios de desempenho estudantil.",
      image: "/placeholder.svg?height=300&width=400",
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Sistema de Registro de Vacinação",
      description: "Aplicação para controlo e gestão de campanhas de vacinação com base de dados integrada.",
      image: "/placeholder.svg?height=300&width=400",
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Projeto de Gestão de Biblioteca",
      description: "Sistema académico para gestão de empréstimos, devoluções e inventário de livros.",
      image: "/placeholder.svg?height=300&width=400",
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Aplicação de Análise de Dados",
      description: "Ferramenta para processamento e visualização de dados estatísticos com Python.",
      image: "/placeholder.svg?height=300&width=400",
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Sistema de Suporte Técnico",
      description: "Plataforma para gestão de tickets e resolução de problemas técnicos organizacionais.",
      image: "/placeholder.svg?height=300&width=400",
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Base de Dados Empresarial",
      description: "Sistema de gestão de dados empresariais com SQL e interface de utilizador intuitiva.",
      image: "/placeholder.svg?height=300&width=400",
      demoLink: "#",
      githubLink: "#",
    },
  ]

  return (
    <section className="py-16" id="works">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Projetos em Destaque</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore os meus projetos mais recentes. Cada projeto demonstra o meu compromisso em criar soluções 
          digitais inovadoras e funcionais.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}
