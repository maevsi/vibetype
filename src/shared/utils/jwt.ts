import { JWT_NAME } from './constants' // TODO: remove import once shared namespace has proper auto-imports (https://github.com/nuxt/nuxt/issues/32714)

export const getJwtName = (siteUrl: URL) =>
  JWT_NAME({ isHttps: siteUrl.protocol === 'https:' })
