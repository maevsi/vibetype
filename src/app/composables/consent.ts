export const useIsCookieConsented = (cookieId: string) => {
  const cookieControl = useCookieControl()

  return computed(() =>
    Boolean(cookieControl.cookiesEnabledIds.value?.includes(cookieId)),
  )
}
