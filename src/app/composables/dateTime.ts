export const useTimeZone = () =>
  useNuxtApp().ssrContext?.event.context.$timeZone ||
  useCookie(TIMEZONE_COOKIE_NAME, {
    httpOnly: false,
    sameSite: COOKIE_SAME_SITE,
    secure: useIsSecure(),
  }).value ||
  (import.meta.client
    ? Intl.DateTimeFormat().resolvedOptions().timeZone
    : undefined)

export const useNow = () => useState(STATE_KEY_NOW, () => new Date())
