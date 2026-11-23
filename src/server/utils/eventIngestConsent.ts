import type { H3Event } from 'h3'

export const assertEventIngestConsent = (event: H3Event) => {
  if (getCookie(event, EVENT_INGEST_CONSENT_COOKIE_NAME) === 'true') return

  throw createAppError({
    status: 403,
    statusText: 'Reading with OpenAI requires consent.',
  })
}
