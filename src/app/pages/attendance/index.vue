<template>
  <div class="flex flex-1 flex-col">
    <LayoutTopBar>{{ title }}</LayoutTopBar>
    <LayoutPage>
      <!-- TODO: fill page with content instead (https://github.com/maevsi/vibetype/issues/773) -->
      <AppAlert>
        {{ t('attendanceDescription') }}
      </AppAlert>
      <div
        v-if="store.signedInUsername"
        class="flex flex-col items-center gap-4 text-center"
      >
        <p>{{ t('next') }}</p>
        <AppButton
          :aria-label="t('events')"
          :to="
            localePath({
              name: 'event-view-username',
              params: { username: store.signedInUsername },
            })
          "
        >
          {{ t('events') }}
        </AppButton>
      </div>
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
useFeatureRequired('participation')

defineRouteRules({
  robots: false, // TODO: reactive once page is filled with content (https://github.com/maevsi/vibetype/issues/773)
})

const localePath = useLocalePath()
const { t } = useI18n()
const store = useStore()

// data
const title = t('title')

// initialization
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  attendanceDescription: Hier wirst du bald Teilnahmestatus von Veranstaltungen sehen können.
  events: Deine Veranstaltungen
  next: Bis dahin checkst du Gäste über die Gästeliste deiner Veranstaltung ein.
  title: Teilnahme
en:
  attendanceDescription: Here you will soon be able to see the attendance status for events.
  events: Your events
  next: Until then, check guests in from the guest list of your event.
  title: Attendance
</i18n>
