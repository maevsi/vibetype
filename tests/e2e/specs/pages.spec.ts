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
  '/account/view/[username]/friend': `${ACCOUNT_VIEW_PATH}/friend`,
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
  '/attendance': 404, // behind the `participation` feature flag
  '/guest': 404, // behind the `invitations` feature flag
  '/notification': 404, // behind the `notifications` feature flag
  '/🫖': 418,
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

// pages titled with the bare site name: the start page and the client only shells, which only redirect
const PAGE_PATHS_TITLE_SITE_NAME = ['/', '/event/import', '/offline']

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
  test.describe(name, () => {
    // one request per page for both checks, as each check alone costs a full server render
    test.describe('server-rendered html', () => {
      for (const path of PAGE_PATHS) {
        test(path, async ({ defaultPage }) => {
          const { isRedirect, response } = await requestPage(
            defaultPage.page,
            path,
          )

          if (isRedirect) return

          expect(response.status()).toBe(PAGE_STATUSES[path] ?? 200)

          const html = await response.text()
          const report = await htmlValidate.validateString(html)

          expect
            .soft(
              report.results
                .flatMap((result) => result.messages)
                .map(
                  (message) =>
                    `${message.ruleId}: ${message.message}\n(${message.selector})`,
                )
                .join('\n'),
              'html validation',
            )
            .toEqual('')

          // a page part that is missing, empty or just the site name again means the page sets no title of its own
          expect
            .soft(html.match(/<title>([^<]*)<\/title>/)?.[1], 'page title')
            .toMatch(
              PAGE_PATHS_TITLE_SITE_NAME.includes(path)
                ? /^Vibetype$/
                : /^(?!Vibetype · ).+ · Vibetype$/,
            )
        })
      }
    })

    test.describe('a11y', () => {
      for (const path of PAGE_PATHS) {
        test(path, async ({ defaultPage, isMobile }) => {
          const { isRedirect } = await requestPage(defaultPage.page, path)

          if (isRedirect) return

          await defaultPage.page.emulateMedia({ colorScheme: 'light' })
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

          // the color scheme only changes styles, so the desktop viewport checks the dark one once per page, on the already loaded page
          for (const colorScheme of name === 'signed out' && !isMobile
            ? (['light', 'dark'] as const)
            : (['light'] as const)) {
            if (colorScheme === 'dark') {
              await defaultPage.page.emulateMedia({ colorScheme })
              await expect(defaultPage.page.locator('html')).toHaveClass(
                /(^|\s)dark(\s|$)/,
              )
              // axe would otherwise measure contrast on colors that are still fading between the schemes
              // polled from outside the page, as `waitForFunction` falls back to an `eval` that the content security policy blocks
              await expect
                .poll(() =>
                  defaultPage.page.evaluate(
                    "document.getAnimations().every((animation) => !(animation instanceof CSSTransition) || animation.playState !== 'running')",
                  ),
                )
                .toBe(true)
            }

            const { violations } = await new AxeBuilder({
              page: defaultPage.page,
            })
              .exclude('nuxt-devtools-frame') // only present on the development server
              .analyze()

            expect
              .soft(
                violations
                  .map(
                    (violation) =>
                      `${violation.id}: ${violation.help}\n${violation.nodes
                        .map((node) => `(${node.target})`)
                        .join('\n')}`,
                  )
                  .join('\n'),
                colorScheme,
              )
              .toEqual('')
          }
        })
      }
    })
  })
}
