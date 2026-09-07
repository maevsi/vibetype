export default defineNuxtPlugin(() => {
  const notificationStore = useNotificationStore()

  if (hasPushCapability) {
    registerIosPushCallbackHandler(notificationStore)
  } else {
    // Firebase is fetched through a dynamic import to keep it out of the chunk every visitor downloads upfront.
    // The promise is deliberately not awaited: awaiting it inside a plugin would put the fetch on the critical path of app initialization, and a rejection (a stale hashed chunk after a deploy, say) would propagate out of Nuxt's plugin loop and boot the app into the error page.
    // Push notifications degrade instead, while the permission state below is unaffected because it only reads the browser's permissions API.
    import('~/utils/dependencies/firebase')
      .then(({ initializeFirebaseClient }) => {
        initializeFirebaseClient()
      })
      .catch((error: unknown) => {
        console.warn('Failed to load the firebase client.', error)
      })
  }

  requestNotificationPermissionState(notificationStore)
})
