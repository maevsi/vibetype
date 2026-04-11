export const useCaptcha = () => {
  const runtimeConfig = useRuntimeConfig()
  const colorMode = useColorMode()
  const themeColor = ref<'auto' | 'light' | 'dark'>()

  const getThemeColor = (colorModePreferenceOverride?: string) => {
    const colorModePreference =
      colorModePreferenceOverride || colorMode.preference

    switch (colorModePreference) {
      case 'system':
        return 'auto'
      case 'light':
      case 'dark':
        return colorModePreference
      default:
        throw new Error(`Unexpected color mode "${colorModePreference}"`)
    }
  }

  themeColor.value = getThemeColor()
  watch(
    () => colorMode.value,
    (currentValue) => (themeColor.value = getThemeColor(currentValue)),
  )

  const isCaptchaLoading = ref(true)
  const isCaptchaVisible = computed(() => !runtimeConfig.public.vio.isTesting)

  return {
    isCaptchaLoading,
    isCaptchaVisible,
    themeColor,
  }
}
