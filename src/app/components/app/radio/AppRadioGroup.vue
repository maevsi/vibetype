<template>
  <RadioGroup :class="props.class" v-bind="forwarded">
    <component
      :is="props.isForm ? FormRadioGroupItem : AppRadioGroupItem"
      v-for="item in props.items"
      :key="item.value"
      class="flex items-center gap-3 p-1"
      :value="item.value"
    >
      {{ item.label }}
    </component>
  </RadioGroup>
</template>

<script setup lang="ts">
import { FormRadioGroupItem, AppRadioGroupItem } from '#components'
import { useForwardPropsEmits } from 'reka-ui'
import type { RadioGroupRootEmits, RadioGroupRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

const props = defineProps<
  {
    isForm?: boolean
    items: {
      value: string
      label: string
    }[]
  } & RadioGroupRootProps & { class?: HTMLAttributes['class'] }
>()
const emit = defineEmits<RadioGroupRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, isForm: _isForm, items: _items, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emit)
</script>
