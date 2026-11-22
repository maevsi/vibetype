import { z } from 'zod'

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

  const result = await sendPush({
    accountId: body.payload.userId,
    notification: body.payload.notification,
    tokens: body.payload.token ? [body.payload.token] : undefined,
  })

  if (result.successCount === 0 && result.failureCount > 0)
    throw createAppError({
      status: 502,
      statusText: 'Push notification could not be sent',
    })

  return result
})
