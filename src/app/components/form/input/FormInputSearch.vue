<template>
  <div
    class="flex items-center gap-4 rounded-lg border-1 border-(--faint-line) bg-(--semantic-base-input-field-fill) px-4 py-3 shadow hover:bg-(--faint-weak) has-focus:border-(--semantic-accent-accent-line)"
  >
    <div class="shrink-0 text-(--semantic-accent-accent-icon)">
      <AppIconSearch />
    </div>
    <label :for="templateIdInput" class="sr-only">{{ t('search') }}</label>
    <!-- TODO: extract input component, e.g. to set placeholder color in one place only -->
    <input
      :id="templateIdInput"
      v-model="model"
      class="peer flex-1 border-none bg-transparent text-sm font-semibold placeholder-(--semantic-base-text-secondary) outline-none"
      :placeholder="t('search')"
      type="text"
    />
    <ButtonIcon
      :aria-label="t('close')"
      class="hidden shrink-0 text-(--semantic-accent-accent-icon) peer-not-placeholder-shown:block"
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
