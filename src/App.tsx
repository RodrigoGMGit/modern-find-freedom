import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAppInsightsPageViews } from "@/telemetry/usePageViews";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import OfertaEducativa from "./pages/OfertaEducativa";
import Transparencia from "./pages/Transparencia";
import Voluntarios from "./pages/Voluntarios";
import Donativos from "./pages/Donativos";
import QueEsLaTrata from "./pages/aprende/QueEsLaTrata";
import TiposDeTrata from "./pages/aprende/TiposDeTrata";
import Estadisticas from "./pages/aprende/Estadisticas";
import FactoresDeVulnerabilidad from "./pages/aprende/FactoresDeVulnerabilidad";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function AppRoutes() {
  useAppInsightsPageViews();

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/oferta-educativa" element={<OfertaEducativa />} />
      <Route path="/transparencia" element={<Transparencia />} />
      <Route path="/voluntarios" element={<Voluntarios />} />
      <Route path="/donativos" element={<Donativos />} />

      {/* Rutas de Aprende */}
      <Route path="/aprende/que-es-la-trata" element={<QueEsLaTrata />} />
      <Route path="/aprende/tipos-de-trata" element={<TiposDeTrata />} />
      <Route path="/aprende/estadisticas" element={<Estadisticas />} />
      <Route path="/aprende/factores-de-vulnerabilidad" element={<FactoresDeVulnerabilidad />} />

      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
