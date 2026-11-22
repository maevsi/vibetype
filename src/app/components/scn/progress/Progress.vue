<script setup lang="ts">
import { cn } from '@/utils/shadcn'
import { ProgressIndicator, ProgressRoot } from 'reka-ui'
import type { ProgressRootProps } from 'reka-ui'
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'

const props = withDefaults(
  defineProps<ProgressRootProps & { class?: HTMLAttributes['class'] }>(),
  {
    class: undefined,
    modelValue: 0,
  },
)

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ProgressRoot
    v-bind="delegatedProps"
    :class="
      cn(
        'relative h-2 w-full overflow-hidden rounded-full bg-primary/20',
        props.class,
      )
    "
    data-slot="progress"
  >
    <ProgressIndicator
      class="h-full w-full flex-1 bg-primary transition-all"
      data-slot="progress-indicator"
      :style="`transform: translateX(-${100 - (props.modelValue ?? 0)}%);`"
    />
  </ProgressRoot>
</template>
