<template>
  <div
    class="flex h-13 items-center gap-4 rounded-medium bg-surface-raised pr-2 pl-6 has-focus-visible:ring-2 has-focus-visible:ring-action-primary has-focus-visible:ring-inset"
  >
    <div class="shrink-0 text-fg-3">
      <AppIconSearch />
    </div>
    <label class="sr-only" :for="templateIdInput">{{ t('search') }}</label>
    <input
      :id="templateIdInput"
      v-model="model"
      class="peer flex-1 border-none bg-transparent text-body placeholder-fg-3 outline-none"
      :placeholder="t('search')"
      type="text"
    />
    <ButtonIcon
      :aria-label="t('close')"
      class="hidden shrink-0 text-fg-2 peer-not-placeholder-shown:block"
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
