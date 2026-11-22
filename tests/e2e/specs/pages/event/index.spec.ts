import { getFeatureTest } from '#tests/e2e/fixtures/featureTest'
import { testVisualRegression } from '#tests/e2e/utils/tests'

const PAGE_PATH = '/event'

testVisualRegression(PAGE_PATH)

const featureTest = getFeatureTest(['category-browse'])

featureTest.describe('with categories', () => {
  // one viewport suffices to notice layout changes caused by the flagged content
  featureTest.skip(({ isMobile }) => !isMobile)
  testVisualRegression(PAGE_PATH, false, { test: featureTest })
})
