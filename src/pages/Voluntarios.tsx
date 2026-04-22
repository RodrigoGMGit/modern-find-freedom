/**
 * Cómo colaborar como voluntario y vías de contacto.
 *
 * @route `/voluntarios`
 * @see docs/rutas-y-paginas.md
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, AlertTriangle, GraduationCap, ShoppingCart, HandHeart, Users, ArrowRight, Mail, Phone } from "lucide-react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { cardColors, iconColors, numberColors } from "@/utils/cardColors";
import voluntariosHero from "@/assets/voluntarios-hero.jpg";

const actions = [
  {
    icon: MessageCircle,
    title: "Toma acción",
    description: "Habla sobre este tema en tu comunidad, escuela, familia y amigos, comparte el contenido de nuestras redes sociales y genera conciencia.",
    steps: ["Comparte en redes sociales", "Habla con tu comunidad", "Organiza conversatorios"],
  },
  {
    icon: AlertTriangle,
    title: "Involúcrate",
    description: "Denuncia posibles casos de explotación en el 80 05 53 30 00. Línea nacional de denuncia contra la trata de personas.",
    steps: ["Identifica señales de alerta", "Reporta de forma segura", "Protege a las víctimas"],
  },
  {
    icon: GraduationCap,
    title: "Capacítate",
    description: "Para combatir este problema necesitamos a personas como tú. Ingresa en nuestro Diplomado en línea y obtendrás todas las herramientas para que juntos luchemos por un mundo sin esclavitud.",
    steps: ["Inscríbete al diplomado", "Certifícate como abolicionista", "Multiplica el conocimiento"],
  },
  {
    icon: ShoppingCart,
    title: "Compra con causa",
    description: "¡Compra con causa y trae libertad con tu compra! Con la compra de nuestros productos puedes apoyar la labor que hacemos como organización y ayudarnos a llegar a aquellos grupos más vulnerables.",
    steps: ["Explora nuestra tienda", "Contribuye con tu compra", "Genera impacto social"],
  },
];

const volunteerBenefits = [
  {
    title: "Capacitación continua",
    description: "Acceso a talleres y diplomados sin costo",
  },
  {
    title: "Red de apoyo",
    description: "Conecta con otros abolicionistas comprometidos",
  },
  {
    title: "Certificación",
    description: "Reconocimiento oficial por tu labor voluntaria",
  },
];

const Voluntarios = () => {
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
        {/* Hero Section mejorado */}
        <section className="relative h-80 sm:h-96 md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl mx-4 sm:mx-6 lg:mx-12 mb-12 sm:mb-16 shadow-card">
          <img
            src={voluntariosHero}
            alt="Voluntarios unidos por la libertad"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-ink-900/90 via-brand-teal-500/80 to-brand-ink-800/90 flex items-center justify-center p-4">
            <div className="text-center text-white max-w-4xl mx-auto">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <HandHeart className="h-10 w-10 sm:h-12 sm:w-12 text-brand-mint-200" />
                </div>
              </div>
              
              <p className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-heading-2 px-4">
                "No hay nada más fuerte en el mundo que el corazón de un voluntario"
              </p>
              
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <div className="h-px w-12 sm:w-16 bg-brand-mint-200/50"></div>
                <p className="font-body text-base sm:text-lg md:text-xl text-brand-mint-200/90 italic">
                  James H. Doolittle
                </p>
                <div className="h-px w-12 sm:w-16 bg-brand-mint-200/50"></div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          {/* Call to Action header */}
          <section className="text-center mb-10 sm:mb-16">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="p-3 bg-gradient-to-br from-brand-teal-500 to-brand-ink-800 rounded-full shadow-soft">
                <Users className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-ink-900 mb-3 sm:mb-4 leading-heading-1">
              ¡Únete a Nosotros!
            </h1>
            
            <p className="font-body text-lg sm:text-xl md:text-2xl lg:text-3xl text-brand-olive-500 font-semibold leading-heading-3">
              Súmate al esfuerzo por conseguir la libertad
            </p>
          </section>

          {/* Actions Grid mejorado */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {actions.map((action, index) => {
              const colorIndex = index % 3;
              const cardColor = cardColors[colorIndex];
              const iconColor = iconColors[colorIndex];
              const colors = numberColors[index % 3];

              return (
                <Card 
                  key={index} 
                  className={`${cardColor} border hover:shadow-card transition-smooth hover:scale-105 group`}
                >
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start gap-4 mb-4 sm:mb-6">
                      {/* Número circular */}
                      <div className={`${colors.bg} rounded-full p-3 sm:p-4 flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth flex-shrink-0`}>
                        <span className={`font-heading text-xl sm:text-2xl font-bold ${colors.text}`}>
                          {index + 1}
                        </span>
                      </div>
                      
                      {/* Icono */}
                      <div className={`p-3 sm:p-4 ${iconColor} rounded-full shadow-soft group-hover:scale-110 transition-smooth flex-shrink-0`}>
                        <action.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                      </div>
                    </div>

                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-900 mb-3 leading-heading-3">
                      {action.title}
                    </h3>
                    
                    <p className="font-body text-sm sm:text-base text-brand-ink-800 leading-relaxed mb-4">
                      {action.description}
                    </p>

                    {/* Pasos de acción */}
                    <ul className="space-y-2 mb-4 sm:mb-6">
                      {action.steps.map((step, i) => (
                        <li key={i} className="flex items-start text-xs sm:text-sm text-brand-ink-800">
                          <span className={`w-1.5 h-1.5 rounded-full ${colors.text.replace('text-', 'bg-')} mt-1.5 mr-2 flex-shrink-0`}></span>
                          <span className="font-body">{step}</span>
                        </li>
                      ))}
                    </ul>

                    {index === 2 && (
                      <Button
                        variant="primary-brand"
                        className="w-full shadow-soft group/btn"
                        onClick={() => window.location.href = 'mailto:voluntarios@findelaesclavitud.org'}
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Escríbenos
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-smooth" />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </section>

          {/* Beneficios de ser voluntario */}
          <section className="mb-12 sm:mb-16">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-brand-ink-900 mb-3 leading-heading-2">
                Beneficios de ser Voluntario
              </h2>
              <p className="font-body text-sm sm:text-base md:text-lg text-brand-olive-500">
                Forma parte de un movimiento abolicionista global
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {volunteerBenefits.map((benefit, index) => {
                const colorIndex = index % 3;
                const cardColor = cardColors[colorIndex];

                return (
                  <Card key={index} className={`${cardColor} border hover:shadow-card transition-smooth text-center group`}>
                    <CardContent className="p-6 sm:p-8">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                        <HandHeart className="h-6 w-6 sm:h-8 sm:w-8 text-brand-teal-500" />
                      </div>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-brand-ink-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="font-body text-sm sm:text-base text-brand-ink-800">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* CTA Final mejorado */}
          <section className="max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-brand-teal-500 via-brand-ink-800 to-brand-olive-500 border-0 shadow-card text-white overflow-hidden relative">
              {/* Elementos decorativos */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-brand-mint-200/10 rounded-full blur-3xl"></div>
              </div>

              <CardContent className="relative p-8 sm:p-12 lg:p-16 text-center">
                <div className="max-w-3xl mx-auto">
                  <div className="flex justify-center mb-6 sm:mb-8">
                    <div className="p-4 sm:p-5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-cta">
                      <HandHeart className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                    </div>
                  </div>

                  <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-heading-1">
                    Juntos vamos a cambiar el mundo
                  </h2>
                  
                  <p className="font-body text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 leading-body">
                    Juntos vamos a prevenir y disminuir las cifras de personas que por desconocimiento son engañadas. 
                    Tu compromiso puede salvar vidas.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                      variant="primary-brand"
                      size="lg"
                      className="bg-white text-brand-ink-900 hover:bg-brand-mint-200 shadow-cta group w-full sm:w-auto"
                      onClick={() => window.location.href = 'mailto:voluntarios@findelaesclavitud.org'}
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Conviértete en Voluntario
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                    </Button>

                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 w-full sm:w-auto"
                      onClick={() => window.location.href = 'tel:8005533000'}
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Línea de Denuncia
                    </Button>
                  </div>

                  <p className="font-body text-xs sm:text-sm text-white/70 mt-6">
                    📞 80 05 53 30 00 • Línea nacional contra la trata de personas
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Voluntarios;
