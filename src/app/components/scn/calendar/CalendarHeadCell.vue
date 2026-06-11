<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { CalendarHeadCell, useForwardProps } from 'reka-ui'
import type { CalendarHeadCellProps } from 'reka-ui'
import { cn } from '@/utils/shadcn'

const props = defineProps<
  CalendarHeadCellProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarHeadCell
    :class="
      cn(
        'text-muted-foreground w-8 rounded-md text-[0.8rem] font-normal',
        props.class,
      )
    "
    data-slot="calendar-head-cell"
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarHeadCell>
</template>
