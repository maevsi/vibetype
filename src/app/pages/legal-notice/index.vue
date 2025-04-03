<template>
  <Content v-model="title" path="legal-notice" />
</template>

<script setup lang="ts">
const title = ref<string>()
useHeadDefault({ title })
</script>
