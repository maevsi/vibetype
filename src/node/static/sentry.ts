import type * as Sentry from '@sentry/nuxt'

export const NUXT_PUBLIC_SENTRY_HOST = 'o4507213726154752.ingest.de.sentry.io'
export const NUXT_PUBLIC_SENTRY_LOGS_ENABLE = true
export const NUXT_PUBLIC_SENTRY_PROFILES_SAMPLE_RATE = 1.0
export const NUXT_PUBLIC_SENTRY_PROJECT_ID = '4507213736837200'
export const NUXT_PUBLIC_SENTRY_PROJECT_PUBLIC_KEY =
  '5e253cec6a72a9eea44531e7205016ba'

// keys that identify a user without being credentials, which Sentry's built-in denylist does not cover
const USER_IDENTIFYING_KEY_DENY_LIST = [
  '-ip',
  '-user',
  'forwarded',
  'remote-',
  'via',
]

export const getSharedSentryConfig = ({
  environment,
  host,
  isInProduction,
  isTesting,
  projectId,
  projectPublicKey,
  release,
}: {
  environment?: string
  host: string
  isInProduction: boolean
  isTesting?: boolean
  projectId: string
  projectPublicKey: string
  release?: string
}): Parameters<typeof Sentry.init>[0] => ({
  // spelled out because every category is collected when this option is unset
  dataCollection: {
    cookies: false,
    databaseQueryData: false,
    genAI: {
      inputs: false,
      outputs: false,
    },
    graphQL: {
      document: false,
      variables: false,
    },
    httpBodies: [],
    httpHeaders: {
      request: { deny: USER_IDENTIFYING_KEY_DENY_LIST },
      response: { deny: USER_IDENTIFYING_KEY_DENY_LIST },
    },
    urlQueryParams: { deny: USER_IDENTIFYING_KEY_DENY_LIST },
    userInfo: false, // data set through Sentry's user setter is sent regardless
  },
  dsn:
    projectPublicKey && host && projectId
      ? `https://${projectPublicKey}@${host}/${projectId}`
      : undefined,
  enabled: isInProduction && !isTesting,
  environment,
  release,
  tracesSampleRate: 1.0,
})
