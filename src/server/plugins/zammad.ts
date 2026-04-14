export default defineNitroPlugin((nitroApp) => {
  const runtimeConfigZammad = useRuntimeConfig().vibetype.zammad

  if (!runtimeConfigZammad.apiToken) {
    ;(import.meta.dev ? console.warn : console.error)(
      'Zammad api token not set',
    )
    return
  }

  if (runtimeConfigZammad.apiToken === DARGSTACK_SECRET_UNUSED_THIRD_PARTY) {
    console.warn('Zammad api token not set in stack as provided by third party')
    return
  }

  if (!runtimeConfigZammad.url) {
    ;(import.meta.dev ? console.warn : console.error)('Zammad url not set')
    return
  }

  nitroApp.hooks.hook('request', (event) => {
    event.context.$zammad = {
      apiToken: runtimeConfigZammad.apiToken,
      url: runtimeConfigZammad.url,
    }
  })
})

declare module 'h3' {
  interface H3EventContext {
    $zammad?: {
      apiToken: string
      url: string
    }
  }
}
