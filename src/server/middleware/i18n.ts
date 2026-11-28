import { defineEventHandler, getCookie, getRequestURL } from 'h3'
import { decodeJwt } from 'jose'

import { I18N_COOKIE_NAME } from '~~/node/static'

// the i18n module picks the root's language from the stored language before
// the app renders, so a session whose stored language differs from its
// account's, e.g. after a change on another device, would open the root in the
// old one; the token is read without verification, as a forged claim only
// selects the language for its own sender; the handler is h3's own, as the
// module reads the cookie from the node request, which the portable event of
// `nuxt/server` only exposes as a copy
export default defineEventHandler((event) => {
  if (getRequestURL(event).pathname !== '/') return

  const jwt = getCookie(event, JWT_COOKIE_NAME)

  if (!jwt) return

  let language: unknown

  try {
    language = decodeJwt(jwt).language
  } catch {
    return
  }

  const { data: locale } = LocaleSchema.safeParse(language)

  if (!locale || getCookie(event, I18N_COOKIE_NAME) === locale) return

  event.node.req.headers.cookie = [
    ...(event.node.req.headers.cookie ?? '')
      .split(/;\s*/)
      .filter((cookie) => !cookie.startsWith(`${I18N_COOKIE_NAME}=`)),
    `${I18N_COOKIE_NAME}=${locale}`,
  ].join('; ')
})
