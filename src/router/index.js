import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'

const routes = [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        keepAlive: true,
        index: 1
      },
    },
    {
      path: '/detail/:id',
      name:'detail',
      meta: {
        index: 3
      },
      component: () => import('@/views/Detial/index.vue')
    },
    {
      path: '/login',
      name:'login',     
      meta: {
        index: 2
      },
      component: () => import('@/views/Login/index.vue')
    },
    {
      path: '/preferential',
      name: 'preferential',
      meta: {
        index: 1
      },
      component: () => import('@/views/Preferential/index.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      meta: {
        index: 1
      },
      component: () => import('@/views/Cart/index.vue')
    },
    {
      path: '/user',
      name: 'user',
      meta: {
        index: 1,
        isPass: true
      },
      component: () => import('@/views/User/index.vue')
    }
]

 const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router