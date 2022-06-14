<template>
  <va-sidebar>
    <h1>WSL helper</h1>

    <va-sidebar-item v-for="route in routes" :key="route.title" :to="route.path" :active="route.path === currentRoute.path">
      <va-sidebar-item-content>
        <va-sidebar-item-title> {{ route.title }} </va-sidebar-item-title>
      </va-sidebar-item-content>
    </va-sidebar-item>
  </va-sidebar>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const currentRoute = useRoute()

const routes = [
  { title: 'Installation', path: '/' },
  { title: 'Windows Terminal', path: '/terminal' }
]
</script>