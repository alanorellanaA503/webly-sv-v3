# Webly SV — V3

**Websites, development, webapp.**

Webly SV es un proyecto académico que representa una idea de negocio hipotética de diseño y desarrollo web para emprendedores y pequeñas empresas de El Salvador.

El proyecto nació como trabajo final de la materia **Diseño de Páginas Web**. Esta tercera versión utiliza **Vue 3 y Vue Router** para practicar componentes reutilizables, reactividad, formularios y navegación, manteniendo el enfoque de sitio informativo.

## Estado

Las seis páginas principales están implementadas. La publicación de esta versión en Netlify está pendiente de confirmación. Cuando termine el despliegue, agrega aquí su URL pública.

Versión original publicada: https://weblysv.netlify.app

## Tecnologías

- Vue 3 con Composition API y `<script setup>`.
- Vue Router para navegación entre vistas.
- Vite para desarrollo y compilación.
- JavaScript, HTML y CSS propios.
- Lucide (`@lucide/vue`) para iconos.
- Google Fonts: DM Sans y Space Grotesk.
- Git y GitHub para control de versiones.
- Configuración de despliegue en Netlify.

El proyecto no utiliza backend, base de datos ni procesamiento de pagos. Vite compila el frontend en archivos estáticos dentro de `dist/`.

## Páginas y rutas

| Página     | Ruta          | Contenido                                       |
| ---------- | ------------- | ----------------------------------------------- |
| Inicio     | `/`           | Presentación, servicios y enlaces principales   |
| Nosotros   | `/nosotros`   | Origen, misión, visión, equipo y valores        |
| Servicios  | `/servicios`  | Servicios, paquetes y preguntas frecuentes      |
| Portafolio | `/portafolio` | Cuatro proyectos de ejemplo y galería ampliable |
| Contacto   | `/contacto`   | Canales de atención y formulario de consulta    |
| Solicitud  | `/solicitud`  | Formulario con selección de paquete             |

Servicios puede enviar el paquete seleccionado mediante la URL, por ejemplo `/solicitud?paquete=profesional`.

## Organización del código

| Ubicación                         | Responsabilidad                                                                           |
| --------------------------------- | ----------------------------------------------------------------------------------------- |
| `public/`                         | Archivos que se sirven directamente y conservan su nombre                                 |
| `src/assets/images/brand/`        | Recursos de marca                                                                         |
| `src/assets/images/portfolio/`    | Imágenes de proyectos                                                                     |
| `src/assets/images/team/`         | Fotografías del equipo                                                                    |
| `src/assets/styles/variables.css` | Paleta, tipografía y variables compartidas                                                |
| `src/assets/styles/main.css`      | Estilos globales                                                                          |
| `src/components/layout/`          | `SiteNavbar.vue` y `SiteFooter.vue`                                                       |
| `src/components/ui/`              | `ServiceCard.vue`, `TeamCard.vue`, `PriceCard.vue`, `ProjectCard.vue` y `ContactForm.vue` |
| `src/views/`                      | Componentes de las seis páginas                                                           |
| `src/router/index.js`             | Rutas y comportamiento de navegación                                                      |
| `src/App.vue`                     | Estructura compartida de la aplicación                                                    |
| `src/main.js`                     | Inicialización de Vue, router y estilos                                                   |
| `netlify.toml`                    | Compilación, directorio publicado y regla para rutas SPA                                  |
| `.nvmrc`                          | Versión de Node para el entorno de compilación                                            |

Las props entregan contenido a los componentes. Los eventos comunican acciones desde las tarjetas a las vistas. Los estilos exclusivos de componentes utilizan `<style scoped>`.

## Identidad visual

| Color         | Valor     |
| ------------- | --------- |
| Graphite      | `#363537` |
| Watermelon    | `#EF2D56` |
| Pumpkin Spice | `#ED7D3A` |
| Willow Green  | `#8CD867` |
| Emerald       | `#2FBF71` |

El verde es el protagonista del diseño. Los estilos globales incluyen un verde oscuro para botones y texto, además de fondos claros y degradados.

## Ejecución local

Utiliza una versión de Node compatible con `engines.node` en `package.json`. El entorno de desarrollo de esta versión usa Node `24.18.0`.

Clona e instala:

```bash
git clone https://github.com/alanorellanaA503/webly-sv-v3.git
cd webly-sv-v3
npm ci
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Abre la dirección que indique la terminal. Los cambios se reflejan al guardar los archivos.

## Compilación y vista previa

```bash
npm run build
npm run preview
```

`build` genera `dist/`. `preview` permite revisar localmente la versión compilada; no es un servidor de producción.

`package-lock.json` se conserva en Git. `node_modules/` y `dist/` deben permanecer excluidos del repositorio mediante `.gitignore`.

## Imágenes del portafolio

Las cuatro imágenes se importan dentro de `PortafolioView.vue`:

- `src/assets/images/portfolio/portafolio1.svg`: Slumber.
- `src/assets/images/portfolio/portafolio2.svg`: Rocket Parcel.
- `src/assets/images/portfolio/portafolio3.svg`: NOTOSAN.
- `src/assets/images/portfolio/portafolio4.svg`: Spacedu.

Los nombres y mayúsculas deben coincidir con las importaciones. Cada proyecto dispone de una imagen ampliable y una descripción. Las tarjetas del equipo muestran iniciales cuando no se proporciona una fotografía.

## Formularios

`ContactForm.vue` se comparte entre Contacto y Solicitud. Utiliza `v-model`, validación HTML y comprobaciones adicionales para preparar una consulta.

El formulario construye un enlace `mailto:`. El visitante debe abrir su aplicación de correo, revisar el borrador y enviarlo desde allí. El sitio no envía mensajes a un servidor ni guarda los datos introducidos.

En Solicitud se activa el selector de paquetes. Solo se aceptan identificadores conocidos al preseleccionar una opción desde la URL.

## Paquetes académicos

| Paquete       | Precio de referencia |
| ------------- | -------------------- |
| Básico        | $100 por proyecto    |
| Profesional   | $250 por proyecto    |
| Tienda Online | $400 por proyecto    |
| Mantenimiento | $50 por mes          |

Estos valores forman parte de la propuesta académica. El alcance, dominio, hosting e integraciones se definen en una cotización; el sitio no procesa compras.

## Publicación en Netlify

La configuración del repositorio es:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Conecta el repositorio con Netlify, utiliza `main` como rama de producción y deja vacío el directorio base. Netlify instalará dependencias y compilará el proyecto.

La regla de rutas sirve `index.html` al abrir directamente una URL de la aplicación, para que Vue Router muestre la vista correspondiente.

El alojamiento puede utilizar el plan Free sujeto a sus límites vigentes. Netlify ofrece una dirección `nombre-del-proyecto.netlify.app`; registrar un dominio propio es una operación distinta.

## Comprobaciones antes de publicar

- Compilación mediante `npm run build`.
- Navegación y menú móvil.
- Distribución responsive de las seis vistas.
- Imágenes, apertura del modal y cierre con Escape.
- Selección del paquete desde Servicios.
- Validación y contenido del borrador de correo.
- Acceso directo y recarga de rutas en la versión alojada.
- Visibilidad pública comprobada desde una ventana privada.

## Equipo original

Alan Orellana · Samuel Montano · Giselle Mejía · Rocío Rivas · Raúl Renderos.

La V3 se desarrolla como práctica de Vue, organización del frontend y control de versiones.

---

Webly SV — Proyecto académico.
