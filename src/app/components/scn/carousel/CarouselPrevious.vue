<script setup lang="ts">
import type { WithClassAsProps } from './interface'
import { cn } from '@/utils/shadcn'
import { Button } from '@/components/scn/button'
import type { ButtonVariants } from '@/components/scn/button'
import { ArrowLeft } from 'lucide-vue-next'
import { useCarousel } from './useCarousel'

const { t } = useI18n()

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

const { orientation, canScrollPrev, scrollPrev } = useCarousel()
</script>

<template>
  <Button
    data-slot="carousel-previous"
    :disabled="!canScrollPrev"
    :class="
      cn(
        'absolute size-8 rounded-full',
        orientation === 'horizontal'
          ? 'top-1/2 -left-12 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        props.class,
      )
    "
    :variant="variant"
    :size="size"
    @click="scrollPrev"
  >
    <slot>
      <ArrowLeft />
      <span class="sr-only">{{ t('previous') }}</span>
    </slot>
  </Button>
</template>

<i18n lang="yaml">
de:
  previous: Vorherige Folie
en:
  previous: Previous Slide
</i18n>
