import type { H3Event } from 'h3'

export const turnstileVerify = async (event: H3Event) => {
  const turnstileToken = getRequestHeader(
    event,
    TURNSTILE_HEADER_KEY.toLowerCase(),
  )

  if (!turnstileToken) {
    throw createAppError({
      status: 422,
      statusText: 'Turnstile token not provided.',
    })
  }

  if (Array.isArray(turnstileToken)) {
    throw createAppError({
      status: 422,
      statusText: 'Invalid Turnstile token format.',
    })
  }

  const result = await verifyTurnstileToken(turnstileToken)

  if (!result.success) {
    throw createAppError({
      status: 403,
      statusText: `Turnstile verification unsuccessful: ${result['error-codes'].join(', ')}`,
    })
  }
}
