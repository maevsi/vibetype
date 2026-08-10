import { GTAG_COOKIE_ID, GTAG_MEASUREMENT_ID } from '~~/node/static'

export const useAppGtag = () => {
  if (import.meta.server) return

  const runtimeConfig = useRuntimeConfig()

  if (!runtimeConfig.public.vio.isInProduction) return

  const cookieControl = useCookieControl()
  const isConsented = computed(() =>
    Boolean(cookieControl.cookiesEnabledIds.value?.includes(GTAG_COOKIE_ID)),
  )

  const { consent } = useScriptGoogleAnalytics({
    id: GTAG_MEASUREMENT_ID,
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
      window[`ga-disable-${GTAG_MEASUREMENT_ID}`] = !isGranted
    },
    { immediate: true },
  )
}
