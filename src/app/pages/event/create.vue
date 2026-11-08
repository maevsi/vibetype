<template>
  <div>
    <LayoutPageTitle :is-button-event-create-shown="false" :title />
    <FormEvent
      v-if="authentication.isSignedIn"
      :key="importCount"
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
import { getLocalTimeZone } from '@internationalized/date'

import { EventVisibility } from '~~/gql/generated/graphcache'
import type FormEvent from '~/components/form/FormEvent.vue'

const { t } = useI18n()
const alertError = useAlertError()
const authentication = useAuthentication()

// data
// kept in state, as signing in first leaves this page and the launch queue delivers a file only once
const eventImported = useState<
  InstanceType<typeof FormEvent>['$props']['event']
>(STATE_KEY_EVENT_IMPORTED)
// the form copies its event into its fields only when created, so each import needs a new one
const importCount = ref(0)
const title = t('title')

// initialization
useHeadDefault({ title })

// the manifest's `file_handlers` open calendar files here
onMounted(() => {
  window.launchQueue?.setConsumer(async ({ files: [fileHandle] }) => {
    if (!fileHandle) return

    const file = await fileHandle.getFile()
    const event = parseIcsEvent({
      ics: await file.text(),
      timeZone: getLocalTimeZone(),
    })

    if (!event) {
      alertError({ messageI18n: t('importFailed') })
      return
    }

    const name = event.name ?? ''
    const slugify = (await import('slugify')).default

    // without a `rowId` the form still creates a new event
    eventImported.value = {
      addressByAddressId: { name: event.locationName },
      description: event.description
        ? getHtmlFromText(event.description)
        : null,
      end: event.end ?? null,
      guestCountMaximum: null,
      isInPerson: event.isInPerson,
      isRemote: false,
      name,
      rowId: '',
      slug: slugify(name, { lower: true, strict: true }), // the form derives it only while the name is typed
      start: event.start ?? '',
      url: event.url ?? null,
      visibility: EventVisibility.Private,
    }
    importCount.value += 1
  })
})
onBeforeUnmount(() => {
  if (authentication.value.isSignedIn) eventImported.value = undefined
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
