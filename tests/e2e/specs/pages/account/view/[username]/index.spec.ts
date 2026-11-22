import { expect } from '@playwright/test'

import { JWT_COOKIE_NAME } from '#src/node/static'
import { getFriendshipAccountIds } from '#src/shared/utils/friendship'
import {
  TESTING_ACCOUNT_ROW_ID,
  TESTING_ACCOUNT_USERNAME,
  TESTING_FRIENDSHIP_ACCOUNTS,
} from '#src/shared/utils/testing'
import { appTest } from '#tests/e2e/fixtures/appTest'
import { authenticatedTest } from '#tests/e2e/fixtures/authenticatedTest'
import {
  testOgImage,
  testVisualRegression,
  waitForGraphqlOperation,
} from '#tests/e2e/utils/tests'

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

authenticatedTest.describe('sign out', () => {
  authenticatedTest(
    'removes the session and returns to the start page',
    async ({ context, defaultPage }) => {
      const { page } = defaultPage

      await defaultPage.goto(PAGE_PATH)
      await page.getByRole('button', { name: 'More' }).click()
      await page.getByRole('menuitem', { name: 'Log Out' }).click()

      await page.waitForURL(/\/\?signOut/)
      await expect
        .poll(async () =>
          (await context.cookies()).some(
            (cookie) => cookie.name === JWT_COOKIE_NAME,
          ),
        )
        .toBe(false)
    },
  )
})

appTest.describe('friendship signed out', () => {
  appTest('offers no friendship', async ({ defaultPage }) => {
    await defaultPage.goto(PAGE_PATH)

    await expect(
      defaultPage.page.getByRole('button', { name: 'Add friend' }),
    ).toHaveCount(0)
    await expect(
      defaultPage.page.getByRole('link', { name: 'Friends' }),
    ).toHaveCount(0)
  })
})

// the testing api keeps no state, so only the requests and the refetch they cause can be checked
authenticatedTest.describe('friendship', () => {
  authenticatedTest(
    'links the friends without an action on the own profile',
    async ({ defaultPage }) => {
      const { page } = defaultPage

      await defaultPage.goto(PAGE_PATH)

      await expect(page.getByRole('link', { name: 'Friends' })).toHaveAttribute(
        'href',
        `${PAGE_PATH}/friend`,
      )
      await expect(page.getByText('One friend')).toBeVisible()
      await expect(
        page.getByRole('button', { name: 'Add friend' }),
      ).toHaveCount(0)
    },
  )

  for (const { account, button, operationName, state, variables } of [
    {
      account: TESTING_FRIENDSHIP_ACCOUNTS.none,
      button: 'Add friend',
      operationName: 'CreateFriendship',
      state: undefined,
      variables: (accountIds: object) => ({
        friendship: { ...accountIds, createdBy: TESTING_ACCOUNT_ROW_ID },
      }),
    },
    {
      account: TESTING_FRIENDSHIP_ACCOUNTS.requestSent,
      button: 'Withdraw request',
      operationName: 'DeleteFriendshipByAccountAIdAndAccountBId',
      state: 'Friend request sent',
      variables: (accountIds: object) => accountIds,
    },
    {
      account: TESTING_FRIENDSHIP_ACCOUNTS.requestReceived,
      button: 'Accept',
      operationName: 'UpdateFriendshipByAccountAIdAndAccountBId',
      state: `${TESTING_FRIENDSHIP_ACCOUNTS.requestReceived.username} wants to be friends with you`,
      variables: (accountIds: object) => ({
        ...accountIds,
        friendshipPatch: { status: 'accepted' },
      }),
    },
    {
      account: TESTING_FRIENDSHIP_ACCOUNTS.requestReceived,
      button: 'Decline',
      operationName: 'DeleteFriendshipByAccountAIdAndAccountBId',
      state: `${TESTING_FRIENDSHIP_ACCOUNTS.requestReceived.username} wants to be friends with you`,
      variables: (accountIds: object) => accountIds,
    },
  ]) {
    authenticatedTest(
      `offers "${button}" on the profile of ${account.username}`,
      async ({ defaultPage }) => {
        const { page } = defaultPage

        await defaultPage.goto(`/account/view/${account.username}`)

        if (state) await expect(page.getByText(state)).toBeVisible()

        const [request] = await Promise.all([
          waitForGraphqlOperation(page, operationName),
          waitForGraphqlOperation(page, 'Friendship'),
          waitForGraphqlOperation(page, 'FriendshipCount'),
          page.getByRole('button', { exact: true, name: button }).click(),
        ])

        expect(request.postDataJSON().variables.input).toEqual(
          variables(
            getFriendshipAccountIds(TESTING_ACCOUNT_ROW_ID, account.rowId),
          ),
        )
      },
    )
  }

  authenticatedTest(
    'removes a friend after a confirmation',
    async ({ defaultPage }) => {
      const { page } = defaultPage
      const account = TESTING_FRIENDSHIP_ACCOUNTS.accepted

      await defaultPage.goto(`/account/view/${account.username}`)

      await expect(
        page.getByText(`You are friends with ${account.username}`),
      ).toBeVisible()
      await page.getByRole('button', { name: 'Remove friend' }).click()

      const dialog = page.getByRole('dialog')
      const [request] = await Promise.all([
        waitForGraphqlOperation(
          page,
          'DeleteFriendshipByAccountAIdAndAccountBId',
        ),
        waitForGraphqlOperation(page, 'Friendship'),
        dialog.getByRole('button', { name: 'Yes, remove' }).click(),
      ])

      expect(request.postDataJSON().variables.input).toEqual(
        getFriendshipAccountIds(TESTING_ACCOUNT_ROW_ID, account.rowId),
      )
      await expect(dialog).toBeHidden()
    },
  )
})
