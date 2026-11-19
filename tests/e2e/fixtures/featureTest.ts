import { FEATURE_FLAGS_COOKIE_NAME } from '#src/node/static'
import { SITE_URL } from '#tests/e2e/utils/constants'

import { appTest } from './appTest'

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
