export const useTimeZone = () =>
  useNuxtApp().ssrContext?.event.context.$timeZone ||
  useCookie(TIMEZONE_COOKIE_NAME, {
    httpOnly: false,
    sameSite: COOKIE_SAME_SITE,
    secure: useRuntimeConfig().public.vio.isInProduction,
  }).value ||
  (import.meta.client
    ? Intl.DateTimeFormat().resolvedOptions().timeZone
    : undefined)
