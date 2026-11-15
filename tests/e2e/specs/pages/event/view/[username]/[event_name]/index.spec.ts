import {
  TESTING_ACCOUNT_USERNAME,
  TESTING_EVENT_SLUG,
} from '#src/shared/utils/testing'
import { appTest } from '#tests/e2e/fixtures/appTest'
import { testOgImage, testVisualRegression } from '#tests/e2e/utils/tests'

const PAGE_PATH = `/event/view/${TESTING_ACCOUNT_USERNAME}/${TESTING_EVENT_SLUG}`

testOgImage({
  dynamic: {
    de: `/de${PAGE_PATH}`,
    en: PAGE_PATH,
  },
})

appTest.describe('with data', () => {
  // one viewport suffices to notice layout changes caused by data
  appTest.skip(({ isMobile }) => isMobile)
  testVisualRegression(PAGE_PATH)
})
