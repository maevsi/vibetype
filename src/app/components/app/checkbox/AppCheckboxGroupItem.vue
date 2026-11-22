<template>
  <AppSelectionItem :class="props.class">
    <template #control="ariaAttributes">
      <Checkbox v-bind="{ ...forwarded, ...ariaAttributes }" />
    </template>
    <slot />
    <template v-if="$slots.description" #description>
      <slot name="description" />
    </template>
  </AppSelectionItem>
</template>

<script setup lang="ts">
import { useForwardProps } from 'reka-ui'
import type { CheckboxRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

const props = defineProps<
  CheckboxRootProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardProps(delegatedProps)
</script>
