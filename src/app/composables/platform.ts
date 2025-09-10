export const usePlatform = () => {
  const { ssrContext } = useNuxtApp()

  const platform = useState(
    `${SITE_NAME}-platform`,
    () => ssrContext?.event.context.$platform,
  )

  console.log('platform: ssr', !!ssrContext)
  console.log('platform:', platform.value)

  const isAndroid = platform.value ? platform.value === 'android' : undefined

  const isIos = platform.value
    ? ['ios', 'iOS App Store'].includes(platform.value)
    : undefined

  const isApp = isAndroid || isIos

  return {
    isAndroid,
    isApp,
    isIos,
    platform,
  }
}
