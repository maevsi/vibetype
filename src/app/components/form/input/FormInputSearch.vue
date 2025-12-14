<template>
  <div
    class="flex items-center gap-4 rounded-2xl bg-(--neutral-level-1) p-2 pl-6"
  >
    <div class="shrink-0">
      <AppIconMagnifyingGlass class="size-5" />
    </div>
    <label :for="templateIdInput" class="sr-only">{{ t('search') }}</label>
    <!-- TODO: extract input component, e.g. to set placeholder color in one place only -->
    <input
      :id="templateIdInput"
      v-model="model"
      class="peer subheadlineEmphasized flex-1 border-none bg-transparent text-sm font-semibold outline-none"
      :placeholder="t('search')"
      type="text"
    />
    <ButtonIcon
      :aria-label="t('close')"
      class="hidden shrink-0 peer-not-placeholder-shown:block"
      @click="model = ''"
    >
      <AppIconClose />
    </ButtonIcon>
    <slot name="suffix" />
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
