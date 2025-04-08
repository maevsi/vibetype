<template>
  <Content v-model="title" path="imprint" />
</template>

<script setup lang="ts">
const title = ref<string>()
useHeadDefault({ title })
</script>
