<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps<{
  title: string
  describe: string
}>()

const getBack = () => {
  router.go(-1)
}
</script>

<template>
  <div class="wrapper">
    <slot></slot>
    <div class="title">{{ title }}</div>
    <div class="describe">{{ describe }}</div>
    <el-button type="primary" @click="getBack">点击返回</el-button>
  </div>
</template>

<style scoped>
.wrapper {
  height: 100vh;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10%;
}

.title {
  color: rgba(0, 0, 0, 0.88);
  font-size: 24px;
  line-height: 1.3333333333333333;
  margin-block: 8px;
}

.describe {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  line-height: 1.5714285714285714;
  margin: 0 0 24px 0;
}
</style>
