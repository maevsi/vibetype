<template>
  <DefineGroup v-slot="{ attributes, groupClass }">
    <CheckboxGroupRoot
      v-bind="{ ...forwarded, ...attributes }"
      :class="
        cn(
          'group/selection flex flex-col gap-0 data-[variant=card]:gap-3',
          groupClass,
        )
      "
      data-slot="checkbox-group"
      :data-variant="variant"
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
  </DefineGroup>
  <!-- a fieldset needs a legend, so an unlabeled group takes its name from attributes like `aria-label` -->
  <FieldSet v-if="$slots.legend" v-bind="$attrs" :class="props.class">
    <FieldLegend class="mb-2 text-body text-fg-1">
      <slot name="legend" />
    </FieldLegend>
    <ReuseGroup />
  </FieldSet>
  <ReuseGroup
    v-else
    :attributes="{ role: 'group', ...$attrs }"
    :group-class="props.class"
  />
</template>

<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core'
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
