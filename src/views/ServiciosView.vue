<script setup>
import { RouterLink } from 'vue-router'
import { Code, Layers, Wrench } from '@lucide/vue'

import ServiceCard from '../components/ui/ServiceCard.vue'
import PriceCard from '../components/ui/PriceCard.vue'

// Helper para que Vite procese correctamente el SVG del ajolote.
const ajoloteUrl = new URL(
  '../assets/illustrations/axolotl.svg',
  import.meta.url
).href

const servicios = [
  {
    id: 'sitios',
    titulo: 'Creación de sitios web',
    descripcion:
      'Organizamos tu contenido y diseñamos una presencia digital adaptable a celulares, tablets y computadoras.',
    icono: Code,
  },
  {
    id: 'desarrollo',
    titulo: 'Desarrollo personalizado',
    descripcion:
      'Exploramos soluciones para necesidades específicas, desde interfaces informativas hasta propuestas de aplicaciones web.',
    icono: Layers,
  },
  {
    id: 'mantenimiento',
    titulo: 'Mantenimiento web',
    descripcion:
      'Actualizamos contenido, revisamos el funcionamiento y proponemos mejoras para mantener tu sitio al día.',
    icono: Wrench,
  },
]

// Precios de referencia del proyecto académico original.
const paquetes = [
  {
    id: 'basico',
    titulo: 'Básico',
    descripcion: 'Para dar el primer paso con tu negocio en internet.',
    precio: 100,
    frecuencia: 'por proyecto',
    caracteristicas: [
      'Sitio informativo',
      'Diseño adaptable a móviles',
      'Presentación de tu negocio',
      'Enlaces de contacto y redes sociales',
    ],
    destacado: false,
  },
  {
    id: 'profesional',
    titulo: 'Profesional',
    descripcion: 'Para presentar tus servicios con mayor detalle.',
    precio: 250,
    frecuencia: 'por proyecto',
    caracteristicas: [
      'Varias páginas informativas',
      'Diseño personalizado',
      'Galería de proyectos o productos',
      'Definición del canal de consultas',
    ],
    destacado: true,
  },
  {
    id: 'tienda',
    titulo: 'Tienda Online',
    descripcion: 'Un punto de partida para una propuesta de venta digital.',
    precio: 400,
    frecuencia: 'por proyecto',
    caracteristicas: [
      'Diseño de catálogo de productos',
      'Propuesta del flujo de compra',
      'Definición de medios de pago',
      'Evaluación de integraciones necesarias',
    ],
    destacado: false,
  },
  {
    id: 'mantenimiento',
    titulo: 'Mantenimiento',
    descripcion: 'Para acompañar la evolución de tu sitio web.',
    precio: 50,
    frecuencia: 'por mes',
    caracteristicas: [
      'Actualización de contenido',
      'Revisión de enlaces',
      'Comprobación del funcionamiento',
      'Propuestas de mejora',
    ],
    destacado: false,
  },
]

const preguntas = [
  {
    id: 'inicio',
    pregunta: '¿Qué necesito para empezar?',
    respuesta:
      'Una descripción de tu idea, el contenido que deseas mostrar y los recursos de tu marca, como logo, fotografías y colores, si ya los tienes.',
  },
  {
    id: 'movil',
    pregunta: '¿El sitio se podrá usar desde un celular?',
    respuesta:
      'Sí. La propuesta contempla un diseño adaptable a distintos tamaños de pantalla para facilitar la navegación.',
  },
  {
    id: 'alcance',
    pregunta: '¿Los precios incluyen dominio y hosting?',
    respuesta:
      'Estos son precios de referencia académicos. El dominio, hosting, número de páginas e integraciones se definen al preparar una cotización.',
  },
  {
    id: 'compra',
    pregunta: '¿Puedo comprar un paquete desde aquí?',
    respuesta:
      'Este sitio es informativo y académico. Puedes consultar un paquete, pero no se procesan pagos ni se confirman contrataciones.',
  },
]
</script>

<template>
  <div class="servicios">
    <!-- Presentación -->
    <section
      class="page-section page-intro"
      aria-labelledby="servicios-titulo"
    >
      <div class="container">
        <p class="eyebrow">Diseño y desarrollo web</p>

        <h1 id="servicios-titulo">
          Una solución para<br>
          tu siguiente paso.
        </h1>

        <p class="lead">
          Desde una página informativa hasta una propuesta de aplicación
          web, empezamos por entender lo que tu idea necesita.
        </p>
      </div>
    </section>

    <!-- Reutilizamos las tarjetas creadas para Inicio -->
    <section class="page-section" aria-labelledby="soluciones-titulo">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Qué podemos hacer</p>
          <h2 id="soluciones-titulo">Diseño con propósito.</h2>

          <p class="lead">
            Combinamos presentación, funcionalidad y mantenimiento
            para dar forma a tu presencia digital.
          </p>
        </div>

        <div class="services-grid">
          <ServiceCard
            v-for="servicio in servicios"
            :key="servicio.id"
            :titulo="servicio.titulo"
            :descripcion="servicio.descripcion"
            :icono="servicio.icono"
          />
        </div>
      </div>
    </section>

    <!-- Paquetes -->
    <section
      class="page-section pricing-section"
      aria-labelledby="paquetes-titulo"
    >
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Paquetes</p>

          <h2 id="paquetes-titulo">
            Elige un punto de partida.
          </h2>

          <p class="lead">
            Cada proyecto tiene necesidades distintas.
            Estos paquetes sirven como referencia para iniciar la conversación.
          </p>
        </div>

        <div class="pricing-grid">
          <PriceCard
            v-for="paquete in paquetes"
            :key="paquete.id"
            :titulo="paquete.titulo"
            :descripcion="paquete.descripcion"
            :precio="paquete.precio"
            :frecuencia="paquete.frecuencia"
            :caracteristicas="paquete.caracteristicas"
            :paquete="paquete.id"
            :destacado="paquete.destacado"
          />
        </div>

        <p class="pricing-note">
          Precios de referencia del proyecto académico.
          El alcance final y los servicios externos se definen en una cotización.
        </p>
      </div>
    </section>

    <!-- El navegador gestiona la apertura sin JavaScript adicional -->
    <section class="page-section" aria-labelledby="preguntas-titulo">
      <div class="container faq-layout">
        <div class="section-heading">
          <p class="eyebrow">Antes de comenzar</p>

          <h2 id="preguntas-titulo">
            Resolvamos tus dudas.
          </h2>

          <p class="lead">
            Algunas respuestas para conocer mejor nuestra propuesta.
          </p>

          <!-- Mascota decorativa -->
          <div class="faq-mascot">
            <img
              :src="ajoloteUrl"
              alt=""
              width="300"
              height="300"
              loading="lazy"
            />
          </div>
        </div>

        <div class="faq-list">
          <details
            v-for="pregunta in preguntas"
            :key="pregunta.id"
            class="card faq-item"
          >
            <summary>{{ pregunta.pregunta }}</summary>
            <p>{{ pregunta.respuesta }}</p>
          </details>
        </div>
      </div>
    </section>

    <!-- Consulta personalizada -->
    <section class="page-section custom-section">
      <div class="container custom-content">
        <p class="eyebrow">Tu idea tiene su propio camino</p>

        <h2>¿Necesitas algo diferente?</h2>

        <p class="lead">
          Cuéntanos qué te gustaría construir.
          Podemos comenzar definiendo una propuesta a tu medida.
        </p>

        <RouterLink
          :to="{
            name: 'solicitud',
            query: { paquete: 'personalizado' },
          }"
          class="button"
        >
          Consultar mi proyecto
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.section-heading {
  max-width: 720px;
  margin-bottom: 2.5rem;
}

/* Servicios */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

/* Paquetes: dos columnas permiten comparar sin comprimir el texto */
.pricing-section {
  background: var(--color-surface);
  border-block: 1px solid var(--color-border);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
}

.pricing-note {
  max-width: 800px;
  margin: 1.5rem 0 0;
  color: var(--color-muted);
  font-size: 0.875rem;
}

/* Preguntas frecuentes */
.faq-layout {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  align-items: start;
  gap: 3rem;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  box-shadow: none;
}

.faq-item summary {
  cursor: pointer;
  font-weight: 700;
}

.faq-item[open] summary {
  color: var(--color-primary);
}

.faq-item p {
  margin: 1rem 0 0;
  color: var(--color-muted);
}

/* Mascota del FAQ: centrada respecto al texto de arriba */
.faq-mascot {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.faq-mascot img {
  display: block;
  width: 100%;
  max-width: 280px;
  height: auto;
}

/* Respeta a quien prefiere menos animación */
@media (prefers-reduced-motion: reduce) {
  .faq-mascot {
    display: none;
  }
}

/* Cierre */
.custom-section {
  background:
    radial-gradient(
      ellipse at center,
      rgb(140 216 103 / 18%),
      transparent 70%
    ),
    var(--color-background);
  border-top: 1px solid var(--color-border);
}

.custom-content {
  text-align: center;
}

.custom-content .lead {
  margin: 0 auto 1.5rem;
}

/* Tablet */
@media (max-width: 900px) {
  .services-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .faq-layout {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .faq-mascot img {
    max-width: 200px;
  }
}

/* Móvil */
@media (max-width: 600px) {
  .services-grid,
  .pricing-grid {
    grid-template-columns: 1fr;
  }

  /* El ajolote se queda, más pequeño y pegado al texto */
  .faq-mascot {
    margin-top: 1rem;
  }

  .faq-mascot img {
    max-width: 150px;
  }

  /* Menos espacio entre el ajolote y la primera pregunta */
  .faq-layout .section-heading {
    margin-bottom: 1rem;
  }
}
</style>