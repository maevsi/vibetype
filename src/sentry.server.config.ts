import * as Sentry from '@sentry/nuxt'

import { RELEASE_NAME } from './node'
import {
  getSharedSentryConfig,
  NUXT_PUBLIC_SENTRY_HOST,
  NUXT_PUBLIC_SENTRY_PROJECT_ID,
  NUXT_PUBLIC_SENTRY_PROJECT_PUBLIC_KEY,
  NUXT_PUBLIC_VIO_ENVIRONMENT,
} from './node/static'

const sharedSentryConfig = getSharedSentryConfig({
  environment: NUXT_PUBLIC_VIO_ENVIRONMENT,
  host: NUXT_PUBLIC_SENTRY_HOST,
  isInProduction: NUXT_PUBLIC_VIO_ENVIRONMENT === 'production',
  isTesting: !!process.env.NUXT_PUBLIC_VIO_IS_TESTING,
  projectId: NUXT_PUBLIC_SENTRY_PROJECT_ID,
  projectPublicKey: NUXT_PUBLIC_SENTRY_PROJECT_PUBLIC_KEY,
  release: await RELEASE_NAME(),
})

if (sharedSentryConfig.dsn) {
  Sentry.init({
    ...sharedSentryConfig,
  })
} else {
  console.warn(
    'Sentry configuration is incomplete, skipping Sentry initialization.',
  )
}
