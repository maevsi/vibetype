import type { Client } from '@urql/core'

import { graphql } from '~~/gql/generated'

const deviceByCreatedByAndFcmTokenQuery = graphql(`
  query DeviceByCreatedByAndFcmToken($createdBy: UUID!, $fcmToken: String!) {
    deviceByCreatedByAndFcmToken(createdBy: $createdBy, fcmToken: $fcmToken) {
      id
    }
  }
`)

const createDeviceMutation = graphql(`
  mutation CreateDevice($input: CreateDeviceInput!) {
    createDevice(input: $input) {
      clientMutationId
    }
  }
`)

const deleteDeviceByCreatedByAndFcmTokenMutation = graphql(`
  mutation DeleteDeviceByCreatedByAndFcmToken(
    $input: DeleteDeviceByCreatedByAndFcmTokenInput!
  ) {
    deleteDeviceByCreatedByAndFcmToken(input: $input) {
      clientMutationId
    }
  }
`)

export const useNotificationStore = defineStore('notification', () => {
  const nuxtApp = useNuxtApp()

  const fcmToken = ref<string>()
  const permissionState = ref<PermissionState>()
  // Bumped when notifications may have arrived, so the bell and the inbox page fetch again.
  const inboxRevision = ref(0)
  // Bumped when notifications were read, which only the bell needs to know about.
  const readRevision = ref(0)

  const inboxRefresh = () => {
    inboxRevision.value++
  }

  const readRefresh = () => {
    readRevision.value++
  }

  // Opens a notification's deep link, which arrives from outside the app and so must stay on this site.
  const notificationOpened = (url?: string) => {
    if (!url || !getIsSitePath(url)) return

    inboxRefresh()
    nuxtApp.runWithContext(() => navigateTo(url))
  }

  // A foreground notification is shown as a toast, as the operating system only shows one while the app is in the background.
  const notificationReceived = ({
    body,
    title,
    url,
  }: {
    body?: string
    title?: string
    url?: string
  }) => {
    inboxRefresh()

    if (!title) return

    toast(title, {
      ...(body ? { description: body } : {}),
      ...(url && getIsSitePath(url)
        ? {
            action: {
              label: nuxtApp.$i18n.t('globalNotificationOpen'),
              onClick: () => notificationOpened(url),
            },
          }
        : {}),
    })
  }

  // Initializes the FCM token, should only be called after a user gave notification permission
  const fcmTokenInitialize = async () => {
    if (hasPushCapability) {
      window.webkit?.messageHandlers['push-token']?.postMessage('push-token')
    } else {
      // Must not reject: Vue drops the promise its callers return.
      try {
        const { requestFcmToken } =
          await import('~/utils/dependencies/firebase')

        fcmToken.value = await requestFcmToken()
      } catch (error) {
        console.warn('Failed to request the FCM token.', error)
      }
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
    inboxRefresh,
    inboxRevision,
    notificationOpened,
    notificationReceived,
    permissionState,
    readRefresh,
    readRevision,
    registerDevice,
    unregisterDevice,
  }
})
