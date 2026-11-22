// Decides whether the onboarding should ask for notifications.
export const useNotificationOnboarding = () => {
  const { isApp } = usePlatform()
  const notificationStore = useNotificationStore()

  // Client-only facts, resolved after mount to keep hydration stable.
  const isClient = ref(false)
  const isIosBrowserNotInstalled = ref(false)

  onMounted(() => {
    isClient.value = true

    // Web push on iOS and iPadOS works only for sites added to the home screen (iOS 16.4+), never in a Safari tab. The native app brings its own push bridge.
    isIosBrowserNotInstalled.value =
      !isApp &&
      (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
      !window.matchMedia('(display-mode: standalone)').matches &&
      !('standalone' in navigator && navigator.standalone)
  })

  const isStepRequired = computed(
    () =>
      isClient.value &&
      (isIosBrowserNotInstalled.value ||
        ((hasPushCapability || 'Notification' in window) &&
          notificationStore.permissionState === 'prompt')),
  )

  return { isIosBrowserNotInstalled, isStepRequired, notificationStore }
}
