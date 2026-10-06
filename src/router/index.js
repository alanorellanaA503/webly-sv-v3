import { createRouter, createWebHistory } from 'vue-router'

import InicioView from '../views/InicioView.vue'
import NosotrosView from '../views/NosotrosView.vue'
import ServiciosView from '../views/ServiciosView.vue'
import PortafolioView from '../views/PortafolioView.vue'
import ContactoView from '../views/ContactoView.vue'
import SolicitudView from '../views/SolicitudView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  // Cada URL tiene una vista asociada.
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: InicioView,
    },
    {
      path: '/nosotros',
      name: 'nosotros',
      component: NosotrosView,
    },
    {
      path: '/servicios',
      name: 'servicios',
      component: ServiciosView,
    },
    {
      path: '/portafolio',
      name: 'portafolio',
      component: PortafolioView,
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: ContactoView,
    },
    {
      path: '/solicitud',
      name: 'solicitud',
      component: SolicitudView,
    },

    // Base inicial: una dirección desconocida vuelve al inicio.
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    // Atrás/adelante recupera la posición; una ruta nueva empieza arriba.
    return savedPosition || { top: 0 }
  },
})

export default router