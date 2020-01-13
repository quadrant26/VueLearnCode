import Vue from 'vue';
import VueRouter from 'vue-router';

// 1. 安装插件
Vue.use(VueRouter);

// 创建懒加载
const Home = () => import('../views/home/Home');
const Category = () => import('../views/category/Cagegory');
const Cart = () => import('../views/cart/Cart');
const Profile = () => import('../views/profile/Profile');

// 2. 创建路由对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]


const router = new VueRouter({
  routes,
  mode: "history"
})

// 3. 导出
export default router;
