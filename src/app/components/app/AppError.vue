<template>
  <div class="flex flex-1 flex-col">
    <LayoutTopBar>
      <span class="sr-only">{{ statusName }}</span>
    </LayoutTopBar>
    <LayoutPage>
      <LayoutPageResult is-start-aligned :message type="error">
        <template #title>{{ title }}</template>
        <template #description>{{ t('description') }}</template>
        <pre
          v-if="isDev && error.stack"
          class="overflow-x-auto text-body-small whitespace-pre-wrap"
          >{{ error.stack }}</pre>
      </LayoutPageResult>
      <template #bottom>
        <AppButton
          :aria-label="t('retry')"
          class="w-full max-w-md"
          @click="reloadNuxtApp()"
        >
          {{ t('retry') }}
        </AppButton>
        <AppButton
          :aria-label="t('back')"
          class="w-full max-w-md data-[variant=secondary]:bg-surface"
          variant="secondary"
          @click="store.navigateBack()"
        >
          {{ t('back') }}
        </AppButton>
        <AppButton
          :aria-label="t('support')"
          size="small"
          :to="localePath('support-contact')"
          variant="tertiary"
        >
          <template #prefix>
            <AppIconHelp class="size-4" />
          </template>
          {{ t('support') }}
        </AppButton>
      </template>
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
import type { AppErrorInput } from '~~/shared/utils/error'

const { error } = defineProps<{
  error: AppErrorInput
}>()

// status code (prerendered error pages like `404.html` must answer with 200 to be written)
if (
  import.meta.server &&
  error.status &&
  !(import.meta.prerender && /^\/\d{3}\.html$/.test(useRequestURL().pathname))
) {
  setResponseStatus(error.status)
}
const { statusName } = await useHttpStatusCode({ status: error.status })

// template
const { t } = useI18n()
const localePath = useLocalePath()
const store = useStore()
const isDev = import.meta.dev
const title = computed(() => {
  switch (error.status) {
    case 403:
      return t('error403Title')
    case 404:
      return t('error404Title')
    case 429:
      return t('error429Title')
    case 500:
      return t('error500Title')
    default:
      return t('errorTitle')
  }
})
const message = computed(() => {
  const explanations: Partial<Record<number, string>> = {
    400: t('error400Description'),
    403: `${t('error403Description')} ${t('error403Hint')}`,
    404: `${t('error404Description')} ${t('error404Hint')}`,
    418: t('error418Description'),
    429: `${t('error429Description')} ${t('error429Hint')}`,
    500: `${t('error500Description')} ${t('error500Hint')}`,
  }
  const explanation =
    error.data?.vibetype ??
    explanations[error.status] ??
    `${t('errorDescription')} ${t('errorHint')}`

  return t('message', { explanation, status: error.status })
})
</script>

<i18n lang="yaml">
de:
  back: Zurück
  description: Hoppla! Etwas ist schiefgelaufen. Bitte versuche es später erneut oder kontaktiere den Support.
  error400Description: "@.upper:{'globalSiteName'} hat andere Daten empfangen als erwartet."
  error403Description: Du bist aktuell nicht berechtigt, auf diese Seite zuzugreifen.
  error403Hint: Bist du richtig angemeldet? Wenn dich ein Link zu dieser Seite geführt hat, kann er abgelaufen sein. Du kannst in diesem Fall einen neuen Link von der Person erfragen, die dir den Link gesendet hat.
  error403Title: Zugriff verweigert
  error404Description: "@.upper:{'globalSiteName'} kann nicht finden, wonach du suchst. Vielleicht wurde der Inhalt gelöscht oder dir fehlen Zugriffsberechtigungen."
  error404Hint: Du kannst überprüfen, ob du richtig angemeldet bist, und versuchen, über die Startseite an dein Ziel zu gelangen.
  error404Title: Seite nicht gefunden
  error418Description: Ich werd' keinen Kaffee machen.
  error429Description: Es scheint so als wärst du schneller unterwegs, als @.upper:{'globalSiteName'} erlaubt! 👮
  error429Hint: Lehn dich einen Moment zurück und versuch es erneut – oder melde @.upper:{'globalSiteName'} den Fehler, wenn du glaubst, dass er unbegründet ist.
  error429Title: Zu viele Anfragen
  error500Description: Sieht so aus als wäre etwas bei @.upper:{'globalSiteName'} nicht so wie es sein sollte.
  error500Hint: Bitte melde diesen Fehler.
  error500Title: Interner Serverfehler
  errorDescription: Sieht so aus als wäre etwas nicht so wie es sein sollte.
  errorHint: Bitte versuche es noch einmal und melde @.upper:{'globalSiteName'} diesen Fehler, wenn er weiterhin auftritt.
  errorTitle: Fehler
  message: '{explanation} (Fehlercode: {status})'
  retry: Erneut versuchen
  support: Support kontaktieren
en:
  back: Return back
  description: Oops! Something went wrong. Please try again later or contact support.
  error400Description: "@.upper:{'globalSiteName'} received unexpected data."
  error403Description: You're not authorized to access this page.
  error403Hint: Are you signed in correctly? If a link led you to this page, it may have expired. In that case, you can request a new link from the person who provided it to you.
  error403Title: Access denied
  error404Description: "@.upper:{'globalSiteName'} couldn't find what you're looking for. The content may have been deleted or you might lack the necessary permissions."
  error404Hint: Make sure you're logged in and try reaching your destination via the homepage.
  error404Title: Page not found
  error418Description: I won't make coffee.
  error429Description: It appears you're going faster than @.upper:{'globalSiteName'} allows! 👮
  error429Hint: Take a short break and try again – or report this issue to @.upper:{'globalSiteName'} if you think it shouldn't have occurred.
  error429Title: Too many requests
  error500Description: Looks like something went not the way it should at @.upper:{'globalSiteName'}.
  error500Hint: Please report this issue.
  error500Title: Internal server error
  errorDescription: Looks like something went not the way it should.
  errorHint: Please try again and report this issue to @.upper:{'globalSiteName'} if it keeps happening.
  errorTitle: Error
  message: '{explanation} (Error code: {status})'
  retry: Try again
  support: Contact support
</i18n>
