<template>
  <div class="flex flex-1 flex-col">
    <LayoutPage>
      <AppErrorPanel
        :description
        :error-message="error.data?.vibetype"
        :heading="statusName"
        :hint
      >
        <FormAuthButton :aria-label="t('returnBack')" @click="navigateBack">
          {{ t('returnBack') }}
        </FormAuthButton>
        <FormAuthButton
          :aria-label="t('support')"
          variant="secondary"
          @click="navigateTo(localePath({ name: 'support-contact' }))"
        >
          {{ t('support') }}
        </FormAuthButton>
      </AppErrorPanel>
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const { error } = defineProps<{
  error: Partial<NuxtError> &
    Required<Pick<NuxtError, 'status'>> & {
      data?: { vibetype?: string }
    }
}>()

// status code
const { ssrContext } = useNuxtApp()
if (ssrContext && error.status) {
  ssrContext.event.node.res.statusCode = error.status
}
const { statusName } = await useHttpStatusCode({ status: error.status })

// template
const { t } = useI18n()
const localePath = useLocalePath()

// description
const description = computed(() => {
  switch (error.status) {
    case 400:
      return t('error400Description')
    case 403:
      return t('error403Description')
    case 404:
      return t('error404Description')
    case 418:
      return t('error418Description')
    case 429:
      return t('error429Description')
    case 500:
      return t('error500Description')
    default:
      return t('errorDescription')
  }
})

// hint
const hint = computed(() => {
  switch (error.status) {
    case 403:
      return t('error403Hint')
    case 404:
      return t('error404Hint')
    case 429:
      return t('error429Hint')
    case 500:
      return t('error500Hint')
    default:
      return t('errorHint')
  }
})

// navigation
const router = useRouter()
const navigateBack = () => router.back()
</script>

<i18n lang="yaml">
de:
  errorDescription: Sieht so aus als wäre etwas nicht so wie es sein sollte.
  errorHint: Bitte versuche es noch einmal und melde @.upper:{'globalSiteName'} diesen Fehler, wenn er weiterhin auftritt.
  error400Description: "@.upper:{'globalSiteName'} hat andere Daten empfangen als erwartet."
  error403Description: Du bist aktuell nicht berechtigt, auf diese Seite zuzugreifen.
  error403Hint: Bist du richtig angemeldet? Wenn dich ein Link zu dieser Seite geführt hat, kann er abgelaufen sein. Du kannst in diesem Fall einen neuen Link von der Person erfragen, die dir den Link gesendet hat.
  error404Description: "@.upper:{'globalSiteName'} kann nicht finden, wonach du suchst. Vielleicht wurde der Inhalt gelöscht oder dir fehlen Zugriffsberechtigungen."
  error404Hint: Du kannst überprüfen, ob du richtig angemeldet bist, und versuchen, über die Startseite an dein Ziel zu gelangen.
  error418Description: Ich werd' keinen Kaffee machen.
  error429Description: Es scheint so als wärst du schneller unterwegs, als @.upper:{'globalSiteName'} erlaubt! 👮
  error429Hint: Lehn dich einen Moment zurück und versuch es erneut – oder melde @.upper:{'globalSiteName'} den Fehler, wenn du glaubst, dass er unbegründet ist.
  error500Description: Sieht so aus als wäre etwas bei @.upper:{'globalSiteName'} nicht so wie es sein sollte.
  error500Hint: Bitte melde diesen Fehler.
  returnBack: Zurück
  support: Support kontaktieren
en:
  errorDescription: Looks like something went not the way it should.
  errorHint: Please try again and report this issue to @.upper:{'globalSiteName'} if it keeps happening.
  error400Description: "@.upper:{'globalSiteName'} received unexpected data."
  error403Description: You're not authorized to access this page.
  error403Hint: Are you signed in correctly? If a link led you to this page, it may have expired. In that case, you can request a new link from the person who provided it to you.
  error404Description: "@.upper:{'globalSiteName'} couldn't find what you're looking for. The content may have been deleted or you might lack the necessary permissions."
  error404Hint: Make sure you're logged in and try reaching your destination via the homepage.
  error418Description: I won't make coffee.
  error429Description: It appears you're going faster than @.upper:{'globalSiteName'} allows! 👮
  error429Hint: Take a short break and try again – or report this issue to @.upper:{'globalSiteName'} if you think it shouldn't have occurred.
  error500Description: Looks like something went not the way it should at @.upper:{'globalSiteName'}.
  error500Hint: Please report this issue.
  returnBack: Return back
  support: Contact support
</i18n>
