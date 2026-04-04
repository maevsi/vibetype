import { OpenAI } from 'openai'

export default defineNitroPlugin((nitroApp) => {
  const runtimeConfig = useRuntimeConfig()

  if (!runtimeConfig.vibetype.openai.apiKey) {
    ;(import.meta.dev ? console.warn : console.error)('OpenAI api key not set')
    return
  }

  if (
    runtimeConfig.vibetype.openai.apiKey === DARGSTACK_SECRET_UNUSED_THIRD_PARTY
  ) {
    console.warn('OpenAI api key not set in stack as provided by third party')
    return
  }

  const openAi = new OpenAI({
    apiKey: runtimeConfig.vibetype.openai.apiKey,
  })

  nitroApp.hooks.hook('request', (event) => {
    event.context.$openAi = openAi
  })
})

declare module 'h3' {
  interface H3EventContext {
    $openAi?: OpenAI
  }
}
