import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
const slides = [{
  title: "Hacerte Invencible",
  subtitle: "Significa Conocerte",
  quote: "A Ti Mismo",
  author: "Sun Tzu, El Arte de la Guerra"
}, {
  title: "Juntos Podemos",
  subtitle: "Acabar con la",
  quote: "Trata de Personas",
  author: "Únete al Movimiento Abolicionista"
}, {
  title: "Libertad y Dignidad",
  subtitle: "Para Todas las",
  quote: "Personas",
  author: "Construyendo un Mundo Mejor"
}];
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange((currentSlide + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [currentSlide]);
  const handleSlideChange = (newIndex: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(newIndex);
      setIsTransitioning(false);
    }, 300);
  };
  const nextSlide = () => {
    handleSlideChange((currentSlide + 1) % slides.length);
  };
  const prevSlide = () => {
    handleSlideChange((currentSlide - 1 + slides.length) % slides.length);
  };
  return <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-ink-900/80 via-brand-teal-500/70 to-brand-ink-800/80" />
        
        {/* Elementos decorativos flotantes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-mint-200/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-teal-500/10 rounded-full blur-3xl animate-float delay-1000"></div>
      </div>
      
      {/* Contenido principal */}
      <div className={`relative z-10 text-center text-white px-4 sm:px-6 max-w-6xl mx-auto py-20 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {/* Logo decorativo superior */}
        <div className="flex justify-center mb-6 sm:mb-8">
          
        </div>

        {/* Títulos animados */}
        <h1 className="font-heading font-bold leading-heading-1 tracking-tight mb-6 sm:mb-8">
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-mint-200 mb-2 sm:mb-3 animate-slide-up">
            {slides[currentSlide].title}
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-2 sm:mb-3 animate-slide-up delay-150">
            {slides[currentSlide].subtitle}
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl animate-slide-up delay-300">
            {slides[currentSlide].quote}
          </span>
        </h1>

        {/* Autor con línea decorativa */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 animate-fade-in">
          <div className="h-px w-12 sm:w-16 bg-brand-mint-200/50"></div>
          <p className="font-body text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-brand-mint-200/90 italic">
            {slides[currentSlide].author}
          </p>
          <div className="h-px w-12 sm:w-16 bg-brand-mint-200/50"></div>
        </div>

        {/* CTA Button mejorado */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button variant="primary-brand" size="lg" className="group shadow-cta hover:shadow-soft bg-white text-brand-ink-900 hover:bg-brand-mint-200 px-6 sm:px-8 py-6 text-base sm:text-lg font-bold rounded-xl w-full sm:w-auto">
            Prueba Nuestro Test
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
          </Button>
          
          <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 px-6 sm:px-8 py-6 text-base sm:text-lg font-semibold rounded-xl w-full sm:w-auto">
            Conoce Hogares Seguros
          </Button>
        </div>
      </div>

      {/* Controles de navegación mejorados */}
      <Button variant="ghost" size="icon" onClick={prevSlide} className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 sm:w-12 sm:h-12 border border-white/30 transition-smooth" aria-label="Slide anterior">
        <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
      </Button>
      <Button variant="ghost" size="icon" onClick={nextSlide} className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 sm:w-12 sm:h-12 border border-white/30 transition-smooth" aria-label="Slide siguiente">
        <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
      </Button>

      {/* Indicadores de slides mejorados */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
        {slides.map((_, index) => <button key={index} onClick={() => handleSlideChange(index)} className={`rounded-full transition-all ${index === currentSlide ? "bg-white w-8 sm:w-10 h-2 sm:h-3" : "bg-white/50 w-2 sm:w-3 h-2 sm:h-3 hover:bg-white/70"}`} aria-label={`Ir a slide ${index + 1}`} />)}
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 z-20 animate-float hidden md:block">
        <div className="flex flex-col items-center gap-2 text-white/70">
          <span className="text-xs font-body uppercase tracking-wide">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/70 to-transparent"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;