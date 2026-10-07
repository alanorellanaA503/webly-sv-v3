<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { Check } from '@lucide/vue'

const props = defineProps({
  titulo: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  frecuencia: {
    type: String,
    default: 'por proyecto',
  },
  caracteristicas: {
    type: Array,
    required: true,
  },
  paquete: {
    type: String,
    required: true,
  },
  destacado: {
    type: Boolean,
    default: false,
  },
})

// El precio sigue siendo un número; aquí calculamos cómo mostrarlo.
const precioFormateado = computed(() => {
  return new Intl.NumberFormat('es-SV', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(props.precio)
})
</script>

<template>
  <article
    class="card price-card"
    :class="{ destacado }"
  >
    <span v-if="destacado" class="plan-badge">
      Más completo
    </span>

    <h3>{{ titulo }}</h3>
    <p class="plan-description">{{ descripcion }}</p>

    <div class="plan-price">
      <span>{{ precioFormateado }}</span>
      <small>{{ frecuencia }}</small>
    </div>

    <ul class="features">
      <li
        v-for="caracteristica in caracteristicas"
        :key="caracteristica"
      >
        <Check :size="20" aria-hidden="true" />
        <span>{{ caracteristica }}</span>
      </li>
    </ul>

    <!-- Enviamos el identificador del paquete en la URL -->
    <RouterLink
      :to="{
        name: 'solicitud',
        query: { paquete },
      }"
      class="button"
      :aria-label="`Consultar paquete ${titulo}`"
    >
      Consultar paquete
    </RouterLink>
  </article>
</template>

<style scoped>
.price-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem;
}

.price-card.destacado {
  border-color: var(--color-primary);
  box-shadow: 0 12px 32px rgb(47 191 113 / 15%);
}

.plan-badge {
  align-self: flex-start;
  margin-bottom: 1rem;
  padding: 0.3rem 0.8rem;
  border-radius: 100px;
  background: var(--brand-gradient);
  color: var(--graphite);
  font-size: 0.875rem;
  font-weight: 700;
}

.price-card h3 {
  font-size: 1.5rem;
}

.plan-description {
  color: var(--color-muted);
}

.plan-price {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem;
  margin-block: 1rem 1.5rem;
}

.plan-price > span {
  font-family: var(--font-heading);
  font-size: 3rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.05em;
}

.plan-price small {
  color: var(--color-muted);
  font-size: 0.875rem;
}

.features {
  /* Empuja el botón abajo para alinear las tarjetas de una misma fila */
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  margin: 0 0 2rem;
  padding: 0;
  list-style: none;
}

.features li {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
}

.features svg {
  flex-shrink: 0;
  margin-top: 0.2rem;
  color: var(--color-primary);
}

@media (max-width: 600px) {
  .price-card {
    padding: 1.5rem;
  }
}
</style>