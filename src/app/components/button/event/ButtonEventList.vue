<template>
  <ButtonColored
    :aria-label="t('eventAll')"
    :to="localePath('event')"
    variant="secondary"
    @click="emit('click')"
  >
    {{ t('eventAll') }}
    <template #prefix>
      <IHeroiconsListBullet />
    </template>
  </ButtonColored>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()

const emit = defineEmits<{
  click: []
}>()
</script>

<i18n lang="yaml">
de:
  eventAll: Alle Veranstaltungen anzeigen
en:
  eventAll: Show all events
</i18n>
