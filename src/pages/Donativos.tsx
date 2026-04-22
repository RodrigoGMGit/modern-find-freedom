/**
 * Opciones de donación y mensajes de apoyo a la misión.
 *
 * @route `/donativos`
 * @see docs/rutas-y-paginas.md
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, CreditCard, Heart, Users, Shield, CheckCircle, ExternalLink, Mail, ArrowRight, Sparkles } from "lucide-react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { cardColors, iconColors, numberColors } from "@/utils/cardColors";
import donativosHero from "@/assets/donativos-hero.jpg";

const donationLevels = [
  {
    icon: Heart,
    title: "Socio Básico",
    amount: "$100",
    period: "mensuales",
    description: "Dona desde $100 pesos mensuales para contribuir a que niños y jóvenes en situaciones vulnerables reciban educación y aprendan medidas preventivas para protegerse en contra del abuso sexual infantil y la trata de personas.",
    benefits: ["Boletín mensual exclusivo", "Acceso a eventos virtuales", "Certificado de donante"],
  },
  {
    icon: Shield,
    title: "Beca a un Niño",
    amount: "$500",
    period: "mensuales",
    description: "Con una donación recurrente de $500 pesos, garantizas que cada mes un niño más aprenda herramientas para enfrentar situaciones de peligro y sepa responder ante una posible amenaza.",
    benefits: ["Todo lo del Socio Básico", "Reporte trimestral de impacto", "Reconocimiento en redes sociales"],
  },
];

const paymentMethods = [
  {
    name: "Donorbox",
    icon: CreditCard,
    description: "Tarjeta de crédito/débito",
    url: "https://donorbox.org/donativosfde",
    recommended: true,
  },
  {
    name: "PayPal",
    icon: CreditCard,
    description: "Pago seguro internacional",
    url: "https://www.paypal.com/donate/?hosted_button_id=FJCEEBKHQF3WN",
    recommended: false,
  },
];

const impactStats = [
  { number: "10", label: "Niños capacitados", description: "por cada $500 pesos" },
  { number: "50+", label: "Talleres anuales", description: "en escuelas y comunidades" },
  { number: "98%", label: "A programas", description: "de cada peso donado" },
];

const Donativos = () => {
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
        <section className="relative h-64 sm:h-80 md:h-96 overflow-hidden rounded-2xl mx-4 sm:mx-6 lg:mx-12 mb-12 sm:mb-16 shadow-card">
          <img
            src={donativosHero}
            alt="Donativos - Tu apoyo marca la diferencia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-ink-900/90 via-brand-teal-500/80 to-brand-ink-800/90 flex items-center justify-center p-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-pulse">
                  <Heart className="h-10 w-10 sm:h-12 sm:w-12 text-brand-mint-200 fill-brand-mint-200" />
                </div>
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-heading-1">
                Donativos
              </h1>
              <p className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-brand-mint-200/90 leading-body">
                Tu apoyo marca la diferencia
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          {/* Estadísticas de Impacto */}
          <section className="mb-12 sm:mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {impactStats.map((stat, index) => {
                const colors = numberColors[index % 3];

                return (
                  <div key={index} className="text-center group">
                    <div className={`${colors.bg} rounded-full p-4 sm:p-6 w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth`}>
                      <Sparkles className={`h-8 w-8 sm:h-10 sm:w-10 ${colors.text}`} />
                    </div>
                    <div className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold ${colors.text} mb-2`}>
                      {stat.number}
                    </div>
                    <p className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 mb-1">
                      {stat.label}
                    </p>
                    <p className="font-body text-xs sm:text-sm text-brand-olive-500">
                      {stat.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bank Account Section mejorado */}
          <section className="mb-12 sm:mb-16">
            <Card className={`${cardColors[0]} border hover:shadow-card transition-smooth`}>
              <CardContent className="p-8 sm:p-12 text-center">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 ${iconColors[0]} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-soft`}>
                  <Building2 className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-ink-900 mb-6 sm:mb-8 leading-heading-2">
                  Transferencia Bancaria
                </h2>
                <div className="max-w-md mx-auto">
                  <div className="bg-white rounded-xl shadow-soft p-6 sm:p-8 border border-brand-mint-200/30">
                    <p className="font-heading text-lg sm:text-xl font-bold text-brand-ink-900 mb-4 sm:mb-6">
                      FIN DE LA ESCLAVITUD A.C.
                    </p>
                    <div className="space-y-3 sm:space-y-4 text-left">
                      <div className="flex justify-between items-center pb-3 border-b border-brand-mint-200/30">
                        <span className="font-body text-sm sm:text-base text-brand-olive-500">Banco:</span>
                        <span className="font-heading font-semibold text-sm sm:text-base text-brand-ink-900">Citibanamex</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-brand-mint-200/30">
                        <span className="font-body text-sm sm:text-base text-brand-olive-500">Sucursal:</span>
                        <span className="font-heading font-semibold text-sm sm:text-base text-brand-ink-900">7007</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-brand-mint-200/30">
                        <span className="font-body text-sm sm:text-base text-brand-olive-500">Cuenta:</span>
                        <span className="font-heading font-semibold text-sm sm:text-base text-brand-ink-900">5959646</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-body text-sm sm:text-base text-brand-olive-500">CLABE:</span>
                        <span className="font-heading font-semibold text-sm sm:text-base text-brand-teal-500">002320700759596461</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Online Donations Section mejorado */}
          <section className="mb-12 sm:mb-16">
            <div className="text-center mb-8 sm:mb-12">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="p-3 bg-gradient-to-br from-brand-olive-500 to-brand-teal-500 rounded-full shadow-soft">
                  <CreditCard className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-brand-ink-900 mb-3 sm:mb-4 leading-heading-2">
                Donaciones en Línea
              </h2>
              <p className="font-body text-sm sm:text-base text-brand-olive-500 max-w-2xl mx-auto leading-body">
                Elige el método de pago que prefieras. Todas las transacciones son 100% seguras
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto mb-8">
              {paymentMethods.map((method, index) => {
                const colorIndex = index % 3;
                const cardColor = cardColors[colorIndex];

                return (
                  <Card key={index} className={`${cardColor} border hover:shadow-card transition-smooth group relative overflow-hidden`}>
                    {method.recommended && (
                      <Badge className="absolute top-3 right-3 bg-brand-teal-500 text-white border-0 shadow-soft">
                        Recomendado
                      </Badge>
                    )}
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 ${iconColors[colorIndex]} rounded-full shadow-soft`}>
                          <method.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                        </div>
                        <div className="flex-1 text-left">
                          <h3 className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-900">
                            {method.name}
                          </h3>
                          <p className="font-body text-xs sm:text-sm text-brand-olive-500">
                            {method.description}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="primary-brand"
                        className="w-full shadow-soft group/btn"
                        onClick={() => window.open(method.url, '_blank')}
                      >
                        Donar ahora
                        <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-smooth" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <p className="text-center font-heading text-lg sm:text-xl font-semibold text-brand-ink-900">
              Con un compromiso pequeño, generas un gran cambio
            </p>
          </section>

          {/* Donation Levels mejorado */}
          <section className="mb-12 sm:mb-16">
            <div className="text-center mb-8 sm:mb-12">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="p-3 bg-gradient-to-br from-brand-mint-200 to-brand-teal-500 rounded-full shadow-soft">
                  <Users className="h-8 w-8 sm:h-10 sm:w-10 text-brand-ink-900" />
                </div>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-brand-ink-900 mb-3 sm:mb-4 leading-heading-2">
                ¡Tú Puedes Hacer Algo!
              </h2>
              <p className="font-body text-lg sm:text-xl md:text-2xl text-brand-olive-500 font-semibold">
                Sé un socio de Fin de la Esclavitud
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
              {donationLevels.map((level, index) => {
                const colorIndex = index % 3;
                const cardColor = cardColors[colorIndex];
                const iconColor = iconColors[colorIndex];

                return (
                  <Card key={index} className={`${cardColor} border hover:shadow-card transition-smooth hover:scale-105 group`}>
                    <CardContent className="p-6 sm:p-8 text-center">
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 ${iconColor} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-soft group-hover:scale-110 transition-smooth`}>
                        <level.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                      </div>
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-900 mb-2">
                        {level.title}
                      </h3>
                      <div className="mb-4">
                        <span className="font-heading text-3xl sm:text-4xl font-bold text-brand-teal-500">
                          {level.amount}
                        </span>
                        <span className="font-body text-sm sm:text-base text-brand-olive-500 ml-2">
                          {level.period}
                        </span>
                      </div>
                      <p className="font-body text-sm sm:text-base text-brand-ink-800 leading-relaxed mb-6">
                        {level.description}
                      </p>
                      
                      {/* Beneficios */}
                      <div className="bg-white/50 rounded-lg p-4 mb-6">
                        <p className="font-heading text-xs sm:text-sm font-semibold text-brand-ink-900 mb-3 uppercase">
                          Beneficios:
                        </p>
                        <ul className="space-y-2">
                          {level.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start text-xs sm:text-sm text-brand-ink-800">
                              <CheckCircle className="w-4 h-4 text-brand-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="font-body text-left">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* CTA Final con gradiente */}
            <Card className="bg-gradient-to-br from-brand-teal-500 via-brand-ink-800 to-brand-olive-500 border-0 shadow-card text-white overflow-hidden relative">
              {/* Elementos decorativos */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-brand-mint-200/10 rounded-full blur-3xl"></div>
              </div>

              <CardContent className="relative p-8 sm:p-12 lg:p-16 text-center">
                <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-heading-2">
                  Con tu ayuda, podemos abolir la trata
                </h3>
                <p className="font-body text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 leading-body max-w-3xl mx-auto">
                  Usamos tu contribución para cubrir traslados, preparación del material de investigación, 
                  mantenimiento del espacio para que voluntarios comprometidos puedan hacer su labor.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="primary-brand"
                    size="lg"
                    className="bg-white text-brand-ink-900 hover:bg-brand-mint-200 shadow-cta group"
                    onClick={() => window.location.href = 'mailto:donativos@findelaesclavitud.org'}
                  >
                    ¡Únete Ahora!
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
                    onClick={() => window.location.href = 'mailto:donativos@findelaesclavitud.org'}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Contactar
                  </Button>
                </div>
                <p className="font-body text-xs sm:text-sm text-white/70 mt-6 sm:mt-8">
                  📧 donativos@findelaesclavitud.org
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
