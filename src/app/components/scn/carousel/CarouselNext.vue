<script setup lang="ts">
import type { WithClassAsProps } from './interface'
import { cn } from '@/utils/shadcn'
import { ShadButton, type ButtonVariants } from '@/components/scn/button'
import { ArrowRight } from 'lucide-vue-next'
import { useCarousel } from './useCarousel'

const props = withDefaults(
  defineProps<
    {
      variant?: ButtonVariants['variant']
      size?: ButtonVariants['size']
    } & WithClassAsProps
  >(),
  {
    variant: 'outline',
    size: 'icon',
  },
)

const { orientation, canScrollNext, scrollNext } = useCarousel()
</script>

<template>
  <ShadButton
    data-slot="carousel-next"
    :disabled="!canScrollNext"
    :class="
      cn(
        'absolute size-8 rounded-full',
        orientation === 'horizontal'
          ? 'top-1/2 -right-12 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        props.class,
      )
    "
    :variant="variant"
    :size="size"
    @click="scrollNext"
  >
    <slot>
      <ArrowRight />
      <span class="sr-only">Next Slide</span>
    </slot>
  </ShadButton>
</template>
