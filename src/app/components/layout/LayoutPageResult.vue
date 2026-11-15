<template>
  <section
    :aria-labelledby="hasTitle ? templateIdTitle : undefined"
    class="flex flex-col items-center text-center"
  >
    <div
      :class="[
        'mb-6 flex size-16 items-center justify-center rounded-full',
        {
          'bg-danger-tint': type === 'error',
          'bg-success-tint': type === 'success',
          'bg-warning-tint': type === 'warning',
        },
      ]"
    >
      <AppIconStateError v-if="type === 'error'" class="size-8 text-error" />
      <AppIconStateSuccess
        v-else-if="type === 'success'"
        class="size-8 text-link"
      />
      <AppIconStateWarning v-else class="size-8 text-warning" />
    </div>
    <h2
      v-if="hasTitle"
      :id="templateIdTitle"
      class="mb-2 text-heading-large text-pretty text-fg-1"
    >
      <slot name="title">
        {{ t('titleError') }}
      </slot>
    </h2>
    <p v-if="$slots.description" class="text-body text-pretty text-fg-2">
      <slot name="description" />
    </p>
    <div
      v-if="message"
      class="mt-6 rounded-medium bg-surface-raised p-4 text-left"
    >
      <p class="mb-2 text-body text-fg-1">
        {{ t('messageLabel') }}
      </p>
      <p class="mb-3 text-body-small break-words text-fg-2">
        {{ message }}
      </p>
      <button
        class="text-body text-fg-1 underline"
        type="button"
        @click="copyMessage"
      >
        {{ t('copy') }}
      </button>
    </div>
    <div v-if="$slots.default" class="mt-6 flex w-full flex-col gap-8">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
const { message = undefined, type } = defineProps<{
  message?: string
  type: 'error' | 'success' | 'warning'
}>()

const slots = useSlots()
const { t } = useI18n()

// template
const templateIdTitle = useId()
// An error always gets a title so that the raw message below it never stands alone.
const hasTitle = computed(() => !!slots.title || type === 'error')

const copyMessage = async () => {
  if (!message) return

  try {
    await navigator.clipboard.writeText(message)
    toast.success(t('copied'))
  } catch {
    toast.error(t('copyFailed'))
  }
}
</script>

<i18n lang="yaml">
de:
  copied: In Zwischenablage kopiert
  copy: In Zwischenablage kopieren
  copyFailed: Kopieren fehlgeschlagen
  messageLabel: 'Fehlermeldung:'
  titleError: Ein Fehler ist aufgetreten
en:
  copied: Copied to clipboard
  copy: Copy to clipboard
  copyFailed: Failed to copy
  messageLabel: 'Error message:'
  titleError: Something went wrong
</i18n>
