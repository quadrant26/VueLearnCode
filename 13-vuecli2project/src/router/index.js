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
    redirect: '/home',
    meta: {
      title: "首页"
    }
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
        component: News,
        meta: {
          title: "新闻"
        }
      },
      {
        path: 'message',
        component: Message,
        meta: {
          title: "消息"
        }
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: "关于"
    }
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: "用户"
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: "档案"
    }
  }
]

const router = new Router({
  routes,
  mode: 'history',
  linkActiveClass: "active"
})


// 前置钩子(hook)
router.beforeEach((to, from, next) => {
  // 从 from 到 to
  document.title = to.matched[0].meta.title;
  console.log(to)
  next()
})

export default router
