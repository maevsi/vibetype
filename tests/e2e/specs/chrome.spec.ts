import { expect } from '@playwright/test'

import {
  TESTING_ACCOUNT_USERNAME,
  TESTING_EVENT_SLUG,
} from '#src/shared/utils/testing'
import { appTest } from '#tests/e2e/fixtures/appTest'
import { authenticatedTest } from '#tests/e2e/fixtures/authenticatedTest'

const EVENT_VIEW_PATH = `/event/view/${TESTING_ACCOUNT_USERNAME}/${TESTING_EVENT_SLUG}`
const PAGE_CONTENT_WIDTH_MAXIMUM = 672 // tailwind's `max-w-2xl`

// `isTitleInContent` marks the pages whose title is content and not a fixed name, so it is not shown in the top bar: a document's own heading, an event's name, an account's name and the welcome page's logo
// the pages the menu leads to depend on whether an account is signed in
const ROUTES_SIGNED_OUT = [
  { isMenuRoute: true, isTitleInContent: true, path: '/' },
  { isMenuRoute: true, path: '/event' },
  { isMenuRoute: true, path: '/session/edit' },
  { isMenuRoute: false, path: '/account/create' },
  { isMenuRoute: false, path: '/docs/legal/attributions' },
  { isMenuRoute: false, isTitleInContent: true, path: '/docs/legal/imprint' },
  { isMenuRoute: false, isTitleInContent: true, path: EVENT_VIEW_PATH },
  { isMenuRoute: false, path: '/session/create' },
  { isMenuRoute: false, path: '/session/edit/language' },
  { isMenuRoute: false, path: '/support/contact' },
]
const ROUTES_SIGNED_IN = [
  { isMenuRoute: true, path: '/dashboard' },
  { isMenuRoute: true, path: '/event' },
  {
    isMenuRoute: true,
    isTitleInContent: true,
    path: `/account/view/${TESTING_ACCOUNT_USERNAME}`,
  },
  { isMenuRoute: true, path: `/event/view/${TESTING_ACCOUNT_USERNAME}` },
  { isMenuRoute: false, path: '/contact' },
  { isMenuRoute: false, path: '/event/create' },
  { isMenuRoute: false, isTitleInContent: true, path: EVENT_VIEW_PATH },
  { isMenuRoute: false, path: `${EVENT_VIEW_PATH}/guest` },
  { isMenuRoute: false, path: '/session/edit' },
  { isMenuRoute: false, path: '/upload' },
]

for (const [name, test, routes] of [
  ['signed out', appTest, ROUTES_SIGNED_OUT],
  ['signed in', authenticatedTest, ROUTES_SIGNED_IN],
] as const) {
  test.describe(`chrome ${name}`, () => {
    for (const { isMenuRoute, isTitleInContent, path } of routes as {
      isMenuRoute: boolean
      isTitleInContent?: boolean
      path: string
    }[]) {
      test(path, async ({ defaultPage, isMobile }) => {
        const { page } = defaultPage

        await defaultPage.goto(path)

        await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1)
        await expect(
          page.locator('[data-slot="top-bar"]').getByRole('heading', {
            level: 1,
          }),
        ).toHaveCount(isTitleInContent ? 0 : 1)
        await expect(
          page.getByRole('button', { exact: true, name: 'back' }),
        ).toHaveCount(isMenuRoute ? 0 : 1)

        if (isMobile) {
          const navigationBottom = page.getByRole('navigation', {
            name: 'Bottom',
          })

          if (isMenuRoute) {
            await expect(navigationBottom).toBeVisible()
          } else {
            await expect(navigationBottom).toHaveCount(0)
          }
        } else {
          await expect(
            page.getByRole('navigation', { name: 'Sidebar' }),
          ).toBeVisible()
        }

        const pageContent = page
          .locator('[data-slot="page-content"]')
          .filter({ visible: true })

        await expect(pageContent).toHaveCount(1)
        expect((await pageContent.boundingBox())?.width).toBeLessThanOrEqual(
          PAGE_CONTENT_WIDTH_MAXIMUM,
        )
      })
    }
  })
}

authenticatedTest.describe('chrome of a multi-step page', () => {
  for (const path of ['/early-bird/create', '/preference/create']) {
    authenticatedTest(path, async ({ defaultPage }) => {
      const { page } = defaultPage
      const back = page.getByRole('button', { exact: true, name: 'back' })
      const close = page.getByRole('button', { exact: true, name: 'Close' })

      await defaultPage.goto(path)

      // the first step can only be left, a later one leads back to its predecessor
      await expect(back).toHaveCount(0)
      await expect(close).toHaveCount(1)
      await expect(
        page.getByRole('navigation', { name: 'Bottom' }),
      ).toHaveCount(0)

      await page.locator('main').getByRole('button').last().click()
      await expect(back).toHaveCount(1)
    })
  }
})

authenticatedTest(
  'scrolls the document, not a container inside of it',
  async ({ defaultPage, isMobile }) => {
    authenticatedTest.skip(!isMobile, 'the page fits a large screen')

    await defaultPage.goto('/event/create')

    expect(
      await defaultPage.page.evaluate(
        'document.documentElement.scrollHeight > window.innerHeight',
      ),
    ).toBe(true)
  },
)

authenticatedTest(
  'keeps the menu in view while scrolling',
  async ({ defaultPage, isMobile }) => {
    authenticatedTest.skip(!isMobile, 'the bottom menu is for small screens')

    await defaultPage.goto('/dashboard')
    await defaultPage.page.evaluate(
      'window.scrollTo(0, document.documentElement.scrollHeight)',
    )

    await expect(
      defaultPage.page.getByRole('navigation', { name: 'Bottom' }),
    ).toBeInViewport()
  },
)
