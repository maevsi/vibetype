import type { NuxtI18nOptions } from '@nuxtjs/i18n'

export const getSiteUrl = (siteUrl?: string | NuxtI18nOptions['baseUrl']) => {
  if (!siteUrl) {
    throw new Error('Site URL is not defined.')
  }

  if (typeof siteUrl !== 'string') {
    // TODO: remove this if-statement in @nuxtjs/i18n v11
    // @ts-expect-error deprecated type will be removed in @nuxtjs/i18n v11
    new URL(siteUrl)
    throw new Error('Site URL is not defined.')
  }

  return {
    siteUrl,
    siteUrlTyped: new URL(siteUrl),
  }
}
