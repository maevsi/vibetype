import type { ClientOptions, SSRData } from '@urql/core'
import type { DefaultStorage } from '@urql/exchange-graphcache/default-storage'
import { provideClient, type Client } from '@urql/vue'

const SSR_KEY = '__URQL_DATA__'

export default defineNuxtPlugin(async (nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()
  const isTesting = useIsTesting()
  const getServiceHref = useGetServiceHref()
  const { csrf } = useCsrf()

  const baseUrl = getServiceHref({
    port: 3000,
  })
  const clientOptions: Partial<ClientOptions> = {
    fetchOptions: {
      headers: {
        [CSRF_HEADER_NAME]: csrf,
        ...(import.meta.server &&
        nuxtApp.ssrContext?.event.node.req.headers.cookie
          ? { cookie: nuxtApp.ssrContext.event.node.req.headers.cookie }
          : {}),
      },
    },
  }

  const { ssrExchange, urql, urqlTesting, urqlCache, urqlReset } =
    await getUrqlClient({
      baseUrl,
      clientOptions,
      runtimeConfig,
    })

  if (import.meta.client) {
    nuxtApp.hook('app:created', () => {
      ssrExchange.restoreData(nuxtApp.payload[SSR_KEY] as SSRData)
    })
  }

  if (import.meta.server) {
    nuxtApp.hook('app:rendered', () => {
      nuxtApp.payload[SSR_KEY] = ssrExchange.extractData()
    })
  }

  nuxtApp.hook('vue:setup', () => {
    const { $urql } = useNuxtApp()
    provideClient($urql)
  })

  return {
    provide: {
      urql: isTesting ? urqlTesting : urql,
      urqlCache,
      urqlReset,
    },
  }
})

declare module '#app' {
  interface NuxtApp {
    $urql: Ref<Client>
    $urqlCache?: DefaultStorage
    $urqlReset: () => Client
  }
}
