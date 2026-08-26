import { DEFAULTS } from '@dargmuesli/nuxt-cookie-control/runtime/types.js'

import { IS_IN_STACK, SITE_URL_TYPED } from './environment.ts'
import { getIsSecure, SITE_NAME } from './site.ts'

export * from './environment.ts'
export * from './sentry.ts'
export * from './site.ts'

export const CACHE_VERSION = '9Th9y78ype'
export const COOKIE_CONTROL_CONSENT_COOKIE_NAME =
  DEFAULTS.cookieNameIsConsentGiven
export const CSRF_COOKIE_NAME = `${getIsSecure({ siteUrl: SITE_URL_TYPED }) ? '__Host-' : ''}csrf`
export const CSRF_HEADER_NAME = 'x-csrf-token'
export const FEATURE_FLAGS_COOKIE_ID = 'f'
export const FEATURE_FLAGS_COOKIE_NAME = `${SITE_NAME}_feature-flags`
export const GTAG_COOKIE_ID = 'ga'
export const GTAG_MEASUREMENT_ID = 'G-WMQ1JY99XH'
export const POLYFILLS = ['Promise', 'requestAnimationFrame']
export const PRODUCTION_HOST = 'vibetype.app'
// suffixed in fullstack development so its cookie can't collide with frontend-only development's, since both run on the same local host;
// keyed off the site's hostname rather than `NODE_ENV` because Nitro bakes `NODE_ENV` into the built server bundle at build time, so it would otherwise stay `production` forever regardless of where that build later runs
export const JWT_COOKIE_NAME = `${getIsSecure({ siteUrl: SITE_URL_TYPED }) ? '__Host-' : ''}jwt-v3${IS_IN_STACK && SITE_URL_TYPED.hostname !== PRODUCTION_HOST ? '-local' : ''}`
export const TESTING_COOKIE_NAME = `${SITE_NAME}_is-testing`
export const THEME_COLOR = '#ffffff'
export const TIMEZONE_COOKIE_NAME = 'm_tz'
export const TURNSTILE_HEADER_NAME = 'x-turnstile-key'
