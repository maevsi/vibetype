export const getJwtName = (siteUrl: URL) =>
  JWT_NAME({ isHttps: siteUrl.protocol === 'https:' })
