<template>
  <span
    :class="
      cn(
        'align-middle text-[12px] leading-4 font-semibold -tracking-[0.4px]',
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
