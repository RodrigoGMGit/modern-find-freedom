import { useEffect, useRef } from "react";

const partners = [
  { name: "Escudo de Jalisco", logo: "https://findelaesclavitud.org/wp-content/uploads/2022/08/Escudo-de-jalisco.svg" },
  { name: "FIGA", logo: "https://findelaesclavitud.org/wp-content/uploads/2022/08/Figa.svg" },
  { name: "Fundación Expo GDL", logo: "https://findelaesclavitud.org/wp-content/uploads/2022/08/Fundacion-expo-gdl.svg" },
  { name: "Fundación Marisa", logo: "https://findelaesclavitud.org/wp-content/uploads/2022/08/Fundacion-marisa.svg" },
  { name: "CPS", logo: "https://findelaesclavitud.org/wp-content/uploads/2022/08/Compania-proveedorea-de-sistemas.svg" },
  { name: "Actinver", logo: "https://findelaesclavitud.org/wp-content/uploads/2022/08/Actinver.svg" },
  { name: "Centro Oftalmológico", logo: "https://findelaesclavitud.org/wp-content/uploads/2022/08/Centro-oftalmologico-visual.svg" },
  { name: "Gobierno de Zapopan", logo: "https://findelaesclavitud.org/wp-content/uploads/2022/10/Gobierno-de-zapopan-RR.svg" },
  { name: "I&T", logo: "https://findelaesclavitud.org/wp-content/uploads/2022/08/Institucionalidad-y-transparencia.svg" },
  { name: "CEMEFI", logo: "https://findelaesclavitud.org/wp-content/uploads/2022/08/Cemefi.svg" },
  { name: "We Solve", logo: "https://findelaesclavitud.org/wp-content/uploads/2022/08/We-solve.svg" },
  { name: "Sistema de Asistencia Social", logo: "https://findelaesclavitud.org/wp-content/uploads/2022/08/Sistema-de-asistencia-social.svg" },
  { name: "Scotiabank", logo: "https://findelaesclavitud.org/wp-content/uploads/2022/08/Scotiabank.svg" },
  { name: "Igualdad Sustantiva", logo: "https://findelaesclavitud.org/wp-content/uploads/2022/08/Igualdad-sustantiva.svg" },
  { name: "IBM", logo: "https://findelaesclavitud.org/wp-content/uploads/2022/08/IBM.svg" },
  { name: "Corporativa de Fundaciones", logo: "https://findelaesclavitud.org/wp-content/uploads/2022/08/Corporativa-de-fundaciones.svg" },
];

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

  return (
    <section className="py-20 bg-muted overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground">
          NUESTROS ALIADOS
        </h2>
      </div>
      
      <div
        ref={scrollRef}
        className="flex gap-16 overflow-x-hidden whitespace-nowrap"
        style={{ scrollBehavior: "auto" }}
      >
        {/* Duplicate partners for seamless loop */}
        {[...partners, ...partners].map((partner, index) => (
          <div
            key={index}
            className="inline-flex items-center justify-center flex-shrink-0 w-32 h-32 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
