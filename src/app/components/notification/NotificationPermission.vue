<template>
  <AppCard class="flex items-start gap-3 p-4">
    <div
      class="flex size-10 shrink-0 items-center justify-center rounded-full bg-line text-fg-1"
    >
      <AppIconQuestionMarkCircle v-if="state === 'loading'" />
      <AppIconCheckCircle v-else-if="state === 'granted'" class="text-link" />
      <AppIconBellAlert v-else-if="state === 'prompt'" />
      <AppIconNoSymbol v-else />
    </div>
    <div class="flex flex-1 flex-col gap-3" role="status">
      <div class="flex flex-col gap-1">
        <span class="text-title3 text-balance">{{ texts.title }}</span>
        <p class="text-body-small font-normal text-fg-2">
          {{ texts.description }}
        </p>
        <p
          v-if="state === 'denied'"
          class="text-body-small font-normal text-fg-2"
        >
          {{ deniedInstruction }}
        </p>
      </div>
      <div v-if="state === 'prompt'">
        <AppButton
          :aria-label="t('turnOn')"
          :loading="isRequesting"
          size="small"
          @click="turnOn"
        >
          {{ t('turnOn') }}
          <template #prefix>
            <AppIconBellAlert />
          </template>
        </AppButton>
      </div>
      <div v-else-if="state === 'denied'" class="flex flex-wrap gap-2">
        <AppButton
          v-if="isAndroid"
          :aria-label="t('openSystemSettings')"
          size="small"
          @click="openAndroidSettings"
        >
          {{ t('openSystemSettings') }}
          <template #prefix>
            <AppIconSettings />
          </template>
        </AppButton>
        <AppButton
          :aria-label="t('checkAgain')"
          size="small"
          variant="secondary"
          @click="refresh"
        >
          {{ t('checkAgain') }}
          <template #prefix>
            <AppIconArrowRotateRight />
          </template>
        </AppButton>
      </div>
    </div>
  </AppCard>
</template>

<script setup lang="ts">
import { useEventListener } from '@vueuse/core'

const TRUSTED_WEB_ACTIVITY_PACKAGE_NAME = 'si.maev.twa'
const ANDROID_SETTINGS_URL = `intent://notification-settings#Intent;scheme=vibetype;package=${TRUSTED_WEB_ACTIVITY_PACKAGE_NAME};S.browser_fallback_url=${encodeURIComponent(`https://play.google.com/store/apps/details?id=${TRUSTED_WEB_ACTIVITY_PACKAGE_NAME}`)};end`

const { t } = useI18n()
const { isAndroid } = usePlatform()
const notificationStore = useNotificationStore()

const isRequesting = ref(false)
const isSupported = ref<boolean>()
const state = computed(() => {
  if (isSupported.value === undefined || !notificationStore.permissionState)
    return 'loading'

  if (!isSupported.value) return 'unsupported'

  return notificationStore.permissionState
})
const texts = computed(() => {
  switch (state.value) {
    case 'denied':
      return { description: t('deniedDescription'), title: t('deniedTitle') }
    case 'granted':
      return { description: t('grantedDescription'), title: t('grantedTitle') }
    case 'prompt':
      return { description: t('promptDescription'), title: t('promptTitle') }
    case 'unsupported':
      return {
        description: t('unsupportedDescription'),
        title: t('unsupportedTitle'),
      }
    default:
      return { description: t('loadingDescription'), title: t('loadingTitle') }
  }
})
const deniedInstruction = computed(() => {
  if (isAndroid) return t('deniedInstructionAndroid')

  return hasPushCapability
    ? t('deniedInstructionIos')
    : t('deniedInstructionWeb')
})

const refresh = () => requestNotificationPermissionState(notificationStore)
const turnOn = async () => {
  isRequesting.value = true

  try {
    await requestNotificationPermission(notificationStore)
  } finally {
    isRequesting.value = false
  }
}
const openAndroidSettings = () => {
  window.location.href = ANDROID_SETTINGS_URL
}

onMounted(() => {
  isSupported.value =
    hasPushCapability ||
    ('Notification' in window && 'serviceWorker' in navigator)
})
// The state changes in the system settings, so it is read again once the user comes back.
useEventListener(document, 'visibilitychange', () => {
  if (document.visibilityState === 'visible') refresh()
})
</script>

<i18n lang="yaml">
de:
  checkAgain: Erneut prüfen
  deniedDescription: Dieses Gerät kann dir keine Push-Benachrichtigungen schicken, bis du sie wieder erlaubst.
  deniedInstructionAndroid: Öffne die Benachrichtigungseinstellungen der App, erlaube Benachrichtigungen und komm zurück.
  deniedInstructionIos: "Öffne die Einstellungen-App, tippe auf @.upper:{'globalSiteName'}, dann auf Mitteilungen und erlaube Mitteilungen. Danach kannst du hierher zurückkehren."
  deniedInstructionWeb: Öffne die Website-Einstellungen deines Browsers, meist über das Schloss-Symbol neben der Adresse, stelle Benachrichtigungen auf Erlauben und lade die Seite neu.
  deniedTitle: Push-Benachrichtigungen sind blockiert
  grantedDescription: Dieses Gerät erhält Push-Benachrichtigungen für die Arten, die du unten eingeschaltet hast.
  grantedTitle: Push-Benachrichtigungen sind an
  loadingDescription: Der Status wird geprüft.
  loadingTitle: Push-Benachrichtigungen
  openSystemSettings: Einstellungen öffnen
  promptDescription: Schalte sie ein, um Einladungen, Antworten und Freundschaftsanfragen sofort zu erhalten.
  promptTitle: Push-Benachrichtigungen sind aus
  turnOn: Benachrichtigungen einschalten
  unsupportedDescription: Dein Browser unterstützt keine Push-Benachrichtigungen. Neue Benachrichtigungen findest du weiterhin hier in der App.
  unsupportedTitle: Push-Benachrichtigungen nicht verfügbar
en:
  checkAgain: Check again
  deniedDescription: This device can't send you push notifications until you allow them again.
  deniedInstructionAndroid: Open the app's notification settings, allow notifications, and come back.
  deniedInstructionIos: "Open the Settings app, tap @.upper:{'globalSiteName'}, then Notifications, and allow notifications. After that you can return here."
  deniedInstructionWeb: Open your browser's site settings, usually through the lock icon next to the address, set Notifications to Allow, and reload the page.
  deniedTitle: Push notifications are blocked
  grantedDescription: This device receives push notifications for the types you turned on below.
  grantedTitle: Push notifications are on
  loadingDescription: Checking the status.
  loadingTitle: Push notifications
  openSystemSettings: Open settings
  promptDescription: Turn them on to get invitations, replies and friend requests right away.
  promptTitle: Push notifications are off
  turnOn: Turn on notifications
  unsupportedDescription: Your browser does not support push notifications. You still find new notifications here in the app.
  unsupportedTitle: Push notifications are unavailable
</i18n>
