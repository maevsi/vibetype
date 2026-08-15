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
        'border-input flex h-9 w-fit items-center gap-1 rounded-md border bg-(--neutral-level-1) px-3 py-1 text-base shadow-xs outline-none md:text-sm',
        'focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]',
        'data-[invalid]:ring-destructive/20 dark:data-[invalid]:ring-destructive/40 data-[invalid]:border-destructive',
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
