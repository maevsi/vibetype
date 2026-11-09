export default defineNuxtPlugin(() => {
  const notificationStore = useNotificationStore()

  if (hasPushCapability) registerIosPushCallbackHandler(notificationStore)

  requestNotificationPermissionState(notificationStore)
})
