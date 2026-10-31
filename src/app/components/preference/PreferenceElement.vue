<template>
  <button
    :aria-pressed="selected.includes(id)"
    class="group flex flex-col items-center gap-1 p-1"
    type="button"
  >
    <span
      class="flex size-24 items-center justify-center rounded-full border-(--accent-strong) bg-(--semantic-base-surface-1) group-aria-pressed:border-2"
    >
      <slot>
        <AppIconImage class="size-12 text-(--faint-strong)" />
      </slot>
    </span>
    <TypographyLabel v-slot="attributes">
      <span
        v-bind="attributes"
        class="block w-24 truncate group-aria-pressed:text-(--semantic-accent-text)"
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
