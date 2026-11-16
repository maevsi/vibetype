import { expect } from '@playwright/test'

import {
  TESTING_ACCOUNT_USERNAME,
  TESTING_ATTENDEES_CURSOR,
  TESTING_EVENT_SLUG,
  TESTING_FRIENDSHIP_ACCOUNTS,
} from '#src/shared/utils/testing'
import { appTest } from '#tests/e2e/fixtures/appTest'
import { authenticatedTest } from '#tests/e2e/fixtures/authenticatedTest'
import { testOgImage, testVisualRegression } from '#tests/e2e/utils/tests'

const PAGE_PATH = `/event/view/${TESTING_ACCOUNT_USERNAME}/${TESTING_EVENT_SLUG}`

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

appTest.describe('signed out', () => {
  appTest('shows no attendees and asks for none', async ({ defaultPage }) => {
    const { page } = defaultPage
    const queryRequestUrls: string[] = []

    page.on('request', (request) => {
      if (
        new URL(request.url()).searchParams
          .get('query')
          ?.startsWith('query EventAttendees')
      )
        queryRequestUrls.push(request.url())
    })
    await defaultPage.goto(PAGE_PATH)

    await expect(
      page.getByRole('heading', { name: 'Community Meetup' }),
    ).toBeVisible()
    await expect(page.getByRole('region', { name: 'Attendees' })).toHaveCount(0)
    expect(queryRequestUrls).toEqual([])
  })
})

authenticatedTest.describe('attendees', () => {
  authenticatedTest(
    'lists the attendees and loads more',
    async ({ defaultPage }) => {
      const { page } = defaultPage

      await defaultPage.goto(PAGE_PATH)

      const attendees = page.getByRole('region', { name: 'Attendees' })

      await expect(attendees).toContainText('Attendees (2)')
      await expect(attendees.getByRole('listitem')).toHaveCount(1)
      await expect(
        attendees.getByRole('link', {
          name: `View ${TESTING_FRIENDSHIP_ACCOUNTS.accepted.username}'s profile`,
        }),
      ).toHaveAttribute(
        'href',
        `/account/view/${TESTING_FRIENDSHIP_ACCOUNTS.accepted.username}`,
      )

      // queries are sent by GET, and the first page may be fetched again meanwhile
      await Promise.all([
        page.waitForRequest((request) => {
          const { searchParams } = new URL(request.url())

          return (
            !!searchParams.get('query')?.startsWith('query EventAttendees') &&
            JSON.parse(searchParams.get('variables') ?? '{}').after ===
              TESTING_ATTENDEES_CURSOR
          )
        }),
        attendees.getByRole('button', { name: 'Show more' }).click(),
      ])

      await expect(attendees.getByRole('listitem')).toHaveCount(2)
      await expect(attendees).toContainText(
        TESTING_FRIENDSHIP_ACCOUNTS.requestReceived.username,
      )
      await expect(
        attendees.getByRole('button', { name: 'Show more' }),
      ).toHaveCount(0)
    },
  )
})
