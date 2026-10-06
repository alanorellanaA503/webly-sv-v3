<script setup>
import { RouterLink } from 'vue-router'
import { Code, Layers, Wrench } from '@lucide/vue'
import ServiceCard from '../components/ui/ServiceCard.vue'

// No necesitamos ref: por ahora esta información no cambia.
const servicios = [
  {
    id: 'sitios-web',
    titulo: 'Sitios web',
    descripcion:
      'Presenta tu negocio con una web clara, adaptable y diseñada para conectar con tus clientes.',
    icono: Code,
  },
  {
    id: 'desarrollo',
    titulo: 'Desarrollo a medida',
    descripcion:
      'Damos forma a interfaces y propuestas de aplicaciones web según las necesidades de tu idea.',
    icono: Layers,
  },
  {
    id: 'mantenimiento',
    titulo: 'Mantenimiento web',
    descripcion:
      'Mantén tu contenido actualizado y mejora la experiencia de quienes visitan tu sitio.',
    icono: Wrench,
  },
]
</script>

<template>
  <div class="inicio">
    <!-- Presentación principal -->
    <section class="hero" aria-labelledby="hero-titulo">
      <div class="container hero-content">
        <p class="eyebrow">
          Websites, development, webapp
        </p>

        <h1 id="hero-titulo">
          Tu idea.<br>
          <span>Su mejor versión digital.</span>
        </h1>

        <p class="hero-description">
          Diseño y desarrollo web para emprendedores y pequeñas empresas.
          Transformamos lo que imaginas en una presencia digital con identidad.
        </p>

        <div class="hero-actions">
          <RouterLink to="/servicios" class="button">
            Explorar servicios
          </RouterLink>

          <RouterLink to="/portafolio" class="button button-secondary">
            Ver portafolio
          </RouterLink>
        </div>

        <p class="hero-note">
          Desde El Salvador, para tu próxima idea.
        </p>
      </div>
    </section>

    <!-- Un mismo componente, tres conjuntos de datos -->
    <section class="page-section" aria-labelledby="servicios-titulo">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Lo que hacemos</p>

          <h2 id="servicios-titulo">
            Soluciones para dar<br>tu siguiente paso.
          </h2>

          <p class="lead">
            Una buena web combina diseño, claridad y funcionalidad.
            Empezamos por entender lo que necesitas.
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

    <!-- Presentación breve del proyecto -->
    <section class="page-section about-section">
      <div class="container about-layout">
        <div>
          <p class="eyebrow">Conoce Webly</p>

          <h2>
            Ideas distintas.<br>
            Una misma dirección.
          </h2>
        </div>

        <div class="about-content">
          <p class="lead">
            Webly nació como una idea de negocio académica enfocada en
            acercar el desarrollo web a emprendedores salvadoreños.
          </p>

          <p>
            Combinamos creatividad, trabajo en equipo y tecnología para
            explorar soluciones digitales útiles y accesibles.
          </p>

          <RouterLink to="/nosotros" class="text-link">
            Conoce nuestro equipo
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Invitación a iniciar una consulta -->
    <section class="page-section">
      <div class="container">
        <div class="contact-banner">
          <div>
            <p class="eyebrow">Hablemos de tu proyecto</p>

            <h2>
              Una buena idea merece<br>
              una gran presencia digital.
            </h2>

            <p>
              Cuéntanos qué tienes en mente y demos el primer paso.
            </p>
          </div>

          <RouterLink to="/solicitud" class="button">
            Cuéntanos tu idea
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Hero: ocupa la pantalla disponible debajo del navbar */
.hero {
  min-height: calc(100svh - var(--navbar-height));
  display: flex;
  align-items: center;
  padding-block: 5rem;
  text-align: center;
  background:
    radial-gradient(
      ellipse at 15% 20%,
      rgb(140 216 103 / 25%),
      transparent 50%
    ),
    radial-gradient(
      ellipse at 85% 75%,
      rgb(47 191 113 / 18%),
      transparent 50%
    ),
    var(--color-background);
}

.hero-content {
  max-width: 1000px;
}

.hero h1 {
  font-size: clamp(2.7rem, 6.5vw, 5.4rem);
}

.hero h1 span {
  color: var(--color-primary);
}

.hero-description {
  max-width: 650px;
  margin: 1.5rem auto 2rem;
  color: var(--color-muted);
  font-size: 1.125rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.button-secondary {
  color: var(--color-text);
  background: var(--color-surface);
  border-color: var(--color-border);
}

.button-secondary:hover {
  background: #eaf5ee;
}

.hero-note {
  margin: 2rem 0 0;
  color: var(--color-muted);
  font-size: 0.875rem;
}

/* Sección de servicios */
.section-heading {
  max-width: 700px;
  margin-bottom: 2.5rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

/* Presentación breve */
.about-section {
  background: var(--color-surface);
  border-block: 1px solid var(--color-border);
}

.about-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  gap: 4rem;
}

.about-content > p:not(.lead) {
  color: var(--color-muted);
}

.text-link {
  display: inline-block;
  margin-top: 0.5rem;
  color: var(--color-primary);
  font-weight: 700;
}

/* Banner con la identidad de Webly */
.contact-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: clamp(2rem, 5vw, 4rem);
  border-radius: var(--radius);
  background: var(--brand-gradient);
}

.contact-banner .eyebrow,
.contact-banner p {
  color: var(--graphite);
}

.contact-banner p:last-child {
  margin-bottom: 0;
}

.contact-banner > .button {
  flex-shrink: 0;
}

/* Tablet */
@media (max-width: 1000px) {
  .services-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .about-layout {
    gap: 2rem;
  }

  .contact-banner {
    flex-direction: column;
    align-items: flex-start;
  }
}

/* Móvil */
@media (max-width: 640px) {
  .hero {
    padding-block: 3.5rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .services-grid,
  .about-layout {
    grid-template-columns: 1fr;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-actions .button {
    width: 100%;
  }
}
</style>