import { Heart, Target, Hand, Zap, Users2, Shield, MessageCircle, Award, Sparkles } from "lucide-react";

const values = [
  { 
    icon: Heart, 
    label: "AMOR", 
    description: "Actuamos con empatía y cuidado hacia quienes servimos",
    gradient: "from-brand-teal-500 to-brand-teal-600",
    bg: "bg-brand-teal-500",
    light: "bg-brand-teal-500/10",
    border: "border-brand-teal-500/30",
    text: "text-brand-teal-600",
  },
  { 
    icon: Target, 
    label: "COMPROMISO", 
    description: "Dedicación absoluta a nuestra causa abolicionista",
    gradient: "from-brand-ink-800 to-brand-ink-900",
    bg: "bg-brand-ink-800",
    light: "bg-brand-ink-800/10",
    border: "border-brand-ink-800/30",
    text: "text-brand-ink-800",
  },
  { 
    icon: Hand, 
    label: "COMPASIÓN", 
    description: "Entendemos el dolor y actuamos con bondad",
    gradient: "from-brand-olive-500 to-brand-olive-600",
    bg: "bg-brand-olive-500",
    light: "bg-brand-olive-500/10",
    border: "border-brand-olive-500/30",
    text: "text-brand-olive-600",
  },
  { 
    icon: Zap, 
    label: "ACCIÓN", 
    description: "Transformamos palabras en hechos concretos",
    gradient: "from-brand-teal-500 to-brand-teal-600",
    bg: "bg-brand-teal-500",
    light: "bg-brand-teal-500/10",
    border: "border-brand-teal-500/30",
    text: "text-brand-teal-600",
  },
  { 
    icon: Users2, 
    label: "COOPERACIÓN", 
    description: "Juntos somos más fuertes en esta lucha",
    gradient: "from-brand-ink-800 to-brand-ink-900",
    bg: "bg-brand-ink-800",
    light: "bg-brand-ink-800/10",
    border: "border-brand-ink-800/30",
    text: "text-brand-ink-800",
  },
  { 
    icon: Shield, 
    label: "RESPETO", 
    description: "Dignidad y valor para cada ser humano",
    gradient: "from-brand-olive-500 to-brand-olive-600",
    bg: "bg-brand-olive-500",
    light: "bg-brand-olive-500/10",
    border: "border-brand-olive-500/30",
    text: "text-brand-olive-600",
  },
  { 
    icon: MessageCircle, 
    label: "COMUNICACIÓN", 
    description: "Diálogo abierto y transparente siempre",
    gradient: "from-brand-teal-500 to-brand-teal-600",
    bg: "bg-brand-teal-500",
    light: "bg-brand-teal-500/10",
    border: "border-brand-teal-500/30",
    text: "text-brand-teal-600",
  },
  { 
    icon: Award, 
    label: "HONESTIDAD", 
    description: "Integridad en cada acción que realizamos",
    gradient: "from-brand-ink-800 to-brand-ink-900",
    bg: "bg-brand-ink-800",
    light: "bg-brand-ink-800/10",
    border: "border-brand-ink-800/30",
    text: "text-brand-ink-800",
  },
];

const ValuesSection = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-brand-ink-900 via-brand-teal-700 to-brand-ink-800">
      {/* Fondo con textura */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-brand-mint-200/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-teal-400/10 rounded-full blur-3xl animate-float delay-1000"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-soft">
            <Sparkles className="w-5 h-5 text-brand-mint-200" />
            <span className="font-body text-sm uppercase tracking-widest text-brand-mint-200 font-bold">
              Lo Que Nos Define
            </span>
          </div>
          
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            NUESTROS <span className="text-brand-mint-200">VALORES</span>
          </h2>
          
          <p className="font-body text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Los principios que guían cada una de nuestras acciones
          </p>
        </div>

        {/* Grid de valores mejorado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto justify-items-center">
          {values.map((value, index) => {
            const Icon = value.icon;
            
            return (
              <div
                key={index}
                className="group animate-fade-in w-full max-w-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-full">
                  {/* Card con efecto glassmorphism */}
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-cta hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.4)] transition-smooth h-full flex flex-col items-center border-2 border-white/50">
                    {/* Borde superior decorativo con gradiente */}
                    <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${value.gradient} rounded-t-3xl`}></div>
                    
                    {/* Círculo decorativo de fondo */}
                    <div className={`absolute -top-8 -right-8 w-32 h-32 ${value.light} rounded-full blur-2xl group-hover:scale-150 transition-smooth duration-500`}></div>
                    
                    <div className="relative z-10 flex flex-col items-center w-full">
                      {/* Icono con efecto */}
                      <div className="mb-6">
                        <div className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center shadow-soft group-hover:scale-110 group-hover:rotate-6 transition-smooth`}>
                          <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                        </div>
                      </div>
                      
                      {/* Label del valor */}
                      <h3 className={`font-heading text-xl sm:text-2xl font-bold ${value.text} mb-3 text-center`}>
                        {value.label}
                      </h3>
                      
                      {/* Descripción */}
                      <p className="font-body text-sm sm:text-base text-brand-ink-700 leading-relaxed text-center">
                        {value.description}
                      </p>
                    </div>

                    {/* Elemento decorativo inferior */}
                    <div className={`absolute bottom-4 left-4 w-12 h-12 ${value.bg} opacity-5 rounded-full`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
