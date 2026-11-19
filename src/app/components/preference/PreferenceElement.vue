<template>
  <label
    class="group relative flex min-h-25 w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-medium bg-surface-raised p-3 has-checked:inset-ring-3 has-checked:inset-ring-action-primary has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-action-primary"
  >
    <input
      :checked="selected.includes(id)"
      class="absolute inset-0 size-full cursor-pointer appearance-none rounded-medium outline-none"
      type="checkbox"
      @change="emit('toggle')"
    />
    <span aria-hidden="true" class="flex size-16 items-center justify-center">
      <slot>
        <AppIconImage class="size-8 text-fg-3" />
      </slot>
    </span>
    <span class="block w-full text-center text-caption text-balance">
      {{ name }}
    </span>
  </label>
</template>

<script setup lang="ts">
const { id, name, selected } = defineProps<{
  id: string
  name: string
  selected: string[]
}>()

const emit = defineEmits<{
  toggle: []
}>()
</script>
