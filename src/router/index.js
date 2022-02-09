import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home.vue')
  },
  {
    path: '/money',
    name: 'Money',
    component: () => import('@/views/money.vue')
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router