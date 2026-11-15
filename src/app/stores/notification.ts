import type { Client } from '@urql/core'

import { graphql } from '~~/gql/generated'

const deviceRegisterMutation = graphql(`
  mutation DeviceRegister($input: DeviceRegisterInput!) {
    deviceRegister(input: $input) {
      result {
        id
      }
    }
  }
`)

const deleteDeviceByFcmTokenMutation = graphql(`
  mutation DeleteDeviceByFcmToken($input: DeleteDeviceByFcmTokenInput!) {
    deleteDeviceByFcmToken(input: $input) {
      clientMutationId
    }
  }
`)

export const useNotificationStore = defineStore('notification', () => {
  const nuxtApp = useNuxtApp()

  const { isAndroid } = usePlatform()

  // Bumped when this device was registered, so the list of devices is fetched again.
  const deviceRevision = ref(0)
  const fcmToken = ref<string>()
  // Set when the user removed this device in the settings, so it stays unregistered until turned on again.
  const isDeviceRemoved = ref(false)
  const permissionState = ref<PermissionState>()
  // The account and token that were registered last, so a watcher firing repeatedly does not repeat the mutation.
  const registeredKey = ref<string>()
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

  // Registers the current FCM token for the signed-in account, which also
  // takes it over from another account that used this device before. No-ops
  // until permission is granted and a token is available (on iOS the token
  // arrives asynchronously via a callback, so this is called again once
  // `fcmToken` updates). The registration is an upsert, so calling it again,
  // e.g. on every app start, refreshes it instead of duplicating it.
  const registerDevice = async (client: Client, accountId: string) => {
    if (permissionState.value !== 'granted' || isDeviceRemoved.value) return
    if (!fcmToken.value) await fcmTokenInitialize()
    if (!fcmToken.value) return

    const registrationKey = `${accountId}:${fcmToken.value}`

    if (registrationKey === registeredKey.value) return

    registeredKey.value = registrationKey

    const result = await client
      .mutation(deviceRegisterMutation, {
        input: {
          fcmToken: fcmToken.value,
          label: getDeviceLabel(navigator.userAgent),
          platform: getDevicePlatform({
            hasPushCapability,
            isAndroid,
          }),
        },
      })
      .toPromise()

    if (result.error) {
      registeredKey.value = undefined
      console.error('Device registration failed:', result.error)
      return
    }

    deviceRevision.value++
  }

  // Removes the registration of the current FCM token, e.g. on sign-out.
  const unregisterDevice = async (client: Client) => {
    isDeviceRemoved.value = false
    registeredKey.value = undefined

    if (!fcmToken.value) return

    const deleteResult = await client
      .mutation(deleteDeviceByFcmTokenMutation, {
        input: { fcmToken: fcmToken.value },
      })
      .toPromise()

    if (deleteResult.error) {
      console.error('Device unregistration failed:', deleteResult.error)
    }
  }

  // Forgets the current FCM token after its registration was removed in the settings. Nothing registers it again until the user turns notifications on for this device.
  const deviceForget = () => {
    fcmToken.value = undefined
    isDeviceRemoved.value = true
    registeredKey.value = undefined
  }

  const deviceRestore = () => {
    isDeviceRemoved.value = false
  }

  return {
    deviceForget,
    deviceRevision,
    deviceRestore,
    fcmToken,
    fcmTokenInitialize,
    inboxRefresh,
    inboxRevision,
    isDeviceRemoved,
    notificationOpened,
    notificationReceived,
    permissionState,
    readRefresh,
    readRevision,
    registerDevice,
    unregisterDevice,
  }
})
