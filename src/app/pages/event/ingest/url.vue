<template>
  <div class="flex flex-1 flex-col">
    <LayoutTopBar>{{ t('title') }}</LayoutTopBar>
    <LayoutPage>
      <form class="flex flex-col gap-6" @submit.prevent="readLink">
        <div class="flex flex-col gap-2">
          <h2 class="text-heading-medium">{{ t('heading') }}</h2>
          <p class="text-body text-fg-2">{{ t('description') }}</p>
        </div>
        <p
          v-if="isNoEvent"
          class="rounded-medium bg-surface-raised p-4 text-center text-fg-2"
          role="status"
        >
          {{ t('noEvent') }}
        </p>
        <div class="flex flex-col gap-2">
          <AppInput
            v-model="enteredUrl"
            :aria-describedby="templateIdHint"
            :aria-label="t('link')"
            :placeholder="t('linkPlaceholder')"
            required
            type="url"
          >
            <template #prefix>
              <AppIconLink />
            </template>
          </AppInput>
          <p :id="templateIdHint" class="text-caption text-fg-2">
            {{ t('hint') }}
          </p>
        </div>
        <AppButton
          :aria-label="t('next')"
          class="w-full"
          :disabled="!enteredUrl.trim()"
          :loading="isReading"
          type="submit"
        >
          {{ t('next') }}
          <template #loading>{{ t('reading') }}</template>
        </AppButton>
      </form>
      <EventIngestConsentDrawer
        v-model="isConsentDrawerOpen"
        @allowed="onConsentAllowed"
      />
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
import { FetchError } from 'ofetch'

const { t } = useI18n()
const alertError = useAlertError()
const { $csrfFetch } = useNuxtApp()
const localePath = useLocalePath()

// validation
await useSignInRequired()

// page
useHeadDefault({ title: t('title') })

// data
// the page records the consent itself, as a cookie ref of the drawer's own would not update this one
const { give: giveConsent, isGiven: isConsentGiven } = useEventIngestConsent()
const enteredUrl = ref('')
const eventImported = useState<EventImported>(STATE_KEY_EVENT_IMPORTED)
const isConsentDrawerOpen = ref(false)
const isNoEvent = ref(false)
const isReading = ref(false)

// methods
const onConsentAllowed = () => {
  giveConsent()
  readLink()
}
const readLink = async () => {
  if (!enteredUrl.value) return

  if (!isConsentGiven.value) {
    isConsentDrawerOpen.value = true
    return
  }

  isReading.value = true
  isNoEvent.value = false

  try {
    const { output } = await $csrfFetch('/api/model/event/ingest/url', {
      body: { url: enteredUrl.value },
      method: 'POST',
    })

    if (!output?.is_event) {
      isNoEvent.value = true
      return
    }

    eventImported.value = await getEventImportedFromIngest(output)
    await navigateTo(localePath('event-create'))
  } catch (error) {
    const status = error instanceof FetchError ? error.statusCode : undefined

    alertError({
      ...(error instanceof Error ? { error } : {}),
      messageI18n:
        status === 429
          ? t('errorLimitReached')
          : status === 400
            ? t('errorUnreadable')
            : t('errorReadFailed'),
    })
  } finally {
    isReading.value = false
  }
}

// template
const templateIdHint = useId()
</script>

<i18n lang="yaml">
de:
  description: Aus der Seite erstellen wir einen Entwurf, den Du vor dem Speichern prüfen kannst.
  errorLimitReached: Du hast heute die maximale Anzahl an Importen erreicht. Versuche es morgen erneut.
  errorReadFailed: Der Link konnte nicht gelesen werden.
  errorUnreadable: Der Link ist ungültig, nicht erreichbar, leitet auf eine nicht öffentliche Seite weiter oder führt nicht zu einer Webseite.
  heading: Link zur Veranstaltung angeben
  hint: Seiten, die eine Anmeldung erfordern oder nur mit JavaScript angezeigt werden, etwa Instagram oder Facebook, können nicht gelesen werden.
  link: Link zur Veranstaltung
  linkPlaceholder: Link zur Veranstaltung eingeben
  next: Weiter
  noEvent: Auf dieser Seite wurde keine Veranstaltung gefunden. Probiere einen anderen Link.
  reading: Veranstaltung wird geladen…
  title: Plakatjagd
en:
  description: We create a draft from the page that you can review before saving.
  errorLimitReached: You have reached today's maximum number of imports. Try again tomorrow.
  errorReadFailed: The link could not be read.
  errorUnreadable: The link is invalid, unreachable, redirects to a non-public page or does not lead to a web page.
  heading: Provide link to event
  hint: Pages that require a login or only render with JavaScript, such as Instagram or Facebook, cannot be read.
  link: Event link
  linkPlaceholder: Enter event link
  next: Next
  noEvent: No event found on this page. Try another link.
  reading: Fetching event data…
  title: Poster hunting
</i18n>
