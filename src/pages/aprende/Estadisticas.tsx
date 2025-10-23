import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, MapPin, Globe, AlertCircle, Activity, BarChart3, Info, ArrowRight } from "lucide-react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { cardColors, iconColors, numberColors } from "@/utils/cardColors";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Estadísticas destacadas principales
const featuredStats = [
  { number: "40M+", label: "Víctimas en el mundo", icon: Globe, description: "La cifra más alta en la historia" },
  { number: "72%", label: "Son mujeres", icon: Users, description: "49% adultas, 23% niñas" },
  { number: "57%", label: "Población vulnerable en México", icon: AlertCircle, description: "Pueden ser víctimas de este delito" },
];

// Estadísticas adicionales con el mismo estilo limpio
const additionalStats = [
  { 
    number: "México", 
    label: "País de origen, tránsito y destino", 
    icon: MapPin, 
    description: "Por su ubicación geográfica estratégica",
    source: "ONU"
  },
  { 
    number: "47", 
    label: "Grupos de crimen organizado", 
    icon: AlertCircle, 
    description: "Involucrados en trata en México",
    source: "ONU"
  },
  { 
    number: "45.4%", 
    label: "Captación por conocidos", 
    icon: Users, 
    description: "49.1% por desconocidos, 5.5% por organizaciones",
    source: "Estudio México"
  },
  { 
    number: "60%", 
    label: "Material de abuso infantil", 
    icon: Activity, 
    description: "México genera más del 60% global",
    source: "Fundación camino a casa"
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

          {/* Estadísticas adicionales - Estilo limpio */}
          <section className="mb-12 sm:mb-16">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-ink-900 text-center mb-8 sm:mb-12">
              Datos Adicionales
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
              {additionalStats.map((item, index) => {
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
                    <p className="font-body text-xs sm:text-sm text-brand-olive-500 mb-2">
                      {item.description}
                    </p>
                    {item.source && (
                      <p className="font-body text-xs text-brand-ink-700/60 italic">
                        {item.source}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

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
