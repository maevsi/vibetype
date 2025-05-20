import { useCreateDeviceMutation } from '~~/gql/documents/mutations/device/deviceCreate'
import { useDeleteDeviceMutation } from '~~/gql/documents/mutations/device/deviceDelete'

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

    const token = fcmToken.value

    if (options?.remove) {
      // TODO: Remove token in FCM.
      const deleteDeviceMutation = useDeleteDeviceMutation()
      deleteDeviceMutation.executeMutation({
        createdBy: store.signedInAccountId ?? '',
        fcmToken: token,
      })
      return
    }

    // Check if exist if not create otherwise update
    const createDeviceMutation = useCreateDeviceMutation()
    createDeviceMutation.executeMutation({
      deviceInput: {
        createdBy: store.signedInAccountId ?? '',
        fcmToken: token,
      },
    })
  }

  return {
    fcmToken,
    fcmTokenInitialize,
    permissionState,
    updateRemoteFcmToken,
  }
})
