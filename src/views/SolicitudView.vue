<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { MessageCircle, FileText, Send } from '@lucide/vue'

import ContactForm from '../components/ui/ContactForm.vue'

const ruta = useRoute()

// Leemos /solicitud?paquete=profesional.
// Si la URL contiene un valor inesperado, entregamos una cadena vacía.
const paqueteInicial = computed(() => {
  return typeof ruta.query.paquete === 'string'
    ? ruta.query.paquete
    : ''
})

const pasos = [
  {
    numero: '01',
    titulo: 'Describe tu idea',
    descripcion:
      'Selecciona un paquete y cuéntanos qué necesitas comunicar o construir.',
    icono: MessageCircle,
  },
  {
    numero: '02',
    titulo: 'Prepara tu consulta',
    descripcion:
      'El formulario organiza tus datos en un borrador de correo.',
    icono: FileText,
  },
  {
    numero: '03',
    titulo: 'Revisa y envía',
    descripcion:
      'Abre tu aplicación de correo, revisa el mensaje y envíalo desde allí.',
    icono: Send,
  },
]
</script>

<template>
  <div class="solicitud">
    <section
      class="page-section page-intro"
      aria-labelledby="solicitud-titulo"
    >
      <div class="container">
        <p class="eyebrow">Tu proyecto empieza aquí</p>

        <h1 id="solicitud-titulo">
          Una idea hoy.<br>
          Nuevas posibilidades mañana.
        </h1>

        <p class="lead">
          Cuéntanos lo que tienes en mente y elige un paquete
          como punto de partida para tu consulta.
        </p>
      </div>
    </section>

    <section class="page-section">
      <div class="container request-layout">
        <aside class="request-information">
          <p class="eyebrow">Un primer paso sencillo</p>
          <h2>De tu idea a una conversación.</h2>

          <div class="steps">
            <article
              v-for="paso in pasos"
              :key="paso.numero"
              class="step"
            >
              <span class="step-icon">
                <component
                  :is="paso.icono"
                  :size="24"
                  aria-hidden="true"
                />
              </span>

              <div>
                <p class="step-number">{{ paso.numero }}</p>
                <h3>{{ paso.titulo }}</h3>
                <p>{{ paso.descripcion }}</p>
              </div>
            </article>
          </div>

          <div class="card request-note">
            <h3>Una consulta, sin compromiso.</h3>

            <p>
              Webly es un proyecto académico. Este formulario
              no procesa pagos ni confirma contrataciones.
              Los precios y paquetes son referencias para la propuesta.
            </p>

            <RouterLink to="/servicios">
              Revisar servicios y paquetes
            </RouterLink>
          </div>
        </aside>

        <!-- El mismo componente, configurado para esta página -->
        <ContactForm
          mostrar-paquetes
          :paquete-inicial="paqueteInicial"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.request-layout {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  align-items: start;
  gap: 4rem;
}

.request-information > h2 {
  font-size: clamp(2rem, 4vw, 3rem);
}

.steps {
  display: grid;
  gap: 1.75rem;
  margin-block: 2rem;
}

.step {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.step-icon {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: var(--brand-gradient);
  color: var(--graphite);
}

.step-number {
  margin-bottom: 0.25rem;
  color: var(--color-primary);
  font-size: 0.875rem;
  font-weight: 700;
}

.step h3 {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.step p:last-child {
  margin-bottom: 0;
  color: var(--color-muted);
}

.request-note {
  box-shadow: none;
}

.request-note h3 {
  font-size: 1.15rem;
}

.request-note p {
  color: var(--color-muted);
  font-size: 0.9375rem;
}

.request-note a {
  color: var(--color-primary);
  font-weight: 700;
}

@media (max-width: 900px) {
  .request-layout {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}
</style>