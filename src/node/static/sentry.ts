import type * as Sentry from '@sentry/nuxt'

export const NUXT_PUBLIC_SENTRY_HOST = 'o4507213726154752.ingest.de.sentry.io'
export const NUXT_PUBLIC_SENTRY_PROFILES_SAMPLE_RATE = 1.0
export const NUXT_PUBLIC_SENTRY_PROJECT_ID = '4507213736837200'
export const NUXT_PUBLIC_SENTRY_PROJECT_PUBLIC_KEY =
  '5e253cec6a72a9eea44531e7205016ba'

export const getSharedSentryConfig = ({
  enableLogs,
  environment,
  host,
  isInProduction,
  isTesting,
  projectId,
  projectPublicKey,
  release,
}: {
  enableLogs?: boolean
  environment?: string
  host: string
  isInProduction: boolean
  isTesting?: boolean
  projectId: string
  projectPublicKey: string
  release?: string
}): Parameters<typeof Sentry.init>[0] => ({
  dsn:
    projectPublicKey && host && projectId
      ? `https://${projectPublicKey}@${host}/${projectId}`
      : undefined,
  enabled: isInProduction && !isTesting,
  enableLogs,
  environment,
  release,
  tracesSampleRate: 1.0,
})
