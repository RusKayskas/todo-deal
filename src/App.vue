<template>
    <router-view/>
</template>
<script setup lang="ts">
</script>
<style lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #5b7fa3;
    transition: linear 0.2s;
    &:hover {
      color: #9d3056;
    }

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
