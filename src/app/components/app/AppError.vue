<template>
  <div class="flex flex-col items-center gap-4">
    <section
      :aria-labelledby="templateIdTitle"
      class="flex flex-col items-center text-center"
    >
      <h1 :id="templateIdTitle">{{ statusName }}</h1>
      <p>
        <span v-if="statusCode === 400">
          {{ t('error400Description', { siteName: t('globalSiteName') }) }}
        </span>
        <span v-else-if="statusCode === 403">
          {{ t('error403Description') }}
        </span>
        <span v-else-if="statusCode === 404">
          {{ t('error404Description', { siteName: t('globalSiteName') }) }}
        </span>
        <span v-else-if="statusCode === 418">
          {{ t('error418Description') }}
        </span>
        <span v-else-if="statusCode === 429">
          {{ t('error429Description', { siteName: t('globalSiteName') }) }}
        </span>
        <span v-else-if="statusCode === 500">
          {{ t('error500Description', { siteName: t('globalSiteName') }) }}
        </span>
        <br />
        <span v-if="statusCode === 400">
          {{ t('error400Hint') }}
        </span>
        <span v-else-if="statusCode === 403">
          {{ t('error403Hint') }}
        </span>
        <span v-else-if="statusCode === 404">
          {{ t('error404Hint') }}
        </span>
        <span v-else-if="statusCode === 429">
          {{ t('error429Hint') }}
        </span>
        <span v-else-if="statusCode === 500">
          {{ t('error500Hint') }}
        </span>
      </p>
    </section>
    <ButtonList>
      <ButtonSignIn v-if="[403, 404].includes(statusCode)" />
      <ButtonHome />
    </ButtonList>
    <!-- TODO: allow to report error -->
    <Card v-if="isInDevelopment && (description || stack)">
      <section :aria-labelledby="templateIdDetails" class="flex flex-col gap-4">
        <h2 :id="templateIdDetails">{{ t('details') }}</h2>
        <div>
          <span v-if="description" class="font-bold">
            {{ description }}
          </span>
          <!-- eslint-disable vue/no-v-html -->
          <div v-if="stack" v-html="stack" />
          <!-- eslint-enable vue/no-v-html -->
        </div>
      </section>
    </Card>
  </div>
</template>

<script setup lang="ts">
const { description, stack, statusCode } = defineProps<{
  description?: string
  stack?: string
  statusCode: number
}>()

const { t } = useI18n()

const isInDevelopment = import.meta.dev

// page
const { ssrContext } = useNuxtApp()
if (ssrContext && statusCode) {
  ssrContext.event.node.res.statusCode = statusCode
}

// accessibility
const templateIdTitle = useId()
const templateIdDetails = useId()

// status code
const { statusName } = await useHttpStatusCode({ statusCode })
</script>

<i18n lang="yaml">
de:
  details: Technische Details
  error400Description: '{siteName} hat andere Daten empfangen als erwartet.'
  error400Hint: Bitte versuche es noch einmal und melde diesen Fehler, wenn er weiterhin auftritt.
  error403Description: Du bist aktuell nicht berechtigt, auf diese Seite zuzugreifen.
  error403Hint: Bist du richtig angemeldet und hast du auf diesem Gerät einen Einladungscode eingegeben?
  error404Description: '{siteName} kann nicht finden, wonach du suchst. Vielleicht wurde der Inhalt gelöscht oder dir fehlen Zugriffsberechtigungen.'
  error404Hint: Du kannst überprüfen, ob du richtig angemeldet bist, und versuchen, über die Startseite an dein Ziel zu gelangen.
  error418Description: Ich werd' keinen Kaffee machen.
  error429Description: Es scheint so als wärst du schneller unterwegs, als {siteName} erlaubt! 👮
  error429Hint: Lehn dich einen Moment zurück und versuch es erneut – oder melde den Fehler, wenn du glaubst, dass er unbegründet ist.
  error500Description: Sieht so aus als wäre etwas bei {siteName} nicht so wie es sein sollte.
  error500Hint: Bitte melde diesen Fehler.
en:
  details: Technical details
  error400Description: '{siteName} received unexpected data.'
  error400Hint: Please try again and report this issue to {siteName} if it keeps happening.
  error403Description: You're not authorized to access this page.
  error403Hint: Are you signed in and have you entered an invitation code on this device?
  error404Description: "{siteName} couldn't find what you're looking for. The content may have been deleted or you might lack the necessary permissions."
  error404Hint: Make sure you're logged in and try reaching your destination via the homepage.
  error418Description: I won't make coffee.
  error429Description: It appears you're going faster than {siteName} allows! 👮
  error429Hint: Take a short break and try again – or report this issue to {siteName} if you think it shouldn't have occurred.
  error500Description: Looks like something went not the way it should at {siteName}.
  error500Hint: Please report this issue.
</i18n>
