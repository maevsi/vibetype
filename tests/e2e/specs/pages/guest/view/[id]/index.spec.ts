import { expect } from '@playwright/test'

import { TESTING_GUEST_ROW_ID } from '#src/shared/utils/testing'
import { appTest } from '#tests/e2e/fixtures/appTest'

const PAGE_PATH = `/guest/view/${TESTING_GUEST_ROW_ID}`

// the testing api keeps no state, so a refetch after saving shows the original feedback again
// and only the request and the confirmation can be checked
appTest.describe('invitation response', () => {
  for (const { button, feedback } of [
    { button: 'Accept invitation', feedback: 'accepted' },
    { button: 'Decline invitation', feedback: 'canceled' },
  ]) {
    appTest(button, async ({ defaultPage }) => {
      const { page } = defaultPage

      await defaultPage.goto(PAGE_PATH)

      const [request] = await Promise.all([
        page.waitForRequest(
          (request) =>
            request.method() === 'POST' &&
            request.postDataJSON()?.operationName === 'UpdateGuestByRowId',
        ),
        page.getByRole('button', { name: button }).click(),
      ])

      expect(request.postDataJSON().variables.input).toMatchObject({
        guestPatch: { feedback },
        rowId: TESTING_GUEST_ROW_ID,
      })
      await expect(
        page.getByText('Your input was saved succesfully.', { exact: true }),
      ).toBeVisible()
    })
  }
})
