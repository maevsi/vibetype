import { z } from 'zod'

export const schemaFormContact = z.object({
  consent: z.boolean().refine((value) => value === true),
  emailAddress: z.string().email().max(1000),
  name: z.string().max(100),
  message: z.string().max(10000),
})
export const schemaFormEarlyBird = z.object({
  agreement: z.boolean().refine((value) => value === true),
  emailAddress: z.string().email().max(1000),
  name: z.string().max(100),
})
export const schemaFormFeatureRequest = z.object({
  consent: z.boolean().refine((value) => value === true),
  emailAddress: z.string().email().max(1000),
  featureName: z.string().max(255),
  featureDescription: z.string().max(2000),
  name: z.string().max(100),
  screenshots: z.any().optional(),
})
