import type { Client } from '@urql/core'
import type { Ref } from 'vue'

import { z } from 'zod'

import { accountByUsernameQuery } from '~~/gql/documents/queries/account/accountByUsername'
import { eventByCreatedByAndSlugQuery } from '~~/gql/documents/queries/event/eventByCreatedByAndSlug'
import { getAccountItem } from '~~/gql/documents/fragments/accountItem'
import { getEventItem } from '~~/gql/documents/fragments/eventItem'

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
export const VALIDATION_URL_LENGTH_MAXIMUM = 2000
export const VALIDATION_USERNAME_LENGTH_MAXIMUM = 100

// Zod schemas
export const SCHEMA_CAPTCHA = z.string().min(1)
export const SCHEMA_CONSENT_REQUIRED = z.boolean().refine((value) => value)
export const SCHEMA_EMAIL_ADDRESS_OPTIONAL = z
  .string()
  .email()
  .max(VALIDATION_EMAIL_ADDRESS_LENGTH_MAXIMUM)
  .or(z.literal(''))
export const SCHEMA_EMAIL_ADDRESS_REQUIRED = z
  .string()
  .min(1)
  .email()
  .max(VALIDATION_EMAIL_ADDRESS_LENGTH_MAXIMUM)
export const SCHEMA_EVENT_DESCRIPTION_OPTIONAL = z
  .string()
  .max(VALIDATION_EVENT_DESCRIPTION_LENGTH_MAXIMUM)
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
export const SCHEMA_PHONE_NUMBER_OPTIONAL = z.string().or(z.literal(''))
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

  return getAccountItem(accountByUsername.data?.accountByUsername)
}

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

  return getEventItem(eventByCreatedByAndSlug.data?.eventByCreatedByAndSlug)
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

  if (result.error) return false

  return invert
    ? !result.data?.accountByUsername
    : !!result.data?.accountByUsername
}
