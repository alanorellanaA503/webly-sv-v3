<script setup>
import { Mail, MessageCircle, Clock, Globe } from '@lucide/vue'
import ContactForm from '../components/ui/ContactForm.vue'

// Helper para que Vite procese correctamente el SVG del ajolote.
const ajoloteCorreoUrl = new URL(
  '../assets/illustrations/axolotl-mail.svg',
  import.meta.url
).href

const whatsapp =
  'https://api.whatsapp.com/message/5SS26MIVPHL7G1?autoload=1&app_absent=0'

const redes = [
  {
    id: 'instagram',
    nombre: 'Instagram',
    enlace: 'https://www.instagram.com/webly_sv/',
  },
  {
    id: 'facebook',
    nombre: 'Facebook',
    enlace:
      'https://www.facebook.com/people/Webly-El-Salvador/61574786935877/',
  },
]
</script>

<template>
  <div class="contacto">
    <!-- Presentación: texto a la izquierda, ilustración a la derecha -->
    <section
      class="page-section page-intro"
      aria-labelledby="contacto-titulo"
    >
      <div class="container intro-layout">
        <div class="intro-text">
          <p class="eyebrow">Conectemos</p>

          <h1 id="contacto-titulo">
            Tu próxima idea<br>
            empieza aquí.
          </h1>

          <p class="lead">
            ¿Tienes una pregunta o un proyecto en mente?
            Elige cómo conversar con nosotros.
          </p>
        </div>

        <!-- Ilustración decorativa -->
        <div class="intro-illustration">
          <img
            :src="ajoloteCorreoUrl"
            alt=""
            width="400"
            height="400"
          />
        </div>
      </div>
    </section>

    <!-- Información y formulario -->
    <section class="page-section">
      <div class="container contact-layout">
        <aside class="contact-information" aria-labelledby="canales-titulo">
          <p class="eyebrow">Hablemos de tu proyecto</p>

          <h2 id="canales-titulo">
            Cerca de ti,<br>
            desde donde estés.
          </h2>

          <p class="lead">
            Nuestra propuesta es virtual: podemos comenzar
            una conversación sin que tengas que visitar una oficina.
          </p>

          <div class="contact-channels">
            <a
              href="mailto:weblysv@gmail.com"
              class="card channel-card"
            >
              <span class="channel-icon">
                <Mail :size="24" aria-hidden="true" />
              </span>

              <div>
                <h3>Escríbenos por correo</h3>
                <p>weblysv@gmail.com</p>
              </div>
            </a>

            <a :href="whatsapp" class="card channel-card">
              <span class="channel-icon">
                <MessageCircle :size="24" aria-hidden="true" />
              </span>

              <div>
                <h3>Conversemos por WhatsApp</h3>
                <p>Comparte tu idea o consulta.</p>
              </div>
            </a>
          </div>

          <div class="availability">
            <Clock :size="22" aria-hidden="true" />

            <div>
              <h3>Horario de referencia</h3>
              <p>Lunes a sábado · 8:00 a. m. a 6:00 p. m.</p>
            </div>
          </div>

          <div class="social-section">
            <h3>También estamos en redes</h3>

            <div class="social-links">
              <a
                v-for="red in redes"
                :key="red.id"
                :href="red.enlace"
                target="_blank"
                rel="noopener noreferrer"
              >
                <!-- Instagram -->
                <svg
                  v-if="red.id === 'instagram'"
                  class="social-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>

                <!-- Facebook -->
                <svg
                  v-else-if="red.id === 'facebook'"
                  class="social-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>

                {{ red.nombre }}
              </a>
            </div>
          </div>
        </aside>

        <ContactForm />
      </div>
    </section>

    <!-- Panel informativo adicional: atención virtual -->
    <section class="page-section virtual-section">
      <div class="container">
        <div class="virtual-panel">
          <span class="virtual-icon">
            <Globe :size="40" aria-hidden="true" />
          </span>

          <div>
            <p class="eyebrow">Desde El Salvador</p>
            <h2>Una conexión, muchas posibilidades.</h2>

            <p>
              Webly es una idea de negocio académica con enfoque
              de atención virtual. Podemos comenzar por un mensaje,
              conocer tu necesidad y explorar una propuesta.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Presentación en dos columnas */
.intro-layout {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 3rem;
}

.intro-illustration {
  display: flex;
  justify-content: center;
}

.intro-illustration img {
  display: block;
  width: 100%;
  max-width: 380px;
  height: auto;
}

.contact-layout {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  align-items: start;
  gap: 4rem;
}

.contact-information h2 {
  font-size: clamp(2rem, 4vw, 3rem);
}

/* Canales de contacto: toda la tarjeta funciona como enlace */
.contact-channels {
  display: grid;
  gap: 1rem;
  margin-block: 2rem;
}

.channel-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  transition: border-color 0.25s, transform 0.25s;
}

.channel-card:hover {
  border-color: var(--emerald);
  transform: translateY(-3px);
}

.channel-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: var(--brand-gradient);
  color: var(--graphite);
}

.channel-card h3,
.availability h3,
.social-section h3 {
  margin-bottom: 0.4rem;
  font-size: 1rem;
  letter-spacing: -0.02em;
}

.channel-card p,
.availability p {
  margin: 0;
  color: var(--color-muted);
  font-size: 0.9375rem;
  overflow-wrap: anywhere;
}

.availability {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
}

.availability > svg {
  flex-shrink: 0;
  color: var(--color-primary);
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 100px;
  background: var(--color-surface);
  color: var(--color-primary);
  font-weight: 600;
  text-decoration: none;
}

.social-links a:hover {
  border-color: var(--color-primary);
}

.social-icon {
  flex-shrink: 0;
}

/* Panel adicional con degradado de la marca */
.virtual-section {
  padding-top: 0;
}

.virtual-panel {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: clamp(2rem, 5vw, 3rem);
  border-radius: var(--radius);
  background: var(--brand-gradient);
}

.virtual-icon {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 88px;
  height: 88px;
  border: 1px solid rgb(54 53 55 / 20%);
  border-radius: 50%;
  color: var(--graphite);
}

.virtual-panel .eyebrow {
  color: var(--graphite);
}

.virtual-panel h2 {
  font-size: clamp(1.7rem, 3vw, 2.5rem);
}

.virtual-panel p:last-child {
  max-width: 760px;
  margin-bottom: 0;
}

/* Tablet */
@media (max-width: 900px) {
  .intro-layout {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .intro-illustration img {
    max-width: 240px;
  }

  .contact-layout {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

/* Móvil */
@media (max-width: 600px) {
  .intro-illustration img {
    max-width: 180px;
  }

  .virtual-panel {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }

  .channel-card {
    padding: 1.25rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .channel-card {
    transition: none;
  }

  .channel-card:hover {
    transform: none;
  }
}
</style>