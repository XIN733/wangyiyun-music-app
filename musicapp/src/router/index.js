import { createRouter, createWebHistory , createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store/index.js'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/List.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/me',
    name: 'me',
    beforeEnter:(to,from,next)=>{ //路由守卫
      let isLogin = store.state.user.isLogin
      if(isLogin){
         next()
      }else{
         next('/login')
      }
    },
    component: () => import('../views/Me.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // history:createWebHashHistory(process.env.BASE_URL),
  routes:routes
})

export default router
