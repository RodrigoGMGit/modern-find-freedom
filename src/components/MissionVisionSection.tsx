import { Target, Eye, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const MissionVisionSection = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-background via-brand-mint-50/30 to-background overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-brand-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-brand-mint-200/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título principal */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-4 px-6 py-2 bg-brand-ink-800/5 rounded-full">
            <Shield className="w-5 h-5 text-brand-teal-500" />
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-ink-800">
              FIN DE LA ESCLAVITUD
            </h2>
          </div>
          <p className="font-body text-base sm:text-lg lg:text-xl text-brand-ink-700 max-w-4xl mx-auto leading-relaxed">
            Somos una organización dedicada a{" "}
            <span className="font-bold text-brand-teal-600">INFORMAR</span>,{" "}
            <span className="font-bold text-brand-teal-600">PREVENIR Y CAPACITAR</span>{" "}
            sobre la{" "}
            <span className="font-bold text-brand-teal-600">TRATA DE PERSONAS</span>{" "}
            y las diversas formas de esclavitud que existen en nuestro siglo.
          </p>
        </div>

        {/* Misión y Visión */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {/* Misión */}
          <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-brand-mint-50/50 border-brand-teal-200/50 p-8 sm:p-10 shadow-soft hover:shadow-cta transition-smooth">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-teal-500/5 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-brand-teal-500/10 rounded-xl group-hover:scale-110 transition-smooth">
                  <Target className="w-8 h-8 text-brand-teal-600" />
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-brand-ink-800">
                  NUESTRA MISIÓN
                </h3>
              </div>
              
              <p className="font-body text-base sm:text-lg text-brand-ink-700 leading-relaxed">
                Es contribuir a la{" "}
                <span className="font-bold text-brand-teal-600">DISMINUCIÓN</span>{" "}
                de factores de riesgo y{" "}
                <span className="font-bold text-brand-teal-600">AUMENTAR</span>{" "}
                las habilidades de{" "}
                <span className="font-bold text-brand-teal-600">PREVENCIÓN</span>{" "}
                de la población{" "}
                <span className="font-bold text-brand-teal-600">VULNERABLE</span>{" "}
                ante la{" "}
                <span className="font-bold text-brand-teal-600">TRATA DE PERSONAS</span>.
              </p>
            </div>
          </Card>

          {/* Visión */}
          <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-brand-teal-50/50 border-brand-teal-200/50 p-8 sm:p-10 shadow-soft hover:shadow-cta transition-smooth">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-mint-200/5 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-brand-ink-800/10 rounded-xl group-hover:scale-110 transition-smooth">
                  <Eye className="w-8 h-8 text-brand-ink-800" />
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-brand-ink-800">
                  NUESTRA VISIÓN
                </h3>
              </div>
              
              <p className="font-body text-base sm:text-lg text-brand-ink-700 leading-relaxed">
                Es ser un{" "}
                <span className="font-bold text-brand-ink-800">AGENTE DE CAMBIO</span>{" "}
                para disminuir los niveles de{" "}
                <span className="font-bold text-brand-ink-800">TRATA DE PERSONAS</span>{" "}
                en México.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;