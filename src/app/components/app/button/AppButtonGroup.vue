<template>
  <div
    :class="cn('flex flex-wrap gap-2 lg:gap-4', classProps)"
    data-slot="button-group"
    role="group"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const { class: classProps = undefined } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>
