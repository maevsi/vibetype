import { authenticatedTest } from '#tests/e2e/fixtures/authenticatedTest'
import { getFeatureTest } from '#tests/e2e/fixtures/featureTest'
import { testVisualRegression } from '#tests/e2e/utils/tests'

const PAGE_PATH = '/dashboard'

testVisualRegression(PAGE_PATH)

authenticatedTest.describe('with data', () => {
  testVisualRegression(PAGE_PATH, false, {
    fullPage: true,
    test: authenticatedTest,
  })
})

authenticatedTest.describe('with data in dark mode', () => {
  // the color scheme only changes styles, so one viewport suffices
  authenticatedTest.skip(({ isMobile }) => isMobile)
  authenticatedTest.use({ colorScheme: 'dark' })
  testVisualRegression(PAGE_PATH, false, {
    fullPage: true,
    test: authenticatedTest,
  })
})

const featureTest = getFeatureTest(['poster-hunt'], authenticatedTest)

featureTest.describe('with data and poster hunt', () => {
  // one viewport suffices to notice layout changes caused by the flagged content
  featureTest.skip(({ isMobile }) => !isMobile)
  testVisualRegression(PAGE_PATH, false, {
    fullPage: true,
    test: featureTest,
  })
})
