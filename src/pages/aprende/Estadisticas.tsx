import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, MapPin, Globe, AlertCircle, Activity } from "lucide-react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { cardColors, iconColors, numberColors } from "@/utils/cardColors";

const estadisticas = [
  {
    icon: Globe,
    stat: "40+ millones",
    label: "Víctimas de trata en el mundo",
    description: "Hoy en día existen más de 40 millones de víctimas de trata, es la cifra más alta en la historia de la humanidad",
    source: "Walk Free",
  },
  {
    icon: MapPin,
    stat: "País de origen, tránsito y destino",
    label: "México en la trata",
    description: "Por su ubicación geográfica, México es un país de origen, tránsito y destino de víctimas",
    source: "ONU",
  },
  {
    icon: AlertCircle,
    stat: "47 grupos",
    label: "Crimen organizado en México",
    description: "En México existen 47 grupos de delincuencia organizada involucrados en la trata de personas para fines sexuales y laborales",
    source: "ONU",
  },
  {
    icon: Users,
    stat: "45.4% conocidos | 49.1% desconocidos",
    label: "¿Quién capta a las víctimas?",
    description: "En México alrededor de 45.4% de las víctimas son captadas por una persona conocida, 49.1% por desconocidos y 5.5% por miembros de la delincuencia organizada",
    source: "",
  },
  {
    icon: TrendingUp,
    stat: "72% mujeres",
    label: "Perfil de víctimas",
    description: "72% de las víctimas detectadas en el mundo son del género femenino: 49% son mujeres adultas y el 23% son niñas",
    source: "",
  },
  {
    icon: Activity,
    stat: "60%",
    label: "Material de abuso infantil",
    description: "México genera más de 60% de la producción global de material sexual de abuso a menores",
    source: "Fundación camino a casa",
  },
  {
    icon: AlertCircle,
    stat: "57%",
    label: "Población vulnerable",
    description: "Walk Free señala que el 57% de la población en México puede ser víctima de este delito",
    source: "Walk Free",
  },
];

const Estadisticas = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-mint-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <main className="relative pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-16">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="p-3 sm:p-4 bg-gradient-to-br from-brand-teal-500 to-brand-ink-800 rounded-full shadow-soft">
                <TrendingUp className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
              </div>
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-brand-ink-900 mb-3 sm:mb-4 leading-heading-1">
              Estadísticas sobre la Trata de Personas
            </h1>
            
            <p className="font-body text-sm sm:text-base md:text-lg text-brand-olive-500 leading-body max-w-3xl mx-auto">
              Datos que revelan la magnitud de este delito contra la humanidad
            </p>
          </div>

          {/* Grid de estadísticas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {estadisticas.map((item, index) => {
              const colorIndex = index % 3;
              const cardColor = cardColors[colorIndex];
              const colors = numberColors[colorIndex];

              return (
                <Card key={index} className={`${cardColor} border hover:shadow-card transition-smooth hover:scale-105 group`}>
                  <CardContent className="p-6 sm:p-8 text-center h-full flex flex-col">
                    <div className={`${colors.bg} rounded-full p-4 sm:p-5 w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth`}>
                      <item.icon className={`h-8 w-8 sm:h-10 sm:w-10 ${colors.text}`} />
                    </div>
                    
                    <div className={`font-heading text-2xl sm:text-3xl lg:text-4xl font-bold ${colors.text} mb-2 sm:mb-3`}>
                      {item.stat}
                    </div>
                    
                    <h3 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 mb-3 sm:mb-4">
                      {item.label}
                    </h3>
                    
                    <p className="font-body text-sm sm:text-base text-brand-ink-800 leading-relaxed mb-4 flex-1">
                      {item.description}
                    </p>
                    
                    {item.source && (
                      <p className="font-body text-xs sm:text-sm text-brand-olive-500 italic">
                        Fuente: {item.source}
                      </p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA */}
          <Card className="mt-12 sm:mt-16 bg-gradient-to-br from-brand-teal-500 via-brand-ink-800 to-brand-olive-500 border-0 shadow-card text-white">
            <CardContent className="p-8 sm:p-12 text-center">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-heading-2">
                La información salva vidas
              </h2>
              <p className="font-body text-sm sm:text-base md:text-lg text-white/90 max-w-3xl mx-auto leading-body">
                Estas cifras nos muestran la urgente necesidad de educación y prevención. Conocer los datos es el primer paso para combatir la trata de personas.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Estadisticas;
