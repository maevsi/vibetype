import { OpenAI } from 'openai'
import type { ChatCompletion } from 'openai/resources/chat/completions'

// the prices belong to the model, so change both together (source: https://openai.com/api/pricing/)
const OPENAI_MODEL = 'gpt-4o-mini'
const OPENAI_PRICE = { input: 0.15, inputCached: 0.075, output: 0.6 } // US dollars per million tokens

const costFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
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

  return new OpenAI({
    apiKey: runtimeConfig.vibetype.openai.apiKey,
    timeout: 30_000, // the default of ten minutes would keep users waiting on a hung request
  })
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

      // prompt tokens include the cached ones, which are billed at their own price
      const cachedTokens = usage.prompt_tokens_details?.cached_tokens ?? 0
      const costs = parseFloat(
        (
          ((usage.prompt_tokens - cachedTokens) * OPENAI_PRICE.input +
            cachedTokens * OPENAI_PRICE.inputCached +
            usage.completion_tokens * OPENAI_PRICE.output) /
          1e6
        ).toFixed(7),
      )

      return costFormatter.format(costs)
    },
    client: openAiClient,
    model: OPENAI_MODEL,
  }
}
