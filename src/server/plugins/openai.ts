import { consola } from 'consola'
import OpenAI from 'openai'

export default defineNitroPlugin((nitroApp) => {
  const runtimeConfig = useRuntimeConfig()

  if (!runtimeConfig.private.openai.apiKey) {
    ;(import.meta.dev ? consola.warn : consola.error)('OpenAI api key not set')
    return
  }

  if (
    runtimeConfig.private.openai.apiKey === DARGSTACK_SECRET_UNUSED_THIRD_PARTY
  ) {
    consola.warn('OpenAI api key not set in stack as provided by third party')
    return
  }

  const openAi = new OpenAI({
    apiKey: runtimeConfig.private.openai.apiKey,
  })

  nitroApp.hooks.hook('request', (event) => {
    event.context.$openAi = openAi
  })
})
