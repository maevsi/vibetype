<template>
  <AppButton
    v-bind="delegatedProps"
    :class="[
      'p-4',
      ...(route.fullPath === to ? ['bg-white dark:bg-gray-800'] : []),
    ]"
    @click="emit('onMenuHide')"
  >
    <slot />
  </AppButton>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const { ariaLabel, to } = defineProps<{
  ariaLabel: string
  to?: RouteLocationRaw
}>()

const emit = defineEmits<{
  onMenuHide: []
}>()

const route = useRoute()

const delegatedProps = computed(() => ({
  ariaLabel,
  to,
}))
</script>
