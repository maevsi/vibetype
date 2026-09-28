export default defineNuxtPlugin(() => {
  const notificationStore = useNotificationStore()

  if (hasPushCapability) {
    registerIosPushCallbackHandler(notificationStore)
  } else {
    // Not awaited: a rejection would boot Nuxt into its error page.
    import('~/utils/dependencies/firebase')
      .then(({ initializeFirebaseClient }) => {
        initializeFirebaseClient()
      })
      .catch((error: unknown) => {
        console.warn('Failed to load the Firebase client.', error)
      })
  }

  requestNotificationPermissionState(notificationStore)
})
