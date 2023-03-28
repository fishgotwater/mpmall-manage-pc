import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/login/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', name: '登录', component: LoginView },
    {
      path: '/register',
      name: '注册',
      component: () => import('../views/register/RegisterView.vue')
    },
    {
      path: '/alter-pwd',
      name: '修改密码',
      component: () => import('../views/alter-pwd/AlterPwd.vue')
    },
    {
      path: '/lock-screen',
      name: '锁屏',
      component: () => import('../views/lock-screen/LockScreen.vue')
    },
    { path: '/', name: '首页', component: () => import('../views/home/HomeView.vue') },
    {
      path: '/product',
      name: '产品管理',
      component: () => import('../views/product/list/ProductList.vue')
    },
    { path: '/order', name: '订单管理', component: () => import('../views/order/OrderView.vue') },
    {
      path: '/system',
      name: '系统管理',
      component: () => import('../views/system/SystemView.vue')
    },
    { path: '/500', name: '500', component: () => import('../views/error/500View.vue') },
    { path: '/403', name: '403', component: () => import('../views/error/403View.vue') },
    { path: '/:pathMatch(.*)*', name: '404', component: () => import('../views/error/404View.vue') }
  ]
})

export default router
