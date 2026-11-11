import { expect } from '@playwright/test'

import {
  TESTING_ACCOUNT_ROW_ID,
  TESTING_ACCOUNT_USERNAME,
  TESTING_FRIENDSHIP_ACCOUNTS,
} from '#src/shared/utils/testing'
import { getFriendshipAccountIds } from '#src/shared/utils/friendship'
import { appTest } from '#tests/e2e/fixtures/appTest'
import { authenticatedTest } from '#tests/e2e/fixtures/authenticatedTest'
import { TIMEOUT } from '#tests/e2e/utils/constants'
import { waitForGraphqlOperation } from '#tests/e2e/utils/tests'

const PAGE_PATH = `/account/view/${TESTING_ACCOUNT_USERNAME}/friend`
const { accepted, requestReceived, requestSent } = TESTING_FRIENDSHIP_ACCOUNTS

appTest.describe('signed out', () => {
  appTest('asks to sign in', async ({ defaultPage }) => {
    await defaultPage.goto(PAGE_PATH)

    await expect(
      defaultPage.page.getByRole('link', { name: 'Find out on VIBETYPE' }),
    ).toBeVisible()
    await expect(
      defaultPage.page.getByRole('region', { name: 'Friends' }),
    ).toHaveCount(0)
  })
})

authenticatedTest.describe('visual regression', () => {
  authenticatedTest('looks as before', async ({ defaultPage }) => {
    await defaultPage.goto(PAGE_PATH)

    await expect(defaultPage.page).toHaveScreenshot({ timeout: TIMEOUT })
  })
})

// the testing api keeps no state, so only the requests and the refetch they cause can be checked
authenticatedTest.describe('own friends', () => {
  authenticatedTest(
    'lists friends and received requests only',
    async ({ defaultPage }) => {
      const { page } = defaultPage

      await defaultPage.goto(PAGE_PATH)

      const friends = page.getByRole('region', { name: 'Friends' })
      const requests = page.getByRole('region', { name: 'Friend requests' })

      await expect(friends.getByRole('listitem')).toHaveCount(1)
      await expect(
        friends.getByRole('link', {
          name: `View ${accepted.username}'s profile`,
        }),
      ).toHaveAttribute('href', `/account/view/${accepted.username}`)
      await expect(requests.getByRole('listitem')).toHaveCount(1)
      await expect(requests).toContainText(requestReceived.username)
      await expect(page.getByText(requestSent.username)).toHaveCount(0)
      await expect(
        page.getByRole('link', { name: 'Find friends' }),
      ).toHaveAttribute('href', '/account')
    },
  )

  for (const { button, operationName, variables } of [
    {
      button: `Accept ${requestReceived.username}'s request`,
      operationName: 'UpdateFriendshipByAccountAIdAndAccountBId',
      variables: { friendshipPatch: { status: 'accepted' } },
    },
    {
      button: `Decline ${requestReceived.username}'s request`,
      operationName: 'DeleteFriendshipByAccountAIdAndAccountBId',
      variables: {},
    },
  ]) {
    authenticatedTest(
      `answers a request with "${button}"`,
      async ({ defaultPage }) => {
        const { page } = defaultPage

        await defaultPage.goto(PAGE_PATH)

        const [request] = await Promise.all([
          waitForGraphqlOperation(page, operationName),
          waitForGraphqlOperation(page, 'FriendshipRequests'),
          waitForGraphqlOperation(page, 'AccountFriendships'),
          page.getByRole('button', { name: button }).click(),
        ])

        expect(request.postDataJSON().variables.input).toEqual({
          ...getFriendshipAccountIds(
            TESTING_ACCOUNT_ROW_ID,
            requestReceived.rowId,
          ),
          ...variables,
        })
      },
    )
  }

  authenticatedTest(
    'removes a friend after a confirmation',
    async ({ defaultPage }) => {
      const { page } = defaultPage

      await defaultPage.goto(PAGE_PATH)
      await page
        .getByRole('button', {
          name: `Remove ${accepted.username} from your friends`,
        })
        .click()

      const dialog = page.getByRole('dialog')

      await expect(dialog).toContainText(
        `Do you really want to remove ${accepted.username} from your friends?`,
      )

      const [request] = await Promise.all([
        waitForGraphqlOperation(
          page,
          'DeleteFriendshipByAccountAIdAndAccountBId',
        ),
        waitForGraphqlOperation(page, 'AccountFriendships'),
        dialog.getByRole('button', { name: 'Yes, remove' }).click(),
      ])

      expect(request.postDataJSON().variables.input).toEqual(
        getFriendshipAccountIds(TESTING_ACCOUNT_ROW_ID, accepted.rowId),
      )
      await expect(dialog).toBeHidden()
    },
  )
})

authenticatedTest.describe("another account's friends", () => {
  authenticatedTest(
    'lists the friends they accepted without actions',
    async ({ defaultPage }) => {
      const { page } = defaultPage

      await defaultPage.goto(`/account/view/${accepted.username}/friend`)

      await expect(
        page.getByRole('region', { name: 'Friends' }).getByRole('link', {
          name: `View ${TESTING_ACCOUNT_USERNAME}'s profile`,
        }),
      ).toBeVisible()
      await expect(
        page.getByText(`${accepted.username} has no friends yet.`),
      ).toHaveCount(0)
      await expect(
        page.getByRole('link', { name: 'Find friends' }),
      ).toHaveCount(0)
      await expect(
        page.getByRole('region', { name: 'Friend requests' }),
      ).toHaveCount(0)
    },
  )

  authenticatedTest(
    'shows an empty list for an account without friendships',
    async ({ defaultPage }) => {
      const { page } = defaultPage

      await defaultPage.goto(`/account/view/${requestSent.username}/friend`)

      await expect(
        page.getByText(`${requestSent.username} has no friends yet.`),
      ).toBeVisible()
    },
  )
})
