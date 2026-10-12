import { defineEventHandler, useRuntimeConfig } from 'nuxt/server'

export default defineEventHandler((event) => {
  const runtimeConfig = useRuntimeConfig()

  const securityEndpointParams = [
    `sentry_key=${runtimeConfig.public.sentry.project.publicKey}`,
    `sentry_environment=${runtimeConfig.public.vio.environment}`,
    runtimeConfig.public.vio.releaseName &&
      `sentry_release=${runtimeConfig.public.vio.releaseName}`,
  ]
    .filter(Boolean)
    .join('&')

  event.res.headers.append(
    'NEL',
    '\'{"report_to":"default","max_age":31536000,"include_subdomains":true}\'',
  )
  event.res.headers.append(
    'Report-To',
    `'{"group":"default","max_age":31536000,"endpoints":[{"url":"https://${runtimeConfig.public.sentry.host}/api/${runtimeConfig.public.sentry.project.id}/security/?${securityEndpointParams}"}],"include_subdomains":true}'`,
  )
})
