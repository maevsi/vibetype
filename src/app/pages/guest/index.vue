<template>
  <div class="flex flex-1 flex-col">
    <LayoutTopBar>{{ title }}</LayoutTopBar>
    <LayoutPage>
      <!-- TODO: fill page with content instead (https://github.com/maevsi/vibetype/issues/159) -->
      <AppAlert>
        {{ t('soon') }}
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
useFeatureRequired('invitations')

defineRouteRules({
  robots: false, // TODO: reactive once page is filled with content (https://github.com/maevsi/vibetype/issues/159)
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
  events: Deine Veranstaltungen
  next: Bis dahin kommen Einladungen per E-Mail, und Veranstaltungen, zu denen du gehst, findest du bei deinen Veranstaltungen.
  soon: Hier wirst du bald sehen können, zu welchen Veranstaltungen du eingeladen bist.
  title: Einladungen
en:
  events: Your events
  next: "Until then, invitations arrive by email, and events you're going to are listed with your events."
  soon: Here, you will soon be able to see which events you are invited to.
  title: Invitations
</i18n>
