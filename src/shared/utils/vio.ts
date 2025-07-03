export const useSiteUrl = () => {
  const runtimeConfig = useRuntimeConfig()
  const siteUrl = runtimeConfig.public.i18n.baseUrl

  return {
    siteUrl,
    siteUrlTyped: new URL(siteUrl),
  }
}
