import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import TheDefaultLayout from '@/layouts/TheDefaultLayout.vue'
import TheHomeLayout from '@/layouts/TheHomeLayout.vue'
import HomeView from '@/views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home', // Добавлено имя для родительского маршрута
    component: TheHomeLayout,
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
    component: TheDefaultLayout,
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