import { z } from 'zod'
import { getMessaging } from 'firebase-admin/messaging'

const fcmMessageSchema = z.object({
  payload: z.object({
    notification: z.object({
      title: z.string(),
      body: z.string(),
    }),
    token: z.string(),
  }),
  secret: z.string(),
})

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig(event)
  const body = await getBodySafe({ event, schema: fcmMessageSchema })

  if (!firebaseAdminApp)
    return throwError({
      statusCode: 500,
      statusMessage: 'Firebase uninitialized',
    })

  if (!runtimeConfig.vibetype.api.notification.secret)
    return throwError({
      statusCode: 500,
      statusMessage: 'Notification secret uninitialized',
    })

  if (body.secret !== runtimeConfig.vibetype.api.notification.secret)
    return throwError({
      statusCode: 403,
      statusMessage: 'Invalid secret',
    })

  return getMessaging(firebaseAdminApp).send({ ...body.payload })
})
