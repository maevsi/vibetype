<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { TimeFieldRoot, useForwardPropsEmits } from 'reka-ui'
import type { TimeFieldRootEmits, TimeFieldRootProps } from 'reka-ui'
import { cn } from '@/utils/shadcn'

const props = defineProps<
  TimeFieldRootProps & { class?: HTMLAttributes['class'] }
>()
const emits = defineEmits<TimeFieldRootEmits>()

const delegatedProps = reactiveOmit(props, 'class')
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <TimeFieldRoot
    v-slot="{ segments }"
    :class="
      cn(
        'flex h-9 w-fit items-center gap-1 rounded-medium bg-surface-raised px-3 py-1 text-body text-fg-1 outline-none',
        'focus-within:ring-2 focus-within:ring-action-primary focus-within:ring-inset',
        'data-[invalid]:ring-2 data-[invalid]:ring-error data-[invalid]:ring-inset',
        props.class,
      )
    "
    data-slot="time-field"
    v-bind="forwarded"
  >
    <AppTimeFieldSegment
      v-for="segment in segments"
      :key="segment.part"
      :part="segment.part"
      :value="segment.value"
    />
  </TimeFieldRoot>
</template>
