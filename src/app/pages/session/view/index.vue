<template>
  <div class="flex flex-1 flex-col">
    <LayoutTopBar>{{ title }}</LayoutTopBar>
    <LayoutPage>
      <div class="flex flex-col gap-8">
        <section class="flex flex-col gap-4">
          <h2>{{ t('notification') }}</h2>
          <div class="flex flex-col gap-4 lg:flex-row">
            <div class="flex flex-1 flex-col gap-4">
              <AppCard class="flex flex-col gap-2">
                <h3>{{ t('notificationPermission') }}</h3>
                <dl class="flex flex-col gap-2">
                  <div class="flex items-center justify-between gap-2">
                    <dt>{{ t('notificationPermissionState') }}</dt>
                    <dd class="flex items-center gap-2">
                      <AppIconQuestionMarkCircle
                        v-if="permissionState === undefined"
                      />
                      <AppIconCheckCircle
                        v-else-if="permissionState === 'granted'"
                        class="text-link"
                      />
                      <AppIconQuestionMarkCircle
                        v-else-if="permissionState === 'prompt'"
                        class="text-info"
                      />
                      <AppIconXCircle
                        v-else-if="permissionState === 'denied'"
                        class="text-error"
                      />
                      <AppIconBugAnt v-else class="text-error" />
                      <span>
                        {{ permissionStateLabel }}
                      </span>
                    </dd>
                  </div>
                </dl>
              </AppCard>
              <AppCard class="flex flex-col gap-2">
                <h3>{{ t('notificationSupport') }}</h3>
                <dl class="flex flex-col gap-2">
                  <div class="flex items-center justify-between gap-2">
                    <dt>{{ t('supportPermissions') }}</dt>
                    <dd class="flex items-center gap-2">
                      <AppIconQuestionMarkCircle
                        v-if="isNavigatorHavingPermissions === undefined"
                      />
                      <AppIconCheckCircle
                        v-else-if="isNavigatorHavingPermissions"
                        class="text-link"
                      />
                      <AppIconXCircle v-else class="text-error" />
                      <span>{{
                        isNavigatorHavingPermissions === undefined
                          ? t('stateUnknown')
                          : isNavigatorHavingPermissions
                            ? t('stateYes')
                            : t('stateNo')
                      }}</span>
                    </dd>
                  </div>
                  <div class="flex items-center justify-between gap-2">
                    <dt>{{ t('supportServiceWorkers') }}</dt>
                    <dd class="flex items-center gap-2">
                      <AppIconQuestionMarkCircle
                        v-if="isNavigatorHavingServiceWorker === undefined"
                      />
                      <AppIconCheckCircle
                        v-else-if="isNavigatorHavingServiceWorker"
                        class="text-link"
                      />
                      <AppIconXCircle v-else class="text-error" />
                      <span>{{
                        isNavigatorHavingServiceWorker === undefined
                          ? t('stateUnknown')
                          : isNavigatorHavingServiceWorker
                            ? t('stateYes')
                            : t('stateNo')
                      }}</span>
                    </dd>
                  </div>
                  <div class="flex items-center justify-between gap-2">
                    <dt>{{ t('supportNotification') }}</dt>
                    <dd class="flex items-center gap-2">
                      <AppIconQuestionMarkCircle
                        v-if="isWindowHavingNotification === undefined"
                      />
                      <AppIconCheckCircle
                        v-else-if="isWindowHavingNotification"
                        class="text-link"
                      />
                      <AppIconXCircle v-else class="text-error" />
                      <span>{{
                        isWindowHavingNotification === undefined
                          ? t('stateUnknown')
                          : isWindowHavingNotification
                            ? t('stateYes')
                            : t('stateNo')
                      }}</span>
                    </dd>
                  </div>
                  <div class="flex items-center justify-between gap-2">
                    <dt>{{ t('supportIosPush') }}</dt>
                    <dd class="flex items-center gap-2">
                      <AppIconQuestionMarkCircle
                        v-if="isIosHavingPushCapability === undefined"
                      />
                      <AppIconCheckCircle
                        v-else-if="isIosHavingPushCapability"
                        class="text-link"
                      />
                      <AppIconXCircle v-else class="text-error" />
                      <span>{{
                        isIosHavingPushCapability === undefined
                          ? t('stateUnknown')
                          : isIosHavingPushCapability
                            ? t('stateYes')
                            : t('stateNo')
                      }}</span>
                    </dd>
                  </div>
                </dl>
              </AppCard>
            </div>
            <div class="flex flex-1 flex-col gap-2">
              <AppButton
                :aria-label="t('notificationPermit')"
                :disabled="!isNotificationPermissionRequestPossible"
                variant="secondary"
                @click="requestNotificationPermission(notificationStore)"
              >
                {{ t('notificationPermit') }}
                <template #prefix>
                  <AppIconShieldCheck />
                </template>
              </AppButton>
              <AppButton
                v-if="isAndroid"
                :aria-label="t('notificationAppSettings')"
                variant="secondary"
                @click="openNotificationSettings"
              >
                {{ t('notificationAppSettings') }}
                <template #prefix>
                  <AppIconSettings />
                </template>
              </AppButton>
              <AppButton
                :aria-label="t('notificationSend')"
                variant="secondary"
                @click="sendNotification"
              >
                {{ t('notificationSend') }}
                <template #prefix>
                  <AppIconBellAlert />
                </template>
              </AppButton>
              <AppButton
                :aria-label="t('showFcmToken')"
                :loading="isFcmTokenLoading"
                variant="secondary"
                @click="showFcmToken"
              >
                {{ t('showFcmToken') }}
                <template #prefix>
                  <AppIconClipboard />
                </template>
              </AppButton>
            </div>
          </div>
        </section>
        <section class="flex flex-col gap-4">
          <h2>{{ t('featureFlags') }}</h2>
          <!-- lg:grid-cols-2 -->
          <div class="flex gap-4">
            <div class="flex-1">
              <AppCard>
                <ul class="flex flex-col gap-2">
                  <template v-for="feature in FEATURE_FLAGS" :key="feature">
                    <li class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <AppIconCheckCircle
                          v-if="isFeatureEnabled(feature).value"
                          class="text-link"
                        />
                        <AppIconXCircle v-else class="text-error" />
                        <span class="font-mono">
                          {{ feature }}
                        </span>
                      </div>
                      <div>
                        <AppButton
                          :aria-label="
                            isFeatureEnabled(feature).value
                              ? t('featureFlagsDisable')
                              : t('featureFlagsEnable')
                          "
                          variant="secondary"
                          @click="toggleFeature(feature)"
                        >
                          <span v-if="isFeatureEnabled(feature).value">
                            {{ t('featureFlagsDisable') }}
                          </span>
                          <span v-else>
                            {{ t('featureFlagsEnable') }}
                          </span>
                        </AppButton>
                      </div>
                    </li>
                  </template>
                </ul>
              </AppCard>
            </div>
          </div>
        </section>
        <section class="flex flex-col gap-4">
          <h2>{{ t('app') }}</h2>
          <div class="grid gap-4 lg:grid-cols-2">
            <AppCard>
              <dl class="flex flex-col gap-2">
                <div class="flex items-center justify-between gap-2">
                  <dt>{{ t('appIs') }}</dt>
                  <dd class="flex items-center gap-2">
                    <AppIconQuestionMarkCircle v-if="isApp === undefined" />
                    <AppIconCheckCircle v-else-if="isApp" class="text-link" />
                    <AppIconXCircle v-else class="text-error" />
                    <span>{{
                      isApp === undefined
                        ? t('stateUnknown')
                        : isApp
                          ? t('stateYes')
                          : t('stateNo')
                    }}</span>
                  </dd>
                </div>
                <div
                  v-if="isApp"
                  class="flex items-center justify-between gap-2"
                >
                  <dt>{{ t('appPlatform') }}</dt>
                  <dd class="font-mono">{{ platform }}</dd>
                </div>
              </dl>
            </AppCard>
          </div>
        </section>
        <section class="flex flex-col gap-4">
          <h2>{{ t('userAgentString') }}</h2>
          <div class="grid gap-4 lg:grid-cols-2">
            <div class="flex-1">
              <AppCard>
                {{ userAgentString }}
              </AppCard>
            </div>
          </div>
        </section>
        <section class="flex flex-col gap-4">
          <h2>{{ t('data') }}</h2>
          <div class="grid gap-4 lg:grid-cols-2">
            <div class="flex flex-1 flex-col gap-2">
              <AppCard class="flex flex-col gap-1">
                <div class="flex gap-2">
                  <ClientOnly>
                    <AppIconCheckCircle v-if="$urqlCache" class="text-link" />
                    <AppIconXCircle v-else class="text-error" />
                    <template #fallback>
                      <AppIconQuestionMarkCircle />
                    </template>
                  </ClientOnly>
                  <span>
                    {{ t('apiClient') }}
                  </span>
                </div>
              </AppCard>
            </div>
            <div class="flex flex-1 flex-col gap-2">
              <ClientOnly>
                <AppButton
                  :aria-label="t('apiClientCacheClear')"
                  :disabled="!$urqlCache"
                  variant="secondary"
                  @click="apiClientCacheClear"
                >
                  {{ t('apiClientCacheClear') }}
                  <template #prefix>
                    <AppIconTrash />
                  </template>
                </AppButton>
                <template #fallback>
                  <AppButton
                    :aria-label="t('apiClientCacheClear')"
                    disabled
                    variant="secondary"
                  >
                    {{ t('apiClientCacheClear') }}
                    <template #prefix>
                      <AppIconTrash />
                    </template>
                  </AppButton>
                </template>
              </ClientOnly>
            </div>
          </div>
        </section>
        <section class="flex flex-col gap-4">
          <h2>{{ t('codes') }}</h2>
          <div class="grid gap-4 lg:grid-cols-2">
            <div class="flex-1">
              <AppCard>
                <div v-if="store.jwtPayload?.guests">
                  <p>
                    {{ t('codesEntered') }}
                  </p>
                  <ul class="list-disc">
                    <li
                      v-for="guestId in store.jwtPayload?.guests"
                      :key="guestId"
                    >
                      {{ guestId }}
                    </li>
                  </ul>
                </div>
                <p v-else>
                  {{ t('codesEnteredNone') }}
                </p>
              </AppCard>
            </div>
            <div class="flex-1">
              <!-- TODO: implement guest code management (https://github.com/maevsi/vibetype/issues/61) -->
            </div>
          </div>
        </section>
        <section class="flex flex-col gap-4">
          <h2>{{ t('end') }}</h2>
          <div class="grid gap-4 lg:grid-cols-2">
            <div class="flex-1">
              <AppCard>
                <template v-if="store.jwtPayload?.exp">
                  <i18n-t keypath="sessionExpiry">
                    <template #exp>
                      <AppTime
                        :datetime="store.jwtPayload.exp * 1000"
                        :options="{ weekday: 'short' }"
                      />
                    </template>
                  </i18n-t>
                </template>
                <template v-else>
                  {{ t('sessionExpiryNone') }}
                </template>
              </AppCard>
            </div>
            <div class="flex-1">
              <div class="flex flex-col gap-2">
                <AppButton
                  :aria-label="t('endNow')"
                  :disabled="!store.jwtPayload"
                  variant="secondary"
                  @click="jwtDelete"
                >
                  {{ t('endNow') }}
                  <template #prefix>
                    <AppIconOutlineLogout />
                  </template>
                </AppButton>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
defineRouteRules({
  robots: false,
})

const { $urqlCache, $urqlReset } = useNuxtApp()
const { t } = useI18n()
const requestEvent = useRequestEvent()
const store = useStore()
const notificationStore = useNotificationStore()
const jwtDelete = useJwtDelete()
const { isAndroid, isApp, platform } = usePlatform()
const alertError = useAlertError()

// feature flags
const { isFeatureEnabled, toggleFeature } = useFeatureFlags()

// data
const isNavigatorHavingPermissions = ref<boolean>()
const isNavigatorHavingServiceWorker = ref<boolean>()
const isWindowHavingNotification = ref<boolean>()
const isIosHavingPushCapability = ref<boolean>()
const title = t('title')

// methods
const apiClientCacheClear = async () => {
  if (!$urqlCache) {
    alertError(t('apiClientCacheErrorUndefined'))
    return
  }

  // Resetting rebuilds the clients on a fresh in-memory store, whereas clearing the storage alone would leave the running offline exchange serving and re-persisting the entities it still holds.
  toast.promise($urqlReset(), {
    error: () => t('apiClientCacheClearError'),
    success: () => t('apiClientCacheClearSuccess'),
  })
}
const sendNotification = async () => {
  const serviceWorkerRegistration = await navigator.serviceWorker.ready

  serviceWorkerRegistration.showNotification('Hey cutie 👋', {
    body: "It's great to see you!",
    icon: '/assets/static/logos/app_icon.svg',
    tag: 'test',
  })
}
const trustedWebActivityPackageName = 'si.maev.twa'
const openNotificationSettings = () => {
  // Chrome only launches browsable activities from `intent:` URIs, so the app's `NotificationSettingsActivity` forwards to the system settings; app versions without it land on the store page to update.
  const fallbackUrl = `https://play.google.com/store/apps/details?id=${trustedWebActivityPackageName}`
  window.location.href = `intent://notification-settings#Intent;scheme=vibetype;package=${trustedWebActivityPackageName};S.browser_fallback_url=${encodeURIComponent(fallbackUrl)};end`
}
const { copy } = useCopy()
const isFcmTokenLoading = ref(false)
const showFcmToken = async () => {
  if (!notificationStore.fcmToken) {
    isFcmTokenLoading.value = true

    try {
      await notificationStore.fcmTokenInitialize()
    } finally {
      isFcmTokenLoading.value = false
    }
  }

  toast.info(t('fcmToken'), {
    action: {
      label: t('copy'),
      onClick: () => {
        if (!notificationStore.fcmToken) {
          alertError(t('fcmTokenUndefined'))
          return
        }

        copy(notificationStore.fcmToken)
      },
    },
    description: notificationStore.fcmToken,
  })
}

// computations
const permissionState = computed(() => notificationStore.permissionState)
const permissionStateLabel = computed(() => {
  switch (permissionState.value) {
    case 'denied':
      return t('permissionStateDenied')
    case 'granted':
      return t('permissionStateGranted')
    case 'prompt':
      return t('permissionStatePrompt')
    default:
      return t('stateUnknown')
  }
})
const isNotificationPermissionRequestPossible = computed(
  () =>
    (import.meta.client &&
      isWindowHavingNotification.value &&
      permissionState.value === 'prompt') ||
    isIosHavingPushCapability.value,
)
const userAgentString = computed(() =>
  requestEvent ? requestEvent.headers.get('user-agent') : navigator.userAgent,
)

// lifecycle
onMounted(async () => {
  isNavigatorHavingPermissions.value = 'permissions' in navigator
  isNavigatorHavingServiceWorker.value = 'serviceWorker' in navigator
  isWindowHavingNotification.value = 'Notification' in window
  isIosHavingPushCapability.value = (() => {
    const windowWebkit = window as unknown as {
      webkit?: { messageHandlers?: Record<string, unknown> }
    }
    return (
      windowWebkit.webkit?.messageHandlers?.['push-permission-state'] !==
        undefined &&
      windowWebkit.webkit?.messageHandlers?.['push-permission-request'] !==
        undefined
    )
  })()

  if (!notificationStore.permissionState && isWindowHavingNotification.value) {
    notificationStore.permissionState =
      Notification.permission === 'default' ? 'prompt' : Notification.permission
  }
})

// initialization
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  apiClient: API client
  apiClientCacheClear: Cache leeren
  apiClientCacheClearError: Cache konnte nicht geleert werden
  apiClientCacheClearSuccess: Cache geleert
  apiClientCacheErrorUndefined: Es ist kein API client Cache definiert
  app: App
  appIs: Läuft als App
  appPlatform: App-Plattform
  codes: Einladungscodes
  codesEntered: 'Du hast die folgenden Codes eingegeben:'
  codesEnteredNone: Dieser Sitzung sind keine Einladungscodes zugeordnet.
  copy: Kopieren
  data: Daten
  end: Ende
  endNow: Diese Sitzung beenden
  fcmToken: FCM-Token
  fcmTokenUndefined: Das FCM-Token ist nicht verfügbar
  featureFlags: Feature-Flags
  featureFlagsDisable: Deaktivieren
  featureFlagsEnable: Aktivieren
  notification: Benachrichtigungen
  notificationAppSettings: Benachrichtigungseinstellungen öffnen
  notificationPermission: Berechtigung
  notificationPermissionState: Status der Benachrichtigungserlaubnis
  notificationPermit: Benachrichtigungen erlauben
  notificationSend: Test-Benachrichtigung senden
  notificationSupport: Unterstützung dieses Geräts
  permissionStateDenied: Abgelehnt
  permissionStateGranted: Erlaubt
  permissionStatePrompt: Noch nicht gefragt
  sessionExpiry: Deine Sitzung läuft am {exp} ab.
  sessionExpiryNone: Es sind keine Sitzungsdaten verfügbar.
  showFcmToken: FCM-Token anzeigen
  stateNo: Nein
  stateUnknown: Unbekannt
  stateYes: Ja
  supportIosPush: Push-Brücke der iOS-App
  supportNotification: Benachrichtigungs-API (Notification)
  supportPermissions: Berechtigungs-API (Permissions)
  supportServiceWorkers: Service Worker
  title: Sitzung
  userAgentString: User agent string
en:
  apiClient: API client
  apiClientCacheClear: Clear cache
  apiClientCacheClearError: Cache could not be cleared
  apiClientCacheClearSuccess: Cache cleared
  apiClientCacheErrorUndefined: The API client cache is undefined
  app: App
  appIs: Running as app
  appPlatform: App platform
  codes: Invitation codes
  codesEntered: 'You entered the following codes:'
  codesEnteredNone: There are no invitation codes assigned to this session.
  copy: Copy
  data: Data
  end: End
  endNow: End this session
  fcmToken: FCM token
  fcmTokenUndefined: The FCM token is not available
  featureFlags: Feature Flags
  featureFlagsDisable: Disable
  featureFlagsEnable: Enable
  notification: Notifications
  notificationAppSettings: Open notification settings
  notificationPermission: Permission
  notificationPermissionState: Notification permission
  notificationPermit: Allow notifications
  notificationSend: Send test notification
  notificationSupport: Support on this device
  permissionStateDenied: Denied
  permissionStateGranted: Granted
  permissionStatePrompt: Not asked yet
  sessionExpiry: Your session expires on {exp}.
  sessionExpiryNone: No session data is available.
  showFcmToken: Show FCM token
  stateNo: No
  stateUnknown: Unknown
  stateYes: Yes
  supportIosPush: iOS app push bridge
  supportNotification: Notification API
  supportPermissions: Permissions API
  supportServiceWorkers: Service workers
  title: Session
  userAgentString: User agent string
</i18n>
