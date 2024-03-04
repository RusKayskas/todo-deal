<template>
  <div class="layout layout--grid">
    <TheSidebar />
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script setup lang="ts">
  import TheSidebar from '@/components/TheSidebar.vue';
</script>

<style lang="scss">
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  img {
    max-width: 100%;
    object-fit: contain;
  }
  .layout {
    min-height: 100vh;
    &--grid {
      display: grid;
      grid-template-columns: 1fr 6fr;
      min-height: 100vh;
    }
  }
</style>