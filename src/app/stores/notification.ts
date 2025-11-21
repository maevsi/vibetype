import type { Client } from '@urql/core'
import { createDeviceMutation } from '~~/gql/documents/mutations/device/deviceCreate'
import { deleteDeviceMutation } from '~~/gql/documents/mutations/device/deviceDelete'

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
    client: Client,
    store: ReturnType<typeof useStore>,
    options?: { remove: boolean },
  ) => {
    if (permissionState.value !== 'granted' || !store.signedInAccountId) return

    if (!fcmToken.value) fcmTokenInitialize()

    const token = fcmToken.value

    if (!token) return

    if (options?.remove) {
      await client
        .mutation(deleteDeviceMutation, {
          deleteDeviceInput: {
            createdBy: store.signedInAccountId ?? '',
            fcmToken: token,
          },
        })
        .toPromise()
      return
    }

    await client
      .mutation(createDeviceMutation, {
        deviceInput: {
          createdBy: store.signedInAccountId ?? '',
          fcmToken: token,
        },
      })
      .toPromise()
  }

  return {
    fcmToken,
    fcmTokenInitialize,
    permissionState,
    updateRemoteFcmToken,
  }
})
