<template>
  <div class="flex flex-1 flex-col">
    <LayoutTopBar>{{ title }}</LayoutTopBar>
    <LayoutPage>
      <!-- TODO: fill page with content instead (https://github.com/maevsi/vibetype/issues/159) -->
      <AppAlert>
        {{ t('soon') }}
      </AppAlert>
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
useFeatureRequired('invitations')

defineRouteRules({
  robots: false, // TODO: reactive once page is filled with content (https://github.com/maevsi/vibetype/issues/159)
})

const { t } = useI18n()

// data
const title = t('title')

// initialization
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  soon: Hier wirst du bald sehen können, zu welchen Veranstaltungen du eingeladen bist.
  title: Einladungen
en:
  soon: Here, you will soon be able to see which events you are invited to.
  title: Invitations
</i18n>
