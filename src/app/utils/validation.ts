import type { Client } from '@urql/core'
import type { Ref } from 'vue'

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
