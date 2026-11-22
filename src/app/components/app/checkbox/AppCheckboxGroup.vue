<template>
  <div :class="cn('flex flex-col gap-2', props.class)">
    <span
      v-if="$slots.legend"
      :id="templateIdLegend"
      class="text-body text-fg-1"
    >
      <slot name="legend" />
    </span>
    <CheckboxGroupRoot
      v-bind="{ ...forwarded, ...$attrs }"
      :aria-labelledby="$slots.legend ? templateIdLegend : undefined"
      class="group/selection flex flex-col gap-0 data-[variant=card]:gap-3"
      data-slot="checkbox-group"
      :data-variant="variant"
      role="group"
    >
      <slot>
        <AppCheckboxGroupItem
          v-for="item in items"
          :key="item.value"
          :disabled="item.disabled"
          :value="item.value"
        >
          {{ item.label }}
          <template v-if="item.description" #description>
            {{ item.description }}
          </template>
        </AppCheckboxGroupItem>
      </slot>
    </CheckboxGroupRoot>
  </div>
</template>

<script setup lang="ts">
import { CheckboxGroupRoot, useForwardPropsEmits } from 'reka-ui'
import type { CheckboxGroupRootEmits, CheckboxGroupRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

import type { SelectionItem, SelectionVariant } from '~/types/selection'
import { cn } from '@/utils/shadcn'

defineOptions({ inheritAttrs: false })

const props = withDefaults(
  defineProps<
    {
      items?: SelectionItem[]
      variant?: SelectionVariant
    } & CheckboxGroupRootProps & { class?: HTMLAttributes['class'] }
  >(),
  {
    class: undefined,
    items: undefined,
    // checkboxes are one tab stop each, unlike the arrow-key navigation of radios
    rovingFocus: false,
    variant: undefined,
  },
)
const emit = defineEmits<CheckboxGroupRootEmits>()

const templateIdLegend = useId()

const delegatedProps = computed(() => {
  const { class: _, items: _items, variant: _variant, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emit)
</script>
