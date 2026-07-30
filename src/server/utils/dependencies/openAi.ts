import { OpenAI } from 'openai'
import type { ChatCompletion } from 'openai/resources/chat/completions'

const costFormatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 8,
})

const getOpenAiClient = () => {
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

  return new OpenAI({ apiKey: runtimeConfig.vibetype.openai.apiKey })
}

export const openAiClient = getOpenAiClient()

export const useOpenAi = () => {
  if (!openAiClient)
    throw createAppError({
      status: 500,
      statusText: 'OpenAI client uninitialized',
    })

  return {
    getCompletionCost: (completion: ChatCompletion) => {
      const usage = completion.usage

      if (!usage) return

      // source: https://openai.com/api/pricing/
      const costs = parseFloat(
        (
          (usage.prompt_tokens * 0.15 +
            usage.completion_tokens * 0.6 +
            (usage.prompt_tokens_details?.cached_tokens ?? 0) * 0.075) /
          1e6
        ).toFixed(7),
      )

      return costFormatter.format(costs)
    },
    client: openAiClient,
  }
}
