<script setup>
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Menu, X } from '@lucide/vue'

// ref crea un estado reactivo: la interfaz cambia cuando cambia su valor.
const menuAbierto = ref(false)
const ruta = useRoute()

const enlaces = [
  { texto: 'Inicio', destino: '/' },
  { texto: 'Nosotros', destino: '/nosotros' },
  { texto: 'Servicios', destino: '/servicios' },
  { texto: 'Portafolio', destino: '/portafolio' },
  { texto: 'Contacto', destino: '/contacto' },
]

// Cerramos el menú cuando cambia la ruta.
watch(() => ruta.fullPath, () => {
  menuAbierto.value = false
})
</script>

<template>
  <header class="navbar">
    <div
      class="container navbar-content"
      @keydown.esc="menuAbierto = false"
    >
     <RouterLink to="/" class="brand">
  <img src="@/assets/logoOfWebly.svg" alt="Webly Logo" class="brand-logo" />
</RouterLink>

      <button
        class="menu-button"
        type="button"
        :aria-expanded="menuAbierto"
        :aria-label="menuAbierto ? 'Cerrar menú' : 'Abrir menú'"
        aria-controls="menu-principal"
        @click="menuAbierto = !menuAbierto"
      >
        <X v-if="menuAbierto" :size="24" />
        <Menu v-else :size="24" />
      </button>

      <nav
        id="menu-principal"
        class="nav-links"
        :class="{ abierto: menuAbierto }"
        aria-label="Navegación principal"
      >
        <RouterLink
          v-for="enlace in enlaces"
          :key="enlace.destino"
          :to="enlace.destino"
          @click="menuAbierto = false"
        >
          {{ enlace.texto }}
        </RouterLink>

        <RouterLink to="/solicitud" class="button">
          Hablemos
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  inset: 0 0 auto;
  z-index: 100;
  background: rgb(255 255 255 / 95%);
  border-bottom: 1px solid var(--color-border);
  backdrop-filter: blur(12px);
}

.navbar-content {
  min-height: var(--navbar-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-links a {
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9375rem;
}

.nav-links a:not(.button):hover,
.nav-links a:not(.button).router-link-exact-active {
  color: var(--color-primary);
  text-decoration: underline;
}

.menu-button {
  display: none;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  background: var(--color-surface);
  color: var(--color-text);
}

@media (max-width: 900px) {
  .navbar-content {
    flex-wrap: wrap;
    gap: 0;
  }

  .menu-button {
    display: inline-flex;
  }

  .nav-links {
    display: none;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding-bottom: 1rem;
    max-height: calc(100dvh - var(--navbar-height));
    overflow-y: auto;
  }

  .nav-links.abierto {
    display: flex;
  }

  .nav-links a {
    padding: 0.8rem;
  }
}


/* Logo en estado normal (Limpio y claro) */
.brand-logo {
  height: 70px; 
  width: auto;
  object-fit: contain;
  
  /* Zoom para compensar márgenes transparentes */
  transform: scale(1.35); 
  transform-origin: center; 

  
}

/* Hover: Luz brillante y suave sin sombras oscuras */
.brand:hover .brand-logo {
  /* Elevación ligera */
  transform: translateY(-2px) scale(1.38);
  
  /* Resplandor verde fresco + ligero aumento de brillo al 3D */
  filter: drop-shadow(0 4px 14px rgba(140, 216, 103, 0.45)) brightness(1.05);
}

/* Ajuste responsivo */
@media (max-width: 768px) {
  .brand-logo {
    height: 40px;
    transform: scale(1.2);
  }
}
</style>