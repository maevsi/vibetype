<template>
  <div
    class="flex h-screen flex-col"
    :data-is-loading="isLoading"
    data-testid="is-loading"
    vaul-drawer-wrapper
  >
    <LazyClientOnly>
      <CardStateInfo
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
      </CardStateInfo>
    </LazyClientOnly>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <AppSonner />
    <VitePwaManifest />
    <ClientOnly>
      <!-- TODO: render server side too when styling is improved (https://github.com/dargmuesli/nuxt-cookie-control/discussions/228)  -->
      <CookieControl :locale="locale" />
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
import '@fontsource-variable/raleway'
import { isEqual } from 'ufo'

const { $urql, $pwa } = useNuxtApp()
const { isApp } = usePlatform()
const runtimeConfig = useRuntimeConfig()
const timeZone = useTimeZone()
const localePath = useLocalePath()
const store = useStore()
const notificationStore = useNotificationStore()
const route = useRoute()

// i18n
const { t, locale } = useI18n()

// loading
const loadingId = Math.random()
const loadingIds = useState(STATE_LOADING_IDS_NAME, () => [loadingId])
const isLoading = computed(() => !!loadingIds.value.length)

const handleVisibilityChange = async () => {
  if (document.visibilityState == 'visible')
    await notificationStore.updateRemoteFcmToken($urql.value, store)
}

onMounted(async () => {
  loadingIds.value.splice(loadingIds.value.indexOf(loadingId), 1)
  document.addEventListener('visibilitychange', handleVisibilityChange)
  await notificationStore.updateRemoteFcmToken($urql.value, store)
})

// browserslist
const isBrowserSupported = ref(true)
onBeforeMount(async () => {
  const supportedBrowsers = (await import('~/supportedBrowsers')).default
  isBrowserSupported.value = supportedBrowsers.test(navigator.userAgent)
})

onBeforeUnmount(() => {
  document.removeEventListener('visibilitychange', handleVisibilityChange)
})

// methods
const initialize = async () => {
  if (import.meta.client) {
    saveTimeZoneAsCookie()
  }

  if (
    isApp &&
    !store.signedInAccountId &&
    !isEqual(route.path, localePath('index').toString())
  ) {
    return await navigateTo(
      localePath({
        name: 'index',
      }),
    )
  }
}
const saveTimeZoneAsCookie = () =>
  (useCookie(TIMEZONE_COOKIE_NAME, {
    // default: () => undefined, // setting `default` on the client side only does not write the cookie
    httpOnly: false,
    sameSite: 'strict',
    secure: runtimeConfig.public.vio.isInProduction,
  }).value = timeZone)

// lifecycle
watch(
  () => $pwa,
  async (current, _previous) => {
    if (current?.showInstallPrompt && !runtimeConfig.public.vio.isTesting) {
      toast(t('pwaTitle'), {
        action: {
          label: t('pwaConfirmButtonText'),
          onClick: current.install,
        },
        description: t('pwaText'),
        onDismiss: current.cancelInstall,
        onAutoClose: current.cancelInstall,
        duration: 10e3,
      })
    }
  },
)

// initialization
defineOgImageComponent(
  'Default',
  {},
  {
    alt: t('globalSeoOgImageAlt'),
  },
)
useAppLayout()
await useAuth()
usePolyfills()
useSchemaOrg([defineWebSite(), defineWebPage()])
useAppGtag()
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
  pwaConfirmButtonText: App nutzen
  pwaText: Die Installation verbraucht fast keinen Speicherplatz und bietet eine schnelle Möglichkeit, zu dieser App zurückzukehren.
  pwaTitle: "@.upper:{'globalSiteName'} installieren"
en:
  browserUnsupported: You're using a browser which does not support all features @.upper:{'globalSiteName'} offers. {link}.
  browserUnsupportedLink: Learn more
  pwaConfirmButtonText: Get the app
  pwaText: Installing uses almost no storage and provides a quick way to return to this app.
  pwaTitle: Install @.upper:{'globalSiteName'}
</i18n>
