import type { Client } from '@urql/core'
import type { Ref } from 'vue'

import { isValidPhoneNumber } from 'libphonenumber-js/min'
import { z } from 'zod'

import { graphql } from '~~/gql/generated'

export const VALIDATION_ADDRESS_LENGTH_MAXIMUM = 300
export const VALIDATION_EMAIL_ADDRESS_LENGTH_MAXIMUM = 254 // source: https://www.dominicsayers.com/isemail/
export const VALIDATION_EVENT_DESCRIPTION_LENGTH_MAXIMUM = 10000
export const VALIDATION_EVENT_LOCATION_LENGTH_MAXIMUM = 300
export const VALIDATION_EVENT_NAME_LENGTH_MAXIMUM = 100
export const VALIDATION_EVENT_SLUG_LENGTH_MAXIMUM = 100
export const VALIDATION_NAME_FIRST_LENGTH_MAXIMUM = 100
export const VALIDATION_NAME_LAST_LENGTH_MAXIMUM = 100
export const VALIDATION_NAME_NICK_LENGTH_MAXIMUM = 100
export const VALIDATION_NOTE_LENGTH_MAXIMUM = 1000
export const VALIDATION_PASSWORD_LENGTH_MINIMUM = 8
export const VALIDATION_PHONE_NUMBER_LENGTH_MAXIMUM = 30 // rejects pathological input before parsing; real formatted numbers stay well under this
export const VALIDATION_URL_LENGTH_MAXIMUM = 2000
export const VALIDATION_USERNAME_LENGTH_MAXIMUM = 100

// Zod schemas
export const SCHEMA_CAPTCHA = z.string().min(1)
export const SCHEMA_CONSENT_REQUIRED = z.boolean().refine((value) => value)
export const SCHEMA_EMAIL_ADDRESS_OPTIONAL = z
  .email()
  .max(VALIDATION_EMAIL_ADDRESS_LENGTH_MAXIMUM)
  .or(z.literal(''))
export const SCHEMA_EMAIL_ADDRESS_REQUIRED = z
  .email()
  .min(1)
  .max(VALIDATION_EMAIL_ADDRESS_LENGTH_MAXIMUM)
export const SCHEMA_EVENT_DESCRIPTION_OPTIONAL = z
  .string()
  .max(VALIDATION_EVENT_DESCRIPTION_LENGTH_MAXIMUM)
  .or(z.literal(''))
export const SCHEMA_EVENT_LOCATION_NAME_OPTIONAL = z
  .string()
  .max(VALIDATION_EVENT_LOCATION_LENGTH_MAXIMUM)
  .or(z.literal(''))
export const SCHEMA_EVENT_NAME_REQUIRED = z
  .string()
  .min(1)
  .max(VALIDATION_EVENT_NAME_LENGTH_MAXIMUM)
export const SCHEMA_EVENT_SLUG_REQUIRED = z
  .string()
  .min(1)
  .max(VALIDATION_EVENT_SLUG_LENGTH_MAXIMUM)
  .regex(REGEX_SLUG)
export const SCHEMA_ITEM_DESCRIPTION_REQUIRED = z
  .string()
  .min(1)
  .max(VALIDATION_EVENT_DESCRIPTION_LENGTH_MAXIMUM)
export const SCHEMA_NAME_FIRST_OPTIONAL = z
  .string()
  .max(VALIDATION_NAME_FIRST_LENGTH_MAXIMUM)
  .or(z.literal(''))
export const SCHEMA_NAME_LAST_OPTIONAL = z
  .string()
  .max(VALIDATION_NAME_LAST_LENGTH_MAXIMUM)
  .or(z.literal(''))
export const SCHEMA_NAME_NICK_OPTIONAL = z
  .string()
  .max(VALIDATION_NAME_NICK_LENGTH_MAXIMUM)
  .or(z.literal(''))
export const SCHEMA_NOTE_OPTIONAL = z
  .string()
  .max(VALIDATION_NOTE_LENGTH_MAXIMUM)
  .or(z.literal(''))
export const SCHEMA_PASSWORD = z
  .string()
  .min(VALIDATION_PASSWORD_LENGTH_MINIMUM)
export const SCHEMA_PASSWORD_V2 = z
  .string()
  .min(VALIDATION_PASSWORD_LENGTH_MINIMUM)
  .refine(
    async (password) =>
      (await getPasswordStrengthScore(password)) >=
      PASSWORD_STRENGTH_SCORE_MINIMUM,
  )
export const SCHEMA_PHONE_NUMBER_OPTIONAL = z
  .string()
  .max(VALIDATION_PHONE_NUMBER_LENGTH_MAXIMUM)
  .refine((value) => isValidPhoneNumber(value))
  .or(z.literal(''))
export const SCHEMA_URL_HTTPS_OPTIONAL = z
  .string()
  .regex(REGEX_URL_HTTPS)
  .max(VALIDATION_URL_LENGTH_MAXIMUM)
  .or(z.literal(''))
export const SCHEMA_USERNAME_OPTIONAL = z
  .string()
  .max(VALIDATION_USERNAME_LENGTH_MAXIMUM)
  .regex(REGEX_SLUG)
  .or(z.literal(''))
export const SCHEMA_USERNAME_REQUIRED = z
  .string()
  .min(1)
  .max(VALIDATION_USERNAME_LENGTH_MAXIMUM)
  .regex(REGEX_SLUG)
export const SCHEMA_USER_NAME_OPTIONAL = z
  .string()
  .max(VALIDATION_NAME_FIRST_LENGTH_MAXIMUM)
export const SCHEMA_USER_NAME_REQUIRED = z
  .string()
  .min(1)
  .max(VALIDATION_NAME_FIRST_LENGTH_MAXIMUM)

const accountByUsernameQuery = graphql(`
  query AccountByUsername($username: String!) {
    accountByUsername(username: $username) {
      id
      rowId
    }
  }
`)

export const getAccountByUsername = async ({
  $urql,
  username,
}: {
  $urql: Ref<Client>
  username: string
}) => {
  const accountByUsername = await $urql.value
    .query(accountByUsernameQuery, {
      username,
    })
    .toPromise()

  if (accountByUsername.error) {
    throw new Error(getCombinedErrorMessages([accountByUsername.error]).join())
  }

  return accountByUsername.data?.accountByUsername
}

const eventByCreatedByAndSlugQuery = graphql(`
  query EventByCreatedByAndSlug($createdBy: UUID!, $slug: String!) {
    eventByCreatedByAndSlug(createdBy: $createdBy, slug: $slug) {
      id
    }
  }
`)

export const getEventByCreatedByAndSlug = async ({
  $urql,
  createdBy,
  slug,
}: {
  $urql: Ref<Client>
  createdBy: string
  slug: string
}) => {
  const eventByCreatedByAndSlug = await $urql.value
    .query(eventByCreatedByAndSlugQuery, {
      createdBy,
      slug,
    })
    .toPromise()

  if (eventByCreatedByAndSlug.error) {
    throw new Error(
      getCombinedErrorMessages([eventByCreatedByAndSlug.error]).join(),
    )
  }

  return eventByCreatedByAndSlug.data?.eventByCreatedByAndSlug
}

export const validateUsername = (invert?: boolean) => async (value: string) => {
  const { $urql } = useNuxtApp()

  if (!value.trim()) {
    return true
  }

  const result = await $urql.value
    .query(accountByUsernameQuery, {
      username: value,
    })
    .toPromise()

  const data = getResultData(result)

  if (!data) return false

  return invert ? !data.accountByUsername : !!data.accountByUsername
}
