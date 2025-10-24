import { useEffect, useRef } from "react";
import { Shield } from "lucide-react";
const partners = [{
  name: "Escudo de Jalisco",
  logo: "https://findelaesclavitud.org/wp-content/uploads/2022/08/Escudo-de-jalisco.svg"
}, {
  name: "FIGA",
  logo: "https://findelaesclavitud.org/wp-content/uploads/2022/08/Figa.svg"
}, {
  name: "Fundación Expo GDL",
  logo: "https://findelaesclavitud.org/wp-content/uploads/2022/08/Fundacion-expo-gdl.svg"
}, {
  name: "Fundación Marisa",
  logo: "https://findelaesclavitud.org/wp-content/uploads/2022/08/Fundacion-marisa.svg"
}, {
  name: "CPS",
  logo: "https://findelaesclavitud.org/wp-content/uploads/2022/08/Compania-proveedorea-de-sistemas.svg"
}, {
  name: "Actinver",
  logo: "https://findelaesclavitud.org/wp-content/uploads/2022/08/Actinver.svg"
}, {
  name: "Centro Oftalmológico",
  logo: "https://findelaesclavitud.org/wp-content/uploads/2022/08/Centro-oftalmologico-visual.svg"
}, {
  name: "Gobierno de Zapopan",
  logo: "https://findelaesclavitud.org/wp-content/uploads/2022/10/Gobierno-de-zapopan-RR.svg"
}, {
  name: "I&T",
  logo: "https://findelaesclavitud.org/wp-content/uploads/2022/08/Institucionalidad-y-transparencia.svg"
}, {
  name: "CEMEFI",
  logo: "https://findelaesclavitud.org/wp-content/uploads/2022/08/Cemefi.svg"
}, {
  name: "We Solve",
  logo: "https://findelaesclavitud.org/wp-content/uploads/2022/08/We-solve.svg"
}, {
  name: "Sistema de Asistencia Social",
  logo: "https://findelaesclavitud.org/wp-content/uploads/2022/08/Sistema-de-asistencia-social.svg"
}, {
  name: "Scotiabank",
  logo: "https://findelaesclavitud.org/wp-content/uploads/2022/08/Scotiabank.svg"
}, {
  name: "Igualdad Sustantiva",
  logo: "https://findelaesclavitud.org/wp-content/uploads/2022/08/Igualdad-sustantiva.svg"
}, {
  name: "IBM",
  logo: "https://findelaesclavitud.org/wp-content/uploads/2022/08/IBM.svg"
}, {
  name: "Corporativa de Fundaciones",
  logo: "https://findelaesclavitud.org/wp-content/uploads/2022/08/Corporativa-de-fundaciones.svg"
}];
const PartnersSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    let scrollAmount = 0;
    const scrollSpeed = 0.5;
    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };
    const intervalId = setInterval(scroll, 20);
    return () => clearInterval(intervalId);
  }, []);
  return <section className="relative py-16 sm:py-20 bg-gradient-subtle overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-brand-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-brand-mint-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 text-center">
        {/* Logo circular con icono */}
        <div className="flex justify-center mb-4 sm:mb-6">
          
        </div>

        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-ink-900 mb-3 sm:mb-4">
          Nuestros Aliados
        </h2>
        <p className="font-body text-sm sm:text-base md:text-lg text-brand-olive-500 max-w-2xl mx-auto">
          Organizaciones que colaboran con nosotros en la lucha contra la trata de personas
        </p>
      </div>
      
      <div ref={scrollRef} className="relative flex gap-1 sm:gap-2 overflow-x-hidden whitespace-nowrap py-8" style={{
      scrollBehavior: "auto"
    }}>
        {/* Duplicate partners for seamless loop */}
        {[...partners, ...partners].map((partner, index) => <div key={index} className="inline-flex items-center justify-center flex-shrink-0 w-40 h-28 sm:w-48 sm:h-32 md:w-56 md:h-36 transition-smooth hover:scale-110 p-6 sm:p-8 group">
            <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain filter brightness-0 opacity-70 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-500" loading="lazy" />
          </div>)}
      </div>

      {/* Indicador visual de scroll */}
      <div className="relative flex justify-center items-center mt-6 sm:mt-8">
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-brand-teal-500 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-brand-mint-200 animate-pulse delay-150"></div>
          <div className="w-2 h-2 rounded-full bg-brand-olive-500 animate-pulse delay-300"></div>
        </div>
      </div>
    </section>;
};
export default PartnersSection;