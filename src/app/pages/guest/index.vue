<template>
  <div class="flex flex-col gap-4">
    <!-- TODO: fill page with content instead (https://github.com/maevsi/vibetype/issues/1266) -->
    <CardStateInfo>
      {{ t('soon') }}
    </CardStateInfo>
  </div>
</template>

<script setup lang="ts">
defineRouteRules({
  robots: false, // TODO: reactive once page is filled with content (https://github.com/maevsi/vibetype/issues/1266)
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
