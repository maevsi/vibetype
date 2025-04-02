<template>
  <Button :aria-label class="px-3 py-1 text-[11px] font-semibold" :to>
    <slot />
  </Button>
</template>
´

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const { ariaLabel, to } = defineProps<{
  ariaLabel: string
  to?: RouteLocationRaw
}>()
</script>
