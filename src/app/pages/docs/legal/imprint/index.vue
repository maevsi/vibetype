<template>
  <Content v-model:title="title" path="imprint" />
</template>

<script setup lang="ts">
// External links to this page:
// - Facebook (page info)
// - Instagram (profile links)
// - vibetype.de (footer)

const title = ref<string>()
useHeadDefault({ title })
</script>
