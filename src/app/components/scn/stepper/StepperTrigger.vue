<script lang="ts" setup>
import type { StepperTriggerProps } from 'reka-ui'
import { cn } from '@/utils/shadcn'
import { StepperTrigger, useForwardProps } from 'reka-ui'

import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'

const props = defineProps<
  StepperTriggerProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <StepperTrigger
    v-bind="forwarded"
    :class="
      cn(
        'flex flex-col items-center gap-2 rounded-md p-2 text-center',
        props.class,
      )
    "
  >
    <slot />
  </StepperTrigger>
</template>
