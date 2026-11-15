import { getMessaging } from 'firebase-admin/messaging'
import { z } from 'zod'

export const CHANNEL_NAME_ACCOUNT_NOTIFICATION = 'account_notification.created'

const FCM_ERROR_CODES_STALE_TOKEN = [
  'messaging/invalid-registration-token',
  'messaging/registration-token-not-registered',
]

export const NOTIFICATION_TYPES = [
  'event_deleted',
  'event_invitation',
  'event_updated',
  'friendship_accepted',
  'friendship_requested',
  'guest_feedback',
] as const
export type NotificationType = (typeof NOTIFICATION_TYPES)[number]

export type AccountNotificationResolved = {
  account_id: string
  event_id: string | null
  fcm_tokens: string[] | null
  friendship_id: string | null
  guest_id: string | null
  is_push_enabled: boolean
  language: string | null
  payload: unknown
  type: NotificationType
}

const payloadSchema = z.object({
  actor_username: z.string().nullish(),
  changes: z.array(z.string()).nullish(),
  event_creator_username: z.string().nullish(),
  event_name: z.string().nullish(),
  event_slug: z.string().nullish(),
  event_start: z.string().nullish(),
  feedback: z.string().nullish(),
  guest_name: z.string().nullish(),
})
type NotificationPayload = z.infer<typeof payloadSchema>

const PATH_NOTIFICATIONS = '/notification'

const locales = {
  de: {
    actorFallback: 'Jemand',
    changes: {
      address: 'Ort',
      attendance: 'Teilnahmeart',
      end: 'Ende',
      start: 'Beginn',
    } as Record<string, string>,
    eventFallback: 'einem Event',
    event_deleted: {
      body: (p: Fields) => `${p.event} wurde von ${p.actor} gelöscht.`,
      title: 'Event gelöscht',
    },
    event_invitation: {
      body: (p: Fields) => `${p.actor} hat dich zu ${p.event} eingeladen.`,
      title: 'Neue Einladung',
    },
    event_updated: {
      body: (p: Fields) =>
        p.changes
          ? `${p.event} wurde geändert: ${p.changes}.`
          : `${p.event} wurde geändert.`,
      title: 'Event geändert',
    },
    friendship_accepted: {
      body: (p: Fields) =>
        `${p.actor} hat deine Freundschaftsanfrage angenommen.`,
      title: 'Freundschaft angenommen',
    },
    friendship_requested: {
      body: (p: Fields) => `${p.actor} möchte mit dir befreundet sein.`,
      title: 'Freundschaftsanfrage',
    },
    guest_feedback: {
      body: (p: Fields) =>
        p.feedback === 'canceled'
          ? `${p.guest} hat die Einladung zu ${p.event} abgesagt.`
          : `${p.guest} hat die Einladung zu ${p.event} angenommen.`,
      title: 'Antwort auf deine Einladung',
    },
  },
  en: {
    actorFallback: 'Someone',
    changes: {
      address: 'location',
      attendance: 'attendance type',
      end: 'end',
      start: 'start',
    } as Record<string, string>,
    eventFallback: 'an event',
    event_deleted: {
      body: (p: Fields) => `${p.event} was deleted by ${p.actor}.`,
      title: 'Event deleted',
    },
    event_invitation: {
      body: (p: Fields) => `${p.actor} invited you to ${p.event}.`,
      title: 'New invitation',
    },
    event_updated: {
      body: (p: Fields) =>
        p.changes
          ? `${p.event} was updated: ${p.changes}.`
          : `${p.event} was updated.`,
      title: 'Event updated',
    },
    friendship_accepted: {
      body: (p: Fields) => `${p.actor} accepted your friend request.`,
      title: 'Friend request accepted',
    },
    friendship_requested: {
      body: (p: Fields) => `${p.actor} wants to be your friend.`,
      title: 'Friend request',
    },
    guest_feedback: {
      body: (p: Fields) =>
        p.feedback === 'canceled'
          ? `${p.guest} declined the invitation to ${p.event}.`
          : `${p.guest} accepted the invitation to ${p.event}.`,
      title: 'Invitation response',
    },
  },
} as const

type Fields = {
  actor: string
  changes: string
  event: string
  feedback: string | null | undefined
  guest: string
}

const getLocalePrefix = (locale: AppLocale) =>
  locale !== LOCALE_DEFAULT ? '/' + locale : ''

const getPath = ({
  guestId,
  payload,
  type,
}: {
  guestId: string | null
  payload: NotificationPayload
  type: NotificationType
}) => {
  const encode = encodeURIComponent

  switch (type) {
    case 'event_invitation':
      return guestId ? `/guest/view/${encode(guestId)}` : PATH_NOTIFICATIONS
    case 'event_updated':
    case 'guest_feedback':
      return payload.event_creator_username && payload.event_slug
        ? `/event/view/${encode(payload.event_creator_username)}/${encode(payload.event_slug)}`
        : PATH_NOTIFICATIONS
    case 'friendship_accepted':
    case 'friendship_requested':
      return payload.actor_username
        ? `/account/view/${encode(payload.actor_username)}`
        : PATH_NOTIFICATIONS
    case 'event_deleted':
      return PATH_NOTIFICATIONS
  }
}

export const buildAccountNotificationMessage = ({
  guestId,
  language,
  payload: payloadRaw,
  type,
}: {
  guestId: string | null
  language: AppLocale
  payload: unknown
  type: NotificationType
}) => {
  const payloadResult = payloadSchema.safeParse(payloadRaw ?? {})
  const payload = payloadResult.success ? payloadResult.data : {}
  const t = locales[language]
  const fields: Fields = {
    actor: payload.actor_username || t.actorFallback,
    changes: (payload.changes ?? [])
      .map((change) => t.changes[change])
      .filter(Boolean)
      .join(', '),
    event: payload.event_name || t.eventFallback,
    feedback: payload.feedback,
    guest: payload.guest_name || payload.actor_username || t.actorFallback,
  }

  return {
    body: t[type].body(fields),
    title: t[type].title,
    url: getLocalePrefix(language) + getPath({ guestId, payload, type }),
  }
}

export const sendPush = async ({
  accountId,
  data,
  notification,
  siteUrl,
  tokens,
}: {
  accountId?: string
  data?: { url: string }
  notification: { body: string; title: string }
  siteUrl?: string
  tokens?: string[]
}) => {
  const fcmTokens =
    tokens ?? (accountId ? await getFcmTokensByAccountId(accountId) : [])

  if (fcmTokens.length === 0) return { failureCount: 0, successCount: 0 }

  const { adminApp } = useFirebase()
  const messaging = getMessaging(adminApp)
  const link = data && siteUrl ? new URL(data.url, siteUrl).href : undefined

  const results = await Promise.allSettled(
    fcmTokens.map((token) =>
      messaging.send({
        ...(data
          ? {
              apns: { payload: { aps: {}, url: data.url } },
              data,
            }
          : {}),
        notification,
        token,
        ...(link ? { webpush: { fcmOptions: { link } } } : {}),
      }),
    ),
  )

  let failureCount = 0
  const tokensStale: string[] = []

  results.forEach((result, index) => {
    if (result.status === 'fulfilled') return

    failureCount++
    const code = (result.reason as { code?: string } | undefined)?.code

    if (code && FCM_ERROR_CODES_STALE_TOKEN.includes(code)) {
      tokensStale.push(fcmTokens[index]!)
    } else {
      console.error('Could not send push notification:', result.reason)
    }
  })

  await Promise.all(
    tokensStale.map((token) =>
      executeQuery(sql`DELETE FROM vibetype.device WHERE fcm_token = ${token}`),
    ),
  )

  return { failureCount, successCount: results.length - failureCount }
}

export const sendAccountNotificationPush = async ({
  notification: {
    account_id: accountId,
    fcm_tokens: tokens,
    guest_id: guestId,
    language,
    payload,
    type,
  },
  siteUrl,
}: {
  notification: AccountNotificationResolved
  siteUrl: string
}) => {
  const languageResult = LocaleSchema.safeParse(language)
  const { body, title, url } = buildAccountNotificationMessage({
    guestId,
    language: languageResult.success ? languageResult.data : AppLocale.EN,
    payload,
    type,
  })

  return sendPush({
    accountId,
    data: { url },
    notification: { body, title },
    siteUrl,
    tokens: tokens ?? [],
  })
}

const getFcmTokensByAccountId = async (accountId: string) => {
  const rows = await executeQuery(
    sql`SELECT fcm_token FROM vibetype.device WHERE created_by = ${accountId}`,
  )

  return rows
    .map((row) => row.fcm_token as string | null)
    .filter((fcmToken) => fcmToken !== null)
}
