import { expect } from '@playwright/test'

import {
  TESTING_ACCOUNT_USERNAME,
  TESTING_EVENT_SLUG,
} from '#src/shared/utils/testing'
import { appTest } from '#tests/e2e/fixtures/appTest'
import { authenticatedTest } from '#tests/e2e/fixtures/authenticatedTest'

const EVENT_VIEW_PATH = `/event/view/${TESTING_ACCOUNT_USERNAME}/${TESTING_EVENT_SLUG}`
const PAGE_CONTENT_WIDTH_MAXIMUM = 672 // tailwind's `max-w-2xl`

// the pages the menu leads to depend on whether an account is signed in
const ROUTES_SIGNED_OUT = [
  { isMenuRoute: true, path: '/' },
  { isMenuRoute: true, path: '/event' },
  { isMenuRoute: true, path: '/session/edit' },
  { isMenuRoute: false, path: '/account/create' },
  { isMenuRoute: false, path: '/docs/legal/imprint' },
  { isMenuRoute: false, path: EVENT_VIEW_PATH },
  { isMenuRoute: false, path: '/session/create' },
  { isMenuRoute: false, path: '/session/edit/language' },
  { isMenuRoute: false, path: '/support/contact' },
]
const ROUTES_SIGNED_IN = [
  { isMenuRoute: true, path: '/dashboard' },
  { isMenuRoute: true, path: '/event' },
  { isMenuRoute: true, path: `/account/view/${TESTING_ACCOUNT_USERNAME}` },
  { isMenuRoute: true, path: `/event/view/${TESTING_ACCOUNT_USERNAME}` },
  { isMenuRoute: false, path: '/contact' },
  { isMenuRoute: false, path: '/event/create' },
  { isMenuRoute: false, path: EVENT_VIEW_PATH },
  { isMenuRoute: false, path: `${EVENT_VIEW_PATH}/guest` },
  { isMenuRoute: false, path: '/session/edit' },
  { isMenuRoute: false, path: '/upload' },
]

for (const [name, test, routes] of [
  ['signed out', appTest, ROUTES_SIGNED_OUT],
  ['signed in', authenticatedTest, ROUTES_SIGNED_IN],
] as const) {
  test.describe(`chrome ${name}`, () => {
    for (const { isMenuRoute, path } of routes) {
      test(path, async ({ defaultPage, isMobile }) => {
        const { page } = defaultPage

        await defaultPage.goto(path)

        await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1)
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
