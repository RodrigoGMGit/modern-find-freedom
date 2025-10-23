import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowWeAchieve from "@/components/HowWeAchieve";
import ValuesSection from "@/components/ValuesSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <HowWeAchieve />
      <ValuesSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;
