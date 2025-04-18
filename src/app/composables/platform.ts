export const usePlatform = () => {
  const { ssrContext } = useNuxtApp()

  const platform = useState(
    `${SITE_NAME}-platform`,
    () => ssrContext?.event.context.$platform,
  )

  const isApp = ref<boolean | undefined>(
    platform.value
      ? ['android', 'ios', 'iOS App Store'].includes(platform.value)
      : undefined,
  )

  return {
    isApp,
    platform,
  }
}
