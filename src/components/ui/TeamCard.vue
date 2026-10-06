<script setup>
import { computed } from 'vue'

const props = defineProps({
  nombre: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
    default: '',
  },
})

// Las iniciales se calculan a partir del nombre recibido.
// Si cambia el nombre, Vue recalcula este resultado.
const iniciales = computed(() => {
  return props.nombre
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(palabra => palabra.charAt(0))
    .join('')
    .toUpperCase()
})
</script>

<template>
  <article class="card team-card">
    <img
      v-if="foto"
      class="team-avatar"
      :src="foto"
      :alt="`Fotografía de ${nombre}`"
      width="88"
      height="88"
      loading="lazy"
    >

    <div v-else class="team-avatar initials" aria-hidden="true">
      {{ iniciales }}
    </div>

    <h3>{{ nombre }}</h3>
    <p>{{ rol }}</p>
  </article>
</template>

<style scoped>
.team-card {
  height: 100%;
  text-align: center;
  transition: transform 0.25s, border-color 0.25s;
}

.team-card:hover {
  transform: translateY(-5px);
  border-color: var(--emerald);
}

.team-avatar {
  width: 88px;
  height: 88px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  object-fit: cover;
}

.initials {
  display: grid;
  place-items: center;
  background: var(--brand-gradient);
  color: var(--graphite);
  font-family: var(--font-heading);
  font-size: 1.75rem;
  font-weight: 700;
}

.team-card h3 {
  font-size: 1.2rem;
  letter-spacing: -0.02em;
}

.team-card p {
  margin-bottom: 0;
  color: var(--color-muted);
  font-size: 0.9375rem;
}

@media (prefers-reduced-motion: reduce) {
  .team-card {
    transition: none;
  }

  .team-card:hover {
    transform: none;
  }
}
</style>