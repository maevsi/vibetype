<template>
  <button
    :aria-pressed="selected.includes(id)"
    class="group flex size-27.5 flex-col items-center justify-center gap-2 rounded-medium bg-surface-raised p-2 aria-pressed:inset-ring-3 aria-pressed:inset-ring-action-primary"
    type="button"
  >
    <span class="flex size-12 items-center justify-center">
      <slot>
        <AppIconImage class="size-12 text-fg-3" />
      </slot>
    </span>
    <span class="block w-full truncate text-center text-caption">
      {{ name }}
    </span>
  </button>
</template>

<script setup lang="ts">
const { id, name, selected } = defineProps<{
  id: string
  name: string
  selected: string[]
}>()
</script>
