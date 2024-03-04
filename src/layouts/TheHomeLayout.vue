<template>
  <div class="home-layout layout">
    <header class="header">
      <div class="container header__wrapper">
        <div class="header__logo">
          <router-link class="header__logo-link" to="/">
            <span>Ruslan</span> A
          </router-link>
        </div>
        <nav class="flex mr-10 ml-auto p-0">
          <router-link class="mr-10" to="/">Home </router-link>
          <router-link to="/tasks">Tasks </router-link>
        </nav>
        <UiButton class="mr-10" variant="secondary" as-child>
          <a href="https://github.com/RusKayskas/todo-deal" target="_blank">Сылка на гит</a>
        </UiButton>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script setup lang="ts">
  import UiButton from '@/components/ui/button/Button.vue';
</script>

<style lang="scss">
  .header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255 , 0.1);
    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__logo {
      font-weight: 700;
      color: #ff2d75;
      span {
        color: #fff;
      }
    }
  }
</style>