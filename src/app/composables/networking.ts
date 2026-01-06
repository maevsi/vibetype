export const useCsrfRequestFetch = () => {
  const requestFetch = useRequestFetch()

  return async (
    url: Parameters<typeof requestFetch>[0],
    options?: Parameters<typeof requestFetch>[1],
  ) => {
    const { csrf } = useCsrf()
    const headers = {
      ...(options?.headers || {}),
      [CSRF_HEADER_NAME]: csrf,
    }

    return await requestFetch(url, {
      ...options,
      headers,
    })
  }
}

export const useGetServiceHref = () => {
  const host = useHost()
  const runtimeConfig = useRuntimeConfig()
  const isTesting = useIsTesting()

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
      isTesting,
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

export const useIsSecure = () =>
  getIsSecure({ runtimeConfig: useRuntimeConfig() })

export const useSiteUrl = () =>
  getSiteUrl(useRuntimeConfig().public.i18n.baseUrl)

export const useTusdFilesUrl = () => {
  const { siteUrlTyped: siteUrl } = useSiteUrl()

  return getTusdFilesUrl({ siteUrl })
}
