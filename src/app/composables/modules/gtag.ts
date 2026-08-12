import { GTAG_COOKIE_ID } from '~~/node/static'

export const useAppGtag = () => {
  if (import.meta.server) return

  const runtimeConfig = useRuntimeConfig()

  if (!runtimeConfig.public.vio.isInProduction) return

  const gtagId = runtimeConfig.public.gtag.id

  const cookieControl = useCookieControl()
  const isConsented = computed(() =>
    Boolean(cookieControl.cookiesEnabledIds.value?.includes(GTAG_COOKIE_ID)),
  )

  const { consent } = useScriptGoogleAnalytics({
    id: gtagId,
    defaultConsent: {
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      ad_storage: 'denied',
      analytics_storage: 'denied',
      wait_for_update: 500,
    },
    onBeforeGtagStart: (gtag) => {
      gtag('set', { cookie_flags: 'samesite=strict;secure' })
    },
    scriptOptions: {
      trigger: useScriptTriggerConsent({ consent: isConsented }),
    },
  })

  watch(
    isConsented,
    (isGranted) => {
      consent?.update({ analytics_storage: isGranted ? 'granted' : 'denied' })
      window[`ga-disable-${gtagId}`] = !isGranted
    },
    { immediate: true },
  )
}
