import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Shield, Heart, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-brand-ink-900 via-brand-ink-800 to-brand-ink-900 text-white overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-brand-teal-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-brand-mint-200/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6">
        {/* Contenido principal del footer */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            {/* Columna 1: Logo y descripción */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-brand-teal-500 to-brand-mint-200 rounded-lg shadow-soft">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Fin de la Esclavitud
                </h3>
              </div>
              <p className="font-body text-sm text-white/70 leading-relaxed mb-6">
                Organización dedicada a combatir la trata de personas y promover la libertad y dignidad humana en México y el mundo.
              </p>
              
              {/* Redes sociales */}
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-teal-500 border border-white/20 flex items-center justify-center transition-smooth group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-white/70 group-hover:text-white transition-smooth" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-teal-500 border border-white/20 flex items-center justify-center transition-smooth group"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-white/70 group-hover:text-white transition-smooth" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-teal-500 border border-white/20 flex items-center justify-center transition-smooth group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white/70 group-hover:text-white transition-smooth" />
                </a>
              </div>
            </div>

            {/* Columna 2: Enlaces rápidos */}
            <div>
              <h4 className="font-heading text-base font-semibold text-white mb-4 flex items-center gap-2">
                <div className="w-1 h-4 bg-brand-teal-500 rounded-full"></div>
                Enlaces Rápidos
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/blog" 
                    className="font-body text-sm text-white/70 hover:text-brand-mint-200 transition-smooth flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-brand-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-smooth"></span>
                    Blog y Noticias
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/oferta-educativa" 
                    className="font-body text-sm text-white/70 hover:text-brand-mint-200 transition-smooth flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-brand-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-smooth"></span>
                    Oferta Educativa
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/voluntarios" 
                    className="font-body text-sm text-white/70 hover:text-brand-mint-200 transition-smooth flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-brand-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-smooth"></span>
                    Únete como Voluntario
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/donativos" 
                    className="font-body text-sm text-white/70 hover:text-brand-mint-200 transition-smooth flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-brand-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-smooth"></span>
                    Donativos
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/transparencia" 
                    className="font-body text-sm text-white/70 hover:text-brand-mint-200 transition-smooth flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-brand-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-smooth"></span>
                    Transparencia
                  </Link>
                </li>
              </ul>
            </div>

            {/* Columna 3: Recursos */}
            <div>
              <h4 className="font-heading text-base font-semibold text-white mb-4 flex items-center gap-2">
                <div className="w-1 h-4 bg-brand-mint-200 rounded-full"></div>
                Recursos
              </h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#" 
                    className="font-body text-sm text-white/70 hover:text-brand-mint-200 transition-smooth flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-brand-mint-200 rounded-full opacity-0 group-hover:opacity-100 transition-smooth"></span>
                    Línea de Ayuda 24/7
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-smooth" />
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="font-body text-sm text-white/70 hover:text-brand-mint-200 transition-smooth flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-brand-mint-200 rounded-full opacity-0 group-hover:opacity-100 transition-smooth"></span>
                    Materiales Educativos
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="font-body text-sm text-white/70 hover:text-brand-mint-200 transition-smooth flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-brand-mint-200 rounded-full opacity-0 group-hover:opacity-100 transition-smooth"></span>
                    Preguntas Frecuentes
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="font-body text-sm text-white/70 hover:text-brand-mint-200 transition-smooth flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-brand-mint-200 rounded-full opacity-0 group-hover:opacity-100 transition-smooth"></span>
                    Políticas de Privacidad
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 4: Contacto */}
            <div>
              <h4 className="font-heading text-base font-semibold text-white mb-4 flex items-center gap-2">
                <div className="w-1 h-4 bg-brand-olive-500 rounded-full"></div>
                Contacto
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-smooth">
                    <Mail className="w-4 h-4 text-brand-mint-200" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-white/50 mb-1">Email</p>
                    <a 
                      href="mailto:info@findelaesclavitud.org" 
                      className="font-body text-sm text-white/70 hover:text-brand-mint-200 transition-smooth"
                    >
                      info@findelaesclavitud.org
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group">
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-smooth">
                    <Phone className="w-4 h-4 text-brand-mint-200" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-white/50 mb-1">Teléfono</p>
                    <a 
                      href="tel:+523312345678" 
                      className="font-body text-sm text-white/70 hover:text-brand-mint-200 transition-smooth"
                    >
                      +52 (33) 1234 5678
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group">
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-smooth">
                    <MapPin className="w-4 h-4 text-brand-mint-200" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-white/50 mb-1">Ubicación</p>
                    <p className="font-body text-sm text-white/70">
                      Guadalajara, Jalisco<br />México
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10" />

        {/* Sección inferior */}
        <div className="py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs sm:text-sm text-white/50 text-center sm:text-left">
              &copy; {new Date().getFullYear()} Fin de la Esclavitud. Todos los derechos reservados.
            </p>
            
            <div className="flex items-center gap-2 text-white/50">
              <span className="font-body text-xs sm:text-sm">Hecho con</span>
              <Heart className="w-4 h-4 text-brand-mint-200 fill-brand-mint-200 animate-pulse" />
              <span className="font-body text-xs sm:text-sm">para un mundo mejor</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
