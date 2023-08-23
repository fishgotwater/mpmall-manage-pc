<template>
  <el-table
    v-loading="loading"
    element-loading-text="加载中..."
    element-loading-background="rgba(122, 122, 122, 0.8)"
    :data="tableData"
    stripe
    style="width: 100%"
  >
    <el-table-column prop="date" label="序号" />
    <el-table-column prop="name" label="代码" />
    <el-table-column prop="address" label="名称" />
    <el-table-column prop="address" label="现价" />
    <el-table-column prop="address" label="涨跌幅(%)" />
    <el-table-column prop="address" label="涨跌" />
    <el-table-column prop="address" label="涨速(%)" />
    <el-table-column prop="address" label="换手(%)" />
    <el-table-column prop="address" label="量比" />
    <el-table-column prop="address" label="振幅(%)" />
    <el-table-column prop="address" label="成交额" />
    <el-table-column prop="address" label="流通股" />
    <el-table-column prop="address" label="流通市值" />
    <el-table-column prop="address" label="市盈率" />
  </el-table>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
const props = defineProps({
  activePane: { type: String, required: true }
})

const loading = ref(true)

/**
 * 监听 activePane
 * activePane 值改变之后重新请求列表数据
 */
watch(
  () => props.activePane,
  (activePane) => {
    console.log('activePane: ', activePane)
  }
)

const tableData = [
  {
    date: '1',
    name: 'Tom',
    address: '2'
  },
  {
    date: '2',
    name: 'Tom',
    address: '2'
  },
  {
    date: '3',
    name: 'Tom',
    address: '2'
  },
  {
    date: '4',
    name: 'Tom',
    address: '2'
  }
]
</script>
