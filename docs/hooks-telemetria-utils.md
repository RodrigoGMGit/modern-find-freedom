# Hooks, telemetría y utilidades

Módulos bajo [`src/hooks/`](../src/hooks/), [`src/telemetry/`](../src/telemetry/) y [`src/utils/`](../src/utils/) que no son “pantallas” pero los consume el front.

## Hooks (`src/hooks/`)

| Archivo | Qué hace | Quién lo usa |
|---------|----------|----------------|
| [`useScrollToTop.tsx`](../src/hooks/useScrollToTop.tsx) | Cuando cambia la ruta (`pathname`), hace scroll al inicio de la ventana. | Páginas internas con layout largo (blog, donativos, aprende, etc.). |
| [`use-mobile.tsx`](../src/hooks/use-mobile.tsx) | Expone `useIsMobile()` según ancho de ventana (breakpoint 768px). | Principalmente [`src/components/ui/sidebar.tsx`](../src/components/ui/sidebar.tsx) (patrón shadcn). |
| [`use-toast.ts`](../src/hooks/use-toast.ts) | Estado global de toasts (añadir, quitar, cola). | [`toaster.tsx`](../src/components/ui/toaster.tsx) y reexport en [`components/ui/use-toast.ts`](../src/components/ui/use-toast.ts). |

## Telemetría (`src/telemetry/`)

| Archivo | Qué hace | Quién lo usa |
|---------|----------|----------------|
| [`appInsights.ts`](../src/telemetry/appInsights.ts) | Inicializa Microsoft Application Insights si existe `VITE_APPINSIGHTS_CONNECTION_STRING`. Añade propiedades `env` y `origin` a los envíos. | [`main.tsx`](../src/main.tsx) al arrancar; `getAppInsights()` desde el hook de page views. |
| [`usePageViews.ts`](../src/telemetry/usePageViews.ts) | Hook `useAppInsightsPageViews`: en cada cambio de ubicación, envía `trackPageView` si Insights está activo. | [`App.tsx`](../src/App.tsx), dentro del componente que envuelve las rutas. |

## Utilidades (`src/utils/`)

| Archivo | Qué hace | Quién lo usa |
|---------|----------|----------------|
| [`cardColors.ts`](../src/utils/cardColors.ts) | Arrays de clases Tailwind (`cardColors`, `iconColors`, `checkmarkColors`, `numberColors`) para alternar estilos entre tarjetas según índice. | Páginas con muchas `Card` (blog, donativos, oferta educativa, transparencia, voluntarios, secciones de aprende que lo importen). |

Si añades un hook nuevo, documenta aquí su propósito y al menos un consumidor para que otros desarrolladores lo encuentren rápido.
