<script setup>
import { RouterLink } from 'vue-router'

const anio = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer-content">
       <RouterLink to="/" class="brand">
        <img src="@/assets/logoOfWebly.svg" alt="Webly Logo" class="brand-logo" />
        </RouterLink>

      <small>
        © {{ anio }} Webly SV · Proyecto académico
      </small>

      <a href="mailto:weblysv@gmail.com">
        Escríbenos
      </a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding-block: 1.5rem;
  border-top: 1px solid var(--color-border);
  background: var(--color-surface);
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

small {
  color: var(--color-muted);
  font-size: 0.875rem;
}

/* Logo en estado normal */
.brand-logo {
  height: 70px; 
  width: auto;
  object-fit: contain;
  
  /* Zoom para compensar márgenes transparentes */
  transform: scale(1.35); 
  transform-origin: center; 

  /* Transición fluida */
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), filter 0.3s ease;
  
  /* Sombra base sutil tintada con la paleta marca */
  filter: drop-shadow(0 2px 5px rgba(47, 191, 113, 0.25));
}

/* Efecto Hover discreto con resplandor de la marca */
.brand:hover .brand-logo {
  /* Elevación suave y ligera escala */
  transform: translateY(-2px) scale(1.38);
  
  /* Resplandor combinado con el verde principal y el graphite para profundidad */
  filter: drop-shadow(0 4px 10px rgba(140, 216, 103, 0.45))
          drop-shadow(0 1px 2px rgba(54, 53, 55, 0.15));
}

/* Ajuste responsivo */
@media (max-width: 768px) {
  .brand-logo {
    height: 40px;
    transform: scale(1.2);
  }
}
</style>