<template>
  <AppButton
    :aria-label="t('text')"
    class="flex size-12 shrink-0 items-center justify-center rounded-large bg-surface-raised 2xl:h-12 2xl:w-auto 2xl:rounded-medium 2xl:bg-action-primary 2xl:px-6 2xl:whitespace-nowrap 2xl:text-on-action-primary"
    size="none"
    :to="localePath('event-create')"
    variant="ghost"
  >
    <span class="hidden 2xl:block">
      {{ t('text') }}
    </span>
    <AppIconPlus class="2xl:hidden" />
    <template #prefix>
      <AppIconPlus class="hidden 2xl:block" />
    </template>
  </AppButton>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  text: Veranstaltung erstellen
en:
  text: Create event
</i18n>
