import { Users, Flag, Bird, MessageSquare, HandHeart, Target } from "lucide-react";

const achievements = [
  {
    icon: Users,
    title: "Redes de Apoyo",
    text: "Establecemos redes de apoyo entre diversas instituciones y organizaciones que trabajan para abolir la esclavitud en todo el mundo.",
  },
  {
    icon: Flag,
    title: "Movimiento Abolicionista",
    text: "Motivamos a las personas para que lleguen a autodefinirse como ABOLICIONISTAS y generen cambios en sus propios contextos y comunidades.",
  },
  {
    icon: Bird,
    title: "Educación y Prevención",
    text: "Damos conferencias y talleres informativos, con el fin de prevenir a todos los sectores de la población.",
  },
  {
    icon: MessageSquare,
    title: "Movimiento Global",
    text: "Creamos un movimiento nacional e internacional de abolicionistas que luchen por dar a conocer esta problemática y acabar con la Trata de Personas.",
  },
  {
    icon: HandHeart,
    title: "Apoyo a Iniciativas",
    text: "Apoyamos iniciativas y proyectos pro-abolicionistas.",
  },
];

const HowWeAchieve = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-white">
      {/* Fondo con gradiente y texturas */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-mint-200/20 via-white to-brand-teal-500/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBhYjhiOCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-60"></div>
      </div>

      {/* Elementos decorativos flotantes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-teal-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-brand-mint-200/30 rounded-full blur-3xl animate-float delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-olive-500/5 rounded-full blur-3xl animate-float delay-500"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header mejorado */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24 animate-fade-in">
          <div className="inline-flex items-center justify-center mb-6 px-6 py-3 bg-gradient-to-r from-brand-teal-500/10 to-brand-mint-200/20 backdrop-blur-sm rounded-full border border-brand-teal-500/20 shadow-soft">
            <span className="font-body text-sm uppercase tracking-widest text-brand-teal-600 font-bold">
              Nuestra Estrategia
            </span>
          </div>
          
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-ink-900 mb-6 leading-tight">
            ¿Cómo lo <span className="text-brand-teal-600">logramos</span>?
          </h2>
          
          <p className="font-body text-lg sm:text-xl lg:text-2xl text-brand-ink-700 max-w-3xl mx-auto leading-relaxed">
            Cinco pilares fundamentales que guían nuestro trabajo
          </p>
          
          {/* Línea decorativa */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-brand-teal-500 rounded-full"></div>
            <Target className="w-8 h-8 text-brand-teal-500" />
            <div className="h-1 w-20 bg-gradient-to-l from-transparent to-brand-teal-500 rounded-full"></div>
          </div>
        </div>

        {/* Grid alternado mejorado */}
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 lg:space-y-20">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const isEven = index % 2 === 0;
            const colorSets = [
              { 
                gradient: "from-brand-teal-500 to-brand-teal-600",
                bg: "bg-brand-teal-500",
                light: "bg-brand-teal-500/5",
                border: "border-brand-teal-500/20",
                text: "text-brand-teal-600",
                glow: "shadow-[0_0_40px_rgba(10,184,184,0.2)]"
              },
              { 
                gradient: "from-brand-ink-800 to-brand-ink-900",
                bg: "bg-brand-ink-800",
                light: "bg-brand-ink-800/5",
                border: "border-brand-ink-800/20",
                text: "text-brand-ink-800",
                glow: "shadow-[0_0_40px_rgba(31,41,55,0.15)]"
              },
              { 
                gradient: "from-brand-olive-500 to-brand-olive-600",
                bg: "bg-brand-olive-500",
                light: "bg-brand-olive-500/5",
                border: "border-brand-olive-500/20",
                text: "text-brand-olive-600",
                glow: "shadow-[0_0_40px_rgba(161,182,143,0.2)]"
              },
            ];
            const colors = colorSets[index % 3];
            
            return (
              <div 
                key={index}
                className={`group animate-fade-in ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}>
                  {/* Lado del número e icono */}
                  <div className="flex-shrink-0 relative">
                    {/* Número grande de fondo */}
                    <div className={`absolute -top-8 ${isEven ? '-left-8' : '-right-8'} text-[120px] sm:text-[140px] font-heading font-black ${colors.text} opacity-5 select-none pointer-events-none`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    
                    {/* Contenedor del icono con efectos */}
                    <div className="relative">
                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-20 blur-2xl rounded-full scale-150 group-hover:scale-175 transition-smooth`}></div>
                      
                      {/* Icono principal */}
                      <div className={`relative w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br ${colors.gradient} rounded-3xl flex items-center justify-center shadow-cta ${colors.glow} group-hover:scale-110 group-hover:rotate-3 transition-smooth`}>
                        <Icon className="w-16 h-16 sm:w-20 sm:h-20 text-white" strokeWidth={1.5} />
                        
                        {/* Badge numérico */}
                        <div className="absolute -top-3 -right-3 w-12 h-12 bg-white rounded-full shadow-soft flex items-center justify-center border-4 border-white">
                          <span className={`font-heading text-lg font-bold ${colors.text}`}>
                            {index + 1}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Lado del contenido */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className={`relative ${colors.light} backdrop-blur-sm rounded-3xl p-8 sm:p-10 border-2 ${colors.border} shadow-card group-hover:shadow-cta transition-smooth`}>
                      {/* Elemento decorativo superior */}
                      <div className={`absolute top-0 ${isEven ? 'left-0' : 'right-0'} w-24 h-1 bg-gradient-to-r ${colors.gradient} rounded-full`}></div>
                      
                      {/* Título */}
                      <h3 className={`font-heading text-2xl sm:text-3xl font-bold ${colors.text} mb-4`}>
                        {achievement.title}
                      </h3>
                      
                      {/* Descripción */}
                      <p className="font-body text-base sm:text-lg text-brand-ink-700 leading-relaxed">
                        {achievement.text}
                      </p>
                      
                      {/* Elemento decorativo de esquina */}
                      <div className={`absolute bottom-4 ${isEven ? 'right-4' : 'left-4'} w-16 h-16 ${colors.bg} opacity-5 rounded-full`}></div>
                    </div>
                  </div>
                </div>
                
                {/* Conector entre elementos (no en el último) */}
                {index < achievements.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center my-8">
                    <div className={`h-16 w-0.5 bg-gradient-to-b ${colors.gradient} opacity-30`}></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeAchieve;
