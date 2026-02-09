import { Mail, Linkedin, Github, Heart, Target, Users } from "lucide-react";

const teamMembers = [
  {
    name: "Ana Silva",
    role: "Designer de UI/UX",
    imageUrl: "https://images.unsplash.com/photo-1623594675959-02360202d4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA0Njc0NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Apaixonada por criar experiências digitais que conectam pessoas e pets. Especialista em design centrado no usuário com 5 anos de experiência.",
  },
  {
    name: "Carlos Santos",
    role: "Desenvolvedor Front-end",
    imageUrl: "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBzbWlsaW5nJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwNTc4MTkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Desenvolvedor fullstack dedicado a construir plataformas que fazem a diferença. Entusiasta de React e tecnologias modernas de desenvolvimento web.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Amor pelos Animais",
    description: "Acreditamos que todo pet merece uma família amorosa e um lar seguro.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Target,
    title: "Missão Clara",
    description: "Facilitar conexões entre pets e famílias através da tecnologia.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Users,
    title: "Comunidade",
    description: "Unir ONGs, protetores e adotantes em uma rede de apoio e cuidado.",
    color: "bg-green-100 text-green-600",
  },
];

export function QuemSomos() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Conheça-nos
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Nossa Missão é Conectar Corações
            </h1>
            <p className="text-lg text-gray-600">
              O AdotaPet nasceu da vontade de fazer a diferença na vida de milhares de animais
              que esperam por uma segunda chance. Utilizamos tecnologia e geolocalização para
              aproximar pets de suas futuras famílias.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Os princípios que guiam nosso trabalho e nos inspiram todos os dias
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className={`${value.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nossa Equipe
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça as pessoas por trás do AdotaPet, dedicadas a transformar vidas através da tecnologia
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-gray-600">
                    {member.bio}
                  </p>
                  <div className="flex gap-3 pt-2">
                    <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                      <Mail className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                      <Linkedin className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                      <Github className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div className="space-y-2">
              <p className="text-5xl font-bold">+2.500</p>
              <p className="text-blue-200 text-lg">Pets Adotados</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-bold">+150</p>
              <p className="text-blue-200 text-lg">ONGs Parceiras</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-bold">+5.000</p>
              <p className="text-blue-200 text-lg">Usuários Ativos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Heart className="w-16 h-16 text-red-500 mx-auto" />
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Faça Parte Dessa História
          </h2>
          <p className="text-lg text-gray-600">
            Se você também acredita que podemos fazer a diferença na vida dos animais,
            junte-se a nós nessa jornada. Seja cadastrando sua ONG, adotando um pet ou
            compartilhando nossa plataforma.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl transition-colors font-medium shadow-lg">
              Quero Adotar um Pet
            </button>
            <button className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-xl transition-colors font-medium border-2 border-blue-600">
              Cadastrar Minha ONG
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
