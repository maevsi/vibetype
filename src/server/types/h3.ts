import type { ApiClient } from '@mondaydotcomorg/api'
import type { OpenAI } from 'openai'

declare module 'h3' {
  interface H3EventContext {
    $openAi?: OpenAI
    $monday?: ApiClient
    $timezone?: string
  }
}

export {}
