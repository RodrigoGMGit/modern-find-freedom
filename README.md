# Fin de la Esclavitud — Sitio web

Sitio web moderno para **Fin de la Esclavitud**, organización dedicada a combatir la trata de personas y promover la libertad y la dignidad humana.

Esta guía está pensada para **personas nuevas en el proyecto** que necesitan instalar el código, ejecutarlo en su computadora y saber **dónde editar textos, imágenes y colores** sin ser expertas en desarrollo.

---

## Requisitos previos

- **Node.js** (versión LTS recomendada) y **npm**, que suele venir con Node.
  - Descarga oficial: [https://nodejs.org](https://nodejs.org)
  - Opcional en Windows: [nvm-windows](https://github.com/coreybutler/nvm-windows) para cambiar entre versiones de Node.
- **Git** instalado.
  - [https://git-scm.com/downloads](https://git-scm.com/downloads)
- Una cuenta con acceso al repositorio en **Azure DevOps** (Azure Repos), si el proyecto es privado.

Para comprobar que todo está instalado, abre una terminal (PowerShell o CMD) y ejecuta:

```powershell
node -v
npm -v
git --version
```

---

## Obtener el código desde Azure Repos (Azure DevOps)

1. En Azure DevOps, abre el proyecto y ve a **Repos** → **Files**.
2. Pulsa **Clone** y copia la URL (HTTPS o SSH).

### Clonar con HTTPS (lo más habitual)

Si el repositorio es **privado**, Git pedirá usuario y contraseña. En Azure DevOps la “contraseña” suele ser un **PAT** (Personal Access Token):

1. Azure DevOps → tu avatar (esquina superior derecha) → **Personal access tokens** → **New Token**.
2. Otorga al menos permiso de lectura sobre **Code (Read)**.
3. Al hacer `git clone`, como usuario indica tu correo o nombre de organización según indique Azure; como contraseña pega el **PAT**.

```powershell
cd $HOME\Documentos
git clone https://dev.azure.com/<ORGANIZACION>/<PROYECTO>/_git/<NOMBRE_REPO>
cd <NOMBRE_REPO>
```

Sustituye la URL por la que te muestre Azure DevOps. El nombre de la carpeta será el del repositorio (por ejemplo `modern-find-freedom`).

### Clonar con SSH (opcional)

Si tu organización configuró llaves SSH en Azure DevOps, usa la URL SSH que aparece en **Clone** y sigue la guía de DevOps para añadir tu clave pública.

---

## Instalación de dependencias

En la **raíz del proyecto** (donde está `package.json`):

```powershell
npm install
```

Esto descarga las librerías necesarias a la carpeta `node_modules/`. Solo hace falta repetirlo cuando cambien las dependencias del proyecto.

---

## Cómo ejecutar el sitio en local

### Modo desarrollo (recomendado para editar)

```powershell
npm run dev
```

Abre el navegador en:

**[http://localhost:8080](http://localhost:8080)**

Este proyecto usa el puerto **8080** (configurado en `vite.config.ts`), no el 5173 por defecto de Vite.

Al guardar cambios en archivos `.tsx`, `.ts` o `.css`, la página se actualiza sola en muchos casos (recarga en caliente).

### Probar la versión “de producción” en tu PC

```powershell
npm run build
npm run preview
```

`build` genera la carpeta `dist/`. `preview` sirve ese resultado para comprobar que todo se ve bien antes de publicar.

### Revisar estilo de código (lint)

```powershell
npm run lint
```

---

## Tecnologías del proyecto

| Tecnología | Uso |
|------------|-----|
| [Vite](https://vitejs.dev) | Herramienta de desarrollo y empaquetado |
| [React](https://react.dev) | Interfaz de usuario |
| [TypeScript](https://www.typescriptlang.org) | JavaScript con tipos |
| [Tailwind CSS](https://tailwindcss.com) | Estilos utilitarios |
| [React Router](https://reactrouter.com) | Rutas / páginas |
| Componentes tipo **shadcn/ui** | Botones, diálogos, etc. en `src/components/ui/` |

---

## Cómo está organizado el repositorio

```
raíz del proyecto/
├── public/                 # Archivos estáticos copiados tal cual (ej. robots.txt)
├── scripts/                # Scripts de despliegue a Azure (PowerShell)
├── src/
│   ├── assets/             # Imágenes y medios importados desde el código
│   ├── components/         # Piezas reutilizables: Navbar, Footer, secciones, ui/
│   ├── pages/              # Una “pantalla” por ruta (blog, donativos, aprende/…)
│   ├── hooks/              # Lógica reutilizable entre componentes
│   ├── telemetry/          # Application Insights (páginas vistas, etc.)
│   ├── App.tsx             # Define todas las rutas del sitio
│   ├── main.tsx            # Punto de entrada de la aplicación
│   └── index.css           # Variables de color de marca y estilos globales
├── index.html              # HTML base que carga la app
├── vite.config.ts          # Configuración de Vite (incluye alias @ → src)
├── tailwind.config.ts      # Tema Tailwind enlazado a las variables CSS
└── package.json            # Scripts y dependencias
```

**Alias `@/`:** en el código, `@/components/...` significa `src/components/...`. Está definido en `vite.config.ts`.

### Relación entre rutas URL y archivos

Las rutas públicas se definen en `src/App.tsx`. Referencia rápida:

| Ruta en el navegador | Archivo principal |
|----------------------|-------------------|
| `/` | `src/pages/Index.tsx` |
| `/blog` | `src/pages/Blog.tsx` |
| `/oferta-educativa` | `src/pages/OfertaEducativa.tsx` |
| `/transparencia` | `src/pages/Transparencia.tsx` |
| `/voluntarios` | `src/pages/Voluntarios.tsx` |
| `/donativos` | `src/pages/Donativos.tsx` |
| `/aprende/que-es-la-trata` | `src/pages/aprende/QueEsLaTrata.tsx` |
| `/aprende/tipos-de-trata` | `src/pages/aprende/TiposDeTrata.tsx` |
| `/aprende/estadisticas` | `src/pages/aprende/Estadisticas.tsx` |
| `/aprende/factores-de-vulnerabilidad` | `src/pages/aprende/FactoresDeVulnerabilidad.tsx` |
| Cualquier otra URL | `src/pages/NotFound.tsx` |

El menú superior y enlaces globales están en `src/components/Navbar.tsx`. El pie en `src/components/Footer.tsx`. La página de inicio ensambla varias secciones desde `src/components/` (por ejemplo `HeroSection.tsx`, `ValuesSection.tsx`, etc.).

---

## Dónde hacer cambios habituales

| Quiero… | Dónde buscar |
|---------|----------------|
| Cambiar textos de una página concreta | `src/pages/...` según la tabla de rutas de arriba |
| Cambiar el carrusel o textos del hero de la portada | `src/components/HeroSection.tsx` |
| Cambiar menú, logo en cabecera o enlaces del nav | `src/components/Navbar.tsx` |
| Cambiar logo o datos del pie | `src/components/Footer.tsx` |
| Añadir una página nueva y su URL | Crear archivo en `src/pages/`, luego añadir `<Route>` en `src/App.tsx` |
| Cambiar colores globales de marca | `src/index.css` (sección `:root`, variables `--brand-*` y mapeo semántico) |
| Usar colores en clases Tailwind | `tailwind.config.ts` (nombres como `brand-teal-500`) |
| Sustituir o añadir imágenes usadas en secciones | Coloca el archivo en `src/assets/` y ajusta el `import` en el `.tsx` que lo usa |

### Imágenes (`src/assets/`)

Las imágenes se **importan** en TypeScript/React, no solo se copian a la carpeta. Ejemplos de archivos referenciados en el código:

- `logo.png` — `Navbar.tsx`, `Footer.tsx`
- `hero-image.jpg` — `HeroSection.tsx`
- Héroes de secciones: `donativos-hero.jpg`, `voluntarios-hero.jpg`, `transparencia-hero.jpg`, etc.
- Oferta educativa: `redes-sociales.jpg`, `prevencion-infantil.jpg`, `capacitacion-profesionales.jpg`, `escuela-padres.jpg`
- Tipos de trata (PNG): `matrimonio-forzado.png`, `explotacion-sexual.png`, etc. (ver `src/pages/aprende/TiposDeTrata.tsx`)

Si **renombras** un archivo, actualiza la línea `import ... from "@/assets/nombre-archivo.ext"` en el componente correspondiente. Si mantienes el mismo nombre, puedes **reemplazar el archivo** en disco conservando el nombre y no tocar el código.

### Archivos en `public/`

Sirven para recursos que deben tener una URL fija (por ejemplo `public/robots.txt`). No pasan por el sistema de imports de Vite como los de `src/assets/`.

---

## Despliegue en Azure Static Web Apps

El sitio puede publicarse en **Azure Static Web Apps** usando scripts de PowerShell en la carpeta `scripts/`. No subas nunca tokens ni contraseñas al repositorio Git.

### 1. Recurso en Azure

Si aún no existe: en [Azure Portal](https://portal.azure.com) → Crear recurso → **Static Web App**. Para entornos de prueba y producción suele usarse plan **Standard**.

### 2. Token de despliegue

En el portal: tu **Static Web App** → **Overview** → **Manage deployment token** → copia el token.

### 3. Archivo `.env` en la raíz del proyecto

Crea un archivo `.env` (en la misma carpeta que `package.json`) con:

```bash
SWA_TOKEN=<pega-aquí-el-token-de-despliegue>
```

Los archivos `.env`, `.env.dev` y `.env.prod` están en `.gitignore` para que no se suban por error. **No confirmes secretos en Git.**

### 4. Variables opcionales (telemetría, etc.)

- Para **desarrollo / staging**: puedes usar `.env.dev` (por ejemplo `VITE_APPINSIGHTS_CONNECTION_STRING`). El script de desarrollo lo copia a `.env.development` durante el build.
- Para **producción**: variables en `.env.prod` (el script de producción copia a `.env.production` durante el build).

### 5. Comandos de despliegue (Windows, PowerShell)

Desde la **raíz del repositorio**:

**Entorno de prueba (staging) en Azure SWA**

```powershell
.\scripts\deploy-dev.ps1
```

Hace instalación limpia (`npm ci`), construye con `vite build --mode development` y despliega `dist/` al entorno **staging**. Usa `npx` para la CLI de Static Web Apps; no hace falta instalar la CLI globalmente.

**Producción**

```powershell
.\scripts\deploy-prod.ps1
```

Construye con `--mode production` y despliega al entorno **production**.

Ambos scripts exigen que exista `.env` con `SWA_TOKEN`. El de producción usa `.env.prod` si existe para variables de build de producción.

---

## Sobre la organización

**Fin de la Esclavitud** trabaja por combatir la trata de personas y promover la libertad y la dignidad humana. Únete al movimiento abolicionista.

Si algo de esta guía no coincide con la política de tu organización (nombres de ramas, pipelines en Azure DevOps en lugar de scripts locales, etc.), adapta los pasos de clonado y despliegue a lo que indique tu equipo de TI.
