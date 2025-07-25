export const IS_IN_PRODUCTION = process.env.NODE_ENV === 'production'
export const IS_IN_STACK = !!process.env.NUXT_PUBLIC_SITE_URL
export const IS_NITRO_OPENAPI_ENABLED =
  !!process.env.NUXT_IS_NITRO_OPENAPI_ENABLED || false
export const NUXT_PUBLIC_VIO_ENVIRONMENT = process.env.NODE_ENV
export const SITE_URL =
  process.env.SITE_URL ||
  process.env.NUXT_PUBLIC_SITE_URL ||
  `https://${process.env.HOST || 'localhost'}:${process.env.PORT || '3000'}`
