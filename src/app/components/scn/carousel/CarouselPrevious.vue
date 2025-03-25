<script setup lang="ts">
import type { WithClassAsProps } from './interface'
import { cn } from '@/utils/shadcn'
import { ShadButton } from '@/components/scn/button'
import { ArrowLeft } from 'lucide-vue-next'
import { useCarousel } from './useCarousel'

const props = defineProps<WithClassAsProps>()

const { orientation, canScrollPrev, scrollPrev } = useCarousel()
</script>

<template>
  <ShadButton
    :disabled="!canScrollPrev"
    :class="
      cn(
        'absolute h-8 w-8 touch-manipulation rounded-full p-0',
        orientation === 'horizontal'
          ? 'top-1/2 -left-12 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        props.class,
      )
    "
    variant="outline"
    @click="scrollPrev"
  >
    <slot>
      <ArrowLeft class="h-4 w-4 text-current" />
    </slot>
  </ShadButton>
</template>
