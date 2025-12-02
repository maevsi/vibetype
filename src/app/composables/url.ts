export const useSiteUrl = () =>
  getSiteUrl(useRuntimeConfig().public.i18n.baseUrl)

export const useTusdFilesUrl = () => {
  const { siteUrlTyped: siteUrl } = useSiteUrl()

  return getTusdFilesUrl({ siteUrl })
}
