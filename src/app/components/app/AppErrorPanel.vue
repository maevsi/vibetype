<template>
  <div class="flex w-full max-w-md flex-col gap-4 self-center px-3 lg:px-6">
    <div
      class="flex size-14 items-center justify-center rounded-2xl bg-gray-100 dark:bg-gray-800"
    >
      <IHeroiconsExclamationCircle
        class="size-8 text-red-600 dark:text-red-400"
      />
    </div>
    <div class="flex flex-col gap-2">
      <h2 class="text-[28px] leading-8.5 font-bold tracking-[-0.4px]">
        {{ heading }}
      </h2>
      <p
        class="text-[15px] leading-5 font-semibold tracking-[-0.4px] text-gray-500 dark:text-gray-400"
      >
        {{ description }}
      </p>
      <p
        v-if="hint"
        class="text-[15px] leading-5 font-semibold tracking-[-0.4px] text-gray-500 dark:text-gray-400"
      >
        {{ hint }}
      </p>
    </div>
    <div
      v-if="errorMessage"
      class="flex flex-col gap-4 rounded-2xl bg-gray-100 p-4 dark:bg-gray-800"
    >
      <div class="flex flex-col gap-2">
        <p class="text-[15px] font-semibold tracking-[-0.4px]">
          {{ t('errorMessageLabel') }}
        </p>
        <p
          class="text-[15px] font-semibold tracking-[-0.4px] text-gray-500 dark:text-gray-400"
        >
          {{ errorMessage }}
        </p>
      </div>
      <button
        class="self-end text-[13px] font-semibold tracking-[-0.4px] underline"
        type="button"
        @click="copyErrorToClipboard"
      >
        {{ t('copyToClipboard') }}
      </button>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
const {
  description,
  errorMessage = undefined,
  heading,
  hint = undefined,
} = defineProps<{
  description: string
  errorMessage?: string
  heading: string
  hint?: string
}>()

const { t } = useI18n()

const copyErrorToClipboard = async () => {
  if (!errorMessage) return

  try {
    await navigator.clipboard.writeText(errorMessage)
    toast.success(t('copiedToClipboard'))
  } catch {
    toast.error(t('copyFailed'))
  }
}
</script>

<i18n lang="yaml">
de:
  copiedToClipboard: In Zwischenablage kopiert
  copyFailed: Kopieren fehlgeschlagen
  copyToClipboard: In Zwischenablage kopieren
  errorMessageLabel: 'Fehlermeldung:'
en:
  copiedToClipboard: Copied to clipboard
  copyFailed: Failed to copy
  copyToClipboard: Copy to clipboard
  errorMessageLabel: 'Error message:'
</i18n>
