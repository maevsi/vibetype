<template>
  <div>
    <LayoutPageTitle :is-button-event-create-shown="false" :title />
    <FormEvent
      v-if="authentication.isSignedIn"
      :key="eventImported ? 'imported' : 'blank'"
      :event="eventImported"
    />
    <LayoutCallToAction
      v-else
      :call-to-action="t('anonymousCta')"
      :call-to-action-description="t('anonymousCtaDescription')"
    />
  </div>
</template>

<script setup lang="ts">
import { EventVisibility } from '~~/gql/generated/graphcache'
import type FormEvent from '~/components/form/FormEvent.vue'

const { t } = useI18n()
const alertError = useAlertError()
const authentication = useAuthentication()
const timeZone = useTimeZone()

// data
const eventImported = ref<InstanceType<typeof FormEvent>['$props']['event']>()
const title = t('title')

// initialization
useHeadDefault({ title })

// the manifest's `file_handlers` open calendar files here
onMounted(() => {
  window.launchQueue?.setConsumer(async ({ files: [fileHandle] }) => {
    if (!fileHandle) return

    const file = await fileHandle.getFile()
    const event = parseIcsEvent({ ics: await file.text(), timeZone })

    if (!event) {
      alertError({ messageI18n: t('importFailed') })
      return
    }

    // without a `rowId` the form still creates a new event
    eventImported.value = {
      addressByAddressId: { name: event.locationName },
      description: event.description ?? null,
      end: event.end ?? null,
      guestCountMaximum: null,
      isInPerson: event.isInPerson,
      isRemote: false,
      name: event.name ?? '',
      rowId: '',
      slug: '',
      start: event.start ?? '',
      url: event.url ?? null,
      visibility: EventVisibility.Private,
    }
  })
})
</script>

<i18n lang="yaml">
de:
  anonymousCta: Finde ihn auf @.upper:{'globalSiteName'}
  anonymousCtaDescription: Du suchst einen liebevollen Ort für deine Veranstaltung?
  importFailed: Die Datei enthält keine Veranstaltung.
  title: Veranstaltung erstellen
en:
  anonymousCta: Find it on @.upper:{'globalSiteName'}
  anonymousCtaDescription: Are you looking for a loving place for your event?
  importFailed: The file contains no event.
  title: Create event
</i18n>
