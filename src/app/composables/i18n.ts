import type { NuxtApp } from '#app'
import type { Client } from '@urql/core'
import { createRequest } from '@urql/core'
import type { Ref } from 'vue'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
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
// the caller's awaits, where neither can be resolved from the current context;
// resolves to whether the account has a language, which then wins over the
// one `detectLanguageFromQuery` would detect
export const syncLocaleToOwnContactLanguage = async ({
  nuxtApp,
  store,
}: {
  nuxtApp: NuxtApp
  store: ReturnType<typeof useStore>
}) => {
  const signedInAccountId = store.signedInAccountId

  if (!signedInAccountId) {
    return false
  }

  try {
    const ownContact = await getOwnContact({
      $urql: nuxtApp.$urql,
      accountId: signedInAccountId,
    })
    const language = ownContact?.language

    if (!language) {
      return false
    }

    // the navigation composables resolve the nuxt instance themselves, so they
    // need to run within an active nuxt context
    await nuxtApp.runWithContext(async () => {
      const route = useRoute()
      const switchLocalePath = useSwitchLocalePath()
      // without dropping the mark here, `detectLanguageFromQuery` would have
      // to redirect a second time
      const targetPath = getPathWithoutLanguageDetection(
        switchLocalePath(language),
      )

      if (!targetPath || isEqual(targetPath, route.fullPath)) {
        return
      }

      await navigateTo(targetPath, { replace: true })
    })

    return true
  } catch (error) {
    console.error('Syncing the locale to the account language failed:', error)
    return false
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

// a link that carries the `language=auto` query (e.g. a QR code on a conference
// banner) opens in the visitor's language, whatever the locale of the encoded
// url is; the module's own detection only redirects at the root (see
// `src/config/modules/i18n.ts`), so this runs it on every url; the redirect
// drops the mark from the url
export const detectLanguageFromQuery = async ({
  nuxtApp,
  route,
}: {
  nuxtApp: NuxtApp
  route: RouteLocationNormalizedLoaded
}) => {
  await nuxtApp.runWithContext(async () => {
    const { language: languageQuery, ...remainingQuery } = route.query

    if ([languageQuery].flat()[0] !== 'auto') {
      return
    }

    const { $i18n } = nuxtApp
    // the same precedence as the module's own detection; on the server the
    // module reads the stored language from the request's cookie header, so
    // the locale it writes into the cookie during this request is not read
    // back here
    // the module only returns a stored or browser language that is one of the
    // configured locales
    const detected = ($i18n.getLocaleCookie() ||
      $i18n.getBrowserLocale() ||
      $i18n.defaultLocale) as LOCALE_CODES
    const targetPath = useLocalePath()(
      { hash: route.hash, path: route.path, query: remainingQuery },
      detected,
    )

    if (!targetPath) {
      return
    }

    // a later visit to the root or the language switcher continues from the
    // detected language
    $i18n.setLocaleCookie(detected)

    await navigateTo(targetPath, { replace: true })
  })
}
