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
  featureDescription: z.string().max(2000),
  featureName: z.string().max(255),
  name: z.string().max(100),
})
export const schemaFormIssue = z.object({
  consent: z.boolean().refine((value) => value === true),
  description: z.string().max(2000),
  email: z.string().email().max(1000),
  issueName: z.string().max(255),
  requestor: z.string().max(100),
})
export const schemaFormReport = z.object({
  accuracyConfirmation: z.boolean().refine((value) => value === true),
  emailAddress: z.string().email().max(1000).optional(),
  message: z.string().min(1).max(2000),
  name: z.string().min(1).max(100),
  privacyConsent: z.boolean().refine((value) => value === true),
})
