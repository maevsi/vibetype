<template>
  <span
    :class="
      cn(
        'text-[13px] leading-4.5 font-semibold -tracking-[0.4px] text-(--neutral-level-5)',
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
