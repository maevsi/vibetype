<template>
  <div class="flex flex-1 flex-col">
    <LayoutTopBar>
      <span class="sr-only">{{ statusName }}</span>
    </LayoutTopBar>
    <LayoutPage>
      <LayoutPageResult is-start-aligned :message type="error">
        <template #title>{{ title }}</template>
        <template #description>{{ description }}</template>
        <pre
          v-if="isDev && error.stack"
          class="overflow-x-auto text-body-small whitespace-pre-wrap"
          >{{ error.stack }}</pre>
      </LayoutPageResult>
      <template #bottom>
        <AppButton
          v-if="isCsrfTokenInvalid"
          :aria-label="t('reload')"
          class="w-full max-w-md"
          :loading="isReloading"
          @click="reload"
        >
          {{ t('reload') }}
        </AppButton>
        <AppButton
          v-else-if="error.status === 404"
          :aria-label="t('dashboard')"
          class="w-full max-w-md"
          :to="localePath('dashboard')"
        >
          {{ t('dashboard') }}
        </AppButton>
        <AppButton
          v-else-if="error.status === 403 && !isSignedIn"
          :aria-label="t('signIn')"
          class="w-full max-w-md"
          :to="localePath('session-create')"
        >
          {{ t('signIn') }}
        </AppButton>
        <AppButton
          v-else-if="error.status === 403"
          :aria-label="t('back')"
          class="w-full max-w-md"
          @click="store.navigateBack()"
        >
          {{ t('back') }}
        </AppButton>
        <AppButton
          v-else
          :aria-label="t('retry')"
          class="w-full max-w-md"
          :loading="isReloading"
          @click="reload"
        >
          {{ t('retry') }}
        </AppButton>
        <AppButton
          v-if="error.status === 404"
          :aria-label="t('events')"
          class="w-full max-w-md data-[variant=secondary]:bg-surface"
          :to="localePath('event')"
          variant="secondary"
        >
          {{ t('events') }}
        </AppButton>
        <AppButton
          v-else-if="error.status === 403"
          :aria-label="t('dashboard')"
          class="w-full max-w-md data-[variant=secondary]:bg-surface"
          :to="localePath('dashboard')"
          variant="secondary"
        >
          {{ t('dashboard') }}
        </AppButton>
        <AppButton
          v-else-if="error.status !== 429"
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
const authentication = useAuthentication()
const isSignedIn = computed(() => authentication.value.isSignedIn)
const isDev = import.meta.dev
// the page unloads, so the state never resets
const isReloading = ref(false)
const reload = () => {
  isReloading.value = true
  reloadNuxtApp()
}
// nuxt-csurf's rejection, whose status text reaches the browser only in the body, as HTTP/2 drops reason phrases
const isCsrfTokenInvalid = computed(
  () =>
    error.status === 403 &&
    [error.statusText, error.data?.statusMessage].includes(
      'CSRF Token Mismatch',
    ),
)
const title = computed(() => {
  if (isCsrfTokenInvalid.value) return t('errorCsrfTitle')

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
const explanation = computed(() => {
  if (isCsrfTokenInvalid.value) return t('errorCsrfDescription')

  const explanations: Partial<Record<number, string>> = {
    400: t('error400Description'),
    403: `${t('error403Description')} ${t('error403Hint')}`,
    404: `${t('error404Description')} ${t('error404Hint')}`,
    418: t('error418Description'),
    429: `${t('error429Description')} ${t('error429Hint')}`,
    500: `${t('error500Description')} ${t('error500Hint')}`,
  }

  return (
    explanations[error.status] ?? `${t('errorDescription')} ${t('errorHint')}`
  )
})
// `data.vibetype` carries user facing text, while `message` may be technical, like Nuxt's own errors
const description = computed(() => error.data?.vibetype ?? explanation.value)
const message = computed(() =>
  t('message', {
    explanation: error.message || statusName.value,
    status: error.status,
  }),
)
</script>

<i18n lang="yaml">
de:
  back: Zurück
  dashboard: Zum Dashboard
  error400Description: "@.upper:{'globalSiteName'} konnte diese Anfrage nicht verstehen."
  error403Description: Du bist aktuell nicht berechtigt, auf diese Seite zuzugreifen.
  error403Hint: Bist Du richtig angemeldet? Wenn Dich ein Link zu dieser Seite geführt hat, kann er abgelaufen sein. Du kannst in diesem Fall einen neuen Link von der Person erfragen, die Dir den Link gesendet hat.
  error403Title: Zugriff verweigert
  error404Description: "@.upper:{'globalSiteName'} kann nicht finden, wonach Du suchst. Vielleicht wurde es gelöscht, oder Du hast keinen Zugriff darauf."
  error404Hint: Du kannst überprüfen, ob Du richtig angemeldet bist, und versuchen, über die Startseite an Dein Ziel zu gelangen.
  error404Title: Seite nicht gefunden
  error418Description: Ich werd' keinen Kaffee machen.
  error429Description: Damit @.upper:{'globalSiteName'} für alle flüssig läuft, begrenzen wir, wie schnell Anfragen kommen dürfen, und diese Grenze hast Du erreicht.
  error429Hint: Mach eine kurze Pause und versuche es dann erneut. Wenn Du glaubst, dass das nicht hätte passieren sollen, sag uns Bescheid.
  error429Title: Zu viele Anfragen
  error500Description: Bei uns ist etwas schiefgelaufen. Das liegt nicht an Dir.
  error500Hint: Bitte melde diesen Fehler.
  error500Title: Interner Serverfehler
  errorCsrfDescription: Diese Seite wurde vor einer Aktualisierung von @.upper:{'globalSiteName'} geladen. Lade sie neu, um fortzufahren.
  errorCsrfTitle: Seite veraltet
  errorDescription: Etwas hat nicht wie erwartet funktioniert.
  errorHint: Bitte versuche es noch einmal und melde @.upper:{'globalSiteName'} diesen Fehler, wenn er weiterhin auftritt.
  errorTitle: Fehler
  events: Veranstaltungen entdecken
  message: '{explanation} (Fehlercode: {status})'
  reload: Neu laden
  retry: Erneut versuchen
  signIn: Anmelden
  support: Support kontaktieren
en:
  back: Return back
  dashboard: Go to dashboard
  error400Description: "@.upper:{'globalSiteName'} couldn't understand this request."
  error403Description: You're not authorized to access this page.
  error403Hint: Are you signed in correctly? If a link led you to this page, it may have expired. In that case, you can request a new link from the person who provided it to you.
  error403Title: Access denied
  error404Description: "@.upper:{'globalSiteName'} couldn't find what you're looking for. It may have been deleted, or you don't have access to it."
  error404Hint: Make sure you're logged in and try reaching your destination via the homepage.
  error404Title: Page not found
  error418Description: I won't make coffee.
  error429Description: To keep @.upper:{'globalSiteName'} running smoothly for everyone, we limit how fast requests can come in, and you've hit that limit.
  error429Hint: Take a short break, then try again. If you think this shouldn't have happened, let us know.
  error429Title: Too many requests
  error500Description: Something went wrong on our side. It's not your fault.
  error500Hint: Please report this issue.
  error500Title: Internal server error
  errorCsrfDescription: This page was loaded before an update of @.upper:{'globalSiteName'}. Reload it to continue.
  errorCsrfTitle: Page outdated
  errorDescription: Something didn't work as expected.
  errorHint: Please try again and report this issue to @.upper:{'globalSiteName'} if it keeps happening.
  errorTitle: Error
  events: Discover events
  message: '{explanation} (Error code: {status})'
  reload: Reload
  retry: Try again
  signIn: Sign in
  support: Contact support
</i18n>
