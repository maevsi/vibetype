<template>
  <Content v-model:title="title" path="privacy" />
</template>

<script setup lang="ts">
// External links to this page:
// - App Store Connect (app privacy)
// - Facebook (page info)
// - vibetype.de (footer)

const title = ref<string>()
useHeadDefault({ title })
</script>
