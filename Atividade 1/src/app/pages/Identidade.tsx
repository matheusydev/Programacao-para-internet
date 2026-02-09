import { Palette, Type, Sparkles, CheckCircle2, MapPin, Heart, Search, FileCheck, GraduationCap, Code } from "lucide-react";

const colorPalette = [
  {
    name: "Azul Principal",
    hex: "#2563EB",
    usage: "Botões primários, links, elementos de destaque",
    class: "bg-blue-600",
  },
  {
    name: "Azul Escuro",
    hex: "#1E40AF",
    usage: "Hover states, textos importantes",
    class: "bg-blue-700",
  },
  {
    name: "Laranja",
    hex: "#F97316",
    usage: "Chamadas de ação secundárias, ícones de destaque",
    class: "bg-orange-500",
  },
  {
    name: "Verde",
    hex: "#10B981",
    usage: "Mensagens de sucesso, confirmações",
    class: "bg-green-500",
  },
  {
    name: "Vermelho",
    hex: "#EF4444",
    usage: "Favoritos, alertas importantes",
    class: "bg-red-500",
  },
  {
    name: "Cinza Escuro",
    hex: "#1F2937",
    usage: "Textos principais",
    class: "bg-gray-800",
  },
  {
    name: "Cinza Médio",
    hex: "#6B7280",
    usage: "Textos secundários",
    class: "bg-gray-500",
  },
  {
    name: "Cinza Claro",
    hex: "#F3F4F6",
    usage: "Backgrounds, separadores",
    class: "bg-gray-100",
  },
];

const icons = [
  { Icon: MapPin, name: "Localização", color: "text-blue-600" },
  { Icon: Heart, name: "Favorito", color: "text-red-500" },
  { Icon: Search, name: "Busca", color: "text-gray-600" },
  { Icon: CheckCircle2, name: "Confirmação", color: "text-green-500" },
  { Icon: FileCheck, name: "Cadastro", color: "text-blue-600" },
];

export function Identidade() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Brand Guidelines
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Identidade Visual AdotaPet
            </h1>
            <p className="text-lg text-gray-600">
              Nossa identidade visual foi criada para transmitir confiança, acolhimento e proximidade.
              Cada elemento foi pensado para conectar corações e facilitar adoções responsáveis.
            </p>
          </div>
        </div>
      </section>

      {/* Sobre o Projeto */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-12 border-2 border-blue-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-600 p-3 rounded-xl">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Sobre o Projeto
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  O <span className="font-semibold text-blue-600">AdotaPet</span> é um protótipo desenvolvido 
                  como projeto acadêmico da disciplina de <span className="font-semibold">Programação para Internet</span> do 
                  <span className="font-semibold"> Instituto Federal do Piauí (IFPI)</span>.
                </p>
                
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-blue-100">
                  <div className="flex items-start gap-3 mb-4">
                    <Code className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Objetivo Acadêmico</h3>
                      <p className="text-gray-600">
                        Este projeto tem como objetivo aplicar os conceitos de desenvolvimento web moderno, 
                        incluindo design responsivo, experiência do usuário (UX), componentização e boas 
                        práticas de programação front-end.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-blue-100">
                    <p className="font-semibold text-gray-900 mb-2">🎯 Propósito</p>
                    <p className="text-sm text-gray-600">
                      Criar uma solução tecnológica que conecte pets e adotantes através de geolocalização
                    </p>
                  </div>
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-blue-100">
                    <p className="font-semibold text-gray-900 mb-2">🛠️ Tecnologias</p>
                    <p className="text-sm text-gray-600">
                      React, TypeScript, Tailwind CSS e princípios de UI/UX Design
                    </p>
                  </div>
                </div>

                <p className="text-base leading-relaxed italic text-gray-600 border-l-4 border-blue-600 pl-4">
                  "Este protótipo demonstra como a tecnologia pode ser utilizada para resolver problemas 
                  sociais reais, facilitando o processo de adoção responsável e ajudando a encontrar lares 
                  para animais em situação de vulnerabilidade."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Logo
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nosso logo combina um marcador de localização com uma patinha, representando nossa missão
              de conectar pets e famílias através da geolocalização.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Versão Colorida */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
              <p className="text-sm font-medium text-gray-600 mb-6 text-center">VERSÃO COLORIDA</p>
              <div className="flex flex-col items-center justify-center py-12 space-y-4">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
                  <path
                    d="M20 4C15.5817 4 12 7.58172 12 12C12 17 20 28 20 28C20 28 28 17 28 12C28 7.58172 24.4183 4 20 4Z"
                    fill="#2563EB"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <ellipse cx="20" cy="12" rx="2" ry="2.5" fill="white" />
                  <ellipse cx="17" cy="10" rx="1.5" ry="2" fill="white" />
                  <ellipse cx="23" cy="10" rx="1.5" ry="2" fill="white" />
                  <ellipse cx="18" cy="14" rx="1.2" ry="1.8" fill="white" />
                  <ellipse cx="22" cy="14" rx="1.2" ry="1.8" fill="white" />
                </svg>
                <div className="text-center">
                  <span className="text-3xl font-semibold text-gray-900">
                    Adota<span className="text-blue-600">Pet</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Versão Preta */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
              <p className="text-sm font-medium text-gray-600 mb-6 text-center">VERSÃO PRETA</p>
              <div className="flex flex-col items-center justify-center py-12 space-y-4">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
                  <path
                    d="M20 4C15.5817 4 12 7.58172 12 12C12 17 20 28 20 28C20 28 28 17 28 12C28 7.58172 24.4183 4 20 4Z"
                    fill="#000000"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <ellipse cx="20" cy="12" rx="2" ry="2.5" fill="white" />
                  <ellipse cx="17" cy="10" rx="1.5" ry="2" fill="white" />
                  <ellipse cx="23" cy="10" rx="1.5" ry="2" fill="white" />
                  <ellipse cx="18" cy="14" rx="1.2" ry="1.8" fill="white" />
                  <ellipse cx="22" cy="14" rx="1.2" ry="1.8" fill="white" />
                </svg>
                <div className="text-center">
                  <span className="text-3xl font-semibold text-gray-900">
                    AdotaPet
                  </span>
                </div>
              </div>
            </div>

            {/* Versão Branca */}
            <div className="bg-gray-900 rounded-2xl p-8 border-2 border-gray-900">
              <p className="text-sm font-medium text-gray-300 mb-6 text-center">VERSÃO BRANCA</p>
              <div className="flex flex-col items-center justify-center py-12 space-y-4">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
                  <path
                    d="M20 4C15.5817 4 12 7.58172 12 12C12 17 20 28 20 28C20 28 28 17 28 12C28 7.58172 24.4183 4 20 4Z"
                    fill="#FFFFFF"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <ellipse cx="20" cy="12" rx="2" ry="2.5" fill="#111827" />
                  <ellipse cx="17" cy="10" rx="1.5" ry="2" fill="#111827" />
                  <ellipse cx="23" cy="10" rx="1.5" ry="2" fill="#111827" />
                  <ellipse cx="18" cy="14" rx="1.2" ry="1.8" fill="#111827" />
                  <ellipse cx="22" cy="14" rx="1.2" ry="1.8" fill="#111827" />
                </svg>
                <div className="text-center">
                  <span className="text-3xl font-semibold text-white">
                    AdotaPet
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Palette className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Paleta de Cores
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cores escolhidas para transmitir confiança, alegria e acessibilidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {colorPalette.map((color) => (
              <div
                key={color.name}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`${color.class} h-32 w-full`}></div>
                <div className="p-5 space-y-2">
                  <h3 className="font-semibold text-gray-900">{color.name}</h3>
                  <p className="text-sm font-mono text-gray-600 bg-gray-100 px-3 py-1 rounded">
                    {color.hex}
                  </p>
                  <p className="text-sm text-gray-600">
                    {color.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Type className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Tipografia
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sistema tipográfico clean e moderno para garantir legibilidade e hierarquia
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
              <p className="text-sm font-medium text-gray-600 mb-6">FONTE PRINCIPAL</p>
              <p className="text-4xl font-semibold mb-2">Inter</p>
              <p className="text-gray-600 mb-6">
                Fonte moderna e altamente legível, ideal para interfaces digitais
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Heading 1 - 48px Bold</p>
                  <h1 className="text-5xl font-bold text-gray-900">O seu novo melhor amigo</h1>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Heading 2 - 36px Bold</p>
                  <h2 className="text-4xl font-bold text-gray-900">Como Funciona</h2>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Body - 16px Regular</p>
                  <p className="text-base text-gray-600">
                    Conectamos pessoas que querem adotar com ONGs, abrigos e protetores independentes.
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Button - 16px Medium</p>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium">
                    Encontrar Pets
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Icons */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Iconografia
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Utilizamos Lucide Icons para manter consistência visual em toda a plataforma
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {icons.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-4"
              >
                <div className="bg-gray-50 rounded-xl p-4">
                  <item.Icon className={`w-10 h-10 ${item.color}`} />
                </div>
                <p className="text-sm font-medium text-gray-600 text-center">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Button Examples */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Componentes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Exemplos de uso dos principais elementos da interface
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Buttons */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
              <p className="text-sm font-medium text-gray-600 mb-6">BOTÕES</p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-colors font-medium">
                  Botão Primário
                </button>
                <button className="bg-white hover:bg-gray-50 text-blue-600 px-6 py-3 rounded-xl transition-colors font-medium border-2 border-blue-600">
                  Botão Secundário
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl transition-colors font-medium">
                  Botão Terciário
                </button>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl transition-colors font-medium">
                  Botão Destaque
                </button>
              </div>
            </div>

            {/* Cards */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
              <p className="text-sm font-medium text-gray-600 mb-6">CARDS</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Search className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Card de Funcionalidade
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Descrição breve da funcionalidade ou característica
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="bg-green-100 text-green-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Card de Sucesso
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Confirmação de ação realizada com sucesso
                  </p>
                </div>
              </div>
            </div>

            {/* Spacing */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
              <p className="text-sm font-medium text-gray-600 mb-6">ESPAÇAMENTO</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 text-sm text-gray-600">8px</div>
                  <div className="flex-1 bg-blue-100 h-2 rounded"></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 text-sm text-gray-600">16px</div>
                  <div className="flex-1 bg-blue-200 h-2 rounded"></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 text-sm text-gray-600">24px</div>
                  <div className="flex-1 bg-blue-300 h-2 rounded"></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 text-sm text-gray-600">32px</div>
                  <div className="flex-1 bg-blue-400 h-2 rounded"></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 text-sm text-gray-600">48px</div>
                  <div className="flex-1 bg-blue-500 h-2 rounded"></div>
                </div>
              </div>
            </div>

            {/* Border Radius */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
              <p className="text-sm font-medium text-gray-600 mb-6">BORDAS ARREDONDADAS</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="bg-blue-600 h-20 rounded-lg"></div>
                  <p className="text-sm text-gray-600 text-center">8px (lg)</p>
                </div>
                <div className="space-y-2">
                  <div className="bg-blue-600 h-20 rounded-xl"></div>
                  <p className="text-sm text-gray-600 text-center">12px (xl)</p>
                </div>
                <div className="space-y-2">
                  <div className="bg-blue-600 h-20 rounded-2xl"></div>
                  <p className="text-sm text-gray-600 text-center">16px (2xl)</p>
                </div>
                <div className="space-y-2">
                  <div className="bg-blue-600 h-20 rounded-3xl"></div>
                  <p className="text-sm text-gray-600 text-center">24px (3xl)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}