import type { Client } from '@urql/core'

import { createDeviceMutation } from '~~/gql/documents/mutations/device/deviceCreate'
import { deleteDeviceByCreatedByAndFcmTokenMutation } from '~~/gql/documents/mutations/device/deviceDelete'
import { deviceByCreatedByAndFcmTokenQuery } from '~~/gql/documents/queries/device/deviceByCreatedByAndFcmToken'

export const useNotificationStore = defineStore('notification', () => {
  const fcmToken = ref<string>()
  const permissionState = ref<PermissionState>()

  // Initializes the FCM token, should only be called after a user gave notification permission
  const fcmTokenInitialize = async () => {
    if (hasPushCapability) {
      window.webkit?.messageHandlers['push-token']?.postMessage('push-token')
    } else {
      fcmToken.value = await requestFcmToken()
    }
  }

  // Registers the current FCM token as a device for `accountId`, unless it is
  // already registered. No-ops until permission is granted and a token is
  // available (on iOS the token arrives asynchronously via a callback, so
  // this may need to be called again once `fcmToken` updates).
  const registerDevice = async (client: Client, accountId: string) => {
    if (permissionState.value !== 'granted') return
    if (!fcmToken.value) await fcmTokenInitialize()
    if (!fcmToken.value) return

    const existingDevice = await client
      .query(deviceByCreatedByAndFcmTokenQuery, {
        createdBy: accountId,
        fcmToken: fcmToken.value,
      })
      .toPromise()

    if (existingDevice.data?.deviceByCreatedByAndFcmToken) return

    const createResult = await client
      .mutation(createDeviceMutation, {
        input: {
          device: {
            createdBy: accountId,
            fcmToken: fcmToken.value,
          },
        },
      })
      .toPromise()

    if (createResult.error) {
      // A concurrent call (e.g. from a second tab) may have registered the
      // same account+token pair between the check above and this mutation;
      // the backend's uniqueness constraint on (createdBy, fcmToken) turns
      // that race into an error here rather than a duplicate row, so it is
      // logged rather than surfaced as a failure.
      console.error('Device registration failed:', createResult.error)
    }
  }

  // Removes the device registration for `accountId`, e.g. on sign-out.
  // `accountId` must be captured by the caller before it is cleared from
  // the store, otherwise there is nothing left to unregister.
  const unregisterDevice = async (client: Client, accountId: string) => {
    if (!fcmToken.value) return

    const deleteResult = await client
      .mutation(deleteDeviceByCreatedByAndFcmTokenMutation, {
        input: {
          createdBy: accountId,
          fcmToken: fcmToken.value,
        },
      })
      .toPromise()

    if (deleteResult.error) {
      console.error('Device unregistration failed:', deleteResult.error)
    }
  }

  return {
    fcmToken,
    fcmTokenInitialize,
    permissionState,
    registerDevice,
    unregisterDevice,
  }
})
