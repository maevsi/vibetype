<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils/shadcn'

interface SkeletonProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<SkeletonProps>()
</script>

<template>
  <div
    :class="cn('animate-pulse rounded-small bg-muted', props.class)"
    data-slot="skeleton"
  />
</template>
