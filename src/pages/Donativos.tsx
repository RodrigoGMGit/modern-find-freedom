import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, CreditCard, Heart, Users, Shield } from "lucide-react";
import donativosHero from "@/assets/donativos-hero.jpg";

const donationLevels = [
  {
    icon: Heart,
    title: "Socio Básico",
    amount: "$100 MXN",
    description: "Dona desde $100 pesos mensuales para contribuir a que niños y jóvenes en situaciones vulnerables reciban educación y aprendan medidas preventivas para protegerse en contra del abuso sexual infantil y la trata de personas.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Shield,
    title: "Beca a un niño",
    amount: "$500 MXN",
    description: "Con una donación recurrente de $500 pesos, garantizas que cada mes un niño más aprenda herramientas para enfrentar situaciones de peligro y sepa responder ante una posible amenaza.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
];

const Donativos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden mb-20">
          <img
            src={donativosHero}
            alt="Donativos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 flex items-center justify-center">
            <div className="text-center text-primary-foreground px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">DONATIVOS</h1>
              <p className="text-xl md:text-2xl">Tu apoyo marca la diferencia</p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-6xl">
          {/* Bank Account Section */}
          <section className="mb-20">
            <Card className="bg-muted border-none shadow-card">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  AGRADECEMOS TUS DONATIVOS EN LA CUENTA
                </h2>
                <div className="max-w-md mx-auto space-y-4 text-left">
                  <div className="bg-background p-6 rounded-lg">
                    <p className="text-lg font-bold text-foreground mb-4">FIN DE LA ESCLAVITUD A.C.</p>
                    <div className="space-y-2 text-muted-foreground">
                      <p><span className="font-semibold text-foreground">Banco:</span> Citibanamex</p>
                      <p><span className="font-semibold text-foreground">Sucursal:</span> 7007</p>
                      <p><span className="font-semibold text-foreground">Cuenta:</span> 5959646</p>
                      <p><span className="font-semibold text-foreground">CLABE:</span> 002320700759596461</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Online Donations Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                TAMBIÉN PUEDES HACER TUS DONATIVOS EN LÍNEA
              </h2>
              <p className="text-muted-foreground">
                Al hacer clic en cualquiera de los logotipos será transferido a un sitio web externo 
                donde será procesado de forma segura su donativo
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <Button
                size="lg"
                variant="outline"
                className="h-20 px-12"
                onClick={() => window.open('https://donorbox.org/donativosfde', '_blank')}
              >
                <CreditCard className="w-8 h-8 mr-3" />
                <span className="text-lg font-bold">Donorbox</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-20 px-12"
                onClick={() => window.open('https://www.paypal.com/donate/?hosted_button_id=FJCEEBKHQF3WN', '_blank')}
              >
                <CreditCard className="w-8 h-8 mr-3" />
                <span className="text-lg font-bold">PayPal</span>
              </Button>
            </div>

            <p className="text-center text-xl font-semibold text-foreground">
              CON UN COMPROMISO PEQUEÑO, GENERAS UN GRAN CAMBIO
            </p>
          </section>

          {/* Donation Levels */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                ¡TÚ PUEDES HACER ALGO!
              </h2>
              <p className="text-2xl text-muted-foreground font-medium">
                Sé un socio de Fin de la Esclavitud
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {donationLevels.map((level, index) => (
                <Card key={index} className="hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 ${level.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <level.icon className={`w-10 h-10 ${level.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {level.title}
                    </h3>
                    <p className="text-3xl font-bold text-primary mb-4">
                      {level.amount}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {level.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-hero border-none shadow-card">
              <CardContent className="p-12 text-center text-primary-foreground">
                <h3 className="text-3xl font-bold mb-4">Con tu ayuda, podemos abolir la trata</h3>
                <p className="text-xl mb-6">
                  Usamos tu contribución para cubrir traslados, preparación del material de investigación, 
                  mantenimiento del espacio para que voluntarios comprometidos puedan hacer su labor.
                </p>
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => window.location.href = 'mailto:donativos@findelaesclavitud.org'}
                >
                  ¡ÚNETE!
                </Button>
                <p className="mt-6 text-sm">
                  Cualquier duda o comentario: donativos@findelaesclavitud.org
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Donativos;
