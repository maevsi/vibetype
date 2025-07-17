export const useGetServiceHref = () => {
  const host = useHost()
  const runtimeConfig = useRuntimeConfig()

  return ({
    isSsr = true,
    name,
    port,
  }: {
    isSsr?: boolean
    name?: string
    port?: number
  }) =>
    getServiceHref({
      host,
      isSsr,
      name,
      port,
      stagingHost: runtimeConfig.public.vio.stagingHost,
    })
}

export const useHost = () => {
  const { ssrContext } = useNuxtApp()
  const host = ssrContext ? getHost(ssrContext.event) : location.host

  if (!host) throw new Error('Host is not given!')

  return host
}

export const useHttpStatusCode = async ({
  statusCode,
}: {
  statusCode: number
}) => {
  const { locale, t } = useI18n({ useScope: 'global' })

  const { status } = await import('@http-util/status-i18n')
  const statusName = computed(
    () => status(statusCode, locale.value) || t('globalError'),
  )

  return {
    statusName,
  }
}
