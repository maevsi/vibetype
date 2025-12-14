<template>
  <AppContent>
    <!-- TODO: fill page with content instead (https://github.com/maevsi/vibetype/issues/1266) -->
    <CardStateInfo>
      {{ t('soon') }}
    </CardStateInfo>
  </AppContent>
</template>

<script setup lang="ts">
// compiler
definePageMeta({
  layout: 'default-no-header',
})
defineRouteRules({
  robots: false, // TODO: reactive once page is filled with content (https://github.com/maevsi/vibetype/issues/1266)
})

// page
const { t } = useI18n()
const title = t('title')
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
