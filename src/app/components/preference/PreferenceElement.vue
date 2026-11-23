<template>
  <label
    :class="
      cn(
        'group relative flex h-full min-h-25 w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-medium bg-surface-raised p-3 has-checked:inset-ring-3 has-checked:inset-ring-action-primary has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-action-primary',
        isCompact &&
          'min-h-0 w-auto flex-row gap-1.5 rounded-full py-1.5 ps-2 pe-3 has-checked:inset-ring-2',
      )
    "
  >
    <input
      :checked="selected.includes(id)"
      :class="
        cn(
          'absolute inset-0 size-full cursor-pointer appearance-none rounded-medium outline-none',
          isCompact && 'rounded-full',
        )
      "
      type="checkbox"
      @change="emit('toggle')"
    />
    <span
      aria-hidden="true"
      :class="
        cn(
          'flex size-16 items-center justify-center',
          isCompact && 'size-6 [&_svg]:size-6!',
        )
      "
    >
      <slot>
        <AppIconImage class="size-8 text-fg-3" />
      </slot>
    </span>
    <span
      :class="
        cn(
          'block w-full text-center text-caption text-balance',
          isCompact && 'w-auto text-body-small whitespace-nowrap',
        )
      "
    >
      {{ name }}
    </span>
  </label>
</template>

<script setup lang="ts">
import { cn } from '@/utils/shadcn'

const {
  id,
  isCompact = false,
  name,
  selected,
} = defineProps<{
  id: string
  isCompact?: boolean
  name: string
  selected: string[]
}>()

const emit = defineEmits<{
  toggle: []
}>()
</script>
