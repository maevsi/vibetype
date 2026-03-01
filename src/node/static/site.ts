export const SITE_NAME = 'vibetype'

export const getIsSecure = ({ siteUrl }: { siteUrl: URL }) =>
  siteUrl.protocol === 'https:'
