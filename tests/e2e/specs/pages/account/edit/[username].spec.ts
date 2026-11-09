import { expect } from '@playwright/test'

import {
  TESTING_ACCOUNT_ROW_ID,
  TESTING_ACCOUNT_USERNAME,
} from '#src/shared/utils/testing'
import { authenticatedTest } from '#tests/e2e/fixtures/authenticatedTest'

const PAGE_PATH = `/account/edit/${TESTING_ACCOUNT_USERNAME}`

// the testing api keeps no state, so a refetch after saving shows the original content again
// and only the request and the closed editor can be checked
authenticatedTest.describe('account edit', () => {
  for (const { field, section, value } of [
    { field: 'description', section: 'About', value: 'Renamed description' },
    { field: 'imprintUrl', section: 'Imprint', value: 'https://example.com' },
  ]) {
    authenticatedTest(
      `saves the ${section.toLowerCase()}`,
      async ({ defaultPage }) => {
        const { page } = defaultPage
        const card = page
          .locator('div')
          .filter({ has: page.getByText(section, { exact: true }) })
          .filter({ has: page.locator(`textarea[aria-label="${section}"]`) })
          .last()

        await defaultPage.goto(PAGE_PATH)
        await card.getByRole('button', { exact: true, name: 'Edit' }).click()
        await card.getByRole('textbox', { name: section }).fill(value)

        const [request] = await Promise.all([
          page.waitForRequest(
            (request) =>
              request.method() === 'POST' &&
              request.postDataJSON()?.operationName === 'UpdateAccountByRowId',
          ),
          card.getByRole('button', { name: 'Save Changes' }).click(),
        ])

        expect(request.postDataJSON().variables.input).toMatchObject({
          accountPatch: { [field]: value },
          rowId: TESTING_ACCOUNT_ROW_ID,
        })
        await expect(card.getByRole('textbox', { name: section })).toBeHidden()
      },
    )
  }
})
