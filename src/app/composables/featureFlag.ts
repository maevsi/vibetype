export const FEATURE_FLAGS = [
  'attendee-avatar-stacks',
  'developer-tools',
  'friends',
  'map',
  'match-scores',
  'notifications',
  'poster-hunt',
  'social-login',
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
 * Manages feature flags via a cookie. The cookie is the single source of
 * truth: enabled flags are always derived from it, never mirrored into a
 * second reactive state, so nothing can drift out of sync with it. Flags
 * read as disabled whenever consent for `${SITE_NAME}_feature-flags` is
 * withheld, and the cookie is dropped the moment consent is revoked.
 *
 * @example
 * const { enableFeature, isFeatureEnabled } = useFeatureFlags()
 * enableFeature('map')
 * if (isFeatureEnabled('map').value) { ... }
 */
export const useFeatureFlags = () => {
  const cookieControl = useCookieControl()
  const isSecure = useIsSecure()
  const { t } = useI18n({ useScope: 'global' })

  const cookie = useCookie<string | null>(FEATURE_FLAGS_COOKIE_NAME, {
    maxAge: FEATURE_FLAGS_COOKIE_MAX_AGE,
    sameSite: COOKIE_SAME_SITE,
    secure: isSecure,
  })

  const isCookieAllowed = computed(
    () =>
      cookieControl.cookiesEnabledIds.value?.includes(
        FEATURE_FLAGS_COOKIE_ID,
      ) ?? false,
  )

  const enabledFlags = computed<Set<FeatureFlag>>(() =>
    isCookieAllowed.value
      ? new Set(parseFeatureFlags(cookie.value))
      : new Set(),
  )

  // Consent has just one side effect to enforce: a withdrawn consent
  // must not leave flags lingering in a cookie we're no longer allowed to
  // read from or write to.
  watch(isCookieAllowed, (isAllowed) => {
    if (!isAllowed) cookie.value = null
  })

  const writeFlags = (flags: Set<FeatureFlag>): void => {
    if (!isCookieAllowed.value) return

    cookie.value = flags.size ? Array.from(flags).join(',') : null
  }

  const enableFeature = (feature: FeatureFlag): void => {
    if (!isCookieAllowed.value) {
      toast.warning(t('globalFeatureFlagsCookieRequired'))
      return
    }

    if (enabledFlags.value.has(feature)) return

    writeFlags(new Set(enabledFlags.value).add(feature))
  }

  const disableFeature = (feature: FeatureFlag): void => {
    if (!isCookieAllowed.value || !enabledFlags.value.has(feature)) return

    const next = new Set(enabledFlags.value)
    next.delete(feature)
    writeFlags(next)
  }

  // Cached per flag so repeated calls (e.g. from a template) return the same
  // ComputedRef instance instead of allocating a new one on every access.
  // Kept as a plain local (not `useState`), since a `ComputedRef` doesn't
  // survive the SSR payload round-trip: Nuxt's payload revival treats it
  // like a `ref` and replaces it with a plain ref frozen at its
  // server-render value, permanently disconnecting it from `enabledFlags`.
  const isFeatureEnabledCache = new Map<FeatureFlag, ComputedRef<boolean>>()

  const isFeatureEnabled = (feature: FeatureFlag): ComputedRef<boolean> => {
    const cached = isFeatureEnabledCache.get(feature)
    if (cached) return cached

    const state = computed(() => enabledFlags.value.has(feature))
    isFeatureEnabledCache.set(feature, state)
    return state
  }

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
