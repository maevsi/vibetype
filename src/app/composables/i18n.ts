import type { NuxtApp } from '#app'
import type { Client } from '@urql/core'
import { createRequest } from '@urql/core'
import type { Ref } from 'vue'
import { isEqual } from 'ufo'

import { graphql } from '~~/gql/generated'
import type { Language } from '~~/gql/generated/graphql'

const ownContactQuery = graphql(`
  query OwnContact($createdBy: UUID!) {
    allContacts(condition: { createdBy: $createdBy }, first: 1) {
      nodes {
        language
        rowId
      }
    }
  }
`)

const updateOwnContactLanguageMutation = graphql(`
  mutation UpdateOwnContactLanguage($input: UpdateContactByRowIdInput!) {
    updateContactByRowId(input: $input) {
      contact {
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
    .query(ownContactQuery, {
      createdBy: accountId,
    })
    .toPromise()

  if (ownContact.error) {
    throw new Error(getCombinedErrorMessages([ownContact.error]).join())
  }

  return ownContact.data?.allContacts?.nodes[0]
}

// the app should open in the language of the signed-in account, so every page
// load moves the session onto it; best-effort, as a failure must never block
// the page load; the caller passes the nuxt app and store, as this runs after
// the caller's awaits, where neither can be resolved from the current context
export const syncLocaleToOwnContactLanguage = async ({
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
    const language = ownContact?.language

    if (!language) {
      return
    }

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
// best-effort, as the locale is already switched and a failure must not undo it
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

  try {
    const ownContact = await getOwnContact({
      $urql: nuxtApp.$urql,
      accountId: signedInAccountId,
    })

    if (!ownContact) {
      return
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
  } catch (error) {
    console.error('Persisting the language to the contact failed:', error)
  }
}
