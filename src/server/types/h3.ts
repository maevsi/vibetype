import type { ApiClient } from '@mondaydotcomorg/api'
import type { OpenAI } from 'openai'

declare module 'h3' {
  interface H3EventContext {
    $monday?: ApiClient
    $openAi?: OpenAI
    $timeZone?: string
  }
}

export {}
