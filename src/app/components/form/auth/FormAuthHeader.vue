<template>
  <div v-bind="$attrs">
    <h1 :id="titleId" class="text-heading-large">
      <slot name="title" />
    </h1>
    <p v-if="$slots.subtitle" class="mt-2 text-body text-fg-2">
      <slot name="subtitle" />
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  titleId?: string
}>()
</script>
