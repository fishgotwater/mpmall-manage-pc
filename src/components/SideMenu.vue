<template>
  <div :class="`${isCollapse ? 'navbar w70' : 'navbar'}`">
    <img src="@/assets/images/logo-mini.svg" alt="logo" v-show="!isCollapse" />
    <div style="flex: 1" v-show="!isCollapse">鱼欢水</div>
    <img width="24" class="foldorno" :src="isFoldSrc" @click="isCollapse = !isCollapse" />
  </div>
  <el-menu default-active="/" class="elmenu" :collapse="isCollapse" @select="handleSelect" :collapse-transition="false">
    <template v-for="(item, i) in routes">
      <el-sub-menu v-if="item.children?.length" :index="item.path" :key="item.path">
        <el-menu-item v-for="(item2, i2) in item.children" :index="item2.path" :key="i2">
          <el-icon>
            <component :is="findIcon(item2.icon)" />
          </el-icon>
          <template #title>{{ item2.name }}</template>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item v-else :index="item.path" :key="i">
        <el-icon>
          <component :is="findIcon(item.icon)" />
        </el-icon>
        <template #title>{{ item.name }}</template>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { DataBoard, Goods, ShoppingCartFull, Monitor, Van, Coin } from '@element-plus/icons-vue'
import fold from '@/assets/images/fold.svg'
import unfold from '@/assets/images/unfold.svg'
import { useRouter } from 'vue-router'

interface routeProps {
  path: string
  name: string
  icon: string
  children?: routeProps[]
}

defineProps<{ routes: routeProps[] }>()

const router = useRouter()

const isCollapse = ref(false)

const handleSelect = (index: string) => {
  router.push(index)
}

const isFoldSrc = computed<string>(() => {
  return isCollapse.value ? unfold : fold
})

const findIcon = (icon: string) => {
  switch (icon) {
    case 'DataBoard':
      return DataBoard
    case 'Goods':
      return Goods
    case 'ShoppingCartFull':
      return ShoppingCartFull
    case 'Monitor':
      return Monitor
    case 'Coin':
      return Coin
    default:
      return Van
  }
}
</script>

<style scoped>
.navbar {
  width: 260px;
  height: 60px;
  padding: 0 1.375rem;
  border-right: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #1f1f1f;
}

.w70 {
  width: 70px;
  justify-content: center;
}

.foldorno {
  cursor: pointer;
}

.elmenu {
  width: 70px;
  height: calc(100vh - 60px);
}

.elmenu:not(.el-menu--collapse) {
  width: 260px;
  min-height: 400px;
}

:deep(.el-menu-item.is-active) {
  color: #1677ff;
  background: #e6f4ff;
}</style>
