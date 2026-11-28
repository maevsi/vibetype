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
      <EventIngestOwnershipDrawer
        v-model="isOwnershipDrawerOpen"
        :submission
        @own="createEvent"
        @sent="onSent"
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
const isOwnershipDrawerOpen = ref(false)
const isNoEvent = ref(false)
const isReading = ref(false)
// asked for before the form opens, so nobody publishes someone else's event under their own account
const submission = ref<EventSubmission>()

// methods
const createEvent = async () => {
  if (!submission.value) return

  eventImported.value = await getEventImportedFromIngest(submission.value)
  await navigateTo(localePath('event-create'))
}
const onSent = async () => {
  toast.success(t('sent'))
  await navigateTo(localePath('dashboard'))
}
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

    submission.value = {
      description: output.description,
      end: output.end,
      location: output.location,
      name: output.name ?? '',
      sourceUrl: enteredUrl.value,
      start: output.start,
      url: output.url,
    }
    isOwnershipDrawerOpen.value = true
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
  description: 'Spar Dir das Abtippen: Eine externe KI liest die Seite aus und erstellt einen Entwurf, den Du vor dem Speichern prüfen kannst.'
  errorLimitReached: Damit die Plakatjagd für alle verfügbar bleibt, gibt es ein Tageslimit, und das hast Du erreicht. Versuche es morgen erneut.
  errorReadFailed: Der Link konnte nicht gelesen werden.
  errorUnreadable: Wir konnten diesen Link nicht öffnen. Prüfe, ob er zu einer öffentlichen Webseite führt.
  heading: Link zur Veranstaltung angeben
  hint: Seiten hinter einer Anmeldung, etwa Instagram oder Facebook, können wir nicht lesen. Versuche es dort mit einem Foto des Plakats.
  link: Link zur Veranstaltung
  linkPlaceholder: Link zur Veranstaltung eingeben
  next: Weiter
  noEvent: Auf dieser Seite wurde keine Veranstaltung gefunden. Probiere einen anderen Link.
  reading: Veranstaltung wird geladen…
  sent: Danke! Wir melden uns bei den Veranstaltenden.
  title: Plakatjagd
en:
  description: 'Skip the typing: an external AI reads the page and creates a draft you can review before saving.'
  errorLimitReached: To keep poster hunting available for everyone, there's a daily limit, and you've reached it. Try again tomorrow.
  errorReadFailed: The link could not be read.
  errorUnreadable: We couldn't open this link. Make sure it leads to a public web page.
  heading: Provide link to event
  hint: Pages behind a login, such as Instagram or Facebook, can't be read. Try a photo of the poster instead.
  link: Event link
  linkPlaceholder: Enter event link
  next: Next
  noEvent: No event found on this page. Try another link.
  reading: Fetching event data…
  sent: Thanks! We'll reach out to the organizers.
  title: Poster hunting
</i18n>
