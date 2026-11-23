<template>
  <SkewNotification v-slot="{ isAppOutdated, reload }">
    <AppAlert
      v-if="isAppOutdated || $pwa?.needRefresh"
      class="flex shrink-0 flex-wrap items-center justify-center gap-2 rounded-none"
      role="status"
    >
      {{ t('updateAvailable') }}
      <AppButton
        :aria-label="t('updateReload')"
        size="small"
        @click="$pwa?.needRefresh ? $pwa.updateServiceWorker() : reload()"
      >
        {{ t('updateReload') }}
      </AppButton>
    </AppAlert>
  </SkewNotification>
</template>

<script setup lang="ts">
const { $pwa } = useNuxtApp()
const { t } = useI18n()

// the browser looks for a new service worker on page loads only, so without this a reload for the new release would be followed by a second prompt for its service worker
useSkewProtection().onAppOutdated(async () => {
  await (await navigator.serviceWorker?.getRegistration())?.update()
})
</script>

<i18n lang="yaml">
de:
  updateAvailable: Eine neue Version von @.upper:{'globalSiteName'} ist verfügbar.
  updateReload: Neu laden
en:
  updateAvailable: A new version of @.upper:{'globalSiteName'} is available.
  updateReload: Reload
</i18n>
