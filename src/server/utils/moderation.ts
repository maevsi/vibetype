import { parse, valueFromASTUntyped, visit } from 'graphql'
import type { DocumentNode } from 'graphql'
import { z } from 'zod'

const MODERATION_FIELD_NAME = /^(create|update)(Account|Event)(By\w+)?$/
const MODERATION_KEYS = new Set(['description', 'displayName', 'name'])

const graphqlRequestSchema = z.object({
  query: z.string(),
  variables: z.record(z.string(), z.unknown()).nullish(),
})

const collectTexts = (value: unknown, texts: string[]) => {
  if (Array.isArray(value)) {
    for (const item of value) collectTexts(item, texts)
    return
  }

  if (!value || typeof value !== 'object') return

  for (const [key, child] of Object.entries(value)) {
    if (MODERATION_KEYS.has(key) && typeof child === 'string') {
      if (child.trim()) texts.push(child)
    } else {
      collectTexts(child, texts)
    }
  }
}

const parseJson = (text: string): unknown => {
  try {
    return JSON.parse(text)
  } catch {
    return undefined
  }
}

const parseDocument = (query: string): DocumentNode | undefined => {
  try {
    return parse(query)
  } catch {
    return undefined
  }
}

// collects the user text that event and account mutations would publish, from variables and inline values alike
export const getModerationTexts = (body?: string) => {
  const texts: string[] = []

  for (const request of [parseJson(body ?? '')].flat()) {
    const requestParsed = graphqlRequestSchema.safeParse(request)

    if (!requestParsed.success) continue

    const document = parseDocument(requestParsed.data.query)

    if (!document) continue

    visit(document, {
      Field(node) {
        if (!MODERATION_FIELD_NAME.test(node.name.value)) return

        for (const argument of node.arguments ?? []) {
          collectTexts(
            valueFromASTUntyped(
              argument.value,
              requestParsed.data.variables ?? undefined,
            ),
            texts,
          )
        }
      },
    })
  }

  return texts
}
