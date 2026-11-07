import { globSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

import AxeBuilder from '@axe-core/playwright'
import { expect, type Page } from '@playwright/test'
import { HtmlValidate } from 'html-validate'

import { HTML_VALIDATE_CONFIG } from '#src/config/htmlValidate'
import {
  TESTING_ACCOUNT_USERNAME,
  TESTING_ATTENDANCE_ROW_ID,
  TESTING_EVENT_SLUG,
  TESTING_GUEST_ROW_ID,
} from '#src/shared/utils/testing'
import { appTest } from '#tests/e2e/fixtures/appTest'
import { authenticatedTest } from '#tests/e2e/fixtures/authenticatedTest'

const ACCOUNT_EDIT_PATH = `/account/edit/${TESTING_ACCOUNT_USERNAME}`
const ACCOUNT_VIEW_PATH = `/account/view/${TESTING_ACCOUNT_USERNAME}`
const EVENT_EDIT_PATH = `/event/edit/${TESTING_ACCOUNT_USERNAME}/${TESTING_EVENT_SLUG}`
const EVENT_VIEW_PATH = `/event/view/${TESTING_ACCOUNT_USERNAME}/${TESTING_EVENT_SLUG}`

// the data behind these paths is served by `src/server/utils/testingGraphql.ts`
const PAGE_PATHS_DYNAMIC: Record<string, string> = {
  '/account/edit/[username]': ACCOUNT_EDIT_PATH,
  '/account/view/[username]': ACCOUNT_VIEW_PATH,
  '/account/view/[username]/block': `${ACCOUNT_VIEW_PATH}/block`,
  '/attendance/view/[id]': `/attendance/view/${TESTING_ATTENDANCE_ROW_ID}`,
  '/event/edit/[username]/[event_name]': EVENT_EDIT_PATH,
  '/event/view/[username]': `/event/view/${TESTING_ACCOUNT_USERNAME}`,
  '/event/view/[username]/[event_name]': EVENT_VIEW_PATH,
  '/event/view/[username]/[event_name]/attendance': `${EVENT_VIEW_PATH}/attendance`,
  '/event/view/[username]/[event_name]/guest': `${EVENT_VIEW_PATH}/guest`,
  '/guest/view/[id]': `/guest/view/${TESTING_GUEST_ROW_ID}`,
}

// every page, so that new pages are covered without a spec of their own
const PAGE_PATHS = globSync('**/*.vue', {
  cwd: fileURLToPath(new URL('../../../src/app/pages', import.meta.url)),
})
  .map(
    (file) => `/${file.replace(/(^|\/)index\.vue$/, '').replace(/\.vue$/, '')}`,
  )
  .map((route) => {
    if (!route.includes('[')) return route

    const path = PAGE_PATHS_DYNAMIC[route]

    if (!path) {
      throw new Error(
        `The dynamic page \`${route}\` needs a path in \`PAGE_PATHS_DYNAMIC\`.`,
      )
    }

    return path
  })

const PAGE_STATUSES: Record<string, number> = {
  '/account/password/reset': 400, // requires a reset code
  '/account/verify': 400, // requires a verification code
  '/event/ingest/url': process.env.VIO_SERVER === 'development' ? 200 : 404, // development only
  '/🫖': 418,
}

// pages that only the testing account itself may see
const PAGE_STATUSES_SIGNED_OUT: Record<string, number> = {
  [`${ACCOUNT_VIEW_PATH}/block`]: 403,
  [`${EVENT_VIEW_PATH}/attendance`]: 403,
  [`${EVENT_VIEW_PATH}/guest`]: 403,
  [ACCOUNT_EDIT_PATH]: 403,
  [EVENT_EDIT_PATH]: 403,
}

// pages that redirect only once their client-side data settles, which can be after they report being loaded
const PAGE_REDIRECTS_CLIENT_SIGNED_IN: Record<string, string> = {
  '/': '**/dashboard',
}

// the testing GraphQL endpoint knows no other account or event
const PAGE_PATHS_MISSING = [
  '/account/view/e2e-missing-account',
  '/event/view/e2e-missing-account',
  `/event/view/e2e-missing-account/${TESTING_EVENT_SLUG}`,
  `/event/view/${TESTING_ACCOUNT_USERNAME}/e2e-missing-event`,
]

// uses the browser context's cookies, so that signed in requests carry the session
// redirect targets are checked on their own, external ones (e.g. app stores) not at all
const requestPage = async (page: Page, path: string) => {
  const response = await page.request.get(path, { maxRedirects: 0 })

  return {
    isRedirect: response.status() >= 300 && response.status() < 400,
    response,
  }
}

const htmlValidate = new HtmlValidate(HTML_VALIDATE_CONFIG)

appTest.describe('missing data', () => {
  for (const path of PAGE_PATHS_MISSING) {
    appTest(path, async ({ defaultPage }) => {
      const { response } = await requestPage(defaultPage.page, path)

      expect(response.status()).toBe(404)
    })
  }
})

for (const [name, test] of [
  ['signed out', appTest],
  ['signed in', authenticatedTest],
] as const) {
  const pageStatuses =
    name === 'signed out'
      ? { ...PAGE_STATUSES, ...PAGE_STATUSES_SIGNED_OUT }
      : PAGE_STATUSES

  test.describe(name, () => {
    test.describe('html validation', () => {
      for (const path of PAGE_PATHS) {
        test(path, async ({ defaultPage }) => {
          const { isRedirect, response } = await requestPage(
            defaultPage.page,
            path,
          )

          if (isRedirect) return

          expect(response.status()).toBe(pageStatuses[path] ?? 200)

          const report = await htmlValidate.validateString(
            await response.text(),
          )

          expect(
            report.results
              .flatMap((result) => result.messages)
              .map(
                (message) =>
                  `${message.ruleId}: ${message.message}\n(${message.selector})`,
              )
              .join('\n'),
          ).toEqual('')
        })
      }
    })

    test.describe('page title', () => {
      for (const path of PAGE_PATHS) {
        test(path, async ({ defaultPage }) => {
          const { isRedirect, response } = await requestPage(
            defaultPage.page,
            path,
          )

          if (isRedirect) return

          const title = (await response.text()).match(
            /<title>([^<]*)<\/title>/,
          )?.[1]

          // a page part that is missing, empty or just the site name again means the page sets no title of its own
          expect(title).toMatch(
            path === '/' ? /^Vibetype$/ : /^(?!Vibetype · ).+ · Vibetype$/,
          )
        })
      }
    })

    // the color scheme only changes styles, so checking it once per page is enough
    for (const colorScheme of name === 'signed out'
      ? (['light', 'dark'] as const)
      : (['light'] as const)) {
      test.describe(`a11y ${colorScheme}`, () => {
        for (const path of PAGE_PATHS) {
          test(path, async ({ defaultPage }) => {
            const { isRedirect } = await requestPage(defaultPage.page, path)

            if (isRedirect) return

            await defaultPage.page.emulateMedia({ colorScheme })
            await defaultPage.goto(path)

            const redirectTarget =
              name === 'signed in'
                ? PAGE_REDIRECTS_CLIENT_SIGNED_IN[path]
                : undefined

            if (redirectTarget) {
              await defaultPage.page.waitForURL(redirectTarget)
              // the target keeps its own loading state, during which it shows no level one heading yet
              await expect(
                defaultPage.page.getByRole('heading', { level: 1 }),
              ).toBeAttached()
            }

            const { violations } = await new AxeBuilder({
              page: defaultPage.page,
            })
              .exclude('nuxt-devtools-frame') // only present on the development server
              .analyze()

            expect(
              violations
                .map(
                  (violation) =>
                    `${violation.id}: ${violation.help}\n${violation.nodes
                      .map((node) => `(${node.target})`)
                      .join('\n')}`,
                )
                .join('\n'),
            ).toEqual('')
          })
        }
      })
    }
  })
}
