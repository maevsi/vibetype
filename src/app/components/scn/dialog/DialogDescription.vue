<script setup lang="ts">
import { cn } from '@/utils/shadcn'
import { DialogDescription, useForwardProps } from 'reka-ui'
import type { DialogDescriptionProps } from 'reka-ui'
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'

const props = defineProps<
  DialogDescriptionProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <DialogDescription
    v-bind="forwardedProps"
    :class="cn('text-muted-foreground text-sm', props.class)"
    data-slot="dialog-description"
  >
    <slot />
  </DialogDescription>
</template>
