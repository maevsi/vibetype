<template>
  <span
    :class="
      cn(
        'line-clamp-2 truncate text-base leading-[20px] font-semibold tracking-[0.15%]',
      )
    "
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import { cn } from '@/utils/shadcn'
</script>
