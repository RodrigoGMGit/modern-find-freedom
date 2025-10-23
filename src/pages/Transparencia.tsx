import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Mail } from "lucide-react";
import transparenciaHero from "@/assets/transparencia-hero.jpg";

const reports = [
  { year: "2023", link: "https://bit.ly/3V0Vu7d" },
  { year: "2022", link: "http://bit.ly/40rHun8" },
  { year: "2021", link: "http://bit.ly/3ISbgM7" },
  { year: "2020", link: "https://bit.ly/3H8LWju" },
  { year: "2017", link: "http://bit.ly/3HbAljW" },
  { year: "2016", link: "https://bit.ly/3IWnFyr" },
  { year: "2015", link: "https://bit.ly/3w53hUj" },
];

const Transparencia = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative h-96 mb-20 overflow-hidden">
          <img
            src={transparenciaHero}
            alt="Transparencia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 flex items-center justify-center">
            <div className="text-center text-primary-foreground">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">TRANSPARENCIA</h1>
              <p className="text-xl md:text-2xl">Nuestro compromiso con la rendición de cuentas</p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-6xl">
          {/* Reports Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Reportes de Actividades
              </h2>
              <p className="text-muted-foreground text-lg">
                Consulta nuestros informes anuales de actividades
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reports.map((report) => (
                <Card key={report.year} className="hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <FileText className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{report.year}</h3>
                          <p className="text-sm text-muted-foreground">Reporte anual</p>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="w-full"
                      onClick={() => window.open(report.link, '_blank')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Descargar PDF
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Financial Statements Section */}
          <section>
            <Card className="bg-muted border-none shadow-card">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Estados Financieros
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Para solicitar información detallada sobre nuestros estados financieros, 
                  por favor contáctanos directamente.
                </p>
                <Button
                  size="lg"
                  onClick={() => window.location.href = 'mailto:contacto@findelaesclavitud.org'}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Solicitar Estados Financieros
                </Button>
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
