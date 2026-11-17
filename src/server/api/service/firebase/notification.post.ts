import { z } from 'zod'
import { getMessaging } from 'firebase-admin/messaging'

// FCM codes that mean the token itself is gone, so the device row is pruned
// and the failure is treated as expected churn rather than a request error.
const DEAD_TOKEN_CODES = new Set([
  'messaging/registration-token-not-registered',
  'messaging/invalid-registration-token',
])

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

  // Send to every token and keep each token paired with its own outcome, so
  // one failing token never hides the others' results and every failure is
  // logged.
  const outcomes = await Promise.all(
    fcmTokens.map(async (token) => {
      try {
        return {
          token,
          messageId: await messaging.send({
            notification: body.payload.notification,
            token,
          }),
        }
      } catch (error) {
        return { token, error }
      }
    }),
  )

  const failures = outcomes.filter(
    (outcome): outcome is { token: string; error: unknown } =>
      'error' in outcome,
  )

  // A dead-token failure is expected churn: the device uninstalled, cleared
  // its data, revoked permission, or rotated the token. It is pruned below,
  // and it must not 500 the request, because that would mask the tokens that
  // did deliver.
  const deadTokens = failures.filter((outcome) =>
    DEAD_TOKEN_CODES.has(errorCode(outcome.error) ?? ''),
  )

  // Real failures still fail the request, so monitoring sees them as 500s.
  const realFailures = failures.filter(
    (outcome) => !DEAD_TOKEN_CODES.has(errorCode(outcome.error) ?? ''),
  )

  if (deadTokens.length > 0) {
    const pruned = await Promise.allSettled(
      deadTokens.map(({ token }) =>
        executeQuery(
          sql`DELETE FROM vibetype.device WHERE fcm_token = ${token}`,
        ),
      ),
    )

    for (const failure of pruned) {
      if (failure.status === 'rejected')
        console.error('Failed to prune a dead device row:', failure.reason)
    }
  }

  if (realFailures.length > 0) {
    const codes = realFailures.map(
      (outcome) => errorCode(outcome.error) ?? 'unknown',
    )

    for (const { error } of realFailures)
      console.error('FCM send failed:', error)

    throw createAppError({
      status: 500,
      statusText: `FCM send failed for ${realFailures.length} of ${outcomes.length} token(s): ${[...new Set(codes)].join(', ')}`,
    })
  }

  // A request whose only failures were dead tokens that got pruned succeeds,
  // returning the message ids of the tokens that actually delivered.
  return outcomes
    .filter(
      (outcome): outcome is { token: string; messageId: string } =>
        'messageId' in outcome,
    )
    .map(({ messageId }) => messageId)
})

// Reads the FCM error code off a rejected send, returning undefined for
// errors that carry no code.
const errorCode = (error: unknown): string | undefined =>
  typeof error === 'object' &&
  error !== null &&
  'code' in error &&
  typeof error.code === 'string'
    ? error.code
    : undefined

const getFcmTokensByAccountId = async (accountId: string) => {
  const rows = await executeQuery(
    sql`SELECT fcm_token FROM vibetype.device WHERE created_by = ${accountId}`,
  )

  return rows
    .map((row) => row.fcm_token as string | null)
    .filter((fcmToken) => fcmToken !== null)
}
