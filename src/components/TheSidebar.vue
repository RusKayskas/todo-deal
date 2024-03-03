<template>
  <aside class="sidebar px-5 py-8 bg-sidebar h-full relative w-full">
    <router-link to="/" class="mb-10 block">
      <img class="mx-auto" width="100px" src="@/assets/logo.png" alt="tasks" >
    </router-link>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/tasks">Tasks</router-link>
    </nav>
  </aside>
</template>

<script setup lang="ts">

</script>

<style lang="scss">

</style>