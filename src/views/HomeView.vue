<template>
  <div class="home">
    <div class="home__bubbles">
      <span v-for="(buble, index) in bubblesStyleArray" :key="index" :style="buble" />
    </div>
    <section class="home__section">
      <div class="home__section-content">
        <h1 class="text-2xl mb-5 home__section-content-title">Привет, я - <span>Руслан</span></h1>
        <p class="home__section-content-details text-sm mb-10">
          С тестовым можно ознакомиться, перейдя в меню tasks, мой стек Vue3/2 , Nuxt2/3 и тд (подробнее можно в телеге пообщаться ,ссылка ниже)
          примеры работы высылал в сопроводительном письме. В этомо проекте использую Vue3, ts, shadcn-vue,
          vue-query, AppWrite для бека (бд почему то в последнее время не очень стабильно работает)
        </p>
        <div class="home__section-content-buttons">
          <UiButton class="mr-10" variant="outline" as-child>
            <a href="https://rostov.hh.ru/resume/68f0216cff05dbb1470039ed1f537954355967" target="_blank">Ссылка на резюме</a>
          </UiButton>
          <UiButton as-child>
            <a href="https://t.me/RuslanKayskas" target="_blank">Написать Мне</a>
          </UiButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
  import UiButton from '@/components/ui/button/Button.vue';
  const bubblesStyleArray = [
    '--i:11', '--i:12', '--i:24', 
    '--i:10', '--i:14', '--i:23',
    '--i:18', '--i:16', '--i:19',
    '--i:20', '--i:22', '--i:25',
    '--i:18', '--i:21', '--i:13',
    '--i:15', '--i:26', '--i:17',
    '--i:13', '--i:28', '--i:11', 
    '--i:12', '--i:24', 
    '--i:10', '--i:14', '--i:23',
    '--i:18', '--i:16', '--i:19',
    '--i:20', '--i:22', '--i:25',
    '--i:18', '--i:21', '--i:13',
    '--i:15', '--i:26', '--i:17',
    '--i:13', '--i:28',
  ]
</script>
<style lang="scss">
  .home {
    position: absolute;
    height: 100vh;
    width: 100%;
    left: 0;
    top: 0;
    overflow: hidden;
    &__bubbles {
      position: relative;
      display: flex;
      width: 100%;
      justify-content: space-between;
      span {
        position: relative;
        min-width: 30px;
        height: 30px;
        filter: blur(2px);
        background: #4fc3dc;
        border-radius: 50%;
        box-shadow: 0 0 0 10px #4fc3dc44,
        0 0 50px #4fc3dc,
        0 0 100px #4fc3dc;
        margin: 0 4px;
        animation: anameteBubule 15s linear infinite;
        animation-duration: calc(75s / var(--i));
        &:nth-child(even) {
          background: #ff2d75;
          box-shadow: 0 0 0 10px #ff2d7544,
        0 0 50px #ff2d75,
        0 0 100px #ff2d75;
        }
        &:nth-child(3n + 1) {
          background: #42b983;
          box-shadow: 0 0 0 10px #42b98344,
        0 0 50px #42b983,
        0 0 100px #42b983;
        } 
      }
    }
    &__section {
      position: absolute;
      height: 100%;
      top: 0;
      z-index: 2;
      backdrop-filter: blur(4px);
      left: 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      &-content {
        text-align: center;
        max-width: 50%;
        &-title {
          span {
            color: #ff2d75;
          }
        }
      }
    }
  }

  @keyframes anameteBubule {
    0% {
      transform: translateY(100vh) scale(0);
    }
    100% {
      transform: translateY(-10vh) scale(1);
    }
  }
</style>
