import { SITE_URL } from '~~/node'

export const useSiteUrl = () => {
  const runtimeConfig = useRuntimeConfig()
  const siteUrl =
    typeof runtimeConfig.public.i18n.baseUrl === 'string'
      ? runtimeConfig.public.i18n.baseUrl
      : SITE_URL

  return {
    siteUrl,
    siteUrlTyped: new URL(siteUrl),
  }
}
