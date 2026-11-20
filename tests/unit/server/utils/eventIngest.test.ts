import { expect, test } from 'vitest'

// building the response format throws on import when OpenAI's strict structured outputs reject the schema
import { eventIngestResponseFormat } from '#src/server/utils/eventIngest'

test('is accepted as a strict structured output', () => {
  expect(eventIngestResponseFormat.json_schema.strict).toBe(true)
})
