<template>
  <label
    ref="dropZone"
    :aria-disabled="isInactive"
    :class="
      cn(
        'flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-large border-2 border-dashed border-line bg-surface-raised p-6 text-center text-body text-fg-2 transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-action-primary data-[drag-over=true]:border-action-primary data-[drag-over=true]:bg-action-primary/10 data-[inactive=true]:pointer-events-none data-[inactive=true]:opacity-40',
        classProps,
      )
    "
    :data-drag-over="isOverDropZone"
    :data-inactive="isInactive"
    data-slot="input-file"
  >
    <input
      :accept
      class="sr-only"
      :disabled="isInactive"
      :multiple
      type="file"
      @change="onChange"
    />
    <AppSpinner v-if="loading" class="size-6" />
    <slot v-else>
      <AppIconArrowUpTray class="size-8" />
      <span>{{ t('drop') }}</span>
    </slot>
  </label>
</template>

<script setup lang="ts">
import { useDropZone } from '@vueuse/core'
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

const {
  accept = undefined,
  class: classProps = undefined,
  disabled = false,
  loading = false,
  multiple = false,
} = defineProps<{
  accept?: string
  class?: HTMLAttributes['class']
  disabled?: boolean
  loading?: boolean
  multiple?: boolean
}>()

const emit = defineEmits<{
  select: [files: File[]]
}>()

const { t } = useI18n()
const dropZone = useTemplateRef('dropZone')

// computations
const isInactive = computed(() => disabled || loading)

// methods
const isAccepted = (file: File) =>
  !accept ||
  accept
    .split(',')
    .map((pattern) => pattern.trim().toLowerCase())
    .filter(Boolean)
    .some((pattern) =>
      pattern.startsWith('.')
        ? file.name.toLowerCase().endsWith(pattern)
        : pattern.endsWith('/*')
          ? file.type.toLowerCase().startsWith(pattern.slice(0, -1))
          : file.type.toLowerCase() === pattern,
    )
const onFiles = (files: File[] | null) => {
  if (isInactive.value || !files) return

  const filesAccepted = files
    .filter(isAccepted)
    .slice(0, multiple ? undefined : 1)

  if (filesAccepted.length) emit('select', filesAccepted)
}
const onChange = (event: Event) => {
  const input = event.target instanceof HTMLInputElement ? event.target : null

  if (!input) return

  onFiles(Array.from(input.files ?? []))
  // allows choosing the same file again
  input.value = ''
}

// initialization
const { isOverDropZone } = useDropZone(dropZone, { onDrop: onFiles })
</script>

<i18n lang="yaml">
de:
  drop: Datei hier ablegen oder zum Auswählen klicken
en:
  drop: Drop a file here or click to choose
</i18n>
