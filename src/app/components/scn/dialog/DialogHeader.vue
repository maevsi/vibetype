<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils/shadcn'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="cn('flex flex-col gap-2 text-center sm:text-left', props.class)"
    data-slot="dialog-header"
  >
    <slot />
  </div>
</template>
