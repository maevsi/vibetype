import { expect } from '@playwright/test'

import {
  TESTING_ACCOUNT_USERNAME,
  TESTING_EVENT_ROW_ID,
  TESTING_EVENT_SLUG,
} from '#src/shared/utils/testing'
import { authenticatedTest } from '#tests/e2e/fixtures/authenticatedTest'

const PAGE_PATH = `/event/edit/${TESTING_ACCOUNT_USERNAME}/${TESTING_EVENT_SLUG}`

authenticatedTest.describe('event edit', () => {
  authenticatedTest('saves a changed name', async ({ defaultPage }) => {
    const { page } = defaultPage

    await defaultPage.goto(PAGE_PATH)

    // a new name yields a new slug, whose debounced availability check makes the form drop any submit until it settles
    const slugCheck = page.waitForResponse((response) =>
      response.url().includes('EventByCreatedByAndSlug'),
    )
    await page.getByLabel('Name', { exact: true }).fill('Renamed Meetup')
    await slugCheck

    const [request] = await Promise.all([
      page.waitForRequest(
        (request) =>
          request.method() === 'POST' &&
          request.postDataJSON()?.operationName === 'updateEventByRowId',
      ),
      page.getByRole('button', { name: 'Save changes' }).click(),
    ])

    expect(request.postDataJSON().variables.input).toMatchObject({
      eventPatch: { name: 'Renamed Meetup' },
      rowId: TESTING_EVENT_ROW_ID,
    })
    await expect(page.getByText('Updated', { exact: true })).toBeVisible()
  })
})
