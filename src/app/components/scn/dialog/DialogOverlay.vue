<script setup lang="ts">
import { cn } from '@/utils/shadcn'
import { DialogOverlay } from 'reka-ui'
import type { DialogOverlayProps } from 'reka-ui'
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'

const props = defineProps<
  DialogOverlayProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <DialogOverlay
    v-bind="delegatedProps"
    :class="
      cn(
        'fixed inset-0 z-50 bg-black/80 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0',
        props.class,
      )
    "
    data-slot="dialog-overlay"
  >
    <slot />
  </DialogOverlay>
</template>
