<template>
  <LayoutProse v-if="content.data.value">
    <ContentRenderer :value="content.data.value" />
  </LayoutProse>
</template>

<script setup lang="ts">
// compiler
const { content } = defineProps<{
  content: Awaited<ReturnType<typeof useContent>>
}>()
</script>
