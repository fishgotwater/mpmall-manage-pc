<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideMenu from './components/SideMenu.vue';

const paths = [
  '/',
  '/product',
  '/order',
  '/system',
  '/store',
]
const routes = [
  { path: '/', name: '首页', icon: 'DataBoard' },
  { path: '/product', name: '产品管理', icon: 'Goods' },
  { path: '/order', name: '订单管理', icon: 'ShoppingCartFull' },
  { path: '/system', name: '系统管理', icon: 'Monitor' },
  { path: '/store', name: '数据仓库', icon: 'Coin' },
]
const pn = window.location.pathname
const hasWrapper = paths.includes(pn)

</script>

<template>
  <div v-if="hasWrapper" class="wrapper">
    <div class="sidenav">
      <SideMenu :routes="routes" />
    </div>
    <div class="content">
      <header>123</header>
      <main>
        <RouterView />
      </main>
    </div>
  </div>
  <RouterView v-else />
</template>

<style scoped>
.wrapper {
  display: flex;
  background: #f0f0f0;
}

.sidenav {
  background: #ffffff;
}

.content {
  flex: 1;
  background: #f0f0f0;
}

header {
  height: 60px;
  background: #ffffff;
  border-bottom: 1px solid #e3e3e3;
}
</style>
