export const useIsTesting = ({
  isCookieEnabled = true,
}: { isCookieEnabled?: boolean } | undefined = {}) => {
  const runtimeConfig = useRuntimeConfig()

  const isTestingByRuntimeConfig = runtimeConfig.public.vio.isTesting
  if (isTestingByRuntimeConfig) return true

  if (isCookieEnabled) {
    const isTestingByCookie = !!useCookie(TESTING_COOKIE_NAME).value
    if (isTestingByCookie) return true
  }
}
