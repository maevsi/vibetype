export const useNotificationStore = defineStore('notification', () => {
  const fcmToken = ref<string>()
  const permissionState = ref<PermissionState>()

  // Main notification function that initializes the FCM token.
  // It should only be called after a user gave notification permission.
  // Token registration etc. is handled automatically.
  const fcmTokenInitialize = async () => {
    if (hasPushCapability) {
      window.webkit?.messageHandlers['push-token']?.postMessage('push-token')
    } else {
      fcmToken.value = await requestFcmToken()
    }
  }

  const updateRemoteFcmToken = async (
    store: ReturnType<typeof useStore>,
    options?: { remove: boolean },
  ) => {
    if (permissionState.value !== 'granted' || !store.signedInAccountId) return

    //const token = fcmToken.value

    if (options?.remove) {
      // TODO: Remove token from database.
      // Functionality not implemented in the backend yet.
      return
    }

    // update/add Token
  }

  return {
    fcmToken,
    fcmTokenInitialize,
    permissionState,
    updateRemoteFcmToken,
  }
})
