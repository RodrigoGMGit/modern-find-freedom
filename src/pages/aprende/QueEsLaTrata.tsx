import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Link as LinkIcon, Plus, Target, ArrowRight, Shield, Users, Scale } from "lucide-react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { cardColors, iconColors } from "@/utils/cardColors";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const elementos = [
  {
    title: "Acciones",
    items: ["Captación", "Transporte", "Traslado", "Acogida", "Recepción"],
    icon: Target,
  },
  {
    title: "Medios",
    items: ["Amenaza", "Uso de fuerza", "Coacción", "Rapto", "Fraude", "Engaño", "Abuso de poder"],
    icon: AlertCircle,
  },
  {
    title: "Fines",
    items: ["Explotación sexual", "Trabajos forzados", "Esclavitud", "Extracción de órganos", "Servidumbre"],
    icon: LinkIcon,
  },
];

const QueEsLaTrata = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-mint-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-brand-olive-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <main className="relative pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-16 animate-fade-in">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="p-3 sm:p-4 bg-gradient-to-br from-brand-teal-500 to-brand-ink-800 rounded-full shadow-cta animate-scale-in">
                <AlertCircle className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
              </div>
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-ink-900 mb-3 sm:mb-4 leading-heading-1">
              ¿Qué es la Trata de Personas?
            </h1>
            
            <div className="max-w-3xl mx-auto">
              <p className="font-body text-sm sm:text-base md:text-lg text-brand-olive-500 leading-body mb-4">
                La trata de personas es uno de los delitos más graves contra la dignidad humana
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-brand-ink-700">
                <div className="flex items-center gap-2">
                  <Scale className="h-4 w-4 text-brand-teal-500" />
                  <span>Delito Internacional</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-brand-teal-500" />
                  <span>Violación de DDHH</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-brand-teal-500" />
                  <span>Afecta a millones</span>
                </div>
              </div>
            </div>
          </div>

          {/* Definición destacada */}
          <Card className="bg-gradient-to-br from-brand-teal-500 to-brand-ink-800 border-0 mb-10 sm:mb-12 shadow-cta overflow-hidden">
            <CardContent className="p-8 sm:p-12 relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              
              <div className="relative">
                <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                  <p className="font-body text-xs sm:text-sm text-white/80 font-medium">
                    Protocolo de Palermo, 2000
                  </p>
                </div>
                
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-heading-2">
                  Definición Oficial
                </h2>
                
                <p className="font-body text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
                  Por "trata de personas" se entenderá la <span className="font-semibold text-brand-mint-200">captación, el transporte, el traslado, la acogida o la recepción de personas</span>, recurriendo a la <span className="font-semibold text-brand-mint-200">amenaza o al uso de la fuerza u otras formas de coacción, al rapto, al fraude, al engaño, al abuso de poder</span>, con <span className="font-semibold text-brand-mint-200">fines de explotación</span>.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Fórmula visual mejorada */}
          <div className="mb-10 sm:mb-16">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-brand-ink-900 text-center mb-8">
              Los 3 Elementos Clave
            </h3>
            
            <div className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap mb-12">
              <div className="group">
                <div className="px-6 sm:px-8 py-4 sm:py-6 bg-gradient-to-br from-brand-teal-500/10 to-brand-teal-500/5 rounded-2xl border-2 border-brand-teal-500/20 hover:border-brand-teal-500/40 hover:shadow-soft transition-smooth">
                  <div className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-brand-teal-500 text-center">
                    Acciones
                  </div>
                  <div className="text-xs sm:text-sm text-brand-ink-700 text-center mt-2">
                    Qué se hace
                  </div>
                </div>
              </div>
              
              <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-brand-olive-500 flex-shrink-0" />
              
              <div className="group">
                <div className="px-6 sm:px-8 py-4 sm:py-6 bg-gradient-to-br from-brand-olive-500/10 to-brand-olive-500/5 rounded-2xl border-2 border-brand-olive-500/20 hover:border-brand-olive-500/40 hover:shadow-soft transition-smooth">
                  <div className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-brand-olive-500 text-center">
                    Medios
                  </div>
                  <div className="text-xs sm:text-sm text-brand-ink-700 text-center mt-2">
                    Cómo se hace
                  </div>
                </div>
              </div>
              
              <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-brand-olive-500 flex-shrink-0" />
              
              <div className="group">
                <div className="px-6 sm:px-8 py-4 sm:py-6 bg-gradient-to-br from-brand-ink-800/10 to-brand-ink-800/5 rounded-2xl border-2 border-brand-ink-800/20 hover:border-brand-ink-800/40 hover:shadow-soft transition-smooth">
                  <div className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-brand-ink-800 text-center">
                    Fines
                  </div>
                  <div className="text-xs sm:text-sm text-brand-ink-700 text-center mt-2">
                    Para qué se hace
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Elementos mejorados */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {elementos.map((elemento, index) => {
              const colorIndex = index % 3;
              const cardColor = cardColors[colorIndex];
              const iconColor = iconColors[colorIndex];

              return (
                <Card 
                  key={index} 
                  className={`${cardColor} border hover:shadow-cta transition-smooth group cursor-pointer hover:-translate-y-1`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex justify-center mb-4 sm:mb-6">
                      <div className={`p-4 sm:p-5 ${iconColor} rounded-2xl shadow-soft group-hover:scale-110 group-hover:rotate-3 transition-smooth`}>
                        <elemento.icon className="h-7 w-7 sm:h-9 sm:w-9" />
                      </div>
                    </div>
                    
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-900 mb-2 text-center">
                      {elemento.title}
                    </h3>
                    
                    <div className="h-1 w-16 bg-gradient-to-r from-brand-teal-500 to-brand-mint-200 rounded-full mx-auto mb-6"></div>
                    
                    <ul className="space-y-3">
                      {elemento.items.map((item, i) => (
                        <li key={i} className="flex items-start text-sm sm:text-base text-brand-ink-800 group/item">
                          <div className="w-6 h-6 rounded-full bg-brand-teal-500/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 group-hover/item:bg-brand-teal-500/20 transition-smooth">
                            <span className="w-2 h-2 rounded-full bg-brand-teal-500"></span>
                          </div>
                          <span className="font-body leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA de navegación */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-brand-mint-200/20 to-brand-mint-200/5 border-brand-mint-200/30 hover:shadow-card transition-smooth group">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-brand-teal-500 to-brand-ink-800 rounded-xl shadow-soft">
                    <LinkIcon className="h-6 w-6 text-white" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-brand-teal-500 group-hover:translate-x-1 transition-smooth" />
                </div>
                <h4 className="font-heading text-lg sm:text-xl font-bold text-brand-ink-900 mb-2">
                  Tipos de Trata
                </h4>
                <p className="font-body text-sm text-brand-ink-700 mb-4">
                  Conoce las diferentes formas de explotación
                </p>
                <Button asChild variant="ghost" size="sm" className="text-brand-teal-500 hover:text-brand-teal-500 hover:bg-brand-teal-500/10 p-0">
                  <Link to="/aprende/tipos-de-trata">
                    Ver más →
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-brand-olive-500/10 to-brand-olive-500/5 border-brand-olive-500/20 hover:shadow-card transition-smooth group">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-brand-olive-500 to-brand-ink-800 rounded-xl shadow-soft">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-brand-olive-500 group-hover:translate-x-1 transition-smooth" />
                </div>
                <h4 className="font-heading text-lg sm:text-xl font-bold text-brand-ink-900 mb-2">
                  Factores de Vulnerabilidad
                </h4>
                <p className="font-body text-sm text-brand-ink-700 mb-4">
                  Identifica las condiciones de riesgo
                </p>
                <Button asChild variant="ghost" size="sm" className="text-brand-olive-500 hover:text-brand-olive-500 hover:bg-brand-olive-500/10 p-0">
                  <Link to="/aprende/factores-de-vulnerabilidad">
                    Ver más →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default QueEsLaTrata;
