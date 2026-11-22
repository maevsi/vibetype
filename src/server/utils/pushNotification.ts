import { getMessaging } from 'firebase-admin/messaging'

export const getFcmTokensByAccountId = async (accountId: string) => {
  const rows = await executeQuery(
    sql`SELECT fcm_token FROM vibetype.device WHERE created_by = ${accountId}`,
  )

  return rows
    .map((row) => row.fcm_token as string | null)
    .filter((fcmToken) => fcmToken !== null)
}

// Never throws: a push notification is a courtesy on top of an outbox event's other effects, so a failure here must not make the event's processing retry and repeat those.
export const sendPushNotification = async ({
  accountId,
  notification,
}: {
  accountId: string
  notification: { body: string; title: string }
}) => {
  if (!firebaseAdminApp) return

  try {
    const messaging = getMessaging(firebaseAdminApp)
    const results = await Promise.allSettled(
      (await getFcmTokensByAccountId(accountId)).map((token) =>
        messaging.send({ notification, token }),
      ),
    )

    for (const result of results) {
      if (result.status === 'rejected')
        console.warn('Could not send push notification:', result.reason)
    }
  } catch (error) {
    console.error('Could not send push notifications:', error)
  }
}
