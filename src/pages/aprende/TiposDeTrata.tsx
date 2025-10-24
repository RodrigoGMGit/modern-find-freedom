import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Briefcase, Activity, AlertTriangle, UserX, FileSearch, ArrowRight, Info } from "lucide-react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { cardColors, iconColors } from "@/utils/cardColors";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Importar imágenes
import matrimonioForzadoImg from "@/assets/matrimonio-forzado.png";
import mendicidadForzadaImg from "@/assets/explotacion-menores.png";
import adopcionesIlegalesImg from "@/assets/venta-ninos.png";
import explotacionSexualImg from "@/assets/explotacion-sexual.png";
import traficoOrganosImg from "@/assets/trafico-organos.png";
import trabajosForzadosImg from "@/assets/trabajos-forzados.png";
import actividadesDelictivasImg from "@/assets/explotacion-menores.png";

const tiposDeTrata = [
  {
    icon: Heart,
    title: "Matrimonio Forzado",
    image: matrimonioForzadoImg,
    description: "Matrimonio que sucede sin el consentimiento de una o ambas partes. Haber consentido al matrimonio significa que la persona acordó de manera completa, libre e informada, casarse con otra persona, así como el momento en el que se efectuaría el matrimonio.",
    details: "El matrimonio forzado puede ocurrir cuando familiares u otras personas usan el abuso físico o emocional, amenazas o engaños, para forzar a alguien a casarse sin su consentimiento. Puede afectar a personas de todas las razas, grupos étnicos, religiones, géneros, edades u origen nacional.",
    gradient: "from-brand-teal-500 to-brand-teal-600",
    light: "bg-brand-teal-500/5",
    border: "border-brand-teal-500/20",
    text: "text-brand-teal-600",
  },
  {
    icon: Users,
    title: "Mendicidad Forzada",
    image: mendicidadForzadaImg,
    description: "Es obligar a una persona a pedir dinero en diversos escenarios, denigrándolos con la intención de generar en ellos un aspecto que provoque pena y con ello se generen mayores ganancias.",
    details: "",
    gradient: "from-brand-ink-800 to-brand-ink-900",
    light: "bg-brand-ink-800/5",
    border: "border-brand-ink-800/20",
    text: "text-brand-ink-800",
  },
  {
    icon: UserX,
    title: "Adopciones Ilegales",
    image: adopcionesIlegalesImg,
    description: "Se considera culpable del delito de adopción ilegal a aquel que facilite, instrumente, colabore, gestione y/o consienta para que una persona menor de edad sea dada en adopción sin que se cumplan las disposiciones legales estatales, federales y/o los tratados internacionales.",
    details: "",
    gradient: "from-brand-olive-500 to-brand-olive-600",
    light: "bg-brand-olive-500/5",
    border: "border-brand-olive-500/20",
    text: "text-brand-olive-600",
  },
  {
    icon: AlertTriangle,
    title: "Explotación Sexual",
    image: explotacionSexualImg,
    description: "La explotación sexual consiste en diversas actividades sexuales comerciales como prostitución forzada, prostitución infantil, venta de niños, niñas y adolescentes con fines sexuales, la producción de materiales pornográficos y el uso de menores en espectáculos sexuales.",
    vertientes: [
      { nombre: "Prostitución Forzada", stat: "Solo 1 de cada 10 mujeres en situación de prostitución lo hacen voluntariamente — ONU" },
      { nombre: "Pornografía", stat: "1 de cada 5 videos son de niños o niñas. Al mirar pornografía nada te garantiza que es una actividad voluntaria." },
      { nombre: "Comercio Sexual Infantil", stat: "Comercio sexual de niños, niñas y adolescentes en el sector turístico y hotelero." },
    ],
    gradient: "from-brand-teal-500 to-brand-teal-600",
    light: "bg-brand-teal-500/5",
    border: "border-brand-teal-500/20",
    text: "text-brand-teal-600",
  },
  {
    icon: Activity,
    title: "Extracción Ilegal de Órganos",
    image: traficoOrganosImg,
    description: "Se refiere a la extracción u obtención ilícita de órganos humanos ajenos.",
    details: "Dicha extracción será ilícita si no existe consentimiento libre, informado y expreso del donante, si no hay autorización necesaria en caso de donante fallecido, o si se ofrece retribución. De los aproximadamente 120,000 transplantes que se realizan cada año en el mundo, la OMS estima que entre un 5% y un 10% de ellos son ilegales.",
    gradient: "from-brand-ink-800 to-brand-ink-900",
    light: "bg-brand-ink-800/5",
    border: "border-brand-ink-800/20",
    text: "text-brand-ink-800",
  },
  {
    icon: Briefcase,
    title: "Trabajos Forzados",
    image: trabajosForzadosImg,
    description: "Según el Convenio sobre el trabajo forzoso, 1930 de la OIT es «todo trabajo o servicio exigido a un individuo bajo la amenaza de una pena cualquiera y para el cual dicho individuo no se ofrece voluntariamente».",
    elementos: [
      { titulo: "Trabajo o servicio", desc: "Hace referencia a todo tipo de trabajo en cualquier actividad, industria o sector" },
      { titulo: "Amenaza", desc: "De una pena cualquiera abarca sanciones utilizadas para obligar a trabajar" },
      { titulo: "Involuntariedad", desc: "Cuando no existe consentimiento otorgado libremente" },
    ],
    gradient: "from-brand-olive-500 to-brand-olive-600",
    light: "bg-brand-olive-500/5",
    border: "border-brand-olive-500/20",
    text: "text-brand-olive-600",
  },
  {
    icon: FileSearch,
    title: "Menores en Actividades Delictivas",
    image: actividadesDelictivasImg,
    description: "Menores de edad que son obligados a participar en organizaciones para realizar delitos, usualmente son hombres para convertirlos en sicarios utilizando amenazas o agresiones que afectan su juicio al cometer estos actos.",
    details: "",
    gradient: "from-brand-teal-500 to-brand-teal-600",
    light: "bg-brand-teal-500/5",
    border: "border-brand-teal-500/20",
    text: "text-brand-teal-600",
  },
];

const TiposDeTrata = () => {
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
              <div className="p-3 sm:p-4 bg-gradient-to-br from-brand-olive-500 to-brand-ink-800 rounded-full shadow-cta animate-scale-in">
                <FileSearch className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
              </div>
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-ink-900 mb-3 sm:mb-4 leading-heading-1">
              Tipos de Trata de Personas
            </h1>
            
            <p className="font-body text-sm sm:text-base md:text-lg text-brand-olive-500 leading-body max-w-3xl mx-auto mb-6">
              La trata de personas se manifiesta de múltiples formas, todas ellas violaciones graves a los derechos humanos
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-olive-500/10 rounded-full">
              <Info className="h-4 w-4 text-brand-olive-500" />
              <span className="font-body text-xs sm:text-sm text-brand-ink-700 font-medium">
                Clasificación según la ONU
              </span>
            </div>
          </div>

          {/* Grid de tipos */}
          <div className="space-y-6 sm:space-y-8 mb-12">
            {tiposDeTrata.map((tipo, index) => {
              const Icon = tipo.icon;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index}
                  className="group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
                    {/* Imagen */}
                    <div className="w-full lg:w-80 flex-shrink-0">
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${tipo.gradient} opacity-10 blur-2xl rounded-3xl scale-110 group-hover:scale-125 transition-smooth`}></div>
                        <div className={`relative ${tipo.light} backdrop-blur-sm rounded-3xl p-8 border-2 ${tipo.border} shadow-card group-hover:shadow-cta transition-smooth`}>
                          <img 
                            src={tipo.image} 
                            alt={tipo.title}
                            className="w-full h-64 object-contain"
                          />
                          
                          {/* Badge numérico */}
                          <div className="absolute -top-4 -right-4 w-14 h-14 bg-white rounded-full shadow-soft flex items-center justify-center border-4 border-white">
                            <span className={`font-heading text-xl font-bold ${tipo.text}`}>
                              {index + 1}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="flex-1 w-full">
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`p-4 bg-gradient-to-br ${tipo.gradient} rounded-2xl shadow-soft flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-smooth`}>
                          <Icon className="h-8 w-8 text-white" strokeWidth={2} />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className={`font-heading text-2xl sm:text-3xl lg:text-4xl font-bold ${tipo.text} mb-4`}>
                            {tipo.title}
                          </h3>
                          
                          <p className="font-body text-base sm:text-lg text-brand-ink-700 leading-relaxed mb-6">
                            {tipo.description}
                          </p>

                          {/* Detalles adicionales */}
                          {tipo.details && (
                            <div className={`${tipo.light} backdrop-blur-sm rounded-2xl p-6 border ${tipo.border}`}>
                              <p className="font-body text-sm sm:text-base text-brand-ink-700 leading-relaxed">
                                {tipo.details}
                              </p>
                            </div>
                          )}

                          {/* Vertientes (para Explotación Sexual) */}
                          {tipo.vertientes && (
                            <div className="mt-6 space-y-4">
                              <h4 className={`font-heading text-lg sm:text-xl font-bold ${tipo.text} mb-4`}>
                                Principales Vertientes
                              </h4>
                              <div className="grid gap-4">
                                {tipo.vertientes.map((vertiente, i) => (
                                  <div 
                                    key={i} 
                                    className={`${tipo.light} backdrop-blur-sm rounded-xl p-5 border ${tipo.border} hover:shadow-soft transition-smooth`}
                                  >
                                    <div className="flex items-start gap-3">
                                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${tipo.gradient} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                                        {i + 1}
                                      </div>
                                      <div className="flex-1">
                                        <h5 className="font-heading text-base sm:text-lg font-bold text-brand-ink-900 mb-2">
                                          {vertiente.nombre}
                                        </h5>
                                        <p className="font-body text-sm text-brand-ink-700 leading-relaxed">
                                          {vertiente.stat}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Elementos (para Trabajos Forzados) */}
                          {tipo.elementos && (
                            <div className="mt-6">
                              <h4 className={`font-heading text-lg sm:text-xl font-bold ${tipo.text} mb-4`}>
                                Elementos Clave
                              </h4>
                              <div className="grid sm:grid-cols-3 gap-4">
                                {tipo.elementos.map((elemento, i) => (
                                  <div 
                                    key={i} 
                                    className={`${tipo.light} backdrop-blur-sm rounded-xl p-5 border ${tipo.border} hover:shadow-soft transition-smooth`}
                                  >
                                    <div className="flex items-center gap-2 mb-3">
                                      <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${tipo.gradient}`}></div>
                                      <h5 className={`font-heading text-sm sm:text-base font-bold ${tipo.text} uppercase tracking-wide`}>
                                        {elemento.titulo}
                                      </h5>
                                    </div>
                                    <p className="font-body text-xs sm:text-sm text-brand-ink-700 leading-relaxed">
                                      {elemento.desc}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <Card className="bg-gradient-to-br from-brand-teal-500/10 to-brand-teal-500/5 border-brand-teal-500/20 hover:shadow-card transition-smooth group">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-brand-teal-500 to-brand-ink-800 rounded-xl shadow-soft">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-brand-teal-500 group-hover:translate-x-1 transition-smooth" />
                </div>
                <h4 className="font-heading text-lg sm:text-xl font-bold text-brand-ink-900 mb-2">
                  Factores de Vulnerabilidad
                </h4>
                <p className="font-body text-sm text-brand-ink-700 mb-4">
                  Conoce las condiciones que aumentan el riesgo
                </p>
                <Button asChild variant="ghost" size="sm" className="text-brand-teal-500 hover:text-brand-teal-500 hover:bg-brand-teal-500/10 p-0">
                  <Link to="/aprende/factores-de-vulnerabilidad">
                    Ver más →
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-brand-olive-500/10 to-brand-olive-500/5 border-brand-olive-500/20 hover:shadow-card transition-smooth group">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-brand-olive-500 to-brand-ink-800 rounded-xl shadow-soft">
                    <Activity className="h-6 w-6 text-white" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-brand-olive-500 group-hover:translate-x-1 transition-smooth" />
                </div>
                <h4 className="font-heading text-lg sm:text-xl font-bold text-brand-ink-900 mb-2">
                  Estadísticas
                </h4>
                <p className="font-body text-sm text-brand-ink-700 mb-4">
                  Datos actualizados sobre la trata de personas
                </p>
                <Button asChild variant="ghost" size="sm" className="text-brand-olive-500 hover:text-brand-olive-500 hover:bg-brand-olive-500/10 p-0">
                  <Link to="/aprende/estadisticas">
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

export default TiposDeTrata;
