# Rutas y páginas

Las rutas públicas se declaran en [`src/App.tsx`](../src/App.tsx). Esta tabla es la referencia **URL → archivo** y resume qué **componentes de dominio** (carpeta `src/components/`, fuera de `ui/`) usa cada pantalla.

| Ruta (URL) | Archivo | Componentes de dominio | Notas |
|------------|---------|------------------------|--------|
| `/` | [`src/pages/Index.tsx`](../src/pages/Index.tsx) | `Navbar`, `HeroSection`, `MissionVisionSection`, `HowWeAchieve`, `ValuesSection`, `PartnersSection`, `Footer` | Portada; contenido repartido en secciones reutilizables. |
| `/blog` | [`src/pages/Blog.tsx`](../src/pages/Blog.tsx) | `Navbar`, `Footer` | Listado de artículos; UI con `Card`, `Button`, `Badge` y utilidad `cardColors`. |
| `/oferta-educativa` | [`src/pages/OfertaEducativa.tsx`](../src/pages/OfertaEducativa.tsx) | `Navbar`, `Footer` | Acordeones e imágenes importadas desde `@/assets/`. |
| `/transparencia` | [`src/pages/Transparencia.tsx`](../src/pages/Transparencia.tsx) | `Navbar`, `Footer` | Hero con imagen `transparencia-hero.jpg`. |
| `/voluntarios` | [`src/pages/Voluntarios.tsx`](../src/pages/Voluntarios.tsx) | `Navbar`, `Footer` | Hero `voluntarios-hero.jpg`. |
| `/donativos` | [`src/pages/Donativos.tsx`](../src/pages/Donativos.tsx) | `Navbar`, `Footer` | Hero `donativos-hero.jpg`. |
| `/aprende/que-es-la-trata` | [`src/pages/aprende/QueEsLaTrata.tsx`](../src/pages/aprende/QueEsLaTrata.tsx) | `Navbar`, `Footer` | Enlaces internos con `Link` de React Router. |
| `/aprende/tipos-de-trata` | [`src/pages/aprende/TiposDeTrata.tsx`](../src/pages/aprende/TiposDeTrata.tsx) | `Navbar`, `Footer` | Varias imágenes PNG en `@/assets/`. |
| `/aprende/estadisticas` | [`src/pages/aprende/Estadisticas.tsx`](../src/pages/aprende/Estadisticas.tsx) | `Navbar`, `Footer` | Bloques de estadísticas y CTAs. |
| `/aprende/factores-de-vulnerabilidad` | [`src/pages/aprende/FactoresDeVulnerabilidad.tsx`](../src/pages/aprende/FactoresDeVulnerabilidad.tsx) | `Navbar`, `Footer` | Tarjetas informativas. |
| Cualquier otra ruta | [`src/pages/NotFound.tsx`](../src/pages/NotFound.tsx) | *(ninguno)* | Página 404; no usa Navbar/Footer. |

### Patrón común (excepto inicio y 404)

La mayoría de páginas internas siguen este patrón:

- `Navbar` arriba, `Footer` abajo.
- `useScrollToTop()` para volver arriba al cambiar de ruta dentro del sitio.
- Componentes de **shadcn** (`Card`, `Button`, etc.) y a veces [`cardColors`](../src/utils/cardColors.ts) para rotar estilos de tarjetas.

La portada (`Index`) es la excepción: ensambla **secciones propias** (`HeroSection`, etc.) en lugar de tener todo el contenido en un solo archivo.

### Añadir una página nueva

1. Crea un componente en `src/pages/` (o subcarpeta, por ejemplo `src/pages/aprende/`).
2. Impórtalo en `src/App.tsx` y añade un `<Route path="..." element={<TuPagina />} />` **antes** de la ruta comodín `path="*"`.
3. Enlázala desde [`Navbar.tsx`](../src/components/Navbar.tsx) o desde donde corresponda.
4. Actualiza esta tabla y el encabezado del nuevo archivo.
