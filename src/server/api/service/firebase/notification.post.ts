import { z } from 'zod'
import { getMessaging } from 'firebase-admin/messaging'

const fcmMessageSchema = z
  .object({
    payload: z.object({
      notification: z.object({
        title: z.string(),
        body: z.string(),
      }),
      token: z.string().optional(),
      userId: z.string().uuid().optional(),
    }),
    secret: z.string(),
  })
  .refine((data) => !!data.payload.token !== !!data.payload.userId, {
    message:
      "Exactly one of 'payload.token' or 'payload.userId' must be given.",
    path: ['payload'],
  })

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig(event)
  const body = await getBodySafe({ event, schema: fcmMessageSchema })
  const { adminApp } = useFirebase()

  if (!runtimeConfig.vibetype.api.notification.secret)
    throw createAppError({
      status: 500,
      statusText: 'Notification secret uninitialized',
    })

  if (body.secret !== runtimeConfig.vibetype.api.notification.secret)
    throw createAppError({
      status: 403,
      statusText: 'Invalid secret',
    })

  const fcmTokens = body.payload.userId
    ? await getFcmTokensByAccountId(body.payload.userId)
    : [body.payload.token as string]

  const messaging = getMessaging(adminApp)

  return Promise.all(
    fcmTokens.map((token) =>
      messaging.send({
        notification: body.payload.notification,
        token,
      }),
    ),
  )
})

const getFcmTokensByAccountId = async (accountId: string) => {
  const rows = await executeQuery(
    sql`SELECT fcm_token FROM vibetype.device WHERE created_by = ${accountId}`,
  )

  return rows
    .map((row) => row.fcm_token as string | null)
    .filter((fcmToken) => fcmToken !== null)
}
