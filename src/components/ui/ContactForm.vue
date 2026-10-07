<script setup>
import { reactive, ref, computed, watch } from 'vue'
import { Mail, Send } from '@lucide/vue'

// reactive agrupa los campos del formulario en un objeto.
const formulario = reactive({
  nombre: '',
  correo: '',
  negocio: '',
  mensaje: '',
})

const preparado = ref(false)
const aviso = ref('')

// El enlace se calcula utilizando los valores del formulario.
const enlaceCorreo = computed(() => {
  const asunto = 'Consulta desde Webly SV'

  const contenido = [
    'Hola, equipo Webly:',
    '',
    `Nombre: ${formulario.nombre}`,
    `Correo: ${formulario.correo}`,
    `Negocio: ${formulario.negocio || 'Sin indicar'}`,
    '',
    formulario.mensaje,
  ].join('\n')

  return (
    'mailto:weblysv@gmail.com' +
    `?subject=${encodeURIComponent(asunto)}` +
    `&body=${encodeURIComponent(contenido)}`
  )
})

function prepararConsulta() {
  // La validación HTML comprueba los campos antes del evento submit.
  // Esta comprobación adicional evita nombres o mensajes vacíos.
  if (
    formulario.nombre.trim().length < 2 ||
    formulario.mensaje.trim().length < 10
  ) {
    preparado.value = false
    aviso.value = 'Escribe un nombre válido y un mensaje de al menos 10 caracteres.'
    return
  }

  preparado.value = true
  aviso.value =
    'Tu consulta está preparada. Abre tu correo para revisarla y enviarla.'
}

// Si se editan los datos, pedimos preparar nuevamente la consulta.
watch(formulario, () => {
  preparado.value = false
  aviso.value = ''
})
</script>

<template>
  <form class="card contact-form" @submit.prevent="prepararConsulta">
    <div class="form-heading">
      <span class="form-icon">
        <Mail :size="26" aria-hidden="true" />
      </span>

      <h2>Cuéntanos tu idea.</h2>
      <p>Empecemos por conocer qué te gustaría construir.</p>
    </div>

    <div class="form-grid">
      <div class="field">
        <label for="contacto-nombre">Nombre</label>

        <input
          id="contacto-nombre"
          v-model.trim="formulario.nombre"
          name="nombre"
          type="text"
          autocomplete="name"
          placeholder="Tu nombre"
          minlength="2"
          maxlength="100"
          required
        >
      </div>

      <div class="field">
        <label for="contacto-correo">Correo electrónico</label>

        <input
          id="contacto-correo"
          v-model.trim="formulario.correo"
          name="correo"
          type="email"
          autocomplete="email"
          placeholder="tu@correo.com"
          maxlength="160"
          required
        >
      </div>
    </div>

    <div class="field">
      <label for="contacto-negocio">
        Nombre del negocio <span>(opcional)</span>
      </label>

      <input
        id="contacto-negocio"
        v-model.trim="formulario.negocio"
        name="negocio"
        type="text"
        autocomplete="organization"
        placeholder="¿Cómo se llama tu idea?"
        maxlength="120"
      >
    </div>

    <div class="field">
      <label for="contacto-mensaje">Mensaje</label>

      <textarea
        id="contacto-mensaje"
        v-model.trim="formulario.mensaje"
        name="mensaje"
        rows="5"
        placeholder="Cuéntanos qué necesitas y qué te gustaría lograr."
        minlength="10"
        maxlength="1500"
        required
      ></textarea>
    </div>

    <button class="button submit-button" type="submit">
      <Send :size="18" aria-hidden="true" />
      Preparar consulta
    </button>

    <!-- Región presente desde el inicio para anunciar los cambios -->
    <p class="form-status" role="status">
      {{ aviso }}
    </p>

    <a
      v-if="preparado"
      :href="enlaceCorreo"
      class="button email-button"
    >
      <Mail :size="18" aria-hidden="true" />
      Abrir mi correo
    </a>

    <p class="form-note">
      Este formulario prepara un borrador y no envía ni guarda tus datos.
      Necesitas una aplicación de correo configurada.
      También puedes escribir a
      <a href="mailto:weblysv@gmail.com">weblysv@gmail.com</a>.
    </p>
  </form>
</template>

<style scoped>
.contact-form {
  padding: clamp(1.5rem, 4vw, 2.5rem);
}

.form-heading {
  margin-bottom: 2rem;
}

.form-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  margin-bottom: 1.25rem;
  border-radius: 16px;
  background: var(--brand-gradient);
  color: var(--graphite);
}

.form-heading h2 {
  font-size: 1.8rem;
}

.form-heading p {
  color: var(--color-muted);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.field {
  margin-bottom: 1.25rem;
}

.field label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.field label span {
  color: var(--color-muted);
  font-size: 0.875rem;
  font-weight: 400;
}

.field input,
.field textarea {
  display: block;
  width: 100%;
  min-height: 48px;
  padding: 0.85rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  background: var(--color-background);
  color: var(--color-text);
}

.field textarea {
  resize: vertical;
}

.field input::placeholder,
.field textarea::placeholder {
  color: var(--color-muted);
  opacity: 1;
}

.field input:focus,
.field textarea:focus {
  border-color: var(--color-primary);
}

.submit-button,
.email-button {
  width: 100%;
}

.form-status {
  margin: 1rem 0;
  color: var(--color-primary);
  font-weight: 600;
}

.form-status:empty {
  margin: 0;
}

.email-button {
  margin-top: 0.5rem;
}

.form-note {
  margin: 1.5rem 0 0;
  color: var(--color-muted);
  font-size: 0.875rem;
}

@media (max-width: 600px) {
  .form-grid {
    grid-template-columns: 1fr;
    gap: 0;
  }
}
</style>