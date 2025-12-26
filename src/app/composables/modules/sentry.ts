import { getSharedSentryConfig } from '~~/node/static'

export const useSharedSentryConfig = () => {
  const isTesting = useIsTesting()
  const runtimeConfig = useRuntimeConfig()

  return getSharedSentryConfig({
    enableLogs: runtimeConfig.public.sentry.logs.enable,
    environment: runtimeConfig.public.vio.environment,
    host: runtimeConfig.public.sentry.host,
    isInProduction: runtimeConfig.public.vio.isInProduction,
    isTesting,
    projectId: runtimeConfig.public.sentry.project.id,
    projectPublicKey: runtimeConfig.public.sentry.project.publicKey,
    release: runtimeConfig.public.vio.releaseName,
  })
}
