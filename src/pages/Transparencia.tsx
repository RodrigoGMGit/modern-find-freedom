/**
 * Información de transparencia e informes.
 *
 * @route `/transparencia`
 * @see docs/rutas-y-paginas.md
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Mail, Shield, Eye, CheckCircle, TrendingUp, Users, DollarSign } from "lucide-react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { cardColors, iconColors, numberColors } from "@/utils/cardColors";
import transparenciaHero from "@/assets/transparencia-hero.jpg";

const reports = [
  { year: "2023", link: "https://bit.ly/3V0Vu7d", pages: 45, status: "Nuevo" },
  { year: "2022", link: "http://bit.ly/40rHun8", pages: 42, status: null },
  { year: "2021", link: "http://bit.ly/3ISbgM7", pages: 38, status: null },
  { year: "2020", link: "https://bit.ly/3H8LWju", pages: 40, status: null },
  { year: "2017", link: "http://bit.ly/3HbAljW", pages: 35, status: null },
  { year: "2016", link: "https://bit.ly/3IWnFyr", pages: 32, status: null },
  { year: "2015", link: "https://bit.ly/3w53hUj", pages: 30, status: null },
];

const transparencyPrinciples = [
  {
    icon: Eye,
    title: "Rendición de Cuentas",
    description: "Publicamos nuestros informes anuales de actividades y estados financieros",
  },
  {
    icon: CheckCircle,
    title: "Auditorías Externas",
    description: "Contamos con auditorías independientes que validan nuestra gestión",
  },
  {
    icon: Shield,
    title: "Cumplimiento Legal",
    description: "Operamos bajo estricto apego a las leyes y regulaciones aplicables",
  },
];

const impactNumbers = [
  { number: "15,000+", label: "Personas capacitadas", icon: Users },
  { number: "500+", label: "Talleres impartidos", icon: TrendingUp },
  { number: "98%", label: "Fondos destinados a programas", icon: DollarSign },
];

const Transparencia = () => {
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
        <section className="relative h-64 sm:h-80 md:h-96 mb-12 sm:mb-16 overflow-hidden rounded-2xl mx-4 sm:mx-6 lg:mx-12 shadow-card">
          <img
            src={transparenciaHero}
            alt="Transparencia y Rendición de Cuentas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-ink-900/90 via-brand-teal-500/80 to-brand-ink-800/90 flex items-center justify-center p-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-brand-mint-200" />
                </div>
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-heading-1">
                Transparencia
              </h1>
              <p className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-brand-mint-200/90 leading-body">
                Nuestro compromiso con la rendición de cuentas
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          {/* Principios de Transparencia */}
          <section className="mb-12 sm:mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {transparencyPrinciples.map((principle, index) => {
                const colorIndex = index % 3;
                const cardColor = cardColors[colorIndex];
                const iconColor = iconColors[colorIndex];

                return (
                  <Card key={index} className={`${cardColor} border hover:shadow-card transition-smooth text-center group`}>
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex justify-center mb-4">
                        <div className={`p-3 sm:p-4 ${iconColor} rounded-full shadow-soft group-hover:scale-110 transition-smooth`}>
                          <principle.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                        </div>
                      </div>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-brand-ink-900 mb-2 sm:mb-3">
                        {principle.title}
                      </h3>
                      <p className="font-body text-sm sm:text-base text-brand-ink-800 leading-relaxed">
                        {principle.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Números de Impacto */}
          <section className="mb-12 sm:mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {impactNumbers.map((item, index) => {
                const colors = numberColors[index % 3];

                return (
                  <div key={index} className="text-center group">
                    <div className={`${colors.bg} rounded-full p-4 sm:p-6 w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth`}>
                      <item.icon className={`h-8 w-8 sm:h-10 sm:w-10 ${colors.text}`} />
                    </div>
                    <div className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold ${colors.text} mb-2`}>
                      {item.number}
                    </div>
                    <p className="font-body text-sm sm:text-base text-brand-olive-500">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Reports Section mejorada */}
          <section className="mb-12 sm:mb-16">
            <div className="text-center mb-8 sm:mb-12">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="p-3 bg-gradient-to-br from-brand-teal-500 to-brand-ink-800 rounded-full shadow-soft">
                  <FileText className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-brand-ink-900 mb-3 sm:mb-4 leading-heading-2">
                Reportes de Actividades
              </h2>
              <p className="font-body text-sm sm:text-base md:text-lg text-brand-olive-500 leading-body">
                Consulta nuestros informes anuales de actividades
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {reports.map((report, index) => {
                const colorIndex = index % 3;
                const cardColor = cardColors[colorIndex];
                const iconColor = iconColors[colorIndex];

                return (
                  <Card 
                    key={report.year} 
                    className={`${cardColor} border hover:shadow-card transition-smooth hover:scale-105 group`}
                  >
                    <CardContent className="p-5 sm:p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 sm:w-14 sm:h-14 ${iconColor} rounded-full flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth`}>
                            <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                          </div>
                          <div>
                            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-brand-ink-900">
                              {report.year}
                            </h3>
                            <p className="font-body text-xs sm:text-sm text-brand-olive-500">
                              {report.pages} páginas
                            </p>
                          </div>
                        </div>
                        {report.status && (
                          <Badge className="bg-brand-teal-500 text-white border-0 shadow-soft">
                            {report.status}
                          </Badge>
                        )}
                      </div>
                      <Button
                        variant="primary-brand"
                        className="w-full shadow-soft group/btn"
                        onClick={() => window.open(report.link, '_blank')}
                      >
                        <Download className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                        Descargar PDF
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Financial Statements Section mejorada */}
          <section>
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
                      <Mail className="w-10 h-10 sm:w-12 sm:h-12" />
                    </div>
                  </div>
                  
                  <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 leading-heading-2">
                    Estados Financieros
                  </h2>
                  
                  <p className="font-body text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 leading-body">
                    Para solicitar información detallada sobre nuestros estados financieros auditados, 
                    por favor contáctanos directamente. Respondemos todas las solicitudes en un plazo de 48 horas.
                  </p>

                  {/* Lista de beneficios */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-8 text-left">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-mint-200 flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm sm:text-base text-white/90">
                        Auditorías externas anuales
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-mint-200 flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm sm:text-base text-white/90">
                        Desglose detallado de gastos
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-mint-200 flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm sm:text-base text-white/90">
                        Informes de donativos recibidos
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-mint-200 flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm sm:text-base text-white/90">
                        Certificación de uso de recursos
                      </span>
                    </div>
                  </div>
                  
                  <Button
                    variant="primary-brand"
                    size="lg"
                    className="bg-white text-brand-ink-900 hover:bg-brand-mint-200 shadow-cta group"
                    onClick={() => window.location.href = 'mailto:contacto@findelaesclavitud.org'}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Solicitar Estados Financieros
                  </Button>
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

export default Transparencia;
