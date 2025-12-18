export const FEATURE_FLAGS = [
  'developer-tools',
  'friends',
  'map',
  'notifications',
  'poster-hunt',
] as const
export type FeatureFlag = (typeof FEATURE_FLAGS)[number]

const isFeatureFlag = (feature: string): feature is FeatureFlag =>
  FEATURE_FLAGS.includes(feature as FeatureFlag)

const parseFeatureFlags = (value?: unknown | null): FeatureFlag[] => {
  if (!value) return []

  const items = Array.isArray(value) ? value : String(value).split(',')

  return items
    .map((item) => String(item).trim())
    .filter(
      (feature): feature is FeatureFlag =>
        Boolean(feature) && isFeatureFlag(feature),
    )
}

/**
 * Manages feature flags via cookies. Flags are stored as comma-separated values
 * in `${SITE_NAME}_feature-flags` (when consented) and synced reactively.
 *
 * @example
 * const { enableFeature, isFeatureEnabled } = useFeatureFlags()
 * enableFeature('map')
 * if (isFeatureEnabled('map').value) { ... }
 */
export const useFeatureFlags = () => {
  // feature flags
  const featureFlags = useState<Set<FeatureFlag>>(
    'feature-flags',
    () => new Set(),
  )

  // cookie
  const cookieControl = useCookieControl()
  const isCookieAllowed = computed(
    () =>
      cookieControl.cookiesEnabledIds.value?.includes(
        FEATURE_FLAGS_COOKIE_ID,
      ) ?? false,
  )
  const { siteUrlTyped: siteUrl } = useSiteUrl()
  const cookie = useCookie<string | null>(FEATURE_FLAGS_COOKIE_NAME, {
    maxAge: FEATURE_FLAGS_COOKIE_MAX_AGE,
    sameSite: COOKIE_SAME_SITE,
    secure: siteUrl.protocol === 'https:',
  })

  // io
  const hydrateFromCookie = (value: string | null | undefined): void => {
    featureFlags.value.clear()
    parseFeatureFlags(value).forEach((flag) => featureFlags.value.add(flag))
  }
  const persistToCookie = (): void => {
    if (!isCookieAllowed.value) return

    cookie.value = Array.from(featureFlags.value).join(',')
  }
  const reset = (): void => {
    featureFlags.value.clear()
    cookie.value = null
  }

  // reactivity
  const isInternalUpdate = ref<boolean>()
  watch(
    () => cookie.value,
    (newValue) => {
      if (!isCookieAllowed.value || isInternalUpdate.value) {
        isInternalUpdate.value = false
        return
      }
      hydrateFromCookie(newValue)
    },
  )
  watch(isCookieAllowed, (isAllowed) => {
    if (isAllowed) {
      hydrateFromCookie(cookie.value)
      persistToCookie()
      return
    }

    reset()
  })

  // initialization
  if (isCookieAllowed.value) {
    hydrateFromCookie(cookie.value)
  }

  // functions
  const disableFeature = (feature: FeatureFlag): void => {
    if (!isCookieAllowed.value || !featureFlags.value.has(feature)) return

    featureFlags.value.delete(feature)
    isInternalUpdate.value = true
    persistToCookie()
  }

  const enableFeature = (feature: FeatureFlag): void => {
    if (!isCookieAllowed.value || featureFlags.value.has(feature)) return

    featureFlags.value.add(feature)
    isInternalUpdate.value = true
    persistToCookie()
  }

  const isFeatureEnabled = (feature: FeatureFlag): ComputedRef<boolean> =>
    computed(() => featureFlags.value.has(feature))

  const toggleFeature = (feature: FeatureFlag): void => {
    if (isFeatureEnabled(feature).value) {
      disableFeature(feature)
      return
    }

    enableFeature(feature)
  }

  return {
    disableFeature,
    enableFeature,
    isFeatureEnabled,
    toggleFeature,
  }
}
