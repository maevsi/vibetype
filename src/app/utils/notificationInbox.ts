export const NOTIFICATION_TYPES = [
  'event_deleted',
  'event_invitation',
  'event_updated',
  'friendship_accepted',
  'friendship_requested',
  'guest_feedback',
] as const
export type NotificationTypeName = (typeof NOTIFICATION_TYPES)[number]

export const NOTIFICATION_CHANGES = [
  'address',
  'attendance',
  'end',
  'start',
] as const
export type NotificationChange = (typeof NOTIFICATION_CHANGES)[number]

export const NOTIFICATION_SOFT_ASK_DISMISSAL_DAYS = 30
export const NOTIFICATION_SOFT_ASK_DISMISSED_STORAGE_KEY =
  'vibetype_notification-soft-ask-dismissed-at'
export const NOTIFICATION_ENABLE_SEEN_STORAGE_KEY =
  'vibetype_notification-enable-seen'

export type NotificationPayload = {
  actorUsername?: string
  changes: NotificationChange[]
  eventCreatorUsername?: string
  eventName?: string
  eventSlug?: string
  eventStart?: string
  feedback?: 'accepted' | 'canceled'
  guestName?: string
}

export type NotificationSource = {
  friendshipId?: string | null
  guestId?: string | null
  payload: unknown
  type: string
}

export type NotificationTarget =
  | {
      name: 'account-view-username'
      params: { username: string }
    }
  | {
      name: 'event-view-username-event_name'
      params: { event_name: string; username: string }
    }
  | {
      name: 'guest-view-id'
      params: { id: string }
    }

const getString = (value: unknown) =>
  typeof value === 'string' && value ? value : undefined

const isNotificationChange = (value: unknown): value is NotificationChange =>
  NOTIFICATION_CHANGES.some((change) => change === value)

export const isNotificationTypeName = (
  value: string,
): value is NotificationTypeName =>
  NOTIFICATION_TYPES.some((type) => type === value)

// The payload is a render snapshot written by database triggers, so every key is optional and unknown keys are ignored.
export const parseNotificationPayload = (
  payload: unknown,
): NotificationPayload => {
  const source: Record<string, unknown> =
    payload && typeof payload === 'object' && !Array.isArray(payload)
      ? Object.fromEntries(Object.entries(payload))
      : {}
  const feedback = source.feedback

  return {
    actorUsername: getString(source.actor_username),
    changes: Array.isArray(source.changes)
      ? source.changes.filter(isNotificationChange)
      : [],
    eventCreatorUsername: getString(source.event_creator_username),
    eventName: getString(source.event_name),
    eventSlug: getString(source.event_slug),
    eventStart: getString(source.event_start),
    feedback:
      feedback === 'accepted' || feedback === 'canceled' ? feedback : undefined,
    guestName: getString(source.guest_name),
  }
}

// Mirrors the deep links of the push notifications. A deleted event has no page left to open.
export const getNotificationTarget = (
  notification: NotificationSource,
): NotificationTarget | undefined => {
  const payload = parseNotificationPayload(notification.payload)

  switch (notification.type) {
    case 'event_invitation':
      return notification.guestId
        ? { name: 'guest-view-id', params: { id: notification.guestId } }
        : undefined
    case 'event_updated':
    case 'guest_feedback':
      return payload.eventCreatorUsername && payload.eventSlug
        ? {
            name: 'event-view-username-event_name',
            params: {
              event_name: payload.eventSlug,
              username: payload.eventCreatorUsername,
            },
          }
        : undefined
    case 'friendship_accepted':
    case 'friendship_requested':
      return payload.actorUsername
        ? {
            name: 'account-view-username',
            params: { username: payload.actorUsername },
          }
        : undefined
    default:
      return undefined
  }
}

export const getNotificationBadgeText = (count: number, maximum = 9) =>
  count > maximum ? `${maximum}+` : String(count)

export const isNotificationSoftAskDismissed = (
  dismissedAt: string | null | undefined,
  now = Date.now(),
) => {
  const timestamp = Number(dismissedAt)

  return (
    Number.isFinite(timestamp) &&
    timestamp > 0 &&
    now - timestamp < NOTIFICATION_SOFT_ASK_DISMISSAL_DAYS * 24 * 60 * 60 * 1000
  )
}

// Storage may be blocked or unavailable (private windows, cleared site data), so a failure reads as empty and a write is dropped.
export const readNotificationStorage = (key: string) => {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

export const writeNotificationStorage = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value)
  } catch {
    // dropped on purpose, see above
  }
}
