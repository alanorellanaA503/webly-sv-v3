<script setup>
import { ref, nextTick, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'
import { X } from '@lucide/vue'

import ProjectCard from '../components/ui/ProjectCard.vue'

// Imágenes locales: Vite prepara sus rutas al compilar.
import portafolio1 from '../assets/images/portfolio/portafolio1.svg'
import portafolio2 from '../assets/images/portfolio/portafolio2.svg'
import portafolio3 from '../assets/images/portfolio/portafolio3.svg'
import portafolio4 from '../assets/images/portfolio/portafolio4.svg'

const proyectos = [
  {
    id: 'slumber',
    titulo: 'Slumber',
    categoria: 'Bienestar',
    descripcion:
      'Una propuesta digital para descubrir hábitos y recursos que ayuden a descansar mejor.',
    detalle:
      'Proyecto académico enfocado en presentar consejos sobre descanso mediante una interfaz clara y una organización sencilla del contenido.',
    imagen: portafolio1,
    etiquetas: ['Sitio informativo', 'Bienestar', 'Diseño responsive'],
  },
  {
    id: 'rocket-parcel',
    titulo: 'Rocket Parcel',
    categoria: 'Logística',
    descripcion:
      'Una experiencia web para presentar los servicios de una agencia de envío de paquetes.',
    detalle:
      'Propuesta académica que organiza información sobre servicios de envío y canales de contacto para facilitar la consulta de los visitantes.',
    imagen: portafolio2,
    etiquetas: ['Sitio corporativo', 'Servicios', 'Diseño responsive'],
  },
  {
    id: 'notosan',
    titulo: 'NOTOSAN',
    categoria: 'Turismo',
    descripcion:
      'Una propuesta visual para explorar Noto Nature Park y conocer sus atractivos.',
    detalle:
      'Proyecto académico de temática turística que combina imágenes e información para presentar un destino y despertar el interés por conocerlo.',
    imagen: portafolio3,
    etiquetas: ['Turismo', 'Contenido visual', 'Sitio informativo'],
  },
  {
    id: 'spacedu',
    titulo: 'Spacedu',
    categoria: 'Educación',
    descripcion:
      'Un espacio informativo para acercarse al universo y descubrir nuevos conocimientos.',
    detalle:
      'Propuesta educativa que presenta contenido sobre el universo con una estructura accesible y una identidad visual relacionada con la exploración espacial.',
    imagen: portafolio4,
    etiquetas: ['Educación', 'Divulgación', 'Diseño responsive'],
  },
]

// Referencia al elemento dialog y datos del proyecto seleccionado.
const modal = ref(null)
const proyectoActivo = ref(null)

let overflowAnterior = ''

async function abrirProyecto(proyecto) {
  proyectoActivo.value = proyecto

  // Esperamos a que Vue renderice el contenido antes de abrir el diálogo.
  await nextTick()

  overflowAnterior = document.body.style.overflow
  modal.value.showModal()
  document.body.style.overflow = 'hidden'
}

function cerrarProyecto() {
  modal.value?.close()
}

// También se ejecuta cuando el visitante cierra con Escape.
function limpiarModal() {
  document.body.style.overflow = overflowAnterior
  proyectoActivo.value = null
}

function cerrarDesdeFondo(evento) {
  if (evento.target !== modal.value) return

  // Cerramos únicamente si el clic ocurrió fuera del panel.
  const limites = modal.value.getBoundingClientRect()

  const fueraDelPanel =
    evento.clientX < limites.left ||
    evento.clientX > limites.right ||
    evento.clientY < limites.top ||
    evento.clientY > limites.bottom

  if (fueraDelPanel) cerrarProyecto()
}

// Evitamos dejar bloqueado el scroll al abandonar la vista.
onBeforeUnmount(() => {
  if (modal.value?.open) {
    document.body.style.overflow = overflowAnterior
  }
})
</script>

<template>
  <div class="portafolio">
    <!-- Presentación -->
    <section
      class="page-section page-intro"
      aria-labelledby="portafolio-titulo"
    >
      <div class="container">
        <p class="eyebrow">Ideas en acción</p>

        <h1 id="portafolio-titulo">
          Cuatro ideas.<br>
          Distintas posibilidades.
        </h1>

        <p class="lead">
          Explora una selección de proyectos académicos que combinan
          diseño, contenido y desarrollo web.
        </p>
      </div>
    </section>

    <!-- Galería -->
    <section class="page-section" aria-labelledby="proyectos-titulo">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Nuestro portafolio</p>

          <h2 id="proyectos-titulo">
            Cada proyecto cuenta una historia.
          </h2>

          <p class="lead">
            Selecciona un proyecto para ampliar su imagen y conocer
            la idea detrás de su diseño.
          </p>
        </div>

        <div class="projects-grid">
          <ProjectCard
            v-for="proyecto in proyectos"
            :key="proyecto.id"
            :titulo="proyecto.titulo"
            :categoria="proyecto.categoria"
            :descripcion="proyecto.descripcion"
            :imagen="proyecto.imagen"
            @abrir="abrirProyecto(proyecto)"
          />
        </div>
      </div>
    </section>

    <!-- Siguiente paso -->
    <section class="page-section contact-section">
      <div class="container contact-content">
        <p class="eyebrow">La siguiente idea puede ser la tuya</p>

        <h2>¿Qué te gustaría construir?</h2>

        <p class="lead">
          Cuéntanos sobre tu proyecto y exploremos una propuesta
          para darle forma.
        </p>

        <RouterLink to="/solicitud" class="button">
          Hablemos de tu idea
        </RouterLink>
      </div>
    </section>

    <!-- Dialog nativo: gestiona el foco y el cierre con Escape -->
    <dialog
      ref="modal"
      class="project-modal"
      aria-labelledby="modal-titulo"
      aria-describedby="modal-descripcion"
      @click="cerrarDesdeFondo"
      @close="limpiarModal"
    >
      <template v-if="proyectoActivo">
        <button
          class="modal-close"
          type="button"
          aria-label="Cerrar proyecto"
          autofocus
          @click="cerrarProyecto"
        >
          <X :size="24" aria-hidden="true" />
        </button>

        <img
          class="modal-image"
          :src="proyectoActivo.imagen"
          :alt="`Imagen ampliada del proyecto ${proyectoActivo.titulo}`"
        >

        <div class="modal-content">
          <p class="eyebrow">
            {{ proyectoActivo.categoria }} · Proyecto académico
          </p>

          <h2 id="modal-titulo">
            {{ proyectoActivo.titulo }}
          </h2>

          <p id="modal-descripcion">
            {{ proyectoActivo.detalle }}
          </p>

          <ul class="project-tags" aria-label="Características del proyecto">
            <li
              v-for="etiqueta in proyectoActivo.etiquetas"
              :key="etiqueta"
            >
              {{ etiqueta }}
            </li>
          </ul>
        </div>
      </template>
    </dialog>
  </div>
</template>

<style scoped>
.section-heading {
  max-width: 740px;
  margin-bottom: 2.5rem;
}

/* Cuatro proyectos en una cuadrícula de dos por dos */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
}

.contact-section {
  border-top: 1px solid var(--color-border);
  background:
    radial-gradient(
      ellipse at center,
      rgb(140 216 103 / 20%),
      transparent 70%
    ),
    var(--color-background);
}

.contact-content {
  text-align: center;
}

.contact-content .lead {
  margin: 0 auto 1.5rem;
}

/* Imagen ampliada y descripción */
.project-modal {
  width: min(960px, calc(100% - 2rem));
  max-height: 90dvh;
  padding: 0;
  overflow-y: auto;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  background: var(--color-surface);
  color: var(--color-text);
  box-shadow: 0 24px 80px rgb(0 0 0 / 25%);
}

.project-modal::backdrop {
  background: rgb(20 30 24 / 80%);
  backdrop-filter: blur(5px);
}

.modal-close {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  background: var(--color-surface);
  color: var(--color-text);
}

.modal-close:hover {
  background: #eaf5ee;
}

.modal-image {
  width: 100%;
  max-height: 55dvh;
  object-fit: contain;
  background: #eaf5ee;
}

.modal-content {
  padding: 2rem;
}

.modal-content h2 {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
}

.modal-content > p:not(.eyebrow) {
  color: var(--color-muted);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin: 1.5rem 0 0;
  padding: 0;
  list-style: none;
}

.project-tags li {
  padding: 0.35rem 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: 100px;
  background: var(--color-background);
  color: var(--color-primary);
  font-size: 0.875rem;
  font-weight: 600;
}

@media (max-width: 640px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .modal-content {
    padding: 1.5rem;
  }
}
</style>