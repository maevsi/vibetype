<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { CalendarGridRow, useForwardProps } from 'reka-ui'
import type { CalendarGridRowProps } from 'reka-ui'
import { cn } from '@/utils/shadcn'

const props = defineProps<
  CalendarGridRowProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarGridRow
    :class="cn('flex', props.class)"
    data-slot="calendar-grid-row"
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarGridRow>
</template>
