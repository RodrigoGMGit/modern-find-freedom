import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, BookOpen, ArrowRight, Search } from "lucide-react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { cardColors, iconColors } from "@/utils/cardColors";

const blogPosts = [
  {
    id: 1,
    title: "Los matrimonios forzados no son cosa del pasado",
    excerpt: "En este blog, examinaremos de cerca la problemática de los matrimonios forzados, una práctica atroz que ha perdurado a través del tiempo y afecta principalmente a mujeres y niñas en todo el mundo.",
    date: "mayo 29, 2023",
    author: "Equipo Editorial",
    tag: "Violencia de Género",
    image: "https://findelaesclavitud.org/wp-content/uploads/2023/05/matrimonio-forzado-1024x595.jpg",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Cómo saber si estoy siendo víctima de violencia",
    excerpt: "En este blog analizaremos cómo las relaciones de pareja pueden llegar a convertirse en dañinas y violentas, identificando señales de alerta y recursos de ayuda disponibles.",
    date: "abril 14, 2023",
    author: "Equipo Editorial",
    tag: "Violencia de Género",
    image: "https://findelaesclavitud.org/wp-content/uploads/2023/04/pexels-anete-lusina-5723192R-1024x683.jpg",
    readTime: "7 min",
  },
  {
    id: 3,
    title: "La prevención en redes sociales",
    excerpt: "Conoce los riesgos de las redes sociales y cómo los tratantes utilizan estas plataformas para captar víctimas. Aprende a protegerte y proteger a tus seres queridos.",
    date: "marzo 22, 2023",
    author: "Equipo Editorial",
    tag: "Prevención",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    readTime: "6 min",
  },
  {
    id: 4,
    title: "Señales de alerta en el reclutamiento laboral",
    excerpt: "Identifica las banderas rojas en ofertas de trabajo que podrían ser fachadas para la trata laboral. Tu seguridad comienza con la información.",
    date: "febrero 10, 2023",
    author: "Equipo Editorial",
    tag: "Prevención",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800&q=80",
    readTime: "8 min",
  },
  {
    id: 5,
    title: "El movimiento abolicionista en México",
    excerpt: "Descubre cómo personas comunes se están convirtiendo en abolicionistas y generando cambios reales en sus comunidades para combatir la trata de personas.",
    date: "enero 18, 2023",
    author: "Equipo Editorial",
    tag: "Abolicionismo",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    readTime: "10 min",
  },
  {
    id: 6,
    title: "Historias de esperanza: Sobrevivientes que inspiran",
    excerpt: "Conoce testimonios reales de sobrevivientes de trata que han reconstruido sus vidas y ahora ayudan a otros a encontrar la libertad.",
    date: "diciembre 5, 2022",
    author: "Equipo Editorial",
    tag: "Testimonios",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    readTime: "12 min",
  },
];

const Blog = () => {
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
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header de la página */}
          <div className="text-center mb-10 sm:mb-16 max-w-4xl mx-auto">
            {/* Logo circular con icono */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="p-3 sm:p-4 bg-gradient-to-br from-brand-teal-500 to-brand-ink-800 rounded-full shadow-soft">
                <BookOpen className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
              </div>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-ink-900 mb-3 sm:mb-4 leading-heading-1">
              Blog y Noticias
            </h1>
            
            <p className="font-body text-sm sm:text-base md:text-lg text-brand-olive-500 leading-body mb-6 sm:mb-8">
              Artículos, historias y recursos para combatir la trata de personas
            </p>

            {/* Barra de búsqueda decorativa */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-olive-500/50" />
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  className="w-full pl-12 pr-4 py-3 sm:py-4 rounded-xl border border-brand-mint-200/40 bg-white shadow-soft focus:outline-none focus:ring-2 focus:ring-brand-teal-500 focus:border-transparent transition-smooth font-body text-sm sm:text-base"
                />
              </div>
            </div>
          </div>

          {/* Grid de posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => {
              const colorIndex = index % 3;
              const cardColor = cardColors[colorIndex];
              const iconColor = iconColors[colorIndex];

              return (
                <Card 
                  key={post.id} 
                  className={`${cardColor} border overflow-hidden hover:shadow-card transition-smooth hover:scale-105 group flex flex-col h-full`}
                >
                  {/* Imagen */}
                  <div className="overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-smooth"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className={`${iconColor} border-0 shadow-soft`}>
                        {post.tag}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-5 sm:p-6 flex flex-col flex-1">
                    {/* Metadata */}
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-brand-olive-500 mb-3 sm:mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span className="font-body">{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span className="font-body">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span className="font-body">{post.readTime}</span>
                      </div>
                    </div>

                    {/* Título */}
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-brand-ink-900 mb-2 sm:mb-3 group-hover:text-brand-teal-500 transition-smooth leading-heading-3">
                      {post.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="font-body text-sm sm:text-base text-brand-ink-800 leading-relaxed mb-4 sm:mb-6 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Botón de leer más */}
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between text-brand-teal-500 hover:text-brand-ink-800 hover:bg-brand-teal-500/10 group/btn font-body font-semibold"
                    >
                      Leer más
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-smooth" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Paginación */}
          <div className="flex justify-center gap-2 mt-12 sm:mt-16">
            <Button 
              variant="outline" 
              size="sm"
              className="border-brand-mint-200/40 hover:bg-brand-mint-200/20 hover:text-brand-teal-500 transition-smooth font-body"
            >
              Anterior
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="border-brand-teal-500 bg-brand-teal-500/10 text-brand-teal-500 hover:bg-brand-teal-500/20 font-body"
            >
              1
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="border-brand-mint-200/40 hover:bg-brand-mint-200/20 hover:text-brand-teal-500 transition-smooth font-body"
            >
              2
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="border-brand-mint-200/40 hover:bg-brand-mint-200/20 hover:text-brand-teal-500 transition-smooth font-body"
            >
              Siguiente
            </Button>
          </div>

          {/* CTA Section */}
          <div className="mt-16 sm:mt-20 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-brand-teal-500/10 via-brand-mint-200/20 to-brand-olive-500/10 border border-brand-mint-200/40 rounded-2xl p-8 sm:p-12 text-center shadow-card">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-brand-ink-900 mb-3 sm:mb-4 leading-heading-2">
                ¿Quieres compartir tu historia?
              </h2>
              <p className="font-body text-sm sm:text-base md:text-lg text-brand-olive-500 mb-6 sm:mb-8 leading-body">
                Si tienes una experiencia que compartir o quieres contribuir con un artículo, contáctanos
              </p>
              <Button 
                variant="primary-brand"
                size="lg"
                className="group shadow-cta"
              >
                Contactar al equipo
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

export default Blog;
