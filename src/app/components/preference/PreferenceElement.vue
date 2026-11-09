<template>
  <button
    :aria-pressed="selected.includes(id)"
    class="group flex flex-col items-center gap-1 p-1"
    type="button"
  >
    <span
      class="flex size-24 items-center justify-center rounded-full border-action-primary bg-surface-raised group-aria-pressed:border-2"
    >
      <slot>
        <AppIconImage class="size-12 text-line" />
      </slot>
    </span>
    <TypographyLabel v-slot="attributes">
      <span
        v-bind="attributes"
        class="block w-24 truncate group-aria-pressed:text-link"
      >
        {{ name }}
      </span>
    </TypographyLabel>
  </button>
</template>

<script setup lang="ts">
const { id, name, selected } = defineProps<{
  id: string
  name: string
  selected: string[]
}>()
</script>
