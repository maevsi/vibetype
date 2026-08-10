<template>
  <NuxtLink
    class="flex items-center gap-4 px-2 py-2 transition-colors hover:bg-(--figma-neutral-level-1)"
    :to
  >
    <div
      class="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-(--figma-neutral-level-2)"
    >
      <slot />
    </div>
    <span class="font-semibold">{{ label }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  to: string
}>()
</script>
