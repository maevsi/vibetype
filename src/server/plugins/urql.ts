import type { Client } from '@urql/vue'
import type { Ref } from 'vue'

export default defineNitroPlugin(async (nitroApp) => {
  const runtimeConfig = useRuntimeConfig()
  const getServiceHref = useGetServiceHref()

  const baseUrl = getServiceHref({
    name: SITE_NAME,
    port: 3000,
  })

  const { urql, urqlTesting } = await getUrqlClient({
    baseUrl,
    runtimeConfig,
  })

  nitroApp.hooks.hook('request', (event) => {
    const isTesting = useIsTesting()

    event.context.$urql = isTesting ? urqlTesting : urql
  })
})

declare module 'h3' {
  interface H3EventContext {
    $urql: Ref<Client>
  }
}
