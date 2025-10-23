import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, AlertTriangle, GraduationCap, ShoppingCart } from "lucide-react";
import voluntariosHero from "@/assets/voluntarios-hero.jpg";

const actions = [
  {
    icon: MessageCircle,
    title: "Toma acción",
    description: "Habla sobre este tema en tu comunidad, escuela, familia y amigos, comparte el contenido de nuestras redes sociales.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: AlertTriangle,
    title: "Involúcrate",
    description: "Denuncia posibles casos de explotación en el 80 05 53 30 00. Línea nacional de denuncia contra la trata de personas.",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
  {
    icon: GraduationCap,
    title: "Capacítate",
    description: "Para combatir este problema necesitamos a personas como tú. Ingresa en nuestro Diplomado en línea y obtendrás todas las herramientas para que juntos luchemos por un mundo sin esclavitud.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: ShoppingCart,
    title: "Compra en línea",
    description: "¡Compra con causa y trae libertad con tu compra! Con la compra de nuestros regalos puedes apoyar la labor que hacemos como organización y ayudarnos a llegar a aquellos grupos más vulnerables.",
    color: "text-primary-light",
    bgColor: "bg-primary/10",
  },
];

const Voluntarios = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative h-[600px] overflow-hidden">
          <img
            src={voluntariosHero}
            alt="Voluntarios"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60 flex items-center justify-center">
            <div className="text-center text-primary-foreground px-4 max-w-4xl">
              <p className="text-xl md:text-2xl font-medium mb-4 uppercase tracking-wide">
                No hay nada más fuerte en el mundo que el corazón de un voluntario.
              </p>
              <p className="text-lg md:text-xl font-bold">
                JAMES H. DOOLITTLE
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-6xl">
          {/* Call to Action */}
          <section className="py-20 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              ¡ÚNETE A NOSOTROS!
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
              Súmate al esfuerzo por conseguir la libertad.
            </p>
          </section>

          {/* Actions Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {actions.map((action, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-16 h-16 ${action.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <action.icon className={`w-8 h-8 ${action.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {index + 1}. {action.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {action.description}
                  </p>
                  {index === 2 && (
                    <Button
                      className="mt-4"
                      onClick={() => window.location.href = 'mailto:voluntarios@findelaesclavitud.org'}
                    >
                      Escríbenos
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </section>

          {/* Bottom Message */}
          <section className="text-center py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Juntos vamos a cambiar el mundo, juntos vamos a prevenir y disminuir 
                las cifras de personas que por desconocimiento son engañadas
              </h2>
              <Button
                size="lg"
                className="mt-6"
                onClick={() => window.location.href = 'mailto:voluntarios@findelaesclavitud.org'}
              >
                Conviértete en Voluntario
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Voluntarios;
