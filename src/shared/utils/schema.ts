import { z } from 'zod'

export const schemaFormEarlyBird = z.object({
  agreement: z.boolean().refine((val) => val === true),
  emailAddress: z.string().email().max(1000),
  name: z.string().max(100),
})
