import {
  FEATURE_FLAGS_COOKIE_ID,
  FEATURE_FLAGS_COOKIE_NAME,
} from '#src/node/static'
import { SITE_URL } from '#tests/e2e/utils/constants'

import { appTest } from './appTest'

// the cookie in which the cookie dialog stores the ids of the accepted cookies
const COOKIE_CONTROL_ENABLED_IDS_COOKIE_NAME = 'ncc_e'

/** Extends a test so that the given feature flags are enabled, as flagged content is hidden in production builds otherwise. */
export const getFeatureTest = (
  features: string[],
  test: typeof appTest = appTest,
) =>
  test.extend<{ featureFlags: void }>({
    featureFlags: [
      async ({ context }, use) => {
        await context.addCookies([
          {
            name: COOKIE_CONTROL_ENABLED_IDS_COOKIE_NAME,
            url: SITE_URL,
            value: FEATURE_FLAGS_COOKIE_ID,
          },
          {
            name: FEATURE_FLAGS_COOKIE_NAME,
            url: SITE_URL,
            value: encodeURIComponent(features.join(',')),
          },
        ])

        await use()
      },
      { auto: true },
    ],
  })
