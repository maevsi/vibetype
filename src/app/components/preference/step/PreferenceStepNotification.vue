<template>
  <LayoutPage>
    <div class="flex flex-col items-start gap-3">
      <div
        class="flex size-16 items-center justify-center rounded-full bg-surface-raised text-action-primary"
      >
        <AppIconBellAlert class="size-8" />
      </div>
      <span class="text-heading-medium">
        {{ t('title') }}
      </span>
      <span class="text-body text-fg-2">
        {{ t('description') }}
      </span>
      <span v-if="isIosBrowserNotInstalled" class="text-body text-fg-1">
        {{ t('iosInstall') }}
      </span>
      <span class="text-caption text-fg-3">
        {{ t('settingsNote') }}
      </span>
    </div>
    <template #bottom>
      <AppButton
        v-if="!isIosBrowserNotInstalled"
        :aria-label="t('turnOn')"
        class="w-full max-w-md"
        @click="turnOn"
      >
        {{ t('turnOn') }}
      </AppButton>
      <AppButton
        :aria-label="t('skip')"
        class="w-full max-w-md data-[variant=secondary]:bg-surface"
        variant="secondary"
        @click="emit('next')"
      >
        {{ t('skip') }}
      </AppButton>
    </template>
  </LayoutPage>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  next: []
}>()

const { t } = useI18n()
const { isIosBrowserNotInstalled, notificationStore } =
  useNotificationOnboarding()

// The permission prompt must open inside this click, as browsers ignore it otherwise. Device registration follows from the permission change in `app.vue`.
const turnOn = () => {
  requestNotificationPermission(notificationStore)

  const stop = watch(
    () => notificationStore.permissionState,
    (permissionState) => {
      if (permissionState === 'prompt') return

      stop()
      emit('next')
    },
  )
}
</script>

<i18n lang="yaml">
de:
  description: Aktiviere Benachrichtigungen und verpasse keine passenden Events und neuen Einladungen mehr. Keine Sorge, wir schicken dir keinen Spam.
  iosInstall: Auf dem iPhone und iPad funktionieren Benachrichtigungen erst, wenn du die Seite zum Home-Bildschirm hinzufügst. Tippe auf „Teilen“ und dann auf „Zum Home-Bildschirm“.
  settingsNote: Das kannst du jederzeit später in den Einstellungen ändern.
  skip: Überspringen
  title: Bleib auf dem Laufenden
  turnOn: Einschalten
en:
  description: Turn on notifications to catch top event matches, new invitations, and more. Don't worry, we won't send you spam.
  iosInstall: On iPhone and iPad, notifications only work once you add this site to your Home Screen. Tap "Share", then "Add to Home Screen".
  settingsNote: You can change this anytime later in the settings.
  skip: Skip
  title: Stay updated
  turnOn: Turn on
</i18n>
