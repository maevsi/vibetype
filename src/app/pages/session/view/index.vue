<template>
  <div>
    <LayoutPageTitle :title />
    <div class="flex flex-col gap-8">
      <section class="flex flex-col gap-4">
        <h2>{{ t('featureFlags') }}</h2>
        <!-- lg:grid-cols-2 -->
        <div class="flex gap-4">
          <div class="flex-1">
            <Card>
              <ul class="flex flex-col gap-2">
                <template v-for="feature in FEATURE_FLAGS" :key="feature">
                  <li class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <AppIconCheckCircle
                        v-if="isFeatureEnabled(feature).value"
                        class="text-green-600 dark:text-green-500"
                      />
                      <AppIconXCircle
                        v-else
                        class="text-(--semantic-critic-text) dark:text-red-500"
                      />
                      <span class="font-mono">
                        {{ feature }}
                      </span>
                    </div>
                    <div>
                      <ButtonColored
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
                      </ButtonColored>
                    </div>
                  </li>
                </template>
              </ul>
            </Card>
          </div>
        </div>
      </section>
      <section class="flex flex-col gap-4">
        <h2>{{ t('end') }}</h2>
        <div class="grid gap-4 lg:grid-cols-2">
          <div class="flex-1">
            <Card>
              <template v-if="store.jwtDecoded?.exp">
                <i18n-t keypath="sessionExpiry">
                  <template #exp>
                    <AppTime
                      :datetime="store.jwtDecoded.exp * 1000"
                      :options="{ weekday: 'short' }"
                    />
                  </template>
                </i18n-t>
              </template>
              <template v-else>
                {{ t('sessionExpiryNone') }}
              </template>
            </Card>
          </div>
          <div class="flex-1">
            <div class="flex flex-col gap-2">
              <ButtonColored
                :aria-label="t('endNow')"
                :disabled="!store.jwtDecoded"
                variant="secondary"
                @click="jwtDelete"
              >
                {{ t('endNow') }}
                <template #prefix>
                  <AppIconOutlineLogout />
                </template>
              </ButtonColored>
            </div>
          </div>
        </div>
      </section>
      <section class="flex flex-col gap-4">
        <h2>{{ t('codes') }}</h2>
        <div class="grid gap-4 lg:grid-cols-2">
          <div class="flex-1">
            <Card>
              <div v-if="store.jwtDecoded?.guests">
                <p>
                  {{ t('codesEntered') }}
                </p>
                <ul class="list-disc">
                  <li
                    v-for="guestId in store.jwtDecoded?.guests"
                    :key="guestId"
                  >
                    {{ guestId }}
                  </li>
                </ul>
              </div>
              <p v-else>
                {{ t('codesEnteredNone') }}
              </p>
            </Card>
          </div>
          <div class="flex-1">
            <!-- TODO: implement guest code management (https://github.com/maevsi/vibetype/issues/61) -->
          </div>
        </div>
      </section>
      <section class="flex flex-col gap-4">
        <h2>{{ t('userAgentString') }}</h2>
        <div class="grid gap-4 lg:grid-cols-2">
          <div class="flex-1">
            <Card>
              {{ userAgentString }}
            </Card>
          </div>
        </div>
      </section>
      <section class="flex flex-col gap-4">
        <h2>{{ t('app') }}</h2>
        <div class="grid gap-4 lg:grid-cols-2">
          <div class="flex flex-1 flex-col gap-2">
            <Card class="flex flex-col gap-1">
              <div class="flex gap-2">
                <AppIconQuestionMarkCircle v-if="isApp === undefined" />
                <AppIconCheckCircle
                  v-else-if="isApp"
                  class="text-green-600 dark:text-green-500"
                />
                <AppIconXCircle
                  v-else
                  class="text-(--semantic-critic-text) dark:text-red-500"
                />
                <span>
                  {{ t('appIs') }}
                </span>
              </div>
            </Card>
            <Card v-if="isApp" class="flex flex-col gap-1">
              <span>
                {{ t('appPlatform', { platform }) }}
              </span>
            </Card>
          </div>
        </div>
      </section>
      <section class="flex flex-col gap-4">
        <h2>{{ t('notification') }}</h2>
        <div class="flex flex-col gap-4 lg:flex-row">
          <section class="flex-1">
            <Card class="flex flex-col gap-1">
              <div class="flex gap-2">
                <AppIconQuestionMarkCircle
                  v-if="isNavigatorHavingPermissions === undefined"
                />
                <AppIconCheckCircle
                  v-else-if="isNavigatorHavingPermissions"
                  class="text-green-600 dark:text-green-500"
                />
                <AppIconXCircle
                  v-else
                  class="text-(--semantic-critic-text) dark:text-red-500"
                />
                <span>
                  {{ t('hasNavigatorPermissions') }}
                </span>
              </div>
              <div class="flex gap-2">
                <AppIconQuestionMarkCircle
                  v-if="isNavigatorHavingServiceWorker === undefined"
                />
                <AppIconCheckCircle
                  v-else-if="isNavigatorHavingServiceWorker"
                  class="text-green-600 dark:text-green-500"
                />
                <AppIconXCircle
                  v-else
                  class="text-(--semantic-critic-text) dark:text-red-500"
                />
                <span>
                  {{ t('hasNavigatorServiceWorkers') }}
                </span>
              </div>
              <div class="flex gap-2">
                <AppIconQuestionMarkCircle
                  v-if="isWindowHavingNotification === undefined"
                />
                <AppIconCheckCircle
                  v-else-if="isWindowHavingNotification"
                  class="text-green-600 dark:text-green-500"
                />
                <AppIconXCircle
                  v-else
                  class="text-(--semantic-critic-text) dark:text-red-500"
                />
                <span>
                  {{ t('hasWindowNotification') }}
                </span>
              </div>
              <div class="flex gap-2">
                <AppIconQuestionMarkCircle
                  v-if="isIosHavingPushCapability === undefined"
                />
                <AppIconCheckCircle
                  v-else-if="isIosHavingPushCapability"
                  class="text-green-600 dark:text-green-500"
                />
                <AppIconXCircle
                  v-else
                  class="text-(--semantic-critic-text) dark:text-red-500"
                />
                <span>
                  {{ t('hasIosPushCapability') }}
                </span>
              </div>
              <div class="flex gap-2">
                <AppIconQuestionMarkCircle
                  v-if="permissionState === undefined"
                />
                <AppIconCheckCircle
                  v-else-if="permissionState === 'granted'"
                  class="text-green-600 dark:text-green-500"
                />
                <AppIconQuestionMarkCircle
                  v-else-if="permissionState === 'prompt'"
                  class="text-blue-600 dark:text-blue-400"
                />
                <AppIconXCircle
                  v-else-if="permissionState === 'denied'"
                  class="text-(--semantic-critic-text) dark:text-red-500"
                />
                <AppIconBugAnt v-else class="text-red-500" />
                <span>
                  {{ t('notificationPermitted') }}
                </span>
              </div>
            </Card>
          </section>
          <section class="flex-1">
            <div class="flex flex-col gap-2">
              <ButtonColored
                :aria-label="t('notificationPermit')"
                :disabled="!isNotificationPermissionRequestPossible"
                variant="secondary"
                @click="requestNotificationPermission(notificationStore)"
              >
                {{ t('notificationPermit') }}
                <template #prefix>
                  <AppIconShieldCheck />
                </template>
              </ButtonColored>
              <ButtonColored
                :aria-label="t('notificationSend')"
                variant="secondary"
                @click="sendNotification"
              >
                {{ t('notificationSend') }}
                <template #prefix>
                  <AppIconBellAlert />
                </template>
              </ButtonColored>
              <ButtonColored
                :aria-label="t('showFcmToken')"
                variant="secondary"
                @click="showFcmToken"
              >
                {{ t('showFcmToken') }}
                <template #prefix>
                  <AppIconClipboard />
                </template>
              </ButtonColored>
            </div>
          </section>
        </div>
      </section>
      <section class="flex flex-col gap-4">
        <h2>{{ t('data') }}</h2>
        <div class="grid gap-4 lg:grid-cols-2">
          <div class="flex flex-1 flex-col gap-2">
            <Card class="flex flex-col gap-1">
              <div class="flex gap-2">
                <ClientOnly>
                  <AppIconCheckCircle
                    v-if="$urqlCache"
                    class="text-green-600 dark:text-green-500"
                  />
                  <AppIconXCircle
                    v-else
                    class="text-(--semantic-critic-text) dark:text-red-500"
                  />
                  <template #fallback>
                    <AppIconQuestionMarkCircle />
                  </template>
                </ClientOnly>
                <span>
                  {{ t('apiClient') }}
                </span>
              </div>
            </Card>
          </div>
          <div class="flex flex-1 flex-col gap-2">
            <ClientOnly>
              <ButtonColored
                :aria-label="t('apiClientCacheClear')"
                :disabled="!$urqlCache"
                variant="secondary"
                @click="apiClientCacheClear"
              >
                {{ t('apiClientCacheClear') }}
                <template #prefix>
                  <AppIconTrash />
                </template>
              </ButtonColored>
              <template #fallback>
                <ButtonColored
                  :aria-label="t('apiClientCacheClear')"
                  disabled
                  variant="secondary"
                >
                  {{ t('apiClientCacheClear') }}
                  <template #prefix>
                    <AppIconTrash />
                  </template>
                </ButtonColored>
              </template>
            </ClientOnly>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
defineRouteRules({
  robots: false,
})

const { $urqlCache } = useNuxtApp()
const { t } = useI18n()
const requestEvent = useRequestEvent()
const store = useStore()
const notificationStore = useNotificationStore()
const jwtDelete = await useJwtDelete()
const { isApp, platform } = usePlatform()
const alertError = useAlertError()

// feature flags
const { isFeatureEnabled, toggleFeature } = useFeatureFlags()

// data
const isNavigatorHavingPermissions = ref<boolean>()
const isNavigatorHavingServiceWorker = ref<boolean>()
const isWindowHavingNotification = ref<boolean>()
const isIosHavingPushCapability = ref<boolean>()
const permissionState = ref<PermissionState>()
const title = t('title')

// methods
const apiClientCacheClear = async () => {
  if (!$urqlCache) {
    alertError(t('apiClientCacheErrorUndefined'))
    return
  }

  toast.promise($urqlCache.clear(), {
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
const { copy } = useCopy()
const showFcmToken = async () => {
  if (!notificationStore.fcmToken) {
    await notificationStore.fcmTokenInitialize()
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
const isNotificationPermissionRequestPossible = computed(
  () =>
    (import.meta.client &&
      isWindowHavingNotification.value &&
      permissionState.value === 'prompt') ||
    isIosHavingPushCapability,
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

  if (isNavigatorHavingPermissions.value) {
    const permissionStatus = await navigator.permissions.query({
      name: 'notifications',
    })

    permissionStatus.addEventListener('change', async () => {
      console.log(
        'User decided to change his settings. New permission: ' +
          permissionStatus.state,
      )
      permissionState.value = permissionStatus.state
    })

    permissionState.value = permissionStatus.state
  }

  if (!permissionState.value && isWindowHavingNotification.value) {
    permissionState.value =
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
  appIs: Umgebung is eine App
  appPlatform: 'App-Plattform: {platform}'
  codes: Einladungscodes
  codesEntered: 'Du hast die folgenden Codes eingegeben:'
  codesEnteredNone: Dieser Sitzung sind keine Einladungscodes zugeordnet.
  copy: Kopieren
  data: Daten
  end: Ende
  endNow: Diese Sitzung beenden
  fcmToken: FCM Token
  fcmTokenUndefined: Das FCM Token ist nicht verfügbar
  featureFlags: Feature-Flags
  featureFlagsDisable: Deaktivieren
  featureFlagsEnable: Aktivieren
  hasIosPushCapability: Fenster hat Push-Fähigkeit (iOS)
  hasNavigatorPermissions: Navigator hat Berechtigungen
  hasNavigatorServiceWorkers: Navigator hat Service Worker
  hasWindowNotification: Fenster hat Benachrichtigung
  notification: Benachrichtigungen
  notificationPermit: Benachrichtigungen erlauben
  notificationPermitted: Benachrichtigungen sind erlaubt
  notificationSend: Benachrichtigung senden
  sessionExpiry: Deine Sitzung läuft am {exp} ab.
  sessionExpiryNone: Es sind keine Sitzungsdaten verfügbar.
  showFcmToken: FCM Token anzeigen
  title: Sitzung
  userAgentString: User agent string
en:
  apiClient: API client
  apiClientCacheClear: Clear cache
  apiClientCacheClearError: Cache could not be cleared
  apiClientCacheClearSuccess: Cache cleared
  apiClientCacheErrorUndefined: The API client cache is undefined
  app: App
  appIs: Environment is an app
  appPlatform: 'App platform: {platform}'
  codes: Invitation codes
  codesEntered: 'You entered the following codes:'
  codesEnteredNone: There are no invitation codes assigned to this session.
  copy: Copy
  data: Data
  end: End
  endNow: End this session
  fcmToken: FCM Token
  fcmTokenUndefined: The FCM Token is not available
  featureFlags: Feature Flags
  featureFlagsDisable: Disable
  featureFlagsEnable: Enable
  hasIosPushCapability: Window has Push-Capability (iOS)
  hasNavigatorPermissions: Navigator has permissions
  hasNavigatorServiceWorkers: Navigator has service workers
  hasWindowNotification: Window has notification
  notification: Notifications
  notificationPermit: Permit notifications
  notificationPermitted: Notifications are permitted
  notificationSend: Send notification
  sessionExpiry: Your session expires on {exp}.
  sessionExpiryNone: No session data is available.
  showFcmToken: Show FCM Token
  title: Session
  userAgentString: User agent string
</i18n>
