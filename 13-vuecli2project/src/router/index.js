import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// import Home from '@/components/Home'
// import About from '@/components/About'
// import User from '@/components/User'

Vue.use(Router)

/*
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
  {
    path: '/user/:userId',
    component: User
  }
]*/

const Home = () => import("@/components/Home");
const About = () => import("@/components/About");
const User = () => import("@/components/User");
const News = () => import("@/components/News");
const Message = () => import("@/components/Message");
const Profile = () => import("@/components/Profile")

const routes = [
  {
    path: "/",
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: News
      },
      {
        path: 'message',
        component: Message
      }
    ]
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:userId',
    component: User
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new Router({
  routes,
  mode: 'history',
  linkActiveClass: "active"
})

export default router
