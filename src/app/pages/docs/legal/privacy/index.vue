<template>
  <Content v-model="title" path="privacy" />
</template>

<script setup lang="ts">
const title = ref<string>()
useHeadDefault({ title })
</script>
