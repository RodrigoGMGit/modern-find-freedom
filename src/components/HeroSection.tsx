import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const slides = [
  {
    title: "HACERTE INVENCIBLE",
    subtitle: "SIGNIFICA CONOCERTE",
    quote: "A TI MISMO.",
    author: "SUN TZU, EL ARTE DE LA GUERRA",
  },
  {
    title: "JUNTOS PODEMOS",
    subtitle: "ACABAR CON LA",
    quote: "TRATA DE PERSONAS",
    author: "ÚNETE AL MOVIMIENTO ABOLICIONISTA",
  },
  {
    title: "LIBERTAD Y DIGNIDAD",
    subtitle: "PARA TODAS LAS",
    quote: "PERSONAS",
    author: "CONSTRUYENDO UN MUNDO MEJOR",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary/40" />
      </div>
      
      <div className="relative z-10 text-center text-primary-foreground px-4 max-w-5xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
          {slides[currentSlide].title}
          <br />
          <span className="text-5xl md:text-7xl lg:text-8xl">
            {slides[currentSlide].subtitle}
          </span>
          <br />
          <span className="text-5xl md:text-7xl lg:text-8xl">
            {slides[currentSlide].quote}
          </span>
        </h1>
        <p className="text-xl md:text-2xl font-medium mt-8">
          {slides[currentSlide].author}
        </p>

        <div className="mt-12">
          <Button
            size="lg"
            className="bg-destructive hover:bg-destructive/90 text-destructive-foreground rounded-full px-8 py-6 text-lg font-bold shadow-glow"
          >
            PRUEBA NUESTRO TEST DE MEDICIÓN
          </Button>
        </div>
      </div>

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-primary-foreground hover:bg-primary-foreground/20 rounded-full w-12 h-12"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-primary-foreground hover:bg-primary-foreground/20 rounded-full w-12 h-12"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-primary-foreground w-8"
                : "bg-primary-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
