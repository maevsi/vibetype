<template>
  <div class="flex flex-col gap-4">
    <!-- TODO: fill page with content instead (https://github.com/maevsi/vibetype/issues/773) -->
    <CardStateInfo>
      {{ t('attendanceDescription') }}
    </CardStateInfo>
  </div>
</template>

<script setup lang="ts">
defineRouteRules({
  robots: false, // TODO: reactive once page is filled with content (https://github.com/maevsi/vibetype/issues/773)
})

const { t } = useI18n()

// data
const title = t('title')

// initialization
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  attendanceDescription: Hier wirst du bald Teilnahmestatus von Veranstaltungen sehen können.
  title: Teilnahme
en:
  attendanceDescription: Here you will soon be able to see the attendance status for events.
  title: Attendance
</i18n>
