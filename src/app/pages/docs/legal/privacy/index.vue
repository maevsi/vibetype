<template>
  <Content v-model:title="title" path="privacy" />
</template>

<script setup lang="ts">
// External links to this page:
// - App Store Connect (app privacy)
// - Instagram (profile links)

const title = ref<string>()
useHeadDefault({ title })
</script>
