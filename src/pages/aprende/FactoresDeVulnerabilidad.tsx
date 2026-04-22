/**
 * Factores que pueden aumentar la vulnerabilidad ante la trata.
 *
 * @route `/aprende/factores-de-vulnerabilidad`
 * @see docs/rutas-y-paginas.md
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Users, Scale, Plane, Briefcase, UserX, AlertCircle, Shield, Info } from "lucide-react";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const factores = [
  {
    icon: DollarSign,
    title: "Pobreza y carencias sociales",
    description: "La falta de recursos económicos básicos y acceso limitado a servicios esenciales como educación, salud y vivienda crea condiciones de desesperación que pueden ser explotadas por los tratantes.",
    gradient: "from-brand-teal-500 to-brand-teal-600",
    bg: "bg-brand-teal-500",
    light: "bg-brand-teal-500/10",
    border: "border-brand-teal-500/30",
    text: "text-brand-teal-600",
  },
  {
    icon: Users,
    title: "Violencia social",
    description: "Entornos con altos niveles de violencia normalizada, conflictos armados, violencia intrafamiliar y de género, donde las personas buscan escapar de situaciones peligrosas y son vulnerables a falsas promesas.",
    gradient: "from-brand-ink-800 to-brand-ink-900",
    bg: "bg-brand-ink-800",
    light: "bg-brand-ink-800/10",
    border: "border-brand-ink-800/30",
    text: "text-brand-ink-800",
  },
  {
    icon: Scale,
    title: "Sistema de justicia deficiente",
    description: "Instituciones débiles, corrupción, impunidad y falta de aplicación efectiva de la ley permiten que los tratantes operen con poca o ninguna consecuencia legal.",
    gradient: "from-brand-olive-500 to-brand-olive-600",
    bg: "bg-brand-olive-500",
    light: "bg-brand-olive-500/10",
    border: "border-brand-olive-500/30",
    text: "text-brand-olive-600",
  },
  {
    icon: Plane,
    title: "Migración",
    description: "Personas en tránsito, especialmente migrantes indocumentados, refugiados y desplazados internos, enfrentan mayor vulnerabilidad al estar lejos de sus redes de apoyo y en situaciones de irregularidad legal.",
    gradient: "from-brand-teal-500 to-brand-teal-600",
    bg: "bg-brand-teal-500",
    light: "bg-brand-teal-500/10",
    border: "border-brand-teal-500/30",
    text: "text-brand-teal-600",
  },
  {
    icon: Briefcase,
    title: "Precariedad económica",
    description: "Falta de oportunidades laborales formales, trabajos mal remunerados, explotación laboral y economía informal que obligan a las personas a aceptar condiciones de trabajo abusivas.",
    gradient: "from-brand-ink-800 to-brand-ink-900",
    bg: "bg-brand-ink-800",
    light: "bg-brand-ink-800/10",
    border: "border-brand-ink-800/30",
    text: "text-brand-ink-800",
  },
  {
    icon: UserX,
    title: "Discriminación de género",
    description: "Desigualdad estructural, machismo, falta de oportunidades educativas y laborales para mujeres, y violencia de género que las coloca en situaciones de mayor vulnerabilidad frente a la explotación.",
    gradient: "from-brand-olive-500 to-brand-olive-600",
    bg: "bg-brand-olive-500",
    light: "bg-brand-olive-500/10",
    border: "border-brand-olive-500/30",
    text: "text-brand-olive-600",
  },
  {
    icon: AlertCircle,
    title: "Grupos específicos vulnerables",
    description: "Niños, niñas y adolescentes, personas con discapacidad, pueblos indígenas, comunidad LGBTQ+, personas sin hogar y aquellos con adicciones enfrentan múltiples capas de vulnerabilidad.",
    gradient: "from-brand-teal-500 to-brand-teal-600",
    bg: "bg-brand-teal-500",
    light: "bg-brand-teal-500/10",
    border: "border-brand-teal-500/30",
    text: "text-brand-teal-600",
  },
];

const FactoresDeVulnerabilidad = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Fondo decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-mint-200/20 via-white to-brand-teal-500/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBhYjhiOCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-60"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-brand-teal-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-brand-mint-200/30 rounded-full blur-3xl animate-float delay-1000"></div>
      </div>
      
      <main className="relative pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
            <div className="inline-flex items-center justify-center mb-6 px-6 py-3 bg-gradient-to-r from-brand-olive-500/10 to-brand-teal-500/10 backdrop-blur-sm rounded-full border border-brand-olive-500/20 shadow-soft">
              <span className="font-body text-sm uppercase tracking-widest text-brand-olive-600 font-bold">
                Identificación de Riesgos
              </span>
            </div>
            
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-olive-500 to-brand-teal-500 opacity-20 blur-2xl rounded-full scale-150"></div>
                <div className="relative p-4 bg-gradient-to-br from-brand-olive-500 to-brand-teal-500 rounded-3xl shadow-cta">
                  <Shield className="h-12 w-12 sm:h-16 sm:w-16 text-white" strokeWidth={1.5} />
                </div>
              </div>
            </div>
            
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-ink-900 mb-6 leading-tight">
              Factores de <span className="text-brand-olive-600">Vulnerabilidad</span>
            </h1>
            
            <p className="font-body text-lg sm:text-xl lg:text-2xl text-brand-ink-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Condiciones estructurales que aumentan el riesgo de ser víctima de trata de personas
            </p>
            
            <div className="flex items-center justify-center gap-2 text-brand-olive-600">
              <Info className="w-5 h-5" />
              <span className="font-body text-sm font-medium">Cumbre Judicial Iberoamericana 2012</span>
            </div>
          </div>

          {/* Definición destacada */}
          <Card className="bg-gradient-to-br from-brand-olive-500 via-brand-teal-600 to-brand-ink-800 border-0 mb-16 sm:mb-20 shadow-cta overflow-hidden">
            <CardContent className="p-8 sm:p-12 lg:p-16 relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
              
              <div className="relative text-center">
                <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                  <p className="font-body text-sm text-white/90 font-semibold uppercase tracking-wider">
                    Definición Oficial
                  </p>
                </div>
                
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                  ¿Qué es una Condición de Vulnerabilidad?
                </h2>
                
                <p className="font-body text-lg sm:text-xl lg:text-2xl text-white/95 leading-relaxed max-w-4xl mx-auto">
                  Es el <span className="font-bold text-brand-mint-200">estado o situación en que se encuentra una persona por su edad, discapacidad, pertenencia a minorías o diversidad</span>, que la coloca en una posición de mayor riesgo frente a la explotación.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Factores - Diseño alternado */}
          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {factores.map((factor, index) => {
              const Icon = factor.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className={`group animate-fade-in ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}>
                    {/* Lado del icono */}
                    <div className="flex-shrink-0 relative">
                      {/* Número grande de fondo */}
                      <div className={`absolute -top-6 ${isEven ? '-left-6' : '-right-6'} text-[100px] sm:text-[120px] font-heading font-black ${factor.text} opacity-5 select-none pointer-events-none`}>
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      
                      {/* Contenedor del icono */}
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${factor.gradient} opacity-20 blur-2xl rounded-full scale-150 group-hover:scale-175 transition-smooth`}></div>
                        
                        <div className={`relative w-28 h-28 sm:w-36 sm:h-36 bg-gradient-to-br ${factor.gradient} rounded-3xl flex items-center justify-center shadow-cta group-hover:scale-110 group-hover:rotate-3 transition-smooth`}>
                          <Icon className="w-14 h-14 sm:w-18 sm:h-18 text-white" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Lado del contenido */}
                    <div className="flex-1 w-full">
                      <div className={`relative ${factor.light} backdrop-blur-sm rounded-3xl p-8 sm:p-10 border-2 ${factor.border} shadow-card group-hover:shadow-cta transition-smooth`}>
                        {/* Elemento decorativo superior */}
                        <div className={`absolute top-0 ${isEven ? 'left-0' : 'right-0'} w-24 h-1 bg-gradient-to-r ${factor.gradient} rounded-full`}></div>
                        
                        {/* Badge numérico */}
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full shadow-soft flex items-center justify-center border-4 border-white">
                          <span className={`font-heading text-lg font-bold ${factor.text}`}>
                            {index + 1}
                          </span>
                        </div>
                        
                        {/* Título */}
                        <h3 className={`font-heading text-2xl sm:text-3xl font-bold ${factor.text} mb-4`}>
                          {factor.title}
                        </h3>
                        
                        {/* Descripción */}
                        <p className="font-body text-base sm:text-lg text-brand-ink-700 leading-relaxed">
                          {factor.description}
                        </p>
                        
                        {/* Elemento decorativo de esquina */}
                        <div className={`absolute bottom-4 ${isEven ? 'right-4' : 'left-4'} w-16 h-16 ${factor.bg} opacity-5 rounded-full`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Final */}
          <Card className="mt-16 sm:mt-20 lg:mt-24 bg-gradient-to-br from-brand-ink-900 via-brand-teal-700 to-brand-ink-800 border-0 shadow-cta overflow-hidden">
            <CardContent className="p-10 sm:p-14 lg:p-16 relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-mint-200/10 rounded-full blur-3xl"></div>
              
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
                  <Shield className="w-8 h-8 text-brand-mint-200" />
                </div>
                
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  La prevención comienza con el <span className="text-brand-mint-200">conocimiento</span>
                </h2>
                
                <p className="font-body text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Identificar estos factores de vulnerabilidad nos permite desarrollar estrategias de prevención más efectivas y proteger a las poblaciones en riesgo.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FactoresDeVulnerabilidad;
