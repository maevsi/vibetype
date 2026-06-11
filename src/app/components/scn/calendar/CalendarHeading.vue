<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { CalendarHeading, useForwardProps } from 'reka-ui'
import type { CalendarHeadingProps } from 'reka-ui'
import { cn } from '@/utils/shadcn'

const props = defineProps<
  CalendarHeadingProps & { class?: HTMLAttributes['class'] }
>()

defineSlots<{
  default: (props: { headingValue: string }) => unknown
}>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarHeading
    v-slot="{ headingValue }"
    :class="cn('text-sm font-medium', props.class)"
    data-slot="calendar-heading"
    v-bind="forwardedProps"
  >
    <slot :heading-value>
      {{ headingValue }}
    </slot>
  </CalendarHeading>
</template>
