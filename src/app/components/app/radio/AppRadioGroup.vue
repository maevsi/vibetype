<template>
  <DefineGroup v-slot="{ attributes, groupClass }">
    <RadioGroup
      v-bind="{ ...forwarded, ...attributes }"
      :class="cn('group/selection gap-0 data-[variant=card]:gap-3', groupClass)"
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
  </DefineGroup>
  <!-- a fieldset needs a legend, so an unlabeled group takes its name from attributes like `aria-label` -->
  <FieldSet v-if="$slots.legend" v-bind="$attrs" :class="props.class">
    <FieldLegend class="mb-2 text-body text-fg-1">
      <slot name="legend" />
    </FieldLegend>
    <ReuseGroup />
  </FieldSet>
  <ReuseGroup v-else :attributes="$attrs" :group-class="props.class" />
</template>

<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core'
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

const [DefineGroup, ReuseGroup] = createReusableTemplate<{
  attributes?: Record<string, unknown>
  groupClass?: HTMLAttributes['class']
}>()

const delegatedProps = computed(() => {
  const { class: _, items: _items, variant: _variant, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emit)
</script>
