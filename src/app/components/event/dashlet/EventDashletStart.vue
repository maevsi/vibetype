<template>
  <EventDashlet v-if="event.start">
    <i18n-t keypath="startFull" tag="span">
      <template #date>
        <AppTime :datetime="event.start" />
      </template>
      <template #relative>
        <AppTime :datetime="event.start" relative />
      </template>
    </i18n-t>
    <template #icon>
      <AppIconCalendar :title="t('start')" />
    </template>
  </EventDashlet>
</template>

<script setup lang="ts">
const { event } = defineProps<{
  event: {
    start: string
  }
}>()

const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  start: Beginn
  startFull: '{date} ({relative})'
en:
  start: start
  startFull: '{date} ({relative})'
</i18n>
