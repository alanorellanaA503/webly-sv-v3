<script setup>
import { Maximize2 } from '@lucide/vue'

defineProps({
  titulo: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    required: true,
  },
})

// La tarjeta comunica una acción; la vista decide cómo responder.
const emit = defineEmits(['abrir'])
</script>

<template>
  <article class="project-card">
    <button
      class="project-preview"
      type="button"
      :aria-label="`Ver detalles de ${titulo}`"
      @click="emit('abrir')"
    >
      <img
        :src="imagen"
        :alt="`Vista previa del proyecto ${titulo}`"
        width="960"
        height="600"
        loading="lazy"
      >

      <span class="preview-label">
        <Maximize2 :size="16" aria-hidden="true" />
        Ampliar
      </span>
    </button>

    <div class="project-content">
      <p class="eyebrow">{{ categoria }}</p>
      <h3>{{ titulo }}</h3>
      <p class="project-description">{{ descripcion }}</p>

      <button
        class="project-link"
        type="button"
        :aria-label="`Conocer el proyecto ${titulo}`"
        @click="emit('abrir')"
      >
        Conocer proyecto
      </button>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  height: 100%;
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  background: var(--color-surface);
  box-shadow: var(--shadow);
  transition: transform 0.25s, border-color 0.25s;
}

.project-card:hover {
  transform: translateY(-5px);
  border-color: var(--emerald);
}

.project-preview {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  background: #eaf5ee;
}

.project-preview img {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 10;
  object-fit: contain;
}

.preview-label {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.8rem;
  border-radius: 100px;
  background: var(--color-primary);
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 600;
}

.project-content {
  padding: 1.75rem;
}

.project-content .eyebrow {
  margin-bottom: 0.75rem;
}

.project-content h3 {
  font-size: 1.6rem;
}

.project-description {
  color: var(--color-muted);
}

.project-link {
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--color-primary);
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 4px;
}

@media (prefers-reduced-motion: reduce) {
  .project-card {
    transition: none;
  }

  .project-card:hover {
    transform: none;
  }
}
</style>