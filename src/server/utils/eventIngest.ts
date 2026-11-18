import { zodResponseFormat } from 'openai/helpers/zod'
import { z } from 'zod'

// OpenAI's structured outputs require every field, so a missing value must be `null` instead of absent
const eventIngestSchema = z.object({
  description: z.string(),
  end: z.string().nullable(),
  is_event: z.boolean(),
  location: z.string().nullable(),
  name: z.string().nullable(),
  start: z.string().nullable(),
  url: z.string().nullable(),
})

export const eventIngestResponseFormat = zodResponseFormat(
  eventIngestSchema,
  'event',
)
