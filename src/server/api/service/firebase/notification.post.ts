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

  // `body.payload.token` narrows the ternary's true branch; the schema's
  // `.refine()` guarantees `userId` is set whenever `token` isn't.
  const fcmTokens = body.payload.token
    ? [body.payload.token]
    : await getFcmTokensByAccountId(body.payload.userId!)

  const messaging = getMessaging(adminApp)

  // `allSettled` so one failing token does not hide the others' results, and
  // so every failure code is logged. Failures still fail the request, so
  // monitoring sees them as 500s.
  const results = await Promise.allSettled(
    fcmTokens.map((token) =>
      messaging.send({
        notification: body.payload.notification,
        token,
      }),
    ),
  )

  const failures = results.filter(
    (result): result is PromiseRejectedResult => result.status === 'rejected',
  )

  if (failures.length > 0) {
    const codes = failures.map(({ reason }) => reason?.code ?? 'unknown')

    for (const { reason } of failures) console.error('FCM send failed:', reason)

    throw createAppError({
      status: 500,
      statusText: `FCM send failed for ${failures.length} of ${results.length} token(s): ${[...new Set(codes)].join(', ')}`,
    })
  }

  return results.map(
    (result) => (result as PromiseFulfilledResult<string>).value,
  )
})
