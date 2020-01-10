import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '@/components/Home'
import About from '@/components/About'

Vue.use(Router)

const routes = [
  {
    path: "/",
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
]

const router = new Router({
  routes,
  mode: 'history',
  linkActiveClass: "active"
})

export default router
