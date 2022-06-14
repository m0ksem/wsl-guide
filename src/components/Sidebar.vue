<template>
  <va-sidebar>
    <va-sidebar-item v-for="route in routes" :key="route.title" :to="route.path">
      <va-sidebar-item-content>
        <va-sidebar-item-title> {{ route.title }} </va-sidebar-item-title>
      </va-sidebar-item-content>
    </va-sidebar-item>
  </va-sidebar>
</template>

<script setup lang="ts">
const routes = [
  { title: 'Installation', path: '/' },
  { title: 'Windows Terminal', path: '/terminal' }
]
</script>