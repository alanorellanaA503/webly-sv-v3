<script setup>
// Cada tarjeta recibe su contenido desde la página que la utiliza.
defineProps({
  titulo: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  icono: {
    type: [Object, Function],
    required: true,
  },
})
</script>

<template>
  <article class="card service-card">
    <div class="service-icon">
      <!-- Renderiza el componente de icono recibido por props -->
      <component :is="icono" :size="28" aria-hidden="true" />
    </div>

    <h3>{{ titulo }}</h3>
    <p>{{ descripcion }}</p>
  </article>
</template>

<style scoped>
.service-card {
  height: 100%;
  padding: 2rem;
  transition:
    transform 0.25s,
    border-color 0.25s,
    box-shadow 0.25s;
}

.service-card:hover {
  transform: translateY(-6px);
  border-color: var(--emerald);
  box-shadow: 0 18px 40px rgb(47 191 113 / 12%);
}

.service-icon {
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

.service-card h3 {
  font-size: 1.35rem;
}

.service-card p {
  margin-bottom: 0;
  color: var(--color-muted);
}

@media (prefers-reduced-motion: reduce) {
  .service-card {
    transition: none;
  }

  .service-card:hover {
    transform: none;
  }
}
</style>