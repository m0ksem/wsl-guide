<script setup lang="ts">
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <div class="app">
    <Sidebar />
    <div class="app__content">
      <VaContent>
        <router-view />        
      </VaContent>
    </div>
  </div>
</template>

<style lang="scss">
.app {
  min-height: 100vh;
  height: 100%;
  display: flex;
  .va-sidebar {
    min-height: 100vh;
  }

  &__content {
    padding: 32px;
    box-sizing: border-box;
    flex: 1 auto;

    .code-snippet {
      display: block;
    }

    b {
      color: var(--va-warning);
    }
  }
}
</style>
