import { Users, Flag, Bird, MessageSquare, HandHeart, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cardColors, iconColors } from "@/utils/cardColors";

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
    <section className="relative py-16 sm:py-20 bg-gradient-subtle overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-mint-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-brand-olive-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6">
        {/* Header de la sección */}
        <div className="text-center mb-10 sm:mb-14">
          {/* Logo circular con icono */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="p-2 sm:p-3 bg-gradient-to-r from-brand-teal-500 to-brand-ink-800 rounded-full shadow-soft">
              <Target className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
            </div>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-ink-900 mb-3 sm:mb-4 leading-heading-1">
            ¿Cómo lo logramos?
          </h2>
          <p className="font-body text-sm sm:text-base md:text-lg text-brand-olive-500 max-w-2xl mx-auto leading-body">
            Nuestra estrategia para combatir la trata de personas
          </p>
        </div>

        {/* Grid de logros */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {achievements.map((achievement, index) => {
            const colorIndex = index % 3;
            const cardColor = cardColors[colorIndex];
            const iconColor = iconColors[colorIndex];

            return (
              <Card
                key={index}
                className={`${cardColor} border hover:shadow-card transition-smooth hover:scale-105 h-full group`}
              >
                <CardContent className="p-6 sm:p-8 text-center h-full flex flex-col">
                  {/* Icono circular */}
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div
                      className={`p-3 sm:p-4 ${iconColor} rounded-full shadow-soft group-hover:scale-110 transition-smooth`}
                    >
                      <achievement.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                  </div>

                  {/* Texto descriptivo */}
                  <p className="font-body text-sm sm:text-base text-brand-ink-800 leading-relaxed">
                    {achievement.text}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeAchieve;
