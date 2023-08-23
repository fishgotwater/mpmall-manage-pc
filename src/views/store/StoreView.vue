<template>
  <el-tabs v-model="activePane" type="border-card" @tab-change="handleChange">
    <el-tab-pane label="全部股票" name="qbgp"></el-tab-pane>
    <el-tab-pane label="上证A股" name="shzag"></el-tab-pane>
    <el-tab-pane label="深证A股" name="szag"></el-tab-pane>
    <el-tab-pane label="京证A股" name="jzag"></el-tab-pane>
    <el-tab-pane label="创业板" name="cyb"></el-tab-pane>
    <el-tab-pane label="科创板" name="kcb"></el-tab-pane>
    <StockTable :activePane="activePane" />
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TabPaneName } from 'element-plus'
import StockTable from './components/StockTable.vue'

const activePane = ref('qbgp')

const handleChange = (name: TabPaneName) => {
  activePane.value = name
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
