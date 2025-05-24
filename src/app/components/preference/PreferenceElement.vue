<template>
  <div
    :aria-selected="selected.includes(id)"
    class="group flex flex-col items-center gap-1 p-1"
  >
    <div
      class="flex size-24 items-center justify-center rounded-full border-(--accent-strong) bg-(--accent-weak) group-aria-selected:border-2"
    >
      <AppIconImage class="size-12 text-(--faint-strong)" />
    </div>
    <TypographyLabel v-slot="attributes">
      <div
        v-bind="attributes"
        class="w-24 truncate group-aria-selected:text-(--semantic-accent-text)"
      >
        {{ name }}
      </div>
    </TypographyLabel>
  </div>
</template>

<script setup lang="ts">
const { id, name, selected } = defineProps<{
  id: string
  name: string
  selected: string[]
}>()
</script>
