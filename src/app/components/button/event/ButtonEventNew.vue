<template>
  <AppButton
    :aria-label="t('text')"
    class="shrink-0 2xl:px-4 2xl:py-2 2xl:font-medium 2xl:whitespace-nowrap"
    :to="localePath('event-create')"
  >
    <span class="hidden 2xl:block">
      {{ t('text') }}
    </span>
    <AppIconCalendarAddOutline class="size-8 2xl:hidden" />
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
