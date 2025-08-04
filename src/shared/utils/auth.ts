export const useJwtName = () => {
  const { siteUrlTyped } = useSiteUrl()

  return JWT_NAME({ isHttps: siteUrlTyped.protocol === 'https:' })
}
