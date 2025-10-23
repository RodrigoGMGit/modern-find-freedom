import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, MapPin, Globe, AlertCircle, Activity, BarChart3, Info, ArrowRight } from "lucide-react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { cardColors, iconColors, numberColors } from "@/utils/cardColors";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Estadísticas destacadas (estilo limpio como en transparencia)
const featuredStats = [
  { number: "40M+", label: "Víctimas en el mundo", icon: Globe, description: "La cifra más alta en la historia" },
  { number: "72%", label: "Son mujeres", icon: Users, description: "49% adultas, 23% niñas" },
  { number: "57%", label: "Población vulnerable en México", icon: AlertCircle, description: "Pueden ser víctimas de este delito" },
];

const estadisticas = [
  {
    icon: MapPin,
    stat: "País de origen, tránsito y destino",
    label: "México en la trata",
    description: "Por su ubicación geográfica, México es un país de origen, tránsito y destino de víctimas",
    source: "ONU",
    highlight: false,
  },
  {
    icon: AlertCircle,
    stat: "47 grupos",
    label: "Crimen organizado en México",
    description: "En México existen 47 grupos de delincuencia organizada involucrados en la trata de personas para fines sexuales y laborales",
    source: "ONU",
    highlight: true,
  },
  {
    icon: Users,
    stat: "45.4% conocidos | 49.1% desconocidos",
    label: "¿Quién capta a las víctimas?",
    description: "En México alrededor de 45.4% de las víctimas son captadas por una persona conocida, 49.1% por desconocidos y 5.5% por miembros de la delincuencia organizada",
    source: "",
    highlight: false,
  },
  {
    icon: Activity,
    stat: "60%",
    label: "Material de abuso infantil",
    description: "México genera más de 60% de la producción global de material sexual de abuso a menores",
    source: "Fundación camino a casa",
    highlight: true,
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
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-brand-olive-500/5 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>
      
      <main className="relative pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-16 animate-fade-in">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="p-3 sm:p-4 bg-gradient-to-br from-brand-teal-500 to-brand-ink-800 rounded-full shadow-cta animate-scale-in">
                <BarChart3 className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
              </div>
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-ink-900 mb-3 sm:mb-4 leading-heading-1">
              Estadísticas sobre la Trata de Personas
            </h1>
            
            <p className="font-body text-sm sm:text-base md:text-lg text-brand-olive-500 leading-body max-w-3xl mx-auto mb-6">
              Datos que revelan la magnitud de este delito contra la humanidad
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-teal-500/10 rounded-full">
              <Info className="h-4 w-4 text-brand-teal-500" />
              <span className="font-body text-xs sm:text-sm text-brand-ink-700 font-medium">
                Fuentes: ONU, Walk Free, organizaciones internacionales
              </span>
            </div>
          </div>

          {/* Estadísticas destacadas - Estilo limpio como transparencia */}
          <section className="mb-12 sm:mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {featuredStats.map((item, index) => {
                const colors = numberColors[index % 3];

                return (
                  <div key={index} className="text-center group">
                    <div className={`${colors.bg} rounded-full p-4 sm:p-6 w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth`}>
                      <item.icon className={`h-8 w-8 sm:h-10 sm:w-10 ${colors.text}`} />
                    </div>
                    <div className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold ${colors.text} mb-2`}>
                      {item.number}
                    </div>
                    <p className="font-body text-sm sm:text-base text-brand-ink-900 font-medium mb-1">
                      {item.label}
                    </p>
                    <p className="font-body text-xs sm:text-sm text-brand-olive-500">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Separador visual */}
          <div className="flex items-center gap-4 mb-12 sm:mb-16">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-mint-200/50 to-transparent"></div>
            <div className="flex items-center gap-2 text-brand-olive-500 text-sm font-medium">
              <TrendingUp className="h-4 w-4" />
              <span>Datos Detallados</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-mint-200/50 to-transparent"></div>
          </div>

          {/* Grid de estadísticas detalladas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {estadisticas.map((item, index) => {
              const colorIndex = index % 3;
              const cardColor = cardColors[colorIndex];
              const colors = numberColors[colorIndex];

              return (
                <Card 
                  key={index} 
                  className={`${cardColor} border hover:shadow-cta transition-smooth hover:-translate-y-1 group ${item.highlight ? 'ring-2 ring-brand-teal-500/20' : ''}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 sm:p-8 text-center h-full flex flex-col">
                    {item.highlight && (
                      <div className="absolute top-3 right-3">
                        <div className="w-2 h-2 rounded-full bg-brand-teal-500 animate-pulse"></div>
                      </div>
                    )}
                    
                    <div className={`${colors.bg} rounded-full p-4 sm:p-5 w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-soft group-hover:scale-110 group-hover:rotate-3 transition-smooth`}>
                      <item.icon className={`h-8 w-8 sm:h-10 sm:w-10 ${colors.text}`} />
                    </div>
                    
                    <div className={`font-heading text-2xl sm:text-3xl font-bold ${colors.text} mb-2 sm:mb-3 leading-tight`}>
                      {item.stat}
                    </div>
                    
                    <h3 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 mb-3 sm:mb-4">
                      {item.label}
                    </h3>
                    
                    <div className="h-1 w-16 bg-gradient-to-r from-brand-teal-500 to-brand-mint-200 rounded-full mx-auto mb-4"></div>
                    
                    <p className="font-body text-sm sm:text-base text-brand-ink-800 leading-relaxed mb-4 flex-1">
                      {item.description}
                    </p>
                    
                    {item.source && (
                      <div className="pt-3 border-t border-brand-mint-200/30">
                        <p className="font-body text-xs sm:text-sm text-brand-olive-500 italic flex items-center justify-center gap-1">
                          <Info className="h-3 w-3" />
                          Fuente: {item.source}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Final */}
          <Card className="bg-gradient-to-br from-brand-teal-500 via-brand-ink-800 to-brand-olive-500 border-0 shadow-cta text-white overflow-hidden relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-brand-mint-200/10 rounded-full blur-3xl"></div>
            </div>

            <CardContent className="relative p-8 sm:p-12 lg:p-16">
              <div className="max-w-3xl mx-auto text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <TrendingUp className="h-10 w-10 sm:h-12 sm:w-12" />
                  </div>
                </div>

                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-heading-2">
                  La información salva vidas
                </h2>
                
                <p className="font-body text-sm sm:text-base md:text-lg text-white/90 mb-8 leading-body">
                  Estas cifras nos muestran la urgente necesidad de educación y prevención. Conocer los datos es el primer paso para combatir la trata de personas.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild variant="primary-brand" size="lg" className="bg-white text-brand-ink-900 hover:bg-brand-mint-200 shadow-cta">
                    <Link to="/aprende/factores-de-vulnerabilidad" className="flex items-center gap-2">
                      Factores de Vulnerabilidad
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  
                  <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10">
                    <Link to="/aprende/que-es-la-trata">
                      ¿Qué es la trata?
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Estadisticas;
