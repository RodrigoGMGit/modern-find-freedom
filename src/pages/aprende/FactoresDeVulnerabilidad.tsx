import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Users, Scale, Plane, Briefcase, UserX, AlertCircle, Shield } from "lucide-react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { cardColors, iconColors } from "@/utils/cardColors";

const factores = [
  {
    icon: DollarSign,
    title: "Pobreza y carencias sociales",
    description: "Presencia generalizada de pobreza y carencias sociales",
  },
  {
    icon: Users,
    title: "Violencia social",
    description: "Presencia generalizada de altos niveles de violencia social",
  },
  {
    icon: Scale,
    title: "Sistema de justicia deficiente",
    description: "Sistema de justicia y de seguridad pública deficientes",
  },
  {
    icon: Plane,
    title: "Migración",
    description: "Migración interna e internacional",
  },
  {
    icon: Briefcase,
    title: "Precariedad económica",
    description: "Precariedad económica y condiciones laborales de explotación",
  },
  {
    icon: UserX,
    title: "Discriminación de género",
    description: "Discriminación por género en el contexto de desarrollo humano",
  },
  {
    icon: AlertCircle,
    title: "Grupos específicos vulnerables",
    description: "Vulnerabilidad acentuada en grupos específicos",
  },
];

const FactoresDeVulnerabilidad = () => {
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
                <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
              </div>
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-brand-ink-900 mb-3 sm:mb-4 leading-heading-1">
              Factores de Vulnerabilidad
            </h1>
            
            <p className="font-body text-sm sm:text-base md:text-lg text-brand-olive-500 leading-body max-w-3xl mx-auto">
              Condiciones que aumentan el riesgo de ser víctima de trata
            </p>
          </div>

          {/* Definición */}
          <Card className={`${cardColors[0]} border mb-10 sm:mb-12 shadow-card`}>
            <CardContent className="p-8 sm:p-12 text-center">
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-brand-ink-900 mb-6 leading-heading-2">
                Condición de Vulnerabilidad
              </h2>
              <p className="font-body text-base sm:text-lg text-brand-ink-800 leading-relaxed mb-4">
                Es el <strong>estado o situación en que se encuentra una persona por su edad, discapacidad, pertenencia a minorías o diversidad</strong>.
              </p>
              <p className="font-body text-sm sm:text-base text-brand-olive-500 italic">
                Fuente: Cumbre Judicial Iberoamericana 2012
              </p>
            </CardContent>
          </Card>

          {/* Grid de factores */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {factores.map((factor, index) => {
              const colorIndex = index % 3;
              const cardColor = cardColors[colorIndex];
              const iconColor = iconColors[colorIndex];

              return (
                <Card key={index} className={`${cardColor} border hover:shadow-card transition-smooth hover:scale-105 group`}>
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className={`p-4 sm:p-5 ${iconColor} rounded-full w-fit mx-auto mb-4 sm:mb-6 shadow-soft group-hover:scale-110 transition-smooth`}>
                      <factor.icon className="h-8 w-8 sm:h-10 sm:w-10" />
                    </div>
                    
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-brand-ink-900 mb-3 leading-heading-3">
                      {factor.title}
                    </h3>
                    
                    <p className="font-body text-sm sm:text-base text-brand-ink-800 leading-relaxed">
                      {factor.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA */}
          <Card className="mt-12 sm:mt-16 bg-gradient-to-br from-brand-teal-500 via-brand-ink-800 to-brand-olive-500 border-0 shadow-card text-white">
            <CardContent className="p-8 sm:p-12 text-center">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-heading-2">
                La prevención comienza con el conocimiento
              </h2>
              <p className="font-body text-sm sm:text-base md:text-lg text-white/90 max-w-3xl mx-auto leading-body">
                Identificar estos factores de vulnerabilidad nos permite desarrollar estrategias de prevención más efectivas y proteger a las poblaciones en riesgo.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FactoresDeVulnerabilidad;
