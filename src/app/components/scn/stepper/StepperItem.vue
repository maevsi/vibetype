<script lang="ts" setup>
import type { StepperItemProps } from 'reka-ui'
import { cn } from '@/utils/shadcn'
import { StepperItem, useForwardProps } from 'reka-ui'

import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'

const props = defineProps<
  StepperItemProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <StepperItem
    v-slot="slotProps"
    v-bind="forwarded"
    :class="
      cn(
        'group flex items-center gap-2 data-[disabled]:pointer-events-none',
        props.class,
      )
    "
  >
    <slot v-bind="slotProps" />
  </StepperItem>
</template>
