import type { H3Event } from 'h3'

export const useIsTesting = ({
  event,
  isCookieEnabled = true,
}:
  | {
      event?: H3Event
      isCookieEnabled?: boolean
    }
  | undefined = {}) => {
  const runtimeConfig = useRuntimeConfig()

  return getIsTesting({ event, isCookieEnabled, runtimeConfig })
}

export const getIsTesting = ({
  event,
  isCookieEnabled,
  runtimeConfig,
}: {
  event?: H3Event
  isCookieEnabled?: boolean
  runtimeConfig: ReturnType<typeof useRuntimeConfig>
}) => {
  const isTestingByRuntimeConfig = runtimeConfig.public.vio.isTesting
  if (isTestingByRuntimeConfig) return true

  if (isCookieEnabled && event) {
    const isTestingByCookie = !!getCookie(event, TESTING_COOKIE_NAME)
    if (isTestingByCookie) return true
  }
}
