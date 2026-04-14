export default defineNuxtPlugin(() => {
  const notificationStore = useNotificationStore()

  if (hasPushCapability) {
    registerIosPushCallbackHandler(notificationStore)
  } else {
    initializeFirebaseClient()
  }
})
