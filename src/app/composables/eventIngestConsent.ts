export const useEventIngestConsent = () => {
  const isSecure = useIsSecure()

  const cookie = useCookie<boolean | null>(EVENT_INGEST_CONSENT_COOKIE_NAME, {
    maxAge: EVENT_INGEST_CONSENT_COOKIE_MAX_AGE,
    sameSite: COOKIE_SAME_SITE,
    secure: isSecure,
  })

  return {
    give: () => (cookie.value = true),
    isGiven: computed(() => cookie.value === true),
    withdraw: () => (cookie.value = null),
  }
}
