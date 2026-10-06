<script setup>
import { RouterLink } from 'vue-router'
import {
  Target,
  Eye,
  Zap,
  ShieldCheck,
  Lightbulb,
  Sprout,
  Users,
} from '@lucide/vue'

import TeamCard from '../components/ui/TeamCard.vue'

// Función helper para que Vite procese correctamente las imágenes dinámicas de assets
const getImageUrl = (name) => {
  return new URL(`../assets/images/team/${name}`, import.meta.url).href
}

// Equipo original del proyecto académico.
const equipo = [
  {
    id: 'alan',
    nombre: 'Alan Orellana',
    rol: 'Líder del equipo',
    foto: getImageUrl('alanO.jpg')
  },
  {
    id: 'samuel',
    nombre: 'Samuel Montano',
    rol: 'Co-líder',
  },
  {
    id: 'giselle',
    nombre: 'Giselle Mejía',
    rol: 'Programadora fullstack',
    foto: getImageUrl('GiselleM.jpg')
  },
  {
    id: 'rocio',
    nombre: 'Rocío Rivas',
    rol: 'Diseñadora UI/UX',
    foto: getImageUrl('KarlaR.jpg')
  },
  {
    id: 'raul',
    nombre: 'Raúl Renderos',
    rol: 'Asesor de cuentas',
    foto: getImageUrl('RaulR.jpg')
  },
]

const valores = [
  {
    id: 'eficiencia',
    titulo: 'Eficiencia',
    descripcion:
      'Nos enfocamos en soluciones claras y funcionales que simplifiquen la presencia digital.',
    icono: Zap,
  },
  {
    id: 'responsabilidad',
    titulo: 'Responsabilidad',
    descripcion:
      'Cuidamos los detalles y asumimos con seriedad los compromisos de cada proyecto.',
    icono: ShieldCheck,
  },
  {
    id: 'creatividad',
    titulo: 'Creatividad',
    descripcion:
      'Combinamos diseño y tecnología para dar identidad a cada idea.',
    icono: Lightbulb,
  },
  {
    id: 'adaptabilidad',
    titulo: 'Adaptabilidad',
    descripcion:
      'Ajustamos nuestras propuestas a las necesidades y objetivos de cada emprendimiento.',
    icono: Sprout,
  },
  {
    id: 'colaboracion',
    titulo: 'Trabajo en equipo',
    descripcion:
      'Compartimos conocimientos y perspectivas para construir mejores soluciones.',
    icono: Users,
  },
]
</script>

<template>
  <div class="nosotros">
    <!-- Presentación -->
    <section
      class="page-section page-intro"
      aria-labelledby="nosotros-titulo"
    >
      <div class="container">
        <p class="eyebrow">El equipo detrás de Webly</p>

        <h1 id="nosotros-titulo">
          Tecnología con<br>
          un lado humano.
        </h1>

        <p class="lead">
          Somos un equipo que combina diseño, desarrollo y creatividad
          para explorar nuevas formas de conectar negocios con personas.
        </p>
      </div>
    </section>

    <!-- Contexto académico -->
    <section class="page-section" aria-labelledby="historia-titulo">
      <div class="container story-layout">
        <div>
          <p class="eyebrow">Nuestro origen</p>

          <h2 id="historia-titulo">
            Una idea que sigue<br>
            tomando forma.
          </h2>
        </div>

        <div class="story-content">
          <p class="lead">
            Webly nació como proyecto final de la materia
            Diseño de Páginas Web, representando una idea de negocio
            hipotética para emprendedores y pequeñas empresas de El Salvador.
          </p>

          <p>
            La propuesta busca acercar el desarrollo web a negocios que
            necesitan presentar sus servicios y fortalecer su presencia digital.
          </p>

          <p>
            Esta tercera versión utiliza Vue para seguir aprendiendo,
            mejorar la experiencia de usuario y organizar el código
            mediante componentes reutilizables.
          </p>
        </div>
      </div>
    </section>

    <!-- Propósito -->
    <section class="page-section purpose-section">
      <div class="container purpose-grid">
        <article class="card purpose-card">
          <div class="purpose-icon">
            <Target :size="28" aria-hidden="true" />
          </div>

          <h2>Nuestra misión</h2>

          <p>
            Proponer soluciones digitales accesibles, creativas y
            funcionales que ayuden a los emprendimientos salvadoreños
            a presentar su trabajo y conectar con sus clientes.
          </p>
        </article>

        <article class="card purpose-card">
          <div class="purpose-icon">
            <Eye :size="28" aria-hidden="true" />
          </div>

          <h2>Nuestra visión</h2>

          <p>
            Convertir Webly en una propuesta de desarrollo web cercana,
            reconocida por su enfoque humano, calidad y capacidad
            de adaptarse a las necesidades de pequeños negocios.
          </p>
        </article>
      </div>
    </section>

    <!-- Equipo -->
    <section class="page-section" aria-labelledby="equipo-titulo">
    <div class="container">
      <div class="section-heading">
        <p class="eyebrow">Equipo original</p>
        <h2 id="equipo-titulo">
          Cinco perspectivas.<br>
          Una misma dirección.
        </h2>
        <p class="lead">
          Cada integrante aporta una mirada distinta al diseño,
          la organización y el desarrollo del proyecto.
        </p>
      </div>

      <div class="team-grid">
        <TeamCard
          v-for="persona in equipo"
          :key="persona.id"
          :nombre="persona.nombre"
          :rol="persona.rol"
          :foto="persona.foto"
        />
      </div>
    </div>
  </section>

    <!-- Valores -->
    <section
      class="page-section values-section"
      aria-labelledby="valores-titulo"
    >
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Lo que nos mueve</p>
          <h2 id="valores-titulo">Nuestros valores.</h2>

          <p class="lead">
            La forma de trabajar es tan importante como el resultado.
          </p>
        </div>

        <div class="values-grid">
          <article
            v-for="valor in valores"
            :key="valor.id"
            class="value-item"
          >
            <component
              :is="valor.icono"
              :size="26"
              class="value-icon"
              aria-hidden="true"
            />

            <div>
              <h3>{{ valor.titulo }}</h3>
              <p>{{ valor.descripcion }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Siguiente paso -->
    <section class="page-section">
      <div class="container closing-content">
        <p class="eyebrow">Sigamos conversando</p>
        <h2>Conozcamos tu próxima idea.</h2>

        <p class="lead">
          Explora nuestros servicios o cuéntanos qué te gustaría construir.
        </p>

        <RouterLink to="/contacto" class="button">
          Contactar con Webly
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

/* Historia: título y contenido en dos columnas */
.story-layout {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
}

.story-content p {
  color: var(--color-muted);
}

.story-content p:last-child {
  margin-bottom: 0;
}

/* Misión y visión */
.purpose-section {
  background: var(--color-surface);
  border-block: 1px solid var(--color-border);
}

.purpose-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
}

.purpose-card {
  padding: 2rem;
}

.purpose-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  margin-bottom: 1.5rem;
  border-radius: 18px;
  background: var(--brand-gradient);
  color: var(--graphite);
}

.purpose-card h2 {
  font-size: 1.75rem;
}

.purpose-card p {
  margin-bottom: 0;
  color: var(--color-muted);
}

/* Equipo */
.team-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.team-grid > * {
  /* 3 por fila: (100% - 2 gaps) / 3 */
  flex: 0 0 calc((100% - 3rem) / 3);
  max-width: calc((100% - 3rem) / 3);
}

/* Valores: una composición más ligera que las tarjetas del equipo */
.values-section {
  background: var(--color-surface);
  border-block: 1px solid var(--color-border);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
}

.value-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.value-icon {
  flex-shrink: 0;
  color: var(--color-primary);
}

.value-item h3 {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.value-item p {
  margin-bottom: 0;
  color: var(--color-muted);
}

/* Cierre de la página */
.closing-content {
  text-align: center;
}

.closing-content .lead {
  margin: 0 auto 1.5rem;
}

/* Tablet */
@media (max-width: 900px) {
  .story-layout {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .values-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .team-grid > * {
    /* 2 por fila */
    flex: 0 0 calc((100% - 1.5rem) / 2);
    max-width: calc((100% - 1.5rem) / 2);
  }
}

/* Móvil */
@media (max-width: 600px) {
  .purpose-grid,
  .values-grid {
    grid-template-columns: 1fr;
  }

  .team-grid > * {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .purpose-card {
    padding: 1.5rem;
  }
}

.team-avatar {
  width: 88px;
  height: 88px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  object-fit: cover;
  /* Agrega un borde fino para enmarcar bien la fotografía */
  border: 2px solid var(--emerald);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}
</style>