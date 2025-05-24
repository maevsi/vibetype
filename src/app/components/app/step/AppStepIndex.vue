<template>
  <div class="flex items-center justify-center gap-1">
    <div
      v-for="key in count"
      :key
      class="rounded-full p-1.5"
      :class="[
        ...(key === index
          ? ['border-4 border-(--accent-weak-hover)']
          : ['m-1']),
        ...(key <= index ? ['bg-(--accent-strong)'] : ['bg-(--faint-mid)']),
      ]"
    />
  </div>
</template>

<script setup lang="ts">
const { count, index } = defineProps<{
  count: number
  index: number
}>()
</script>
