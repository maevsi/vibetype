import type { Client } from '@urql/core'
import type { Ref } from 'vue'
import { isEqual } from 'ufo'

import { graphql } from '~~/gql/generated'

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
// the page load
export const syncLocaleToOwnContactLanguage = async () => {
  const store = useStore()
  const { $urql } = useNuxtApp()
  const signedInAccountId = store.signedInAccountId

  if (!signedInAccountId) {
    return
  }

  try {
    const ownContact = await getOwnContact({
      $urql,
      accountId: signedInAccountId,
    })

    if (!ownContact?.language) {
      return
    }

    const route = useRoute()
    const switchLocalePath = useSwitchLocalePath()
    const targetPath = switchLocalePath(ownContact.language)

    if (!targetPath || isEqual(targetPath, route.fullPath)) {
      return
    }

    await navigateTo(targetPath, { replace: true })
  } catch (error) {
    console.error('Syncing the locale to the account language failed:', error)
  }
}
