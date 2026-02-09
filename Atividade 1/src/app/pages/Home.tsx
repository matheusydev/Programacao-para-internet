import { Search, MapPin, Heart, CheckCircle2, Users, Building2 } from "lucide-react";
import { PetCard } from "../components/PetCard";

const heroImageUrl = "https://images.unsplash.com/photo-1552386763-fecd1454ff43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBlcnNvbiUyMGh1Z2dpbmclMjBkb2clMjBjYXQlMjBob21lfGVufDF8fHx8MTc3MDU3ODE5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const featuredPets = [
  {
    name: "Luna",
    age: "2 anos",
    size: "Pequeno",
    location: "São Paulo, SP",
    imageUrl: "https://images.unsplash.com/photo-1769117320552-b114ed49b987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwcHVwcHklMjBhZG9wdGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDU3ODE5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Mel",
    age: "1 ano",
    size: "Médio",
    location: "Rio de Janeiro, RJ",
    imageUrl: "https://images.unsplash.com/photo-1625192494235-21e8821040c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjB0YWJieSUyMGNhdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDU3ODE5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Thor",
    age: "3 anos",
    size: "Grande",
    location: "Belo Horizonte, MG",
    imageUrl: "https://images.unsplash.com/photo-1734966213753-1b361564bab4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXIlMjBkb2clMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA1NDQ0OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

const howItWorks = [
  {
    icon: Search,
    title: "Busque",
    description: "Encontre abrigos e pets próximos à sua localização",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Heart,
    title: "Escolha",
    description: "Veja fotos, idade e informações detalhadas do animal",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: CheckCircle2,
    title: "Adote",
    description: "Entre em contato direto com o responsável pela adoção",
    color: "bg-green-100 text-green-600",
  },
];

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  🐾 Plataforma de Adoção Responsável
                </div>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  O seu novo melhor amigo está mais perto do que você imagina
                </h1>
                <p className="text-lg text-gray-600">
                  Conectamos pessoas que querem adotar com ONGs, abrigos e protetores
                  independentes. Encontre seu companheiro perfeito usando geolocalização.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Digite seu CEP ou bairro"
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button className="sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl transition-colors font-medium shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 flex items-center justify-center gap-2">
                    <Search className="w-5 h-5" />
                    Buscar Pets
                  </button>
                </div>
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Encontramos pets em um raio de até 50km da sua localização
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroImageUrl}
                  alt="Pessoa feliz com cachorro e gato"
                  className="w-full h-auto"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-xl">
                    <Users className="w-8 h-8 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">+2.500</p>
                    <p className="text-gray-600">Pets Adotados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Adotar um pet nunca foi tão fácil e seguro. Veja como funciona em 3 passos simples
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div
                key={step.title}
                className="relative bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  {index + 1}
                </div>
                <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destaques */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pets em Destaque
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça alguns dos pets que estão esperando por uma família amorosa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredPets.map((pet) => (
              <PetCard key={pet.name} {...pet} />
            ))}
          </div>

          <div className="text-center">
            <button className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-xl transition-colors font-medium border-2 border-blue-600 shadow-lg">
              Ver Todos os Pets Disponíveis
            </button>
          </div>
        </div>
      </section>

      {/* CTA for ONGs */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl inline-block">
                  <Building2 className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Você é uma ONG ou protetor?
                </h2>
                <p className="text-lg text-blue-100">
                  Cadastre seus animais gratuitamente e alcance milhares de pessoas
                  interessadas em adotar. Juntos, podemos encontrar um lar para cada pet.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <ul className="space-y-3 text-white">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span>Cadastro 100% gratuito e sem taxas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span>Geolocalização para encontrar adotantes próximos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span>Acompanhamento completo do processo de adoção</span>
                    </li>
                  </ul>
                </div>
                <button className="w-full bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-xl transition-colors font-medium shadow-xl">
                  Cadastrar Minha ONG
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
