import { Button } from "@/components/button"
import { Phone, Mail, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-16" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Vamos Conversar</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tem um projeto em mente ou quer discutir oportunidades? Estou apenas a uma mensagem de distância.
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
                  <h3 className="font-semibold">Telefone</h3>
                  <p className="text-gray-400">+258 846485506 / 872385528 / 833833824</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-400">tivanepaulo2@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Endereço</h3>
                  <p className="text-gray-400">Cidade da Beira, Sofala, Moçambique</p>
                </div>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Primeiro Nome"
                className="bg-gray-900 border border-gray-700 rounded-lg p-3 w-full focus:outline-none focus:border-white text-white"
              />
              <input
                type="text"
                placeholder="Último Nome"
                className="bg-gray-900 border border-gray-700 rounded-lg p-3 w-full focus:outline-none focus:border-white text-white"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-900 border border-gray-700 rounded-lg p-3 w-full focus:outline-none focus:border-white text-white"
            />
            <textarea
              placeholder="Mensagem"
              rows={6}
              className="bg-gray-900 border border-gray-700 rounded-lg p-3 w-full focus:outline-none focus:border-white text-white"
            />
            <Button size="lg" className="w-full">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
