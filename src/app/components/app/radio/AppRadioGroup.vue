<template>
  <RadioGroup :class="props.class" v-bind="forwarded">
    <AppRadioGroupItem
      v-for="item in props.items"
      :key="item.value"
      class="flex items-center gap-3 p-1"
      :value="item.value"
    >
      {{ item.label }}
    </AppRadioGroupItem>
  </RadioGroup>
</template>

<script setup lang="ts">
import { useForwardPropsEmits } from 'reka-ui'
import type { RadioGroupRootEmits, RadioGroupRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

const props = defineProps<
  {
    items: {
      value: string
      label: string
    }[]
  } & RadioGroupRootProps & { class?: HTMLAttributes['class'] }
>()
const emit = defineEmits<RadioGroupRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, items: _items, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emit)
</script>
