# Documentación del código

Esta carpeta es la **guía de navegación del repositorio** para quien empieza: cómo arranca la app, qué archivo corresponde a cada URL y cómo se relacionan páginas, componentes y utilidades.

El [README principal](../README.md) del proyecto cubre instalación, ejecución en local y cambios frecuentes (textos, colores, despliegue). Aquí el foco es **orientarse en el código**.

---

## Orden de lectura recomendado

1. **[Arquitectura](arquitectura.md)** — Flujo desde `main.tsx` hasta las rutas y la pantalla que ves en el navegador.
2. **[Rutas y páginas](rutas-y-paginas.md)** — Tabla URL → archivo y qué piezas de interfaz importa cada página.
3. **[Componentes de dominio](componentes-de-dominio.md)** — Navbar, Footer, secciones de la portada: qué hacen y en qué páginas aparecen.
4. **[Hooks, telemetría y utilidades](hooks-telemetria-utils.md)** — Lógica compartida fuera de las pantallas.
5. **[Componentes UI (shadcn)](componentes-ui.md)** — Qué es `src/components/ui/`, cuándo tocarlo y enlaces útiles.

---

## Índice de archivos

| Documento | Contenido |
|-----------|-------------|
| [arquitectura.md](arquitectura.md) | Punto de entrada, providers, enrutador, diagrama |
| [rutas-y-paginas.md](rutas-y-paginas.md) | Mapa de rutas y dependencias entre páginas y componentes |
| [componentes-de-dominio.md](componentes-de-dominio.md) | Componentes en `src/components/` (excluye `ui/`) |
| [hooks-telemetria-utils.md](hooks-telemetria-utils.md) | `hooks/`, `telemetry/`, `utils/` |
| [componentes-ui.md](componentes-ui.md) | Política sobre primitivos UI y alias `@/` |

---

## Convención de mantenimiento

Cuando **añadas o cambies una ruta** en `src/App.tsx`, o **añadas una página o sección nueva**:

- Actualiza [rutas-y-paginas.md](rutas-y-paginas.md) y, si aplica, [componentes-de-dominio.md](componentes-de-dominio.md).
- Añade o ajusta el bloque de documentación al inicio del archivo nuevo (véase el patrón en otros `.tsx` de `src/pages/` o `src/components/`).

Así la documentación sigue alineada con el código.
