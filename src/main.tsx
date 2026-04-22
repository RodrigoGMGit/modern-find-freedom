/**
 * Punto de entrada del sitio: inicializa telemetría (si está configurada),
 * estilos globales y monta el componente `App` en el elemento `#root`.
 *
 * @see docs/arquitectura.md
 */
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { initAppInsights } from "./telemetry/appInsights";
import "./index.css";

initAppInsights();

createRoot(document.getElementById("root")!).render(<App />);
