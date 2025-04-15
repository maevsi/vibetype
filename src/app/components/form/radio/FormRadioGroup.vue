<template>
  <RadioGroup :class="props.class" v-bind="forwarded">
    <FormRadioGroupItem
      v-for="item in props.items"
      :key="item.value"
      :value="item.value"
    >
      {{ item.label }}
    </FormRadioGroupItem>
  </RadioGroup>
</template>

<script setup lang="ts">
import {
  useForwardPropsEmits,
  type RadioGroupRootEmits,
  type RadioGroupRootProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

const props = defineProps<
  {
    items: {
      value: string
      label: string
    }[]
  } & RadioGroupRootProps & { class?: HTMLAttributes['class'] }
>()
const emits = defineEmits<RadioGroupRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
