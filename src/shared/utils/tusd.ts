import { PRODUCTION_HOST } from './constants' // TODO: remove import once shared namespace has proper auto-imports (https://github.com/nuxt/nuxt/issues/32714)

export const getTusdFilesUrl = ({ siteUrl }: { siteUrl: URL }) => {
  const isInFrontendDevelopment = siteUrl.port !== ''

  return `https://tusd.${
    isInFrontendDevelopment ? PRODUCTION_HOST : siteUrl.host
  }/files/`
}
