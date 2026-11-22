<template>
  <AppConfirmDeleteDrawer
    :cancel-label="t('stay')"
    :confirm-label="t('discard')"
    :open="isOpen"
    :title="t('title')"
    @confirm="settle(true)"
    @update:open="(value) => !value && settle(false)"
  >
    {{ t('globalLeaveConfirm') }}
  </AppConfirmDeleteDrawer>
</template>

<script setup lang="ts">
const { isOpen, settle } = useLeaveConfirmationDrawer()

const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  discard: Verwerfen
  stay: Zurück
  title: Änderungen verwerfen
en:
  discard: Discard
  stay: Go back
  title: Discard changes
</i18n>
