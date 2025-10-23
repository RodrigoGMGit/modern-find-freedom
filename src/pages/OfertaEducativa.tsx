import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail } from "lucide-react";
import redesSociales from "@/assets/redes-sociales.jpg";
import prevencionInfantil from "@/assets/prevencion-infantil.jpg";
import capacitacionProfesionales from "@/assets/capacitacion-profesionales.jpg";
import escuelaPadres from "@/assets/escuela-padres.jpg";

const workshops = [
  {
    title: "Riesgos y beneficios de redes sociales",
    description: "Las redes sociales hoy son una de las principales formas de captura para la trata de personas, por lo que todos tenemos que estar informados sobre como los delincuentes las emplean para engañar y captar a sus víctimas. En nuestras conferencias les mostramos lo vulnerables que son cuando no se toman precauciones o se privatizan éstas.",
    image: redesSociales,
  },
  {
    title: "Prevención de abuso sexual infantil y trata de personas",
    description: "El abuso sexual infantil es uno de los delitos más encubiertos en la historia de la humanidad. Contamos con una conferencia para padres de familia, maestros y entrenadores, etc., y para todo aquel que esté interesado en prevenir sobre este problema, con el fin de proteger a los menores que lo rodeen.",
    image: prevencionInfantil,
  },
  {
    title: "Prevención de Trata de Personas",
    description: "Enfocado a adolescentes, jóvenes, adultos, profesionales, maestros, directivos. Todos y todas tienen que estar informados para detectar situaciones de riesgo y como es que los tratantes trabajan para enganchar a sus posibles víctimas. Estar informado puede salvar la vida de los sectores vulnerables de nuestra sociedad.",
    image: "https://findelaesclavitud.org/wp-content/uploads/2025/05/ryan-moreno-Lurw1nCIkLc-unsplash-1024x683.jpg",
  },
  {
    title: "Capacitación a profesionales",
    description: "Es muy importante que médicos, enfermeras, trabajadores sociales, maestros, entrenadores, directores, policías Etc. Puedan identificar posibles casos de trata de personas en sus escuelas, empresas, comercios etc. Por lo que ofrecemos la detección e identificación de posibles víctimas.",
    image: capacitacionProfesionales,
  },
  {
    title: "Escuela para Padres: Prevención de abuso sexual infantil",
    description: "El abuso sexual infantil es uno de los delitos más encubiertos en la historia de la humanidad. Contamos con una conferencia para padres de familia, maestros y entrenadores, etc., y para todo aquel que esté interesado en prevenir sobre este problema, con el fin de proteger a los menores que lo rodeen.",
    image: escuelaPadres,
  },
];

const faqs = [
  {
    question: "¿Cómo solicito un taller?",
    answer: "Envíanos un correo a capacitacion@findelaesclavitud.org para revisar agenda y calendario. El taller puede ser virtual o presencial.",
  },
  {
    question: "¿Cuántas personas tienen que asistir?",
    answer: "Mínimo 10 personas.",
  },
  {
    question: "¿Tiene algún costo?",
    answer: "Se solicita un donativo.",
  },
  {
    question: "¿Qué necesito?",
    answer: "Un espacio para que todos los asistentes estén cómodamente, sonido si es un auditorio, un proyector (preferentemente) y entusiasmo para convocar a tus invitados.",
  },
  {
    question: "¿A partir de qué edades?",
    answer: "Nosotros ajustamos el taller dependiendo a las personas que va dirigido, podemos iniciar la prevención a los 4 años.",
  },
];

const OfertaEducativa = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Hero Diplomado */}
        <section className="relative h-96 mb-20 overflow-hidden">
          <img
            src="https://findelaesclavitud.org/wp-content/uploads/2025/05/DIMPLMADO-2.jpg"
            alt="Diplomado"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center justify-center">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-xl px-12 py-6 font-bold shadow-glow"
              onClick={() => window.location.href = 'http://diplomado.findelaesclavitud.org/'}
            >
              CONOCE NUESTRO DIPLOMADO
            </Button>
          </div>
        </section>

        {/* Talleres Section */}
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            OFERTA EDUCATIVA: TALLERES
          </h2>

          <div className="space-y-16 max-w-6xl mx-auto">
            {workshops.map((workshop, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-card transition-shadow duration-300">
                <div className={`grid md:grid-cols-2 gap-6 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <img
                      src={workshop.image}
                      alt={workshop.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {workshop.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {workshop.description}
                    </p>
                    <Button
                      variant="default"
                      className="w-fit"
                      onClick={() => window.location.href = 'mailto:capacitacion@findelaesclavitud.org'}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      MÁS INFORMACIÓN
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <section className="mt-20 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
              PREGUNTAS FRECUENTES: TALLERES
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OfertaEducativa;
