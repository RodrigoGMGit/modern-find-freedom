/**
 * Portada del sitio: ensambla cabecera, pie y secciones reutilizables del inicio.
 *
 * @route `/`
 * @see docs/rutas-y-paginas.md
 * @see docs/componentes-de-dominio.md
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import HowWeAchieve from "@/components/HowWeAchieve";
import ValuesSection from "@/components/ValuesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MissionVisionSection />
      <HowWeAchieve />
      <ValuesSection />
      <Footer />
    </div>
  );
};

export default Index;
