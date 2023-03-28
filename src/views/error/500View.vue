<script setup lang="ts">
import Icon500 from '@/components/icons/500Icon.vue'
import ErrorTemplate from '@/components/ErrorTemplate.vue'
</script>

<template>
  <ErrorTemplate title="500" describe="对不起，服务器似乎出了点问题。">
    <Icon500 />
  </ErrorTemplate>
</template>
