import { Target, Eye, Shield, Users, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const MissionVisionSection = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Fondo con gradiente mejorado */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-ink-900 via-brand-teal-600 to-brand-ink-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      </div>

      {/* Elementos decorativos flotantes */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-brand-mint-200/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-brand-teal-400/10 rounded-full blur-3xl animate-float delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-float delay-500"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Título principal con estilo mejorado */}
        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Shield className="w-6 h-6 text-brand-mint-200" />
            <span className="font-body text-sm uppercase tracking-widest text-brand-mint-200 font-semibold">
              Nuestro Propósito
            </span>
          </div>
          
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            FIN DE LA <span className="text-brand-mint-200">ESCLAVITUD</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="font-body text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed">
              Somos una organización dedicada a{" "}
              <span className="font-bold text-brand-mint-200">INFORMAR</span>,{" "}
              <span className="font-bold text-brand-mint-200">PREVENIR Y CAPACITAR</span>{" "}
              sobre la{" "}
              <span className="font-bold text-brand-mint-200">TRATA DE PERSONAS</span>{" "}
              y las diversas formas de esclavitud que existen en nuestro siglo.
            </p>
          </div>
        </div>

        {/* Misión y Visión con diseño mejorado */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Misión */}
          <div className="group animate-fade-in delay-150">
            <Card className="relative overflow-hidden bg-white/95 backdrop-blur-sm border-0 p-8 sm:p-10 lg:p-12 shadow-cta hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)] transition-smooth h-full">
              {/* Borde superior decorativo */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-teal-500 via-brand-teal-400 to-brand-teal-500"></div>
              
              {/* Elemento decorativo */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal-500/5 rounded-full blur-2xl group-hover:scale-150 transition-smooth duration-500"></div>
              
              <div className="relative z-10">
                {/* Icono */}
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-gradient-to-br from-brand-teal-500 to-brand-teal-600 rounded-2xl shadow-soft group-hover:scale-110 group-hover:rotate-3 transition-smooth">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                {/* Título */}
                <h3 className="font-heading text-3xl sm:text-4xl font-bold text-brand-ink-900 mb-6 leading-tight">
                  NUESTRA<br />
                  <span className="text-brand-teal-600">MISIÓN</span>
                </h3>
                
                {/* Contenido */}
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

                {/* Icono decorativo inferior */}
                <div className="mt-8 flex items-center gap-3 text-brand-teal-500">
                  <Users className="w-5 h-5" />
                  <div className="h-px flex-1 bg-gradient-to-r from-brand-teal-200 to-transparent"></div>
                </div>
              </div>
            </Card>
          </div>

          {/* Visión */}
          <div className="group animate-fade-in delay-300">
            <Card className="relative overflow-hidden bg-white/95 backdrop-blur-sm border-0 p-8 sm:p-10 lg:p-12 shadow-cta hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)] transition-smooth h-full">
              {/* Borde superior decorativo */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-ink-800 via-brand-ink-700 to-brand-ink-800"></div>
              
              {/* Elemento decorativo */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-ink-800/5 rounded-full blur-2xl group-hover:scale-150 transition-smooth duration-500"></div>
              
              <div className="relative z-10">
                {/* Icono */}
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-gradient-to-br from-brand-ink-800 to-brand-ink-900 rounded-2xl shadow-soft group-hover:scale-110 group-hover:rotate-3 transition-smooth">
                    <Eye className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                {/* Título */}
                <h3 className="font-heading text-3xl sm:text-4xl font-bold text-brand-ink-900 mb-6 leading-tight">
                  NUESTRA<br />
                  <span className="text-brand-ink-800">VISIÓN</span>
                </h3>
                
                {/* Contenido */}
                <p className="font-body text-base sm:text-lg text-brand-ink-700 leading-relaxed">
                  Es ser un{" "}
                  <span className="font-bold text-brand-ink-800">AGENTE DE CAMBIO</span>{" "}
                  para disminuir los niveles de{" "}
                  <span className="font-bold text-brand-ink-800">TRATA DE PERSONAS</span>{" "}
                  en México.
                </p>

                {/* Icono decorativo inferior */}
                <div className="mt-8 flex items-center gap-3 text-brand-ink-700">
                  <Heart className="w-5 h-5" />
                  <div className="h-px flex-1 bg-gradient-to-r from-brand-ink-200 to-transparent"></div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;