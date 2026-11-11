import { expect } from '@playwright/test'

import {
  TESTING_ACCOUNT_USERNAME,
  TESTING_EVENT_SLUG,
  TESTING_GUEST_OWN_ROW_ID,
  TESTING_GUEST_ROW_ID,
} from '#src/shared/utils/testing'
import { appTest } from '#tests/e2e/fixtures/appTest'
import { authenticatedTest } from '#tests/e2e/fixtures/authenticatedTest'
import { testOgImage, waitForGraphqlOperation } from '#tests/e2e/utils/tests'

const PAGE_PATH = `/guest/view/${TESTING_GUEST_ROW_ID}`

testOgImage({
  dynamic: {
    de: `/de${PAGE_PATH}`,
    en: PAGE_PATH,
  },
})

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

appTest.describe('ghost mode', () => {
  appTest(
    'is not offered to a guest without an account',
    async ({ defaultPage }) => {
      await defaultPage.goto(PAGE_PATH)

      await expect(
        defaultPage.page.getByRole('button', { name: 'Accept invitation' }),
      ).toBeVisible()
      await expect(
        defaultPage.page.getByRole('switch', { name: 'Ghost mode' }),
      ).toHaveCount(0)
    },
  )
})

// the testing api keeps no state, so only the request and the confirmation can be checked
authenticatedTest.describe('ghost mode of the own guest', () => {
  authenticatedTest(
    'is off by default and can be switched on',
    async ({ defaultPage }) => {
      const { page } = defaultPage

      await defaultPage.goto(`/guest/view/${TESTING_GUEST_OWN_ROW_ID}`)

      const ghostMode = page.getByRole('switch', { name: 'Ghost mode' })

      await expect(ghostMode).not.toBeChecked()
      await expect(
        page.getByText(
          "Hides your attendance from the event's attendee list and does not notify your close friends when you accept.",
        ),
      ).toBeVisible()

      const [request] = await Promise.all([
        waitForGraphqlOperation(page, 'UpdateGuestByRowId'),
        ghostMode.check(),
      ])

      expect(request.postDataJSON().variables.input).toEqual({
        guestPatch: { isGhost: true },
        rowId: TESTING_GUEST_OWN_ROW_ID,
      })
      await expect(
        page.getByText('Your input was saved succesfully.', { exact: true }),
      ).toBeVisible()
    },
  )

  authenticatedTest(
    'is switched back when saving fails',
    async ({ defaultPage }) => {
      const { page } = defaultPage

      await defaultPage.goto(`/guest/view/${TESTING_GUEST_OWN_ROW_ID}`)
      await page.route('**/graphql', (route) =>
        route.request().postDataJSON()?.operationName === 'UpdateGuestByRowId'
          ? route.fulfill({
              json: { data: null, errors: [{ message: 'e2e failure' }] },
            })
          : route.fallback(),
      )

      const ghostMode = page.getByRole('switch', { name: 'Ghost mode' })

      await Promise.all([
        waitForGraphqlOperation(page, 'UpdateGuestByRowId'),
        ghostMode.check({ noWaitAfter: true }),
      ])

      await expect(ghostMode).not.toBeChecked()
    },
  )

  authenticatedTest(
    'refreshes the attendees of the event page',
    async ({ defaultPage }) => {
      const { page } = defaultPage
      // client-side navigation keeps the cache, unlike `goto`
      const navigate = (path: string) =>
        page.locator('#__nuxt').evaluate(
          (element, path) =>
            (
              element as unknown as {
                __vue_app__: {
                  config: {
                    globalProperties: {
                      $router: { push: (path: string) => Promise<unknown> }
                    }
                  }
                }
              }
            ).__vue_app__.config.globalProperties.$router.push(path),
          path,
        )

      await defaultPage.goto(
        `/event/view/${TESTING_ACCOUNT_USERNAME}/${TESTING_EVENT_SLUG}`,
      )
      await expect(
        page.getByRole('region', { name: 'Attendees' }),
      ).toBeVisible()
      await navigate(`/guest/view/${TESTING_GUEST_OWN_ROW_ID}`)

      const ghostMode = page.getByRole('switch', { name: 'Ghost mode' })

      await ghostMode.check()
      await expect(ghostMode).toBeChecked()
      // the cache is only invalidated once the update is answered
      await expect(
        page.getByText('Your input was saved succesfully.', { exact: true }),
      ).toBeVisible()

      const [request] = await Promise.all([
        waitForGraphqlOperation(page, 'EventAttendees'),
        navigate(
          `/event/view/${TESTING_ACCOUNT_USERNAME}/${TESTING_EVENT_SLUG}`,
        ),
      ])

      expect(request.url()).toContain('EventAttendees')
    },
  )
})
