export const hasPushCapability =
  window &&
  window.webkit?.messageHandlers?.['push-permission-state'] !== undefined &&
  window.webkit?.messageHandlers?.['push-permission-request'] !== undefined

// Requests the app to open the notification dialog
export const requestNotificationPermission = (
  notificationStore: ReturnType<typeof useNotificationStore>,
) => {
  if (hasPushCapability) {
    window.webkit?.messageHandlers['push-permission-request']?.postMessage(
      'push-permission-request',
    )
  } else {
    Notification.requestPermission(
      (notificationPermission) =>
        (notificationStore.permissionState =
          notificationPermission === 'default'
            ? 'prompt'
            : notificationPermission),
    )
  }
}

// // Requests the current notification permission state
// export const requestNotificationPermissionState = async () => {
//   if (hasPushCapability) {
//     window.webkit?.messageHandlers['push-permission-state']?.postMessage(
//       'push-permission-state',
//     )
//   } else {
//     const permissionStatus = await navigator.permissions.query({
//       name: 'notifications',
//     })
//     permissionState.value = permissionStatus.state
//   }
// }

export const registerIosPushCallbackHandler = (
  notificationStore: ReturnType<typeof useNotificationStore>,
) => {
  window.addEventListener('push-permission-request', (event: CustomEvent) => {
    if (!event.detail) return

    if (event.detail === 'granted') {
      notificationStore.permissionState = 'granted'
    } else {
      notificationStore.permissionState = 'denied'
    }
  })

  window.addEventListener('push-permission-state', (event: CustomEvent) => {
    if (!event.detail) return

    switch (event.detail) {
      case 'authorized':
      case 'ephemeral':
      case 'provisional':
        notificationStore.permissionState = 'granted'
        break
      case 'notDetermined':
      case 'denied':
      case 'unknown':
      default:
        notificationStore.permissionState = 'denied'
        break
    }
  })

  window.addEventListener('push-token', (event: CustomEvent) => {
    if (!event.detail) return

    if (event.detail !== 'ERROR GET TOKEN') {
      notificationStore.fcmToken = event.detail
    }
  })
}

export const hasAttCapability =
  window &&
  window.webkit?.messageHandlers?.['att-request-permission'] !== undefined

export const requestTrackingPermission = () => {
  if (hasAttCapability) {
    window.webkit?.messageHandlers['att-request-permission']?.postMessage(
      'att-request-permission',
    )
  }
}

export const registerIosTrackingCallbackHandler = (
  cookieControl: ReturnType<typeof useCookieControl>,
) => {
  window.addEventListener('att-permission-response', (event: Event) => {
    const { detail } = event as CustomEvent<string>
    if (detail === 'authorized') {
      cookieControl.cookiesEnabledIds.value =
        cookieControl.moduleOptions.cookies.optional.map((cookie) => cookie.id)
      cookieControl.isConsentGiven.value = true
    }
  })
}
