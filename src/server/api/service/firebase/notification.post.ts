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

  return getMessaging(adminApp).send({ ...body.payload })
})
