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
  flex-wrap: nowrap;
  .va-sidebar {
    min-height: 100vh;
    flex: 0 0 250px;
  }

  &__content {
    padding: 32px;
    box-sizing: border-box;
    flex: 0 0 auto;
    flex-grow: 1;

    .code-snippet {
      display: block;
    }

    b {
      color: var(--va-warning);
    }
  }
}
</style>
