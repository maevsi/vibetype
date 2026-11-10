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
        'flex h-9 w-fit items-center gap-1 rounded-medium border border-input bg-surface-raised px-3 py-1 text-body outline-none md:text-body',
        'focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50',
        'data-[invalid]:border-destructive data-[invalid]:ring-destructive/20 dark:data-[invalid]:ring-destructive/40',
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
