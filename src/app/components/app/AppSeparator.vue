<template>
  <Separator
    :class="
      cn(
        'rounded-large bg-line data-[orientation=horizontal]:h-0.5 data-[orientation=vertical]:w-0.5',
        classProps,
      )
    "
  />
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const { class: classProps = undefined } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>
