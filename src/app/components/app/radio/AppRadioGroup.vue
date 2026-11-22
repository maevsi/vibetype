<template>
  <div :class="cn('flex flex-col gap-2', props.class)">
    <span
      v-if="$slots.legend"
      :id="templateIdLegend"
      class="text-body text-fg-1"
    >
      <slot name="legend" />
    </span>
    <RadioGroup
      v-bind="{ ...forwarded, ...$attrs }"
      :aria-labelledby="$slots.legend ? templateIdLegend : undefined"
      class="group/selection gap-0 data-[variant=card]:gap-3"
      :data-variant="variant"
    >
      <slot>
        <AppRadioGroupItem
          v-for="item in items"
          :key="item.value"
          :disabled="item.disabled"
          :value="item.value"
        >
          {{ item.label }}
          <template v-if="item.description" #description>
            {{ item.description }}
          </template>
        </AppRadioGroupItem>
      </slot>
    </RadioGroup>
  </div>
</template>

<script setup lang="ts">
import { useForwardPropsEmits } from 'reka-ui'
import type { RadioGroupRootEmits, RadioGroupRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

import type { SelectionItem, SelectionVariant } from '~/types/selection'
import { cn } from '@/utils/shadcn'

defineOptions({ inheritAttrs: false })

const props = defineProps<
  {
    items?: SelectionItem[]
    variant?: SelectionVariant
  } & RadioGroupRootProps & { class?: HTMLAttributes['class'] }
>()
const emit = defineEmits<RadioGroupRootEmits>()

const templateIdLegend = useId()

const delegatedProps = computed(() => {
  const { class: _, items: _items, variant: _variant, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emit)
</script>
