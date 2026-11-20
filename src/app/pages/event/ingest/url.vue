<template>
  <div class="flex flex-1 flex-col">
    <LayoutTopBar>{{ t('title') }}</LayoutTopBar>
    <LayoutPage>
      <form class="flex flex-col gap-4" @submit.prevent="readLink">
        <p class="text-body-small text-fg-2">{{ t('description') }}</p>
        <p
          v-if="isNoEvent"
          class="rounded-medium bg-surface-raised p-4 text-center text-fg-2"
          role="status"
        >
          {{ t('noEvent') }}
        </p>
        <div class="flex flex-col gap-1">
          <label :for="templateIdInput">{{ t('link') }}</label>
          <input
            :id="templateIdInput"
            v-model="enteredUrl"
            class="w-full rounded-small text-fg-1"
            :placeholder="t('linkPlaceholder')"
            required
            type="url"
          />
          <p class="text-caption text-fg-2">{{ t('hint') }}</p>
        </div>
        <AppButton
          :aria-label="t('readLink')"
          class="self-end"
          :loading="isReading"
          type="submit"
        >
          {{ t('readLink') }}
        </AppButton>
      </form>
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
const enteredUrl = ref<string>()
const eventImported = useState<EventImported>(STATE_KEY_EVENT_IMPORTED)
const isNoEvent = ref(false)
const isReading = ref(false)

// methods
const readLink = async () => {
  if (!enteredUrl.value) return

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
const templateIdInput = useId()
</script>

<i18n lang="yaml">
de:
  description: Gib den Link zu einer Veranstaltungsseite ein. Daraus erstellen wir einen Entwurf, den Du vor dem Speichern prüfen kannst.
  errorLimitReached: Du hast heute die maximale Anzahl an Importen erreicht. Versuche es morgen erneut.
  errorReadFailed: Der Link konnte nicht gelesen werden.
  errorUnreadable: Der Link ist ungültig, nicht erreichbar, leitet auf eine nicht öffentliche Seite weiter oder führt nicht zu einer Webseite.
  hint: Seiten, die eine Anmeldung erfordern oder nur mit JavaScript angezeigt werden, etwa Instagram oder Facebook, können nicht gelesen werden.
  link: Link
  linkPlaceholder: https://example.com/veranstaltung
  noEvent: Auf dieser Seite wurde keine Veranstaltung gefunden. Probiere einen anderen Link.
  readLink: Link lesen
  title: Link laden
en:
  description: Enter the link to an event page. We create a draft from it that you can review before saving.
  errorLimitReached: You have reached today's maximum number of imports. Try again tomorrow.
  errorReadFailed: The link could not be read.
  errorUnreadable: The link is invalid, unreachable, redirects to a non-public page or does not lead to a web page.
  hint: Pages that require a login or only render with JavaScript, such as Instagram or Facebook, cannot be read.
  link: Link
  linkPlaceholder: https://example.com/event
  noEvent: No event found on this page. Try another link.
  readLink: Read link
  title: Ingest URL
</i18n>
