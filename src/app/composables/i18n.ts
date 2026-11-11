import type { NuxtApp } from '#app'
import type { Client } from '@urql/core'
import { createRequest } from '@urql/core'
import type { Ref } from 'vue'
import { isEqual } from 'ufo'

import { graphql } from '~~/gql/generated'
import type { Language } from '~~/gql/generated/graphql'

// an account's own contact is the one it created for itself, unlike the
// contacts it created for others, which only share the creator
const ownContactQuery = graphql(`
  query OwnContact($accountId: UUID!) {
    contactByCreatedByAndAccountId(
      accountId: $accountId
      createdBy: $accountId
    ) {
      id
      language
      rowId
    }
  }
`)

const updateOwnContactLanguageMutation = graphql(`
  mutation UpdateOwnContactLanguage($input: UpdateContactByRowIdInput!) {
    updateContactByRowId(input: $input) {
      contact {
        id
        language
        rowId
      }
    }
  }
`)

export const getOwnContact = async ({
  $urql,
  accountId,
}: {
  $urql: Ref<Client>
  accountId: string
}) => {
  const ownContact = await $urql.value
    .query(ownContactQuery, { accountId })
    .toPromise()

  if (ownContact.error) {
    throw new Error(getCombinedErrorMessages([ownContact.error]).join())
  }

  return ownContact.data?.contactByCreatedByAndAccountId
}

// best-effort, as a failure must never block the page load or the sign-in;
// the caller passes the nuxt app and store, as this runs after the caller's
// awaits, where neither can be resolved from the current context
export const getOwnContactLanguage = async ({
  nuxtApp,
  store,
}: {
  nuxtApp: NuxtApp
  store: ReturnType<typeof useStore>
}) => {
  const signedInAccountId = store.signedInAccountId

  if (!signedInAccountId) {
    return
  }

  try {
    const ownContact = await getOwnContact({
      $urql: nuxtApp.$urql,
      accountId: signedInAccountId,
    })

    return ownContact?.language ?? undefined
  } catch (error) {
    console.error('Fetching the account language failed:', error)
  }
}

// the app should open in the language of the signed-in account, so every page
// load moves the session onto it
export const syncLocaleToOwnContactLanguage = async ({
  nuxtApp,
  store,
}: {
  nuxtApp: NuxtApp
  store: ReturnType<typeof useStore>
}) => {
  const language = await getOwnContactLanguage({ nuxtApp, store })

  if (!language) {
    return
  }

  try {
    // the navigation composables resolve the nuxt instance themselves, so they
    // need to run within an active nuxt context
    await nuxtApp.runWithContext(async () => {
      const route = useRoute()
      const switchLocalePath = useSwitchLocalePath()
      const targetPath = switchLocalePath(language)

      if (!targetPath || isEqual(targetPath, route.fullPath)) {
        return
      }

      await navigateTo(targetPath, { replace: true })
    })
  } catch (error) {
    console.error('Syncing the locale to the account language failed:', error)
  }
}

// the language chosen on the settings page becomes the account's language;
// throws on failure, as the next page load would otherwise silently move the
// session back onto the previous language
export const persistOwnContactLanguage = async ({
  language,
  nuxtApp,
  store,
}: {
  language: Language
  nuxtApp: NuxtApp
  store: ReturnType<typeof useStore>
}) => {
  const signedInAccountId = store.signedInAccountId

  if (!signedInAccountId) {
    return
  }

  const ownContact = await getOwnContact({
    $urql: nuxtApp.$urql,
    accountId: signedInAccountId,
  })

  if (!ownContact) {
    throw new Error('The account has no contact of its own')
  }

  const updated = await nuxtApp.$urql.value
    .executeMutation(
      createRequest(updateOwnContactLanguageMutation, {
        input: {
          contactPatch: { language },
          rowId: ownContact.rowId,
        },
      }),
    )
    .toPromise()

  if (updated.error) {
    throw new Error(getCombinedErrorMessages([updated.error]).join())
  }
}
