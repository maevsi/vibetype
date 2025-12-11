<template>
  <Checkbox
    v-bind="forwarded"
    :class="
      cn(
        'size-6 border-none bg-(--semantic-base-input-field-fill)',
        props.class,
      )
    "
  >
    <slot>
      <Check class="size-4" />
    </slot>
  </Checkbox>
</template>

<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import { useForwardPropsEmits } from 'reka-ui'
import type { CheckboxRootEmits, CheckboxRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const props = defineProps<
  CheckboxRootProps & { class?: HTMLAttributes['class'] }
>()
const emit = defineEmits<CheckboxRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emit)
</script>
