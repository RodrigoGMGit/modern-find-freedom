import { useState, useEffect } from "react";
import { Menu, X, Shield, ChevronDown, Heart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: "Inicio", href: "/" },
    { 
      label: "Aprende", 
      href: "#",
      submenu: [
        { label: "¿Qué es la trata?", href: "/aprende/que-es-la-trata" },
        { label: "Tipos de trata", href: "/aprende/tipos-de-trata" },
        { label: "Estadísticas", href: "/aprende/estadisticas" },
        { label: "Factores de vulnerabilidad", href: "/aprende/factores-de-vulnerabilidad" },
      ]
    },
    { label: "Blog", href: "/blog" },
    { label: "Oferta educativa", href: "/oferta-educativa" },
    { label: "Transparencia", href: "/transparencia" },
    { label: "Voluntarios", href: "/voluntarios" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú móvil cuando cambia la ruta
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-card" 
          : "bg-white/90 backdrop-blur-sm shadow-soft"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className={`p-1.5 sm:p-2 bg-gradient-to-br from-brand-teal-500 to-brand-ink-800 rounded-lg shadow-soft group-hover:shadow-cta transition-smooth ${
              isScrolled ? "scale-90" : "scale-100"
            }`}>
              <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="font-heading text-base sm:text-lg lg:text-xl font-bold text-brand-ink-900 group-hover:text-brand-teal-500 transition-smooth">
                Fin de la Esclavitud
              </span>
            </div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`relative px-3 xl:px-4 py-2 rounded-lg font-body text-sm font-medium transition-smooth group ${
                  isActive(item.href)
                    ? "text-brand-teal-500"
                    : "text-brand-ink-800 hover:text-brand-teal-500"
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-teal-500 to-brand-mint-200 transition-smooth origin-left ${
                  isActive(item.href) 
                    ? "scale-x-100" 
                    : "scale-x-0 group-hover:scale-x-100"
                }`}></span>
              </Link>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              asChild
              variant="primary-brand"
              size="sm"
              className="shadow-soft hover:shadow-cta"
            >
              <Link to="/donativos" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Donar
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-brand-teal-500 hover:bg-brand-teal-500/10"
            >
              <Link to="/donativos">
                <Heart className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-ink-900 hover:bg-brand-teal-500/10 hover:text-brand-teal-500"
            >
              {isOpen ? (
                <X className="h-6 w-6 transition-transform rotate-90" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen 
              ? "max-h-96 opacity-100 pb-4" 
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1 pt-2">
            {menuItems.map((item, index) => (
              <Link
                key={item.label}
                to={item.href}
                className={`relative px-4 py-3 rounded-lg font-body text-sm font-medium transition-smooth ${
                  isActive(item.href)
                    ? "bg-brand-teal-500/10 text-brand-teal-500"
                    : "text-brand-ink-800 hover:bg-brand-mint-200/30 hover:text-brand-teal-500"
                }`}
                style={{ 
                  transitionDelay: isOpen ? `${index * 50}ms` : '0ms' 
                }}
              >
                <div className="flex items-center justify-between">
                  {item.label}
                  {isActive(item.href) && (
                    <div className="w-2 h-2 rounded-full bg-brand-teal-500"></div>
                  )}
                </div>
              </Link>
            ))}
            
            {/* Divider */}
            <div className="h-px bg-brand-mint-200/30 my-2"></div>
            
            {/* Mobile CTA */}
            <Link
              to="/donativos"
              className="px-4 py-3 rounded-lg font-body text-sm font-semibold bg-gradient-to-r from-brand-teal-500 to-brand-ink-800 text-white hover:shadow-cta transition-smooth flex items-center justify-center gap-2"
            >
              <Heart className="h-4 w-4 fill-white" />
              Hacer una Donación
            </Link>
          </div>
        </div>
      </div>

      {/* Barra de progreso de scroll (opcional) */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-mint-200/20">
          <div 
            className="h-full bg-gradient-to-r from-brand-teal-500 to-brand-mint-200 transition-all duration-150"
            style={{ 
              width: `${Math.min((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%` 
            }}
          ></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
