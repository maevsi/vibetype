import { z } from 'zod'

const emptyToUndefined = (value: unknown) => (value === '' ? undefined : value)
const itemDescription = z.string().min(1).max(10000)
const userConsent = z.boolean().refine((value) => value === true)
const userEmailAddress = z.string().min(1).email().max(1000)
const userEmailAddressOptional = z.preprocess(
  emptyToUndefined,
  userEmailAddress.optional(),
)
const userName = z.string().min(1).max(100)
const userNameOptional = z.preprocess(emptyToUndefined, userName.optional())

export const schemaFormContact = z.object({
  itemDescription,
  userConsent,
  userEmailAddress,
  userName: userNameOptional,
})
export const schemaFormEarlyBird = z.object({
  userConsent,
  userEmailAddress,
  userName,
})
export const schemaFormIdea = z.object({
  itemDescription,
  userConsent,
  userEmailAddress: userEmailAddressOptional,
  userName: userNameOptional,
})
export const schemaFormIssue = z.object({
  itemDescription,
  userConsent,
  userEmailAddress: userEmailAddressOptional,
  userName: userNameOptional,
})
export const schemaFormReport = z.object({
  itemDescription,
  userConsentAccuracy: userConsent,
  userConsentProcessing: userConsent,
  userEmailAddress: userEmailAddressOptional,
  userName: userNameOptional,
})
