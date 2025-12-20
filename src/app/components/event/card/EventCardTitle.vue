<template>
  <AppTypographyTitle3Emphasized
    v-if="variant && ['highlight', 'recommendation'].includes(variant)"
    class="line-clamp-2 wrap-break-word"
  >
    <slot />
  </AppTypographyTitle3Emphasized>
  <AppTypographyHeadlineRegular v-else class="line-clamp-2 wrap-break-word">
    <slot />
  </AppTypographyHeadlineRegular>
</template>

<script setup lang="ts">
// compiler
const { variant = undefined } = defineProps<{
  variant?: 'highlight' | 'recommendation'
}>()
</script>
