import { DEFAULTS } from '@dargmuesli/nuxt-cookie-control/runtime/types.js'

import { SITE_NAME } from '~~/node/static'

export {
  CACHE_VERSION,
  CSRF_HEADER_NAME,
  FEATURE_FLAGS_COOKIE_ID,
  FEATURE_FLAGS_COOKIE_NAME,
  GTAG_COOKIE_ID,
  IS_IN_FRONTEND_DEVELOPMENT,
  IS_IN_STACK,
  IS_NITRO_OPENAPI_ENABLED,
  POLYFILLS,
  PRODUCTION_HOST,
  SITE_NAME,
  THEME_COLOR,
  TIMEZONE_COOKIE_NAME,
} from '~~/node/static'

export const COOKIE_CONTROL_CONSENT_COOKIE_NAME =
  DEFAULTS.cookieNameIsConsentGiven
export const COOKIE_SAME_SITE = 'lax' as const // cannot be `strict` as this would block cookies when coming from external sources
export const ITEMS_PER_PAGE = 10
export const ITEMS_PER_PAGE_LARGE = 100
export const JWT_ALGORITHM = 'RS256'
export type LOCALE_CODES = 'de' | 'en'
export const MAEVSI_EMAIL_LIMIT_24H = 150
export const POSTGRES_INTEGER_MAXIMUM = Math.pow(2, 31) - 1
export const REGEX_PHONE_NUMBER = /^\+(?:[0-9] ?){6,14}[0-9]$/
export const REGEX_SLUG = /^[-A-Za-z0-9]+$/
export const REGEX_UPPERCASE_NONE = /^[^A-Z]+$/
export const REGEX_URL_HTTPS = /^https:\/\//
export const REGEX_UUID =
  /^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$/
export const SEO_META_TWITTER_SITE = '@maev_si'
export const STATE_KEY_NOW = 'dateTimeNow'
export const STATE_LOADING_IDS_NAME = 'loadingIds'
export const TESTING_COOKIE_NAME = `${SITE_NAME}_is-testing`
export const FEATURE_FLAGS_COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 year
export const THEME_COLOR_DARK = '#191911'
export const TITLE_TEMPLATE = ({
  siteName,
  title,
}: {
  siteName: string
  title?: string
}) => (title && title !== siteName ? `${title} · ${siteName}` : siteName)
export const TURNSTILE_HEADER_KEY = 'X-Turnstile-Key'
