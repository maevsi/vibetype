import { GTAG_COOKIE_ID, SENTRY_COOKIE_ID } from '~~/node/static'

export const useIsCookieConsented = (cookieId: string) => {
  const cookieControl = useCookieControl()

  return computed(() =>
    Boolean(cookieControl.cookiesEnabledIds.value?.includes(cookieId)),
  )
}

const CONSENT_PURPOSE_IDS = [GTAG_COOKIE_ID, SENTRY_COOKIE_ID]

/**
 * Stores the privacy choices through the state of `useCookieControl`.
 * The module's hidden `CookieControl` component in `app.vue` persists that state to its cookies and removes the cookies of withdrawn purposes.
 */
export const usePrivacyConsent = () => {
  const { cookiesEnabled, cookiesEnabledIds, isConsentGiven, moduleOptions } =
    useCookieControl()

  const isDecided = computed(() => isConsentGiven.value === true)
  const enabledPurposeIds = computed<string[]>(() =>
    CONSENT_PURPOSE_IDS.filter((id) => cookiesEnabledIds.value?.includes(id)),
  )

  const save = (purposeIds: readonly string[]) => {
    isConsentGiven.value = true
    cookiesEnabled.value = [
      ...moduleOptions.cookies.necessary,
      ...moduleOptions.cookies.optional.filter((cookie) =>
        purposeIds.includes(cookie.id),
      ),
    ]
    cookiesEnabledIds.value = cookiesEnabled.value.map((cookie) => cookie.id)
  }

  return {
    allowAll: () => save(CONSENT_PURPOSE_IDS),
    allowNecessaryOnly: () => save([]),
    enabledPurposeIds,
    isDecided,
    save,
  }
}
