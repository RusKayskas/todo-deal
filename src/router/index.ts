import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import TheDefaultLayoutVue from '@/layouts/TheDefaultLayout.vue'
import TheNewLayoutVue from '@/layouts/TheNewLayout.vue'
import HomeView from '@/views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home', // Добавлено имя для родительского маршрута
    component: TheNewLayoutVue,
    children: [
      {
        path: '/',
        name: 'home', // Пустой путь для главной страницы
        component: HomeView,
      },
    ],
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: TheDefaultLayoutVue,
    children: [
      {
        path: '/tasks',
        name: 'tasks',
        component: () => import('../views/TasksView.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router