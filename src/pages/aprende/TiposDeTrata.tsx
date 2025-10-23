import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Briefcase, Activity, AlertTriangle, UserX, FileSearch } from "lucide-react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { cardColors, iconColors } from "@/utils/cardColors";

const tiposDeTrata = [
  {
    icon: Heart,
    title: "Matrimonio Forzado",
    description: "Matrimonio que sucede sin el consentimiento de una o ambas partes. Haber consentido al matrimonio significa que la persona acordó de manera completa, libre e informada, casarse con otra persona, así como el momento en el que se efectuaría el matrimonio.",
    details: "El matrimonio forzado puede ocurrir cuando familiares u otras personas usan el abuso físico o emocional, amenazas o engaños, para forzar a alguien a casarse sin su consentimiento. Puede afectar a personas de todas las razas, grupos étnicos, religiones, géneros, edades u origen nacional.",
  },
  {
    icon: Users,
    title: "Mendicidad Forzada",
    description: "Es obligar a una persona a pedir dinero en diversos escenarios, denigrándolos con la intención de generar en ellos un aspecto que provoque pena y con ello se generen mayores ganancias.",
    details: "",
  },
  {
    icon: UserX,
    title: "Adopciones Ilegales",
    description: "Se considera culpable del delito de adopción ilegal a aquel que facilite, instrumente, colabore, gestione y/o consienta para que una persona menor de edad sea dada en adopción sin que se cumplan las disposiciones legales estatales, federales y/o los tratados internacionales.",
    details: "",
  },
  {
    icon: AlertTriangle,
    title: "Explotación Sexual",
    description: "La explotación sexual consiste en diversas actividades sexuales comerciales como prostitución forzada, prostitución infantil, venta de niños, niñas y adolescentes con fines sexuales, la producción de materiales pornográficos y el uso de menores en espectáculos sexuales.",
    vertientes: [
      { nombre: "Prostitución Forzada", stat: "Solo 1 de cada 10 mujeres en situación de prostitución lo hacen voluntariamente — ONU" },
      { nombre: "Pornografía", stat: "1 de cada 5 videos son de niños o niñas. Al mirar pornografía nada te garantiza que es una actividad voluntaria." },
      { nombre: "Comercio Sexual Infantil", stat: "Comercio sexual de niños, niñas y adolescentes en el sector turístico y hotelero." },
    ],
  },
  {
    icon: Activity,
    title: "Extracción Ilegal de Órganos",
    description: "Se refiere a la extracción u obtención ilícita de órganos humanos ajenos.",
    details: "Dicha extracción será ilícita si no existe consentimiento libre, informado y expreso del donante, si no hay autorización necesaria en caso de donante fallecido, o si se ofrece retribución. De los aproximadamente 120,000 transplantes que se realizan cada año en el mundo, la OMS estima que entre un 5% y un 10% de ellos son ilegales.",
  },
  {
    icon: Briefcase,
    title: "Trabajos Forzados",
    description: "Según el Convenio sobre el trabajo forzoso, 1930 de la OIT es «todo trabajo o servicio exigido a un individuo bajo la amenaza de una pena cualquiera y para el cual dicho individuo no se ofrece voluntariamente».",
    elementos: [
      { titulo: "Trabajo o servicio", desc: "Hace referencia a todo tipo de trabajo en cualquier actividad, industria o sector" },
      { titulo: "Amenaza", desc: "De una pena cualquiera abarca sanciones utilizadas para obligar a trabajar" },
      { titulo: "Involuntariedad", desc: "Cuando no existe consentimiento otorgado libremente" },
    ],
  },
  {
    icon: FileSearch,
    title: "Menores en Actividades Delictivas",
    description: "Menores de edad que son obligados a participar en organizaciones para realizar delitos, usualmente son hombres para convertirlos en sicarios utilizando amenazas o agresiones que afectan su juicio al cometer estos actos.",
    details: "",
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
      </div>
      
      <main className="relative pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-16">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="p-3 sm:p-4 bg-gradient-to-br from-brand-olive-500 to-brand-teal-500 rounded-full shadow-soft">
                <FileSearch className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
              </div>
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-brand-ink-900 mb-3 sm:mb-4 leading-heading-1">
              Tipos de Trata de Personas
            </h1>
            
            <p className="font-body text-sm sm:text-base md:text-lg text-brand-olive-500 leading-body">
              Según la ONU
            </p>
          </div>

          {/* Grid de tipos */}
          <div className="space-y-8 sm:space-y-12">
            {tiposDeTrata.map((tipo, index) => {
              const colorIndex = index % 3;
              const cardColor = cardColors[colorIndex];
              const iconColor = iconColors[colorIndex];

              return (
                <Card key={index} className={`${cardColor} border hover:shadow-card transition-smooth`}>
                  <CardContent className="p-6 sm:p-8 lg:p-10">
                    <div className="flex items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                      <div className={`p-3 sm:p-4 ${iconColor} rounded-full shadow-soft flex-shrink-0`}>
                        <tipo.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-brand-ink-900 mb-3 sm:mb-4 leading-heading-3">
                          {tipo.title}
                        </h3>
                        <p className="font-body text-sm sm:text-base text-brand-ink-800 leading-relaxed">
                          {tipo.description}
                        </p>
                      </div>
                    </div>

                    {tipo.details && (
                      <p className="font-body text-sm sm:text-base text-brand-ink-800 leading-relaxed mb-4">
                        {tipo.details}
                      </p>
                    )}

                    {tipo.vertientes && (
                      <div className="mt-6 space-y-4">
                        {tipo.vertientes.map((vertiente, i) => (
                          <div key={i} className="bg-white/50 rounded-lg p-4">
                            <h4 className="font-heading text-base sm:text-lg font-bold text-brand-ink-900 mb-2">
                              {vertiente.nombre}
                            </h4>
                            <p className="font-body text-sm sm:text-base text-brand-ink-800">
                              {vertiente.stat}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {tipo.elementos && (
                      <div className="mt-6 grid sm:grid-cols-3 gap-4">
                        {tipo.elementos.map((elemento, i) => (
                          <div key={i} className="bg-white/50 rounded-lg p-4">
                            <h4 className="font-heading text-sm sm:text-base font-bold text-brand-ink-900 mb-2 uppercase">
                              {elemento.titulo}
                            </h4>
                            <p className="font-body text-xs sm:text-sm text-brand-ink-800">
                              {elemento.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TiposDeTrata;
