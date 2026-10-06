<script setup>
import { RouterView } from 'vue-router'
import SiteNavbar from './components/layout/SiteNavbar.vue'
import SiteFooter from './components/layout/SiteFooter.vue'
</script>

<template>
  <div class="site-layout">
    <SiteNavbar />

    <main class="site-main">
      <RouterView />
    </main>

    <SiteFooter />
  </div>
</template>