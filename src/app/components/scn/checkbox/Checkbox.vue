<script setup lang="ts">
import type { CheckboxRootEmits, CheckboxRootProps } from 'reka-ui'
import { cn } from '@/utils/shadcn'
import { Check } from '@lucide/vue'
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'

const props = defineProps<
  CheckboxRootProps & { class?: HTMLAttributes['class'] }
>()
const emits = defineEmits<CheckboxRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <CheckboxRoot
    v-bind="forwarded"
    :class="
      cn(
        'peer size-6 shrink-0 rounded-small bg-surface-raised outline-none focus-visible:focus-ring disabled:cursor-not-allowed disabled:opacity-40 aria-invalid:ring-2 aria-invalid:ring-error data-[state=checked]:bg-action-primary data-[state=checked]:text-on-action-primary',
        props.class,
      )
    "
    data-slot="checkbox"
  >
    <CheckboxIndicator
      class="flex items-center justify-center text-current transition-none"
      data-slot="checkbox-indicator"
    >
      <slot>
        <Check class="size-3.5" />
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
