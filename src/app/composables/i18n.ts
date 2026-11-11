import type { NuxtApp } from '#app'
import type { Client } from '@urql/core'
import { createRequest } from '@urql/core'
import { parse } from 'cookie-es'
import type { Ref } from 'vue'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import { isEqual } from 'ufo'

import { graphql } from '~~/gql/generated'
import type { Language } from '~~/gql/generated/graphql'
import { I18N_COOKIE_NAME } from '~~/node/static'

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

// a link that carries the `language=auto` query (e.g. a QR code on a conference banner)
// opens in the visitor's language, whatever the locale of the encoded url is; the module's
// own detection only redirects at the root (see `src/config/modules/i18n.ts`), so this runs
// it on every url. The mark is consumed by the redirect, so it does not survive in the url
// of the target page.
export const detectLanguageFromQuery = async ({
  nuxtApp,
  route,
}: {
  nuxtApp: NuxtApp
  route: RouteLocationNormalizedLoaded
}) => {
  await nuxtApp.runWithContext(async () => {
    const languageQuery = Array.isArray(route.query.language)
      ? route.query.language[0]
      : route.query.language
    if (languageQuery !== 'auto') {
      return
    }

    const i18nConfig = nuxtApp.$config.public.i18n
    // the i18n module writes the current locale into its cookie during this very request, so the stored language is read from the request, which carries only what the visitor sent
    const storedLanguage = import.meta.server
      ? parse(useRequestHeaders(['cookie']).cookie ?? '')[I18N_COOKIE_NAME]
      : useCookie(I18N_COOKIE_NAME).value
    const configuredLocales = (i18nConfig?.locales ?? []).map(
      (configuredLocale) =>
        typeof configuredLocale === 'string'
          ? configuredLocale
          : configuredLocale.code,
    )
    // the same precedence as the i18n module's own detection: the stored language, then the browser language, then the default locale
    const detected =
      (storedLanguage && configuredLocales.includes(storedLanguage)
        ? storedLanguage
        : undefined) ||
      useBrowserLocale() ||
      i18nConfig?.defaultLocale

    if (!detected) {
      return
    }

    const { language: _languageQuery, ...remainingQuery } = route.query
    // all three sources only ever yield a configured locale: the stored language is checked against the configured locales above, the browser locale against the supported ones by the module, and the default locale is one of them
    // the localized route keeps the query and hash of the explicit route object, so the mark does not survive into the target url
    const targetPath = useLocalePath()(
      { hash: route.hash, path: route.path, query: remainingQuery },
      detected as LOCALE_CODES,
    )
    if (!targetPath) {
      return
    }

    // the detected language is remembered in the module's own cookie, with the same options as its detection (keep `cookieSecure` in `src/config/modules/i18n.ts` in sync); the nuxt cookie write goes straight to the request's response, which the redirect is built from, so it survives the skipped render
    const languageCookieOptions = {
      maxAge: 60 * 60 * 24 * 365,
      path: '/',
      sameSite: COOKIE_SAME_SITE,
      secure: process.env.NODE_ENV === 'production',
    }
    useCookie(I18N_COOKIE_NAME, languageCookieOptions).value = detected

    await navigateTo(targetPath, { replace: true })
  })
}
