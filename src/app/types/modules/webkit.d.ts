declare global {
  interface Window {
    webkit?: {
      messageHandlers: Record<string, { postMessage: (data: unknown) => void }>
    }
  }

  interface WindowEventMap {
    'poster-scan-error': CustomEvent<string>
    'poster-scan-result': CustomEvent<string>
    'poster-shared': CustomEvent<string>
    'push-notification': CustomEvent<unknown>
    'push-notification-click': CustomEvent<unknown>
    'push-permission-request': CustomEvent<string>
    'push-permission-state': CustomEvent<string>
    'push-token': CustomEvent<string>
  }
}

export {}
