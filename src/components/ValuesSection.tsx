import { Heart, Target, Hand, Zap, Users2, Shield, MessageCircle, Award } from "lucide-react";
import { useState } from "react";

const values = [
  { icon: Heart, label: "AMOR", color: "text-destructive" },
  { icon: Target, label: "COMPROMISO", color: "text-primary" },
  { icon: Hand, label: "COMPASIÓN", color: "text-secondary" },
  { icon: Zap, label: "ACCIÓN", color: "text-primary-light" },
  { icon: Users2, label: "COOPERACIÓN", color: "text-primary" },
  { icon: Shield, label: "RESPETO", color: "text-secondary" },
  { icon: MessageCircle, label: "COMUNICACIÓN", color: "text-primary-light" },
  { icon: Award, label: "HONESTIDAD", color: "text-primary" },
];

const ValuesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          NUESTROS VALORES
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-border flex items-center justify-center mb-4 transition-all duration-300 ${
                  hoveredIndex === index
                    ? "scale-110 shadow-glow bg-gradient-accent"
                    : "bg-background"
                }`}
              >
                <value.icon
                  className={`w-12 h-12 md:w-16 md:h-16 ${
                    hoveredIndex === index ? "text-accent-foreground" : value.color
                  } transition-colors duration-300`}
                />
              </div>
              <p
                className={`font-bold text-sm md:text-base transition-colors duration-300 ${
                  hoveredIndex === index ? value.color : "text-muted-foreground"
                }`}
              >
                {value.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
