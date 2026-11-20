import { expect } from '@playwright/test'

import {
  TESTING_ACCOUNT_ROW_ID,
  TESTING_ACCOUNT_USERNAME,
} from '#src/shared/utils/testing'
import { authenticatedTest } from '#tests/e2e/fixtures/authenticatedTest'
import { testVisualRegression } from '#tests/e2e/utils/tests'

const PAGE_PATH = `/account/edit/${TESTING_ACCOUNT_USERNAME}`

// the testing api keeps no state, so a refetch after saving shows the original content again
// and only the request can be checked
authenticatedTest(
  'saves the description and the imprint',
  async ({ defaultPage }) => {
    const { page } = defaultPage

    await defaultPage.goto(PAGE_PATH)

    const saveButton = page.getByRole('button', { name: 'Save profile' })
    await expect(saveButton).toBeDisabled()

    await page
      .getByRole('textbox', { name: 'About you' })
      .fill('Renamed description')
    await page
      .getByRole('textbox', { name: 'Imprint' })
      .fill('https://example.com')

    const [request] = await Promise.all([
      page.waitForRequest(
        (request) =>
          request.method() === 'POST' &&
          request.postDataJSON()?.operationName === 'UpdateAccountByRowId',
      ),
      saveButton.click(),
    ])

    expect(request.postDataJSON().variables.input).toMatchObject({
      accountPatch: {
        description: 'Renamed description',
        imprintUrl: 'https://example.com',
      },
      rowId: TESTING_ACCOUNT_ROW_ID,
    })
  },
)

authenticatedTest.describe('with data', () => {
  // the page only differs between viewports by the sidebar
  authenticatedTest.skip(({ isMobile }) => !isMobile)
  testVisualRegression(PAGE_PATH, false, { test: authenticatedTest })
})
