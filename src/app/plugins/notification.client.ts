export default defineNuxtPlugin(() => {
  const notificationStore = useNotificationStore()

  if (hasPushCapability) registerIosPushCallbackHandler(notificationStore)

  requestNotificationPermissionState(notificationStore)

  // The service worker cannot navigate a window it does not control, so it hands the clicked notification's link over.
  navigator.serviceWorker?.addEventListener('message', (event) => {
    if (event.data?.type !== 'notification-click') return

    notificationStore.notificationOpened(event.data.url)
  })

  if (!hasPushCapability) {
    let isListening = false

    watch(
      () => notificationStore.permissionState,
      async (permissionState) => {
        if (permissionState !== 'granted' || isListening) return

        isListening = true

        try {
          const { onForegroundMessage } =
            await import('~/utils/dependencies/firebase')

          onForegroundMessage(notificationStore.notificationReceived)
        } catch (error) {
          console.warn('Failed to listen for foreground messages.', error)
        }
      },
      { immediate: true },
    )
  }
})
