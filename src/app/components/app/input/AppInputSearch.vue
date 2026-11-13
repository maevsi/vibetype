<template>
  <AppInput
    v-model="model"
    :aria-label="t('search')"
    :placeholder="t('search')"
    type="text"
  >
    <template #prefix>
      <AppIconSearch />
    </template>
    <template v-if="model" #suffix>
      <AppButton
        :aria-label="t('reset')"
        class="text-fg-2"
        size="none"
        variant="ghost"
        @click="model = ''"
      >
        <AppIconClose />
      </AppButton>
    </template>
  </AppInput>
</template>

<script setup lang="ts">
const model = defineModel<string>({ default: '' })

const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  reset: Eingabe zurücksetzen
  search: Suche
en:
  reset: Reset input
  search: Search
</i18n>
