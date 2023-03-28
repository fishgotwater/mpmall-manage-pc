<script setup lang="ts">
import Icon403 from '@/components/icons/403Icon.vue'
import ErrorTemplate from '@/components/ErrorTemplate.vue'
</script>

<template>
  <ErrorTemplate title="403" describe="对不起，您没有权限访问此页面。">
    <Icon403 />
  </ErrorTemplate>
</template>
