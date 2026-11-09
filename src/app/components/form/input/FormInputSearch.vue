<template>
  <div
    class="flex items-center gap-4 rounded-lg border-1 border-line bg-surface-raised px-4 py-3 shadow hover:bg-surface-raised has-focus:border-success-tint"
  >
    <div class="shrink-0 text-link">
      <AppIconSearch />
    </div>
    <label class="sr-only" :for="templateIdInput">{{ t('search') }}</label>
    <input
      :id="templateIdInput"
      v-model="model"
      class="peer flex-1 border-none bg-transparent text-sm font-semibold placeholder-fg-2 outline-none"
      :placeholder="t('search')"
      type="text"
    />
    <ButtonIcon
      :aria-label="t('close')"
      class="hidden shrink-0 text-link peer-not-placeholder-shown:block"
      @click="model = ''"
    >
      <AppIconClose />
    </ButtonIcon>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const model = defineModel<string | undefined>({ required: true })

const templateIdInput = useId()
</script>

<i18n lang="yaml">
de:
  close: Eingabe zurücksetzen
  search: Suche
en:
  close: Reset input
  search: Search
</i18n>
