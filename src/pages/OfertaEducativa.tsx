import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, GraduationCap, Users, BookOpen, CheckCircle, ArrowRight, ExternalLink } from "lucide-react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { cardColors, iconColors, checkmarkColors } from "@/utils/cardColors";
import redesSociales from "@/assets/redes-sociales.jpg";
import prevencionInfantil from "@/assets/prevencion-infantil.jpg";
import capacitacionProfesionales from "@/assets/capacitacion-profesionales.jpg";
import escuelaPadres from "@/assets/escuela-padres.jpg";

const workshops = [
  {
    title: "Riesgos y beneficios de redes sociales",
    description: "Las redes sociales hoy son una de las principales formas de captura para la trata de personas, por lo que todos tenemos que estar informados sobre cómo los delincuentes las emplean para engañar y captar a sus víctimas. En nuestras conferencias les mostramos lo vulnerables que son cuando no se toman precauciones o se privatizan éstas.",
    image: redesSociales,
    duration: "2 horas",
    audience: "Adolescentes y adultos",
    highlights: ["Identificación de riesgos", "Privacidad digital", "Casos reales"],
  },
  {
    title: "Prevención de abuso sexual infantil y trata de personas",
    description: "El abuso sexual infantil es uno de los delitos más encubiertos en la historia de la humanidad. Contamos con una conferencia para padres de familia, maestros y entrenadores, etc., y para todo aquel que esté interesado en prevenir sobre este problema, con el fin de proteger a los menores que lo rodeen.",
    image: prevencionInfantil,
    duration: "3 horas",
    audience: "Padres y educadores",
    highlights: ["Señales de alerta", "Prevención efectiva", "Recursos de apoyo"],
  },
  {
    title: "Prevención de Trata de Personas",
    description: "Enfocado a adolescentes, jóvenes, adultos, profesionales, maestros, directivos. Todos y todas tienen que estar informados para detectar situaciones de riesgo y cómo es que los tratantes trabajan para enganchar a sus posibles víctimas. Estar informado puede salvar la vida de los sectores vulnerables de nuestra sociedad.",
    image: "https://findelaesclavitud.org/wp-content/uploads/2025/05/ryan-moreno-Lurw1nCIkLc-unsplash-1024x683.jpg",
    duration: "2.5 horas",
    audience: "Público general",
    highlights: ["Modalidades de trata", "Factores de riesgo", "Cómo actuar"],
  },
  {
    title: "Capacitación a profesionales",
    description: "Es muy importante que médicos, enfermeras, trabajadores sociales, maestros, entrenadores, directores, policías Etc. Puedan identificar posibles casos de trata de personas en sus escuelas, empresas, comercios etc. Por lo que ofrecemos la detección e identificación de posibles víctimas.",
    image: capacitacionProfesionales,
    duration: "4 horas",
    audience: "Profesionales",
    highlights: ["Detección de casos", "Protocolo de atención", "Marco legal"],
  },
  {
    title: "Escuela para Padres: Prevención de abuso sexual infantil",
    description: "El abuso sexual infantil es uno de los delitos más encubiertos en la historia de la humanidad. Contamos con una conferencia para padres de familia, maestros y entrenadores, etc., y para todo aquel que esté interesado en prevenir sobre este problema, con el fin de proteger a los menores que lo rodeen.",
    image: escuelaPadres,
    duration: "3 horas",
    audience: "Padres de familia",
    highlights: ["Comunicación con hijos", "Educación sexual", "Autocuidado infantil"],
  },
];

const faqs = [
  {
    question: "¿Cómo solicito un taller?",
    answer: "Envíanos un correo a capacitacion@findelaesclavitud.org para revisar agenda y calendario. El taller puede ser virtual o presencial.",
  },
  {
    question: "¿Cuántas personas tienen que asistir?",
    answer: "Mínimo 10 personas para garantizar una experiencia de aprendizaje óptima y participativa.",
  },
  {
    question: "¿Tiene algún costo?",
    answer: "Se solicita un donativo que ayuda a sostener nuestros programas y llevar esta información a más personas.",
  },
  {
    question: "¿Qué necesito?",
    answer: "Un espacio para que todos los asistentes estén cómodamente, sonido si es un auditorio, un proyector (preferentemente) y entusiasmo para convocar a tus invitados.",
  },
  {
    question: "¿A partir de qué edades?",
    answer: "Nosotros ajustamos el taller dependiendo de las personas a quien va dirigido, podemos iniciar la prevención a los 4 años con contenido adaptado.",
  },
  {
    question: "¿Qué incluye el taller?",
    answer: "Material didáctico, presentación multimedia, sesión de preguntas y respuestas, y recursos descargables para los participantes.",
  },
];

const OfertaEducativa = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-mint-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-brand-olive-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <main className="relative pt-24 sm:pt-28 pb-16 sm:pb-20">
        {/* Hero Diplomado - Solo imagen */}
        <section className="relative mb-12 sm:mb-16 lg:mb-20 mx-4 sm:mx-6 lg:mx-12">
          <a 
            href="http://diplomado.findelaesclavitud.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-smooth group"
          >
            <img
              src="https://findelaesclavitud.org/wp-content/uploads/2025/05/DIMPLMADO-2.jpg"
              alt="Diplomado en Prevención de Trata de Personas"
              className="w-full h-auto object-cover group-hover:scale-105 transition-smooth"
            />
          </a>
        </section>

        <div className="container mx-auto px-4 sm:px-6">
          {/* Header de talleres */}
          <div className="text-center mb-10 sm:mb-16 max-w-4xl mx-auto">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="p-3 sm:p-4 bg-gradient-to-br from-brand-olive-500 to-brand-teal-500 rounded-full shadow-soft">
                <BookOpen className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
              </div>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-brand-ink-900 mb-3 sm:mb-4 leading-heading-1">
              Oferta Educativa: Talleres
            </h1>
            <p className="font-body text-sm sm:text-base md:text-lg text-brand-olive-500 leading-body">
              Capacitación especializada para prevenir y combatir la trata de personas
            </p>
          </div>

          {/* Talleres con diseño mejorado */}
          <div className="space-y-10 sm:space-y-12 lg:space-y-16 max-w-7xl mx-auto mb-16 sm:mb-20">
            {workshops.map((workshop, index) => {
              const colorIndex = index % 3;
              const cardColor = cardColors[colorIndex];
              const iconColor = iconColors[colorIndex];
              const checkColor = checkmarkColors[colorIndex];
              const isEven = index % 2 === 0;

              return (
                <Card 
                  key={index} 
                  className={`${cardColor} border overflow-hidden hover:shadow-card transition-smooth group`}
                >
                  <div className={`grid md:grid-cols-2 gap-0`}>
                    {/* Imagen */}
                    <div className={`relative overflow-hidden ${!isEven ? 'md:order-2' : ''}`}>
                      <img
                        src={workshop.image}
                        alt={workshop.title}
                        className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-smooth"
                      />
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        <Badge className={`${iconColor} border-0 shadow-soft`}>
                          {workshop.duration}
                        </Badge>
                        <Badge className="bg-white/90 text-brand-ink-900 border-0 shadow-soft">
                          {workshop.audience}
                        </Badge>
                      </div>
                    </div>

                    {/* Contenido */}
                    <CardContent className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-center ${!isEven ? 'md:order-1' : ''}`}>
                      <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-brand-ink-900 mb-3 sm:mb-4 leading-heading-2">
                        {workshop.title}
                      </h3>
                      
                      <p className="font-body text-sm sm:text-base text-brand-ink-800 leading-relaxed mb-4 sm:mb-6">
                        {workshop.description}
                      </p>

                      {/* Lista de highlights */}
                      <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                        {workshop.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center text-xs sm:text-sm text-brand-ink-800">
                            <CheckCircle className={`w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 ${checkColor}`} />
                            <span className="font-body">{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        variant="primary-brand"
                        className="w-full sm:w-auto shadow-soft group/btn"
                        onClick={() => window.location.href = 'mailto:capacitacion@findelaesclavitud.org'}
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Solicitar Información
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-smooth" />
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* FAQ Section mejorada */}
          <section className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="p-3 bg-gradient-to-br from-brand-mint-200 to-brand-teal-500 rounded-full shadow-soft">
                  <Users className="h-8 w-8 sm:h-10 sm:w-10 text-brand-ink-900" />
                </div>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-brand-ink-900 mb-3 leading-heading-2">
                Preguntas Frecuentes
              </h2>
              <p className="font-body text-sm sm:text-base text-brand-olive-500">
                Resuelve tus dudas sobre nuestros talleres
              </p>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-soft border border-brand-mint-200/30 p-4 sm:p-6 lg:p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-brand-mint-200/30">
                    <AccordionTrigger className="font-heading text-base sm:text-lg font-semibold text-left text-brand-ink-900 hover:text-brand-teal-500 transition-smooth">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-sm sm:text-base text-brand-ink-800 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* CTA Final */}
          <div className="mt-16 sm:mt-20 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-brand-teal-500 via-brand-ink-800 to-brand-olive-500 rounded-2xl p-8 sm:p-12 text-center shadow-card text-white">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 leading-heading-2">
                ¿Listo para hacer la diferencia?
              </h2>
              <p className="font-body text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 leading-body">
                Solicita un taller para tu organización, escuela o comunidad
              </p>
              <Button 
                variant="primary-brand"
                size="lg"
                className="bg-white text-brand-ink-900 hover:bg-brand-mint-200 shadow-cta group"
                onClick={() => window.location.href = 'mailto:capacitacion@findelaesclavitud.org'}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contactar ahora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OfertaEducativa;
