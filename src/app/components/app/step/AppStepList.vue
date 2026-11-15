<template>
  <ol :class="cn('m-auto inline-flex gap-4', classProps)" data-slot="step-list">
    <li
      v-for="(step, index) in steps"
      :key="step"
      :aria-current="step === active ? 'step' : undefined"
      class="group flex items-center gap-2"
    >
      <span
        class="flex size-8 items-center justify-center rounded-full border border-fg-1 font-bold group-aria-[current=step]:bg-fg-1 group-aria-[current=step]:text-surface"
      >
        {{ index + 1 }}
      </span>
      <span>
        {{ step }}
      </span>
    </li>
  </ol>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const {
  active = undefined,
  class: classProps = undefined,
  steps = undefined,
} = defineProps<{
  active?: string
  class?: HTMLAttributes['class']
  steps?: string[]
}>()
</script>
