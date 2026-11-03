import {
  TESTING_ACCOUNT_USERNAME,
  TESTING_EVENT_SLUG,
} from '#src/shared/utils/testing'
import { appTest } from '#tests/e2e/fixtures/appTest'
import { testVisualRegression } from '#tests/e2e/utils/tests'

appTest.describe('with data', () => {
  // one viewport suffices to notice layout changes caused by data
  appTest.skip(({ isMobile }) => isMobile)
  testVisualRegression(
    `/event/view/${TESTING_ACCOUNT_USERNAME}/${TESTING_EVENT_SLUG}`,
  )
})
