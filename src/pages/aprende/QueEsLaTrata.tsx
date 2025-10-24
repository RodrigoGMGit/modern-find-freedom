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

          {/* Elementos mejorados - diseño alternado */}
          <div className="space-y-12 sm:space-y-16 mb-12">
            {elementos.map((elemento, index) => {
              const Icon = elemento.icon;
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
                  gradient: "from-brand-olive-500 to-brand-olive-600",
                  bg: "bg-brand-olive-500",
                  light: "bg-brand-olive-500/5",
                  border: "border-brand-olive-500/20",
                  text: "text-brand-olive-600",
                  glow: "shadow-[0_0_40px_rgba(161,182,143,0.2)]"
                },
                { 
                  gradient: "from-brand-ink-800 to-brand-ink-900",
                  bg: "bg-brand-ink-800",
                  light: "bg-brand-ink-800/5",
                  border: "border-brand-ink-800/20",
                  text: "text-brand-ink-800",
                  glow: "shadow-[0_0_40px_rgba(31,41,55,0.15)]"
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
                    {/* Lado del icono */}
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
                        </div>
                      </div>
                    </div>
                    
                    {/* Lado del contenido */}
                    <div className="flex-1 w-full">
                      <div className={`relative ${colors.light} backdrop-blur-sm rounded-3xl p-8 sm:p-10 border-2 ${colors.border} shadow-card group-hover:shadow-cta transition-smooth`}>
                        {/* Elemento decorativo superior */}
                        <div className={`absolute top-0 ${isEven ? 'left-0' : 'right-0'} w-24 h-1 bg-gradient-to-r ${colors.gradient} rounded-full`}></div>
                        
                        {/* Título */}
                        <h3 className={`font-heading text-2xl sm:text-3xl font-bold ${colors.text} mb-6`}>
                          {elemento.title}
                        </h3>
                        
                        {/* Lista de items */}
                        <ul className="space-y-3">
                          {elemento.items.map((item, i) => (
                            <li key={i} className="flex items-start group/item">
                              <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center mr-4 flex-shrink-0 shadow-soft group-hover/item:scale-110 transition-smooth`}>
                                <span className="text-white font-bold text-sm">{i + 1}</span>
                              </div>
                              <span className="font-body text-base sm:text-lg text-brand-ink-800 leading-relaxed pt-0.5">{item}</span>
                            </li>
                          ))}
                        </ul>
                        
                        {/* Elemento decorativo de esquina */}
                        <div className={`absolute bottom-4 ${isEven ? 'right-4' : 'left-4'} w-16 h-16 ${colors.bg} opacity-5 rounded-full`}></div>
                      </div>
                    </div>
                  </div>
                </div>
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
