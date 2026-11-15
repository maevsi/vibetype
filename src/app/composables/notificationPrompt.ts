// Decides whether the app may ask for push permission at all, and remembers when the user declined a contextual ask.
export const useNotificationPrompt = () => {
  const notificationStore = useNotificationStore()
  const store = useStore()
  const { isFeatureEnabled } = useFeatureFlags()
  const isNotificationsEnabled = isFeatureEnabled('notifications')

  const isPermissionAskable = computed(
    () =>
      isNotificationsEnabled.value &&
      !!store.signedInAccountId &&
      notificationStore.permissionState === 'prompt',
  )

  // `useState` keeps the request across the navigation that follows creating an event.
  const isSoftAskRequested = useState(
    'notification-soft-ask-requested',
    () => false,
  )
  const isSoftAskDismissed = ref(false)

  const refreshSoftAskDismissed = () => {
    isSoftAskDismissed.value = isNotificationSoftAskDismissed(
      readNotificationStorage(NOTIFICATION_SOFT_ASK_DISMISSED_STORAGE_KEY),
    )
  }

  const dismissSoftAsk = () => {
    writeNotificationStorage(
      NOTIFICATION_SOFT_ASK_DISMISSED_STORAGE_KEY,
      String(Date.now()),
    )
    isSoftAskDismissed.value = true
    isSoftAskRequested.value = false
  }

  const requestSoftAsk = () => {
    isSoftAskRequested.value = true
  }

  const isOnboardingSeen = () =>
    readNotificationStorage(NOTIFICATION_ENABLE_SEEN_STORAGE_KEY) !== null

  const markOnboardingSeen = () =>
    writeNotificationStorage(NOTIFICATION_ENABLE_SEEN_STORAGE_KEY, '1')

  return {
    dismissSoftAsk,
    isOnboardingSeen,
    isPermissionAskable,
    isSoftAskDismissed,
    isSoftAskRequested,
    markOnboardingSeen,
    refreshSoftAskDismissed,
    requestSoftAsk,
  }
}
