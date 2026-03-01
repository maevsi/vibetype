import { SITE_URL_TYPED } from './environment'
import { getIsSecure, SITE_NAME } from './site'

export * from './environment'
export * from './sentry'
export * from './site'

export const CACHE_VERSION = '9Th9y78ype'
export const CSRF_COOKIE_NAME = `${getIsSecure({ siteUrl: SITE_URL_TYPED }) ? '__Host-' : ''}csrf`
export const CSRF_HEADER_NAME = 'x-csrf-token'
export const FEATURE_FLAGS_COOKIE_ID = 'f'
export const FEATURE_FLAGS_COOKIE_NAME = `${SITE_NAME}_feature-flags`
export const GTAG_COOKIE_ID = 'ga'
export const JWT_COOKIE_NAME = `${getIsSecure({ siteUrl: SITE_URL_TYPED }) ? '__Host-' : ''}jwt-v3`
export const POLYFILLS = ['Promise', 'requestAnimationFrame']
export const PRODUCTION_HOST = 'vibetype.app'
export const THEME_COLOR = '#ffffff'
export const TIMEZONE_COOKIE_NAME = 'm_tz'
export const TURNSTILE_HEADER_NAME = 'x-turnstile-key'
