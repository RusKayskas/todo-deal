import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { VueQueryPlugin } from '@tanstack/vue-query'
import '@/assets/index.css'
const app = createApp(App);
const pluginsArray = [store, router, VueQueryPlugin];
pluginsArray.forEach((plugin) => {
  app.use(plugin);
});
app.mount('#app')
