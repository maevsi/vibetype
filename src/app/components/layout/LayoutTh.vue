<template>
  <th
    :class="
      cn(
        'px-3 py-6 text-left text-xs font-medium tracking-wider uppercase',
        classProps,
      )
    "
  >
    <slot />
  </th>
</template>

<script setup lang="ts">
import type { HtmlHTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const { class: classProps = undefined } = defineProps<{
  class?: HtmlHTMLAttributes['class']
}>()
</script>
