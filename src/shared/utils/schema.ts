import { z } from 'zod'

const itemDescription = z.string().min(1).max(10000)
const userConsent = z.boolean().refine((value) => value === true)
const userEmailAddress = z.string().min(1).email().max(1000)
const userName = z.string().min(1).max(100)

export const schemaFormContact = z.object({
  itemDescription,
  userConsent,
  userEmailAddress,
  userName: userName.optional(),
})
export const schemaFormEarlyBird = z.object({
  userConsent,
  userEmailAddress,
  userName,
})
export const schemaFormIdea = z.object({
  itemDescription,
  userConsent,
  userEmailAddress: userEmailAddress.optional(),
  userName: userName.optional(),
})
export const schemaFormIssue = z.object({
  itemDescription,
  userConsent,
  userEmailAddress: userEmailAddress.optional(),
  userName: userName.optional(),
})
export const schemaFormReport = z.object({
  itemDescription,
  userConsentAccuracy: userConsent,
  userConsentProcessing: userConsent,
  userEmailAddress: userEmailAddress.optional(),
  userName: userName.optional(),
})
