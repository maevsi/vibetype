export const FEATURE_FLAGS = [
  'account-management',
  'category-browse',
  'developer-tools',
  'event-attending',
  'event-drafts',
  'friends',
  'invitations',
  'notifications',
  'participation',
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
 * second reactive state, so nothing can drift out of sync with it. The
 * cookie needs no consent, as users request flags themselves (§ 25 (2) no. 2
 * TDDDG).
 *
 * @example
 * const { enableFeature, isFeatureEnabled } = useFeatureFlags()
 * enableFeature('friends')
 * if (isFeatureEnabled('friends').value) { ... }
 */
export const useFeatureFlags = () => {
  const isSecure = useIsSecure()

  const cookie = useCookie<string | null>(FEATURE_FLAGS_COOKIE_NAME, {
    maxAge: FEATURE_FLAGS_COOKIE_MAX_AGE,
    sameSite: COOKIE_SAME_SITE,
    secure: isSecure,
  })

  const enabledFlags = computed<Set<FeatureFlag>>(
    () => new Set(parseFeatureFlags(cookie.value)),
  )

  const writeFlags = (flags: Set<FeatureFlag>): void => {
    cookie.value = flags.size ? Array.from(flags).join(',') : null
  }

  const enableFeature = (feature: FeatureFlag): void => {
    if (enabledFlags.value.has(feature)) return

    writeFlags(new Set(enabledFlags.value).add(feature))
  }

  const disableFeature = (feature: FeatureFlag): void => {
    if (!enabledFlags.value.has(feature)) return

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

/** Answers a page whose feature is unfinished with a 404 in production unless its flag is enabled, as `AppFeature` does for parts of a page. */
export const useFeatureRequired = (feature: FeatureFlag) => {
  const { createA11yError } = useA11yError()
  const { isFeatureEnabled } = useFeatureFlags()
  const runtimeConfig = useRuntimeConfig()

  if (
    !isFeatureEnabled(feature).value &&
    runtimeConfig.public.vio.environment === 'production'
  )
    throw createA11yError({ status: 404 })
}
