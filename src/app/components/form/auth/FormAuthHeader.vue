<template>
  <div v-bind="$attrs">
    <h1
      :id="titleId"
      class="text-[28px] leading-8.5 font-bold tracking-[-0.4px]"
    >
      <slot name="title" />
    </h1>
    <p
      v-if="$slots.subtitle"
      class="mt-2 text-[15px] leading-5 font-semibold text-fg-2"
    >
      <slot name="subtitle" />
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  titleId?: string
}>()
</script>
