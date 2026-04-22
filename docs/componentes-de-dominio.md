# Componentes de dominio

Archivos en [`src/components/`](../src/components/) **excluyendo** la carpeta [`ui/`](componentes-ui.md). Son piezas **del sitio Fin de la Esclavitud**: textos, enlaces y maquetación de marca. Si quieres cambiar “cómo se ve el menú” o “el carrusel del inicio”, normalmente editas aquí.

| Archivo | Propósito | ¿Dónde se usa? | Dependencias destacadas |
|---------|-----------|----------------|---------------------------|
| [`Navbar.tsx`](../src/components/Navbar.tsx) | Cabecera: logo, menú responsive, enlaces a rutas. | Casi todas las páginas con layout completo. | `logo.png`, `Button` (ui), `react-router-dom` |
| [`Footer.tsx`](../src/components/Footer.tsx) | Pie: logo, redes, contacto, enlaces. | Mismas páginas que Navbar (no en 404). | `logo.png`, `Separator` (ui) |
| [`HeroSection.tsx`](../src/components/HeroSection.tsx) | Carrusel / hero de la portada. | Solo [`Index.tsx`](../src/pages/Index.tsx). | `hero-image.jpg`, `Button` (ui) |
| [`MissionVisionSection.tsx`](../src/components/MissionVisionSection.tsx) | Bloque misión y visión con tarjetas. | Solo `Index`. | `Card` (ui), iconos Lucide |
| [`HowWeAchieve.tsx`](../src/components/HowWeAchieve.tsx) | Sección “cómo lo logramos” con iconos. | Solo `Index`. | Lucide (sin UI shadcn) |
| [`ValuesSection.tsx`](../src/components/ValuesSection.tsx) | Valores de la organización. | Solo `Index`. | Lucide |
| [`PartnersSection.tsx`](../src/components/PartnersSection.tsx) | Sección de alianzas / partners con animación ligera. | Solo `Index`. | React `useEffect` / `useRef` |

### Relación con las rutas

- **Solo la home** (`/`) compone la pantalla a partir de varias secciones (`HeroSection`, `MissionVisionSection`, etc.).
- El resto de rutas suele ser **un solo archivo de página** con mucho JSX, más `Navbar` + `Footer`.

### Imágenes

Los assets se importan con rutas tipo `@/assets/nombre.ext`. Si cambias el nombre del archivo en disco, actualiza el `import` en el `.tsx` que lo usa. Lista orientativa en el README principal del repositorio.
