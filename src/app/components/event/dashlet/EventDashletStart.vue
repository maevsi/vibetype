<template>
  <EventDashlet v-if="event.start">
    <IHeroiconsCalendar :title="t('start')" />
    <div class="flex flex-col">
      <AppButton
        :aria-label="t('iCalDownload')"
        is-link-colored
        @click="downloadIcal"
      >
        {{ eventStart.format('lll') }}
      </AppButton>
      <span>
        {{ t('fromNow', { content: eventStart.fromNow() }) }}
      </span>
    </div>
  </EventDashlet>
</template>

<script setup lang="ts">
import downloadJs from 'downloadjs'

import type {
  ContactItemFragment,
  EventItemFragment,
  GuestItemFragment,
} from '~~/gql/generated/graphql'

const {
  contact = undefined,
  event,
  invitation = undefined,
} = defineProps<{
  contact?: ContactItemFragment | null
  event: EventItemFragment
  invitation?: GuestItemFragment
}>()

const { t } = useI18n()
const dateTime = useDateTime()
const fireAlert = useFireAlert()

// methods
const downloadIcal = async () => {
  const response = await useFetch<string>('/api/model/event/ical', {
    body: {
      contact: contact,
      event: event,
      invitation: invitation,
    },
    method: 'POST',
  })
  const fileName = `${event.accountByCreatedBy ? `${event.accountByCreatedBy.username}_` : ''}${event.slug}.ics`

  if (!response.data.value) {
    return await fireAlert({
      level: 'error',
      text: t('iCalFetchError'),
    }) // TODO: add suggestion (https://github.com/maevsi/vibetype/issues/903) })
  }

  downloadJs(
    new Blob([response.data.value]), // Blob necessary for charset utf-8
    fileName,
    'text/calendar',
  )
}

// computations
const eventStart = computed(() => dateTime(event.start))
</script>

<i18n lang="yaml">
de:
  fromNow: ({content})
  iCalDownload: Als Kalendereintrag herunterladen
  # iCalHint: Die heruntergeladene Datei kann dann mit deiner Kalender-Anwendung geöffnet werden.
  iCalFetchError: iCal-Daten konnten nicht geladen werden!
  start: Beginn
en:
  fromNow: ({content})
  iCalDownload: Download for your calendar
  # iCalHint: You can open the downloaded file in your calendar app.
  iCalFetchError: Could not get iCal data!
  start: start
</i18n>
