export const hasPushCapability =
  window &&
  window.webkit?.messageHandlers?.['push-permission-state'] !== undefined &&
  window.webkit?.messageHandlers?.['push-permission-request'] !== undefined

// Opens the notification dialog and resolves with the chosen permission state
export const requestNotificationPermission = async (
  notificationStore: ReturnType<typeof useNotificationStore>,
) => {
  if (hasPushCapability) {
    const result = new Promise<void>((resolve) =>
      window.addEventListener('push-permission-request', () => resolve(), {
        once: true,
      }),
    )

    window.webkit?.messageHandlers['push-permission-request']?.postMessage(
      'push-permission-request',
    )
    await result
  } else {
    const notificationPermission = await Notification.requestPermission()

    notificationStore.permissionState =
      notificationPermission === 'default' ? 'prompt' : notificationPermission
  }

  return notificationStore.permissionState
}

// Requests the current notification permission state
export const requestNotificationPermissionState = async (
  notificationStore: ReturnType<typeof useNotificationStore>,
) => {
  if (hasPushCapability) {
    window.webkit?.messageHandlers['push-permission-state']?.postMessage(
      'push-permission-state',
    )
  } else {
    const permissionStatus = await navigator.permissions.query({
      name: 'notifications',
    })
    notificationStore.permissionState = permissionStatus.state
  }
}

// The native bridge hands over either an object or its JSON string.
const parseIosPushDetail = (detail: unknown) => {
  const parsed: unknown = (() => {
    if (typeof detail !== 'string') return detail

    try {
      return JSON.parse(detail)
    } catch {
      return undefined
    }
  })()
  const source: Record<string, unknown> =
    parsed && typeof parsed === 'object'
      ? Object.fromEntries(Object.entries(parsed))
      : {}
  const getString = (value: unknown) =>
    typeof value === 'string' && value ? value : undefined

  return {
    body: getString(source.body),
    title: getString(source.title),
    url: getString(source.url),
  }
}

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
        notificationStore.permissionState = 'prompt'
        break
      case 'denied':
      case 'unknown':
      default:
        notificationStore.permissionState = 'denied'
        break
    }
  })

  window.addEventListener('push-notification', (event: CustomEvent) => {
    notificationStore.notificationReceived(parseIosPushDetail(event.detail))
  })

  window.addEventListener('push-notification-click', (event: CustomEvent) => {
    notificationStore.notificationOpened(parseIosPushDetail(event.detail).url)
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
