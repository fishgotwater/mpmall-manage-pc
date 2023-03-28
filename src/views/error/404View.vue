<script setup lang="ts">
import Icon404 from '@/components/icons/404Icon.vue'
import ErrorTemplate from '@/components/ErrorTemplate.vue'
</script>

<template>
  <ErrorTemplate title="404" describe="对不起，您访问的页面不存在。">
    <Icon404 />
  </ErrorTemplate>
</template>
