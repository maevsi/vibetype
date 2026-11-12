<template>
  <AppStep v-slot="attributes" :is-active="isActive">
    <LayoutPage v-bind="attributes">
      <div
        class="flex w-full max-w-md flex-col items-center self-center px-3 text-center lg:px-6"
      >
        <div
          class="mb-6 flex size-16 items-center justify-center rounded-full bg-danger-tint"
        >
          <IHeroiconsExclamationCircle class="size-8 text-error" />
        </div>
        <h2 class="mb-2 text-heading-large text-fg-1">
          {{ t('heading') }}
        </h2>
        <p class="text-body text-pretty text-fg-2">
          {{ t('globalTryAgain') }}
        </p>
        <div
          v-if="error?.message"
          class="mt-6 rounded-medium bg-surface-raised p-4 text-left"
        >
          <p class="mb-2 text-body text-fg-1">
            {{ t('messageLabel') }}
          </p>
          <p class="mb-3 text-body-small break-words text-fg-2">
            {{ error.message }}
          </p>
          <button
            class="text-body text-fg-1 underline"
            type="button"
            @click="copyMessage"
          >
            {{ t('copy') }}
          </button>
        </div>
      </div>
      <template #bottom>
        <slot />
      </template>
    </LayoutPage>
  </AppStep>
</template>

<script setup lang="ts">
const { error = null } = defineProps<{
  error?: Error | null
  isActive?: boolean
}>()

const { t } = useI18n()

const copyMessage = async () => {
  if (!error?.message) return

  try {
    await navigator.clipboard.writeText(error.message)
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
  heading: Ein Fehler ist aufgetreten
  messageLabel: 'Fehlermeldung:'
en:
  copied: Copied to clipboard
  copy: Copy to clipboard
  copyFailed: Failed to copy
  heading: Something went wrong
  messageLabel: 'Error message:'
</i18n>
