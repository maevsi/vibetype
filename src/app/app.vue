<template>
  <div
    class="flex h-full flex-col"
    :data-is-loading="isLoading"
    data-testid="is-loading"
    vaul-drawer-wrapper
  >
    <ClientOnly>
      <AppAlert
        v-if="!isBrowserSupported && !runtimeConfig.public.vio.isTesting"
        class="shrink-0 rounded-none"
      >
        <i18n-t keypath="browserUnsupported">
          <template #link>
            <AppLink
              :is-colored="false"
              is-underlined
              :to="
                localePath({
                  name: 'docs-browser-support',
                })
              "
            >
              {{ t('browserUnsupportedLink') }}
            </AppLink>
          </template>
          <template #siteName>
            {{ t('globalSiteName') }}
          </template>
        </i18n-t>
      </AppAlert>
      <AppAlert
        v-if="!isOnline"
        class="shrink-0 rounded-none"
        role="status"
        variant="warning"
      >
        {{ t('offline') }}
      </AppAlert>
      <AppUpdateAlert />
      <AppDrawer
        v-if="!runtimeConfig.public.vio.isTesting"
        v-model="isLockdownModeLikely"
        @close="isLockdownModeDismissed = true"
      >
        <template #title>{{ t('lockdownModeTitle') }}</template>
        <p>{{ t('lockdownModeDescription') }}</p>
        <p>{{ t('lockdownModeInstructions') }}</p>
        <template #footer>
          <AppButton
            :aria-label="t('ok')"
            @click="isLockdownModeLikely = false"
          >
            {{ t('ok') }}
          </AppButton>
        </template>
      </AppDrawer>
    </ClientOnly>
    <NuxtLoadingIndicator />
    <NuxtAnnouncer />
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <AppSonner />
    <ClientOnly>
      <!-- hidden, as it only persists the choices made in `ConsentScreen` and the privacy settings to its cookies and removes the cookies of withdrawn purposes -->
      <CookieControl class="hidden" :locale />
      <ConsentScreen />
    </ClientOnly>
    <!-- <div
      class="absolute inset-x-0 -top-16 -z-10 flex max-h-screen transform-gpu items-start justify-center overflow-hidden blur-3xl"
      aria-hidden="true"
    >
      <div
        class="clip-path aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-[15%] dark:opacity-10"
      />
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { useOnline } from '@vueuse/core'
import { isEqual } from 'ufo'

const nuxtApp = useNuxtApp()
const { $urql } = nuxtApp
const { isApp } = usePlatform()
const runtimeConfig = useRuntimeConfig()
const timeZone = useTimeZone()
const localePath = useLocalePath()
const store = useStore()
const notificationStore = useNotificationStore()
const route = useRoute()

// i18n
const { t, locale } = useI18n()

// the pwa plugin only writes the manifest of the default locale to the build, so the german one is served from a server route
useHead({
  link: [
    {
      rel: 'manifest',
      href: computed(() =>
        locale.value === 'de'
          ? '/de/manifest.webmanifest'
          : '/manifest.webmanifest',
      ),
    },
  ],
})

// loading
const loadingId = Math.random()
const loadingIds = useState(STATE_LOADING_IDS_NAME, () => [loadingId])
const isLoading = computed(() => !!loadingIds.value.length)
onMounted(() => loadingIds.value.splice(loadingIds.value.indexOf(loadingId), 1))

// browserslist
const isBrowserSupported = ref(true)
onBeforeMount(async () => {
  const supportedBrowsers = (await import('~/supportedBrowsers')).default
  isBrowserSupported.value = supportedBrowsers.test(navigator.userAgent)
})

// network
const isOnline = useOnline()

// lockdown mode
const isLockdownModeDismissed = useCookie<boolean>(
  LOCKDOWN_MODE_DISMISSED_COOKIE_NAME,
  {
    httpOnly: false,
    maxAge: LOCKDOWN_MODE_DISMISSED_COOKIE_MAX_AGE,
    sameSite: COOKIE_SAME_SITE,
    secure: useIsSecure(),
  },
)
const isLockdownModeLikely = ref(false)
onBeforeMount(() => {
  isLockdownModeLikely.value =
    !isLockdownModeDismissed.value && getIsLockdownModeLikely(window)
})

// methods
const initialize = async () => {
  if (import.meta.client) {
    saveTimeZoneAsCookie()
  }

  if (
    isApp &&
    !store.signedInAccountId &&
    !isEqual(route.path, localePath('account-password-reset').toString()) &&
    !isEqual(route.path, localePath('guest-view-id').toString()) &&
    !isEqual(route.path, localePath('index').toString()) &&
    // pages that require signing in send visitors here with the page to return to, which the app opens directly, e.g. for a poster shared to it
    !isEqual(route.path, localePath('session-create').toString())
  ) {
    return await navigateTo(
      localePath({
        name: 'index',
      }),
      { replace: true },
    )
  }
}
const saveTimeZoneAsCookie = () =>
  (useCookie(TIMEZONE_COOKIE_NAME, {
    // default: () => undefined, // setting `default` on the client side only does not write the cookie
    httpOnly: false,
    sameSite: COOKIE_SAME_SITE,
    secure: useIsSecure(),
  }).value = timeZone)

// notifications
if (import.meta.client) {
  // `notificationStore.fcmToken` is watched but not read here: `registerDevice`
  // reads it directly off the store. It's a dependency so this watcher re-fires
  // once the token arrives, which on iOS happens asynchronously via a native
  // callback well after permission is granted and the account is signed in.
  watch(
    () =>
      [
        store.signedInAccountId,
        notificationStore.permissionState,
        notificationStore.fcmToken,
      ] as const,
    ([signedInAccountId, permissionState]) => {
      if (signedInAccountId && permissionState === 'granted') {
        notificationStore.registerDevice($urql.value, signedInAccountId)
      }
    },
    { immediate: true },
  )
}

// initialization
useAppLayout()
useAppGtag()
await detectLanguageFromQuery({
  language: await useJwtInitialize(),
  nuxtApp,
  route,
})
await initialize()
</script>

<style scoped>
.clip-path {
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  clip-path: polygon(
    73.6% 51.7%,
    91.7% 11.8%,
    100% 46.4%,
    97.4% 82.2%,
    92.5% 84.9%,
    75.7% 64%,
    55.3% 47.5%,
    46.5% 49.4%,
    45% 62.9%,
    50.3% 87.2%,
    21.3% 64.1%,
    0.1% 100%,
    5.4% 51.1%,
    21.4% 63.9%,
    58.9% 0.2%,
    73.6% 51.7%
  );
}
</style>

<i18n lang="yaml">
de:
  browserUnsupported: Du benutzt einen Browser, in dem nicht alle Funktionen von @.upper:{'globalSiteName'} unterstützt werden. {link}.
  browserUnsupportedLink: Mehr erfahren
  lockdownModeDescription: Der Blockierungsmodus ist aktiv und schaltet Funktionen ab, die @.upper:{'globalSiteName'} braucht, zum Beispiel den QR-Code-Scanner und Push-Benachrichtigungen.
  lockdownModeInstructions: "Nimm @.upper:{'globalSiteName'} vom Blockierungsmodus aus: für die App in der Einstellungen-App unter Datenschutz & Sicherheit › Blockierungsmodus › Web-Browsing konfigurieren, für Safari über Seitenmenü › Website-Einstellungen › Blockierungsmodus ausschalten."
  lockdownModeTitle: Blockierungsmodus erkannt
  offline: Du bist offline. Einige Funktionen sind erst wieder verfügbar, wenn deine Internetverbindung zurück ist.
  ok: OK
en:
  browserUnsupported: You're using a browser which does not support all features @.upper:{'globalSiteName'} offers. {link}.
  browserUnsupportedLink: Learn more
  lockdownModeDescription: Lockdown Mode is on and turns off features @.upper:{'globalSiteName'} needs, such as the QR code scanner and push notifications.
  lockdownModeInstructions: "Exclude @.upper:{'globalSiteName'} from Lockdown Mode: for the app, open the Settings app and go to Privacy & Security › Lockdown Mode › Configure Web Browsing; for Safari, use page menu › Website Settings › turn off Lockdown Mode."
  lockdownModeTitle: Lockdown Mode detected
  offline: You're offline. Some features are unavailable until your internet connection is back.
  ok: OK
</i18n>
