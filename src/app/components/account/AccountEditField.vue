<template>
  <div class="flex flex-col gap-2 px-2">
    <p class="text-sm font-semibold">
      <slot name="label">{{ label }}</slot>
    </p>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{ label?: string }>()
</script>
