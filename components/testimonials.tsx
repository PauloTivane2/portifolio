import { Card } from "./card"
import Image from "next/image"
import { Quote } from "lucide-react"

interface TestimonialProps {
  content: string
  author: string
  position: string
  image: string
}

function TestimonialCard({ content, author, position, image }: TestimonialProps) {
  return (
    <Card>
      <Quote className="text-white mb-4 h-8 w-8" />
      <p className="text-gray-400 mb-6">{content}</p>
      <div className="flex items-center gap-4">
        <Image src={image || "/placeholder.svg"} alt={author} width={48} height={48} className="rounded-full" />
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-gray-400">{position}</p>
        </div>
      </div>
    </Card>
  )
}

export function Testimonials() {
  const testimonials = [
    {
      author: "Prof. Dr. António Silva",
      position: "Docente de Engenharia Informática",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&q=60",
      content:
        "Paulo demonstra excepcional dedicação e organização nos seus projetos académicos. A sua capacidade de resolver problemas complexos e trabalhar em equipe é notável.",
    },
    {
      author: "Eng. Maria Santos",
      position: "Supervisora de Estágio",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=60",
      content:
        "Trabalhar com o Paulo foi uma experiência excelente. A sua rapidez na resolução de problemas técnicos e atenção aos detalhes superaram as nossas expectativas.",
    },
    {
      author: "João Macuácua",
      position: "Colega de Curso",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop&q=60",
      content:
        "Paulo é um excelente colega de equipe. A sua organização e conhecimento técnico em Java e Python foram fundamentais para o sucesso dos nossos projetos académicos.",
    },
  ]

  return (
    <section className="py-16" id="testimonials">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Depoimentos</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Não acredite apenas na minha palavra. Veja o que professores, supervisores e colegas têm a dizer sobre 
          a experiência de trabalhar comigo.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  )
}
