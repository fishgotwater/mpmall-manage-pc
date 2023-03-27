import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/login/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: '登录页',
      component: LoginView
    },
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
    {
      path: '/',
      name: '首页',
      component: () => import('../views/home/AtHome.vue')
    },
    {
      path: '/product',
      name: '产品管理',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/product/list/ProductList.vue')
    },
    {
      path: '/order',
      name: '订单管理',
      component: () => import('../views/order/AtOrder.vue')
    },
    // {
    //   path: '/',
    //   name: '广告分类',
    //   component: HomeView
    // },
    {
      path: '/system',
      name: '系统管理',
      component: () => import('../views/system/AtSystem.vue')
    }
  ]
})

export default router
