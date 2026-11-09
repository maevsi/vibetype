<script setup lang="ts">
import type { RadioGroupItemProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils/shadcn'
import { CircleIcon } from '@lucide/vue'
import { RadioGroupIndicator, RadioGroupItem, useForwardProps } from 'reka-ui'
import { computed } from 'vue'

const props = defineProps<
  RadioGroupItemProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RadioGroupItem
    v-bind="forwardedProps"
    :class="
      cn(
        'aspect-square size-6 shrink-0 rounded-small bg-surface-raised text-on-action-primary outline-none focus-visible:focus-ring disabled:cursor-not-allowed disabled:opacity-40 aria-invalid:ring-2 aria-invalid:ring-error data-[state=checked]:bg-action-primary',
        props.class,
      )
    "
    data-slot="radio-group-item"
  >
    <RadioGroupIndicator
      class="relative flex items-center justify-center"
      data-slot="radio-group-indicator"
    >
      <CircleIcon
        class="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-current"
      />
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>
