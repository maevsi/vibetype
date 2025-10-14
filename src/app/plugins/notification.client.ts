export default defineNuxtPlugin(() => {
  const notificationStore = useNotificationStore()

  requestNotificationPermissionState(notificationStore)

  if (hasPushCapability) {
    registerIosCallbackHandler(notificationStore)
  } else {
    initializeFirebaseClient()
  }
})
