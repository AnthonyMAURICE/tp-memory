import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/memory',
      name: 'memory',
      component: () => import('../views/GameView.vue')
    },
    {
      path: '/resultats',
      name: 'resultats',
      component: () => import('@/views/ResultView.vue')
    }
  ]
})

export default router
