<template>
  <LoaderIndicatorPing v-if="content.pending.value" />
  <!-- TODO: use v-model error / error boundary -->
  <AppError
    v-else-if="content.error.value"
    :error="{ message: content.error.value.message, status: 500 }"
  />
  <AppError
    v-else-if="!content.data.value"
    :error="{ message: 'Data is missing', status: 404 }"
  />
  <LayoutProse v-else>
    <ContentRenderer :value="content.data.value" />
  </LayoutProse>
</template>

<script setup lang="ts">
// compiler
const { content } = defineProps<{
  content: Awaited<ReturnType<typeof useContent>>
}>()
</script>
