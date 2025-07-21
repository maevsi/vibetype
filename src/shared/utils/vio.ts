export const useSiteUrl = () => {
  const runtimeConfig = useRuntimeConfig()
  const siteUrl = runtimeConfig.public.i18n.baseUrl as string | undefined // TODO: remove typecast in @nuxtjs/i18n v11

  if (!siteUrl) {
    throw new Error('Site URL is not defined in the runtime configuration.')
  }

  return {
    siteUrl,
    siteUrlTyped: new URL(siteUrl),
  }
}
