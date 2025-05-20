<template>
  <span
    :class="
      cn(
        'text-2xl leading-9 font-semibold tracking-[0.15%] text-balance',
        classProps,
      )
    "
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import type { HtmlHTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const { class: classProps = undefined } = defineProps<{
  class?: HtmlHTMLAttributes['class']
}>()
</script>
