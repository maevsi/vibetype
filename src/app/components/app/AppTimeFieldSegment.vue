<script setup lang="ts">
import type { SegmentPart } from 'reka-ui'
import { TimeFieldInput } from 'reka-ui'
import { cn } from '@/utils/shadcn'

const { part, value = undefined } = defineProps<{
  part: SegmentPart
  value?: string
}>()
</script>

<template>
  <TimeFieldInput
    :class="
      cn(
        'rounded-sm p-0.5 text-center tabular-nums outline-none',
        'focus:bg-accent focus:text-accent-foreground',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        part === 'literal' ? 'text-muted-foreground px-0' : 'min-w-6',
      )
    "
    data-slot="time-field-input"
    :part
  >
    {{ value }}
  </TimeFieldInput>
</template>
