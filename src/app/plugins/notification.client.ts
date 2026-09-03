export default defineNuxtPlugin(async () => {
  const notificationStore = useNotificationStore()

  if (hasPushCapability) {
    registerIosPushCallbackHandler(notificationStore)
  } else {
    const { initializeFirebaseClient } =
      await import('../utils/dependencies/firebase')

    initializeFirebaseClient()
  }

  requestNotificationPermissionState(notificationStore)
})
