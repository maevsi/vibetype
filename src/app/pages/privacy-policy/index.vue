<template>
  <Content v-model="title" path="privacy-policy" />
</template>

<script setup lang="ts">
const title = ref<string>()
useHeadDefault({ title })
</script>
