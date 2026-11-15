declare global {
  interface Window {
    webkit?: {
      messageHandlers: Record<string, { postMessage: (data: unknown) => void }>
    }
  }

  interface WindowEventMap {
    'push-notification': CustomEvent<unknown>
    'push-notification-click': CustomEvent<unknown>
    'push-permission-request': CustomEvent<string>
    'push-permission-state': CustomEvent<string>
    'push-token': CustomEvent<string>
  }
}

export {}
