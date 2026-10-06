import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

// Una importación aplica los estilos globales a toda la aplicación.
import './assets/styles/main.css'

createApp(App)
  .use(router)
  .mount('#app')