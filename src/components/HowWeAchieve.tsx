import { Users, Flag, Bird, MessageSquare, HandHeart, Target, CheckCircle2 } from "lucide-react";

const achievements = [
  {
    icon: Users,
    text: "Establecemos redes de apoyo entre diversas instituciones y organizaciones que trabajan para abolir la esclavitud en todo el mundo.",
  },
  {
    icon: Flag,
    text: "Motivamos a las personas para que lleguen a autodefinirse como ABOLICIONISTAS y generen cambios en sus propios contextos y comunidades.",
  },
  {
    icon: Bird,
    text: "Damos conferencias y talleres informativos, con el fin de prevenir a todos los sectores de la población.",
  },
  {
    icon: MessageSquare,
    text: "Creamos un movimiento nacional e internacional de abolicionistas que luchen por dar a conocer esta problemática y acabar con la Trata de Personas.",
  },
  {
    icon: HandHeart,
    text: "Apoyamos iniciativas y proyectos pro-abolicionistas.",
  },
];

const HowWeAchieve = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-white via-brand-mint-200/10 to-brand-teal-500/5 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-teal-500/30 to-transparent"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-teal-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-brand-mint-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          <div className="inline-flex items-center justify-center mb-6 px-6 py-3 bg-brand-teal-500/10 backdrop-blur-sm rounded-full border border-brand-teal-500/20">
            <Target className="w-6 h-6 text-brand-teal-600 mr-3" />
            <span className="font-body text-sm uppercase tracking-widest text-brand-teal-600 font-semibold">
              Nuestra Estrategia
            </span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-ink-900 mb-4 sm:mb-6 leading-tight">
            ¿Cómo lo <span className="text-brand-teal-600">logramos</span>?
          </h2>
          
          <p className="font-body text-base sm:text-lg lg:text-xl text-brand-ink-700 max-w-3xl mx-auto leading-relaxed">
            Cinco pilares fundamentales que guían nuestro trabajo para combatir la trata de personas
          </p>
        </div>

        {/* Timeline/List design */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical line on desktop */}
            <div className="hidden lg:block absolute left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-teal-500 via-brand-teal-400 to-brand-teal-300"></div>
            
            <div className="space-y-8 sm:space-y-10 lg:space-y-12">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                const colors = [
                  { bg: "bg-brand-teal-500", text: "text-brand-teal-600", light: "bg-brand-teal-500/10", border: "border-brand-teal-500/30" },
                  { bg: "bg-brand-ink-800", text: "text-brand-ink-800", light: "bg-brand-ink-800/10", border: "border-brand-ink-800/30" },
                  { bg: "bg-brand-olive-500", text: "text-brand-olive-600", light: "bg-brand-olive-500/10", border: "border-brand-olive-500/30" },
                ];
                const colorSet = colors[index % 3];
                
                return (
                  <div 
                    key={index}
                    className="relative animate-fade-in group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-6 lg:gap-8">
                      {/* Icon circle */}
                      <div className="relative flex-shrink-0">
                        <div className={`w-20 h-20 sm:w-24 sm:h-24 ${colorSet.bg} rounded-full flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth z-10 relative`}>
                          <Icon className="w-9 h-9 sm:w-11 sm:h-11 text-white" />
                        </div>
                        
                        {/* Connector dot on line (desktop only) */}
                        <div className="hidden lg:block absolute top-1/2 -left-[34px] w-4 h-4 bg-white border-2 border-brand-teal-500 rounded-full -translate-y-1/2"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 pt-2 sm:pt-3">
                        <div className={`relative ${colorSet.light} ${colorSet.border} border-l-4 rounded-r-2xl p-6 sm:p-8 shadow-soft group-hover:shadow-card transition-smooth`}>
                          {/* Number badge */}
                          <div className="absolute -top-3 -left-1 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-200">
                            <span className={`font-heading text-sm font-bold ${colorSet.text}`}>
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </div>
                          
                          <p className="font-body text-base sm:text-lg text-brand-ink-800 leading-relaxed">
                            {achievement.text}
                          </p>
                          
                          {/* Checkmark */}
                          <div className="mt-4 flex items-center gap-2">
                            <CheckCircle2 className={`w-5 h-5 ${colorSet.text}`} />
                            <span className={`font-body text-sm font-semibold ${colorSet.text}`}>
                              En acción
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeAchieve;
