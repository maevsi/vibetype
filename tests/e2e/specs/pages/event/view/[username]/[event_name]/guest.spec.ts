import {
  TESTING_ACCOUNT_USERNAME,
  TESTING_EVENT_SLUG,
} from '#src/shared/utils/testing'
import { authenticatedTest } from '#tests/e2e/fixtures/authenticatedTest'
import { testVisualRegression } from '#tests/e2e/utils/tests'

testVisualRegression(
  `/event/view/${TESTING_ACCOUNT_USERNAME}/${TESTING_EVENT_SLUG}/guest`,
  undefined,
  { test: authenticatedTest },
)
