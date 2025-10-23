import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Link as LinkIcon, Plus, Target } from "lucide-react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { cardColors, iconColors } from "@/utils/cardColors";

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
          <div className="text-center mb-10 sm:mb-16">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="p-3 sm:p-4 bg-gradient-to-br from-brand-teal-500 to-brand-ink-800 rounded-full shadow-soft">
                <AlertCircle className="h-10 w-10 sm:h-12 sm:h-12 text-white" />
              </div>
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-brand-ink-900 mb-3 sm:mb-4 leading-heading-1">
              ¿Qué es la Trata de Personas?
            </h1>
            
            <p className="font-body text-sm sm:text-base md:text-lg text-brand-olive-500 leading-body max-w-3xl mx-auto mb-8">
              Comprendiendo los elementos que definen este delito
            </p>
          </div>

          {/* Definición */}
          <Card className={`${cardColors[0]} border mb-10 sm:mb-12 shadow-card`}>
            <CardContent className="p-8 sm:p-12 text-center">
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-brand-ink-900 mb-6 leading-heading-2">
                Definición Oficial
              </h2>
              <p className="font-body text-base sm:text-lg text-brand-ink-800 leading-relaxed mb-4">
                Por "trata de personas" se entenderá la <strong>captación, el transporte, el traslado, la acogida o la recepción de personas</strong>, recurriendo a la <strong>amenaza o al uso de la fuerza u otras formas de coacción, al rapto, al fraude, al engaño, al abuso de poder</strong>, etc., con <strong>fines de explotación</strong>.
              </p>
              <p className="font-body text-sm sm:text-base text-brand-olive-500 italic">
                Fuente: Protocolo de Palermo, 2000
              </p>
            </CardContent>
          </Card>

          {/* Fórmula visual */}
          <div className="text-center mb-10 sm:mb-16">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="font-heading text-2xl sm:text-3xl font-bold text-brand-teal-500">
                Acciones
              </div>
              <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-brand-olive-500" />
              <div className="font-heading text-2xl sm:text-3xl font-bold text-brand-olive-500">
                Medios
              </div>
              <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-brand-olive-500" />
              <div className="font-heading text-2xl sm:text-3xl font-bold text-brand-ink-800">
                Fines
              </div>
            </div>
          </div>

          {/* Elementos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {elementos.map((elemento, index) => {
              const colorIndex = index % 3;
              const cardColor = cardColors[colorIndex];
              const iconColor = iconColors[colorIndex];

              return (
                <Card key={index} className={`${cardColor} border hover:shadow-card transition-smooth group`}>
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex justify-center mb-4 sm:mb-6">
                      <div className={`p-3 sm:p-4 ${iconColor} rounded-full shadow-soft group-hover:scale-110 transition-smooth`}>
                        <elemento.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                      </div>
                    </div>
                    
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-900 mb-4 sm:mb-6 text-center">
                      {elemento.title}
                    </h3>
                    
                    <ul className="space-y-2 sm:space-y-3">
                      {elemento.items.map((item, i) => (
                        <li key={i} className="flex items-start text-sm sm:text-base text-brand-ink-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-teal-500 mt-2 mr-3 flex-shrink-0"></span>
                          <span className="font-body">{item}</span>
                        </li>
                      ))}
                    </ul>
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

export default QueEsLaTrata;
