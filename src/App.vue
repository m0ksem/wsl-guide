<script setup lang="ts">
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <div class="app row">
    <Sidebar />
    <div class="app__content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
.app {
  min-height: 100vh;
  height: 100%;
  .va-sidebar {
    min-height: 100vh;
  }

  &__content {
    padding: 16px;
  }
}
</style>
