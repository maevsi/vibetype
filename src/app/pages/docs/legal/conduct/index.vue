<template>
  <Content v-model="title" path="conduct" />
</template>

<script setup lang="ts">
const title = ref<string>()
useHeadDefault({ title })
</script>
