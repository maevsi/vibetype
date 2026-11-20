import type { NuxtApp } from '#app'
import type { Client } from '@urql/core'
import { createRequest } from '@urql/core'
import type { Ref } from 'vue'
import type { RouteLocationNormalizedLoaded } from 'vue-router'

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

// the account's language is the token's `language` claim, which the sign-in
// and every token refresh set; it becomes the stored language, which the
// module's detection at the root and `detectLanguageFromQuery` follow, while a
// url that names its locale keeps it, as redirecting it would break shared
// links and drop the files a launched app receives; a token without the claim
// leaves the stored language as it is
export const syncLocaleCookieToTokenLanguage = ({
  nuxtApp,
  store,
}: {
  nuxtApp: NuxtApp
  store: ReturnType<typeof useStore>
}) => {
  const language = store.jwtPayload?.language ?? undefined

  if (language) nuxtApp.$i18n.setLocaleCookie(language)

  return language
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

  // the token's `language` claim only changes at a refresh, and the server
  // picks the root's language from it; best-effort, as the language is saved
  // and the next session restore refreshes the token anyway
  try {
    const { jwtPayload } = await nuxtApp.$csrfFetch('/api/model/jwt', {
      body: { id: store.jwtPayload?.jti },
      method: 'PUT',
    })

    if (jwtPayload) store.jwtSet(jwtPayload)
  } catch (error) {
    console.error('JWT update failed:', error)
  }
}

// a link that carries the `language=auto` query (e.g. a QR code on a conference
// banner) opens in the visitor's language, whatever the locale of the encoded
// url is; the module's own detection only redirects at the root (see
// `src/config/modules/i18n.ts`), so this runs it on every url; the redirect
// drops the mark from the url
export const detectLanguageFromQuery = async ({
  language,
  nuxtApp,
  route,
}: {
  language?: Language
  nuxtApp: NuxtApp
  route: RouteLocationNormalizedLoaded
}) => {
  await nuxtApp.runWithContext(async () => {
    const { language: languageQuery, ...remainingQuery } = route.query

    if ([languageQuery].flat()[0] !== 'auto') {
      return
    }

    const { $i18n } = nuxtApp
    // the same precedence as the module's own detection, behind the signed-in
    // account's language; on the server the module reads the stored language
    // from the request's cookie header, so the locale it writes into the
    // cookie during this request is not read back here
    // the module only returns a stored or browser language that is one of the
    // configured locales
    const detected = (language ||
      $i18n.getLocaleCookie() ||
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
