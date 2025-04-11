<template>
  <div>
    <div class="flex items-baseline gap-4">
      <div class="flex-1 overflow-hidden">
        <slot v-if="$slots.default" />
        <div v-else>
          <h1 v-if="!isCentered">
            {{ title }}
          </h1>
        </div>
      </div>
    </div>
    <h1 v-if="isCentered" class="text-center">
      {{ title }}
    </h1>
  </div>
</template>

<script setup lang="ts">
const { isCentered, title } = defineProps<{
  isCentered?: boolean
  title: string
}>()
</script>
