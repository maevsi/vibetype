<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { CalendarGrid, useForwardProps } from 'reka-ui'
import type { CalendarGridProps } from 'reka-ui'
import { cn } from '@/utils/shadcn'

const props = defineProps<
  CalendarGridProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarGrid
    :class="cn('w-full border-collapse space-x-1', props.class)"
    data-slot="calendar-grid"
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarGrid>
</template>
