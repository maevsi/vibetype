import { z } from 'zod'
import { getMessaging } from 'firebase-admin/messaging'

const notificationBody = z
  .object({
    notification: z.object({
      title: z.string(),
      body: z.string(),
    }),
    fcmToken: z.string().optional(),
    userId: z.string().optional(),
    secret: z.string(),
  })
  .refine((data) => !!data.fcmToken !== !!data.userId, {
    message: "Exactly one of 'fcmToken' or 'userId' must be provided.",
    path: ['fcmToken', 'userId'],
  })

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig(event)
  const body = await getBodySafe({ event, schema: notificationBody })

  if (!firebaseAdminApp)
    return throwError({
      statusCode: 500,
      statusMessage: 'Firebase uninitialized',
    })

  if (!runtimeConfig.private.api.notification.secret)
    return throwError({
      statusCode: 500,
      statusMessage: 'Notification secret uninitialized',
    })

  if (body.secret !== runtimeConfig.private.api.notification.secret)
    return throwError({
      statusCode: 403,
      statusMessage: 'Invalid secret',
    })

  const fcmTokenList = body.userId
    ? getFcmTokenListByUserId(body.userId)
    : body.fcmToken
      ? [body.fcmToken]
      : []

  return Promise.all(
    fcmTokenList.map((token) =>
      getMessaging(firebaseAdminApp).send({
        notification: body.notification,
        token: token,
      }),
    ),
  )
})

const getFcmTokenListByUserId = (_userId: string) => []
