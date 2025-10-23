import { Users, Flag, Bird, MessageSquare, HandHeart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    icon: Users,
    text: "Establecemos redes de apoyo entre diversas instituciones y organizaciones que trabajan para abolir la esclavitud en todo el mundo.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Flag,
    text: "Motivamos a las personas para que lleguen a autodefinirse como ABOLICIONISTAS y generen cambios en sus propios contextos y comunidades.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Bird,
    text: "Damos conferencias y talleres informativos, con el fin de prevenir a todos los sectores de la población.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: MessageSquare,
    text: "Creamos un movimiento nacional e internacional de abolicionistas que luchen por dar a conocer esta problemática y acabar con la Trata de Personas.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: HandHeart,
    text: "Apoyamos iniciativas y proyectos pro-abolicionistas.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

const HowWeAchieve = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          ¿CÓMO LO LOGRAMOS?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-none shadow-soft"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`mx-auto w-20 h-20 ${achievement.bgColor} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <achievement.icon className={`w-10 h-10 ${achievement.color}`} />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeAchieve;
