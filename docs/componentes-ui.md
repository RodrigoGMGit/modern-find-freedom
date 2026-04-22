# Componentes UI (`src/components/ui/`)

Esta carpeta contiene **primitivos de interfaz** al estilo [shadcn/ui](https://ui.shadcn.com): botones, diálogos, formularios, etc. Están construidos sobre **Radix UI** y **Tailwind**, y suelen copiarse/ajustarse con la CLI de shadcn.

## ¿Debo editar estos archivos?

| Situación | Recomendación |
|-----------|----------------|
| Solo quieres cambiar textos o el orden de bloques en una **página** | Edita `src/pages/...` o componentes de dominio en `src/components/*.tsx` (fuera de `ui/`). |
| Necesitas un botón o tarjeta con el estilo ya existente | Importa desde `@/components/ui/...` en tu página o componente. |
| Quieres cambiar el aspecto de **todos** los botones del sitio | Entonces tiene sentido revisar [`button.tsx`](../src/components/ui/button.tsx) y las variables de tema en `src/index.css` / `tailwind.config.ts`. |
| Actualizas shadcn o Radix | Puede tocarse varios archivos bajo `ui/`; revisa la documentación oficial del componente. |

No hace falta documentar cada archivo de `ui/` por separado en el repositorio: son muchos y siguen patrones comunes. Si dudas de la API de un componente, consulta [shadcn/ui docs](https://ui.shadcn.com/docs) buscando el nombre del componente (por ejemplo “Card”, “Accordion”).

## Alias `@/`

En imports, `@/` apunta a `src/`. Está configurado en [`vite.config.ts`](../vite.config.ts). Ejemplo: `@/components/ui/button` → `src/components/ui/button.tsx`.

## Sidebar y móvil

[`sidebar.tsx`](../src/components/ui/sidebar.tsx) usa el hook [`useIsMobile`](../src/hooks/use-mobile.tsx) para adaptar el comportamiento en pantallas pequeñas. Si no usas el componente `Sidebar` en ninguna página actual, igual puede quedar como dependencia disponible para el futuro.

## Nuevo componente “de marca” vs UI

- Si es **específico del sitio** (texto de campaña, sección única): créalo en `src/components/MiSeccion.tsx` (sin meterlo en `ui/`).
- Si es **reutilizable y genérico** (un modal genérico): puede vivir en `ui/` siguiendo el mismo patrón que el resto.
