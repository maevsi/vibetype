export const useDevelopmentModeTrigger = (
  triggerCount = 5,
  timeoutMilliseconds = 1500,
) => {
  const { isFeatureEnabled, toggleFeature } = useFeatureFlags()
  const isDevelopmentModeActive = isFeatureEnabled('developer-tools')
  const tapCount = ref(0)
  const timeoutId = ref<ReturnType<typeof setTimeout>>()

  const onDevelopmentModeTrigger = () => {
    tapCount.value++

    if (timeoutId.value) clearTimeout(timeoutId.value)

    timeoutId.value = setTimeout(() => {
      tapCount.value = 0
    }, timeoutMilliseconds)

    if (tapCount.value >= triggerCount) {
      toggleFeature('developer-tools')
      tapCount.value = 0
    }
  }

  return {
    isDevelopmentModeActive,
    onDevelopmentModeTrigger,
  }
}

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
