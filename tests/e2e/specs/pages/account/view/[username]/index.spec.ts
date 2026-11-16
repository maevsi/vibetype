import { TESTING_ACCOUNT_USERNAME } from '#src/shared/utils/testing'
import { appTest } from '#tests/e2e/fixtures/appTest'
import { authenticatedTest } from '#tests/e2e/fixtures/authenticatedTest'
import { testOgImage, testVisualRegression } from '#tests/e2e/utils/tests'

const PAGE_PATH = `/account/view/${TESTING_ACCOUNT_USERNAME}`

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

authenticatedTest.describe('with data signed in', () => {
  // one viewport suffices to notice layout changes caused by data
  authenticatedTest.skip(({ isMobile }) => isMobile)
  testVisualRegression(PAGE_PATH, false, { test: authenticatedTest })
})
