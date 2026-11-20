<template>
  <div class="flex flex-1 flex-col">
    <LayoutTopBar>{{ title }}</LayoutTopBar>
    <LayoutPage>
      <FormEvent
        v-if="authentication.isSignedIn"
        :key="importCount"
        :event="eventImported"
      />
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
import { getLocalTimeZone } from '@internationalized/date'

const { t } = useI18n()
const alertError = useAlertError()
const authentication = useAuthentication()

// validation
await useSignInRequired()

// data
// kept in state, as signing in first leaves this page and the launch queue delivers a file only once
const eventImported = useState<EventImported>(STATE_KEY_EVENT_IMPORTED)
// the form copies its event into its fields only when created, so each import needs a new one
const importCount = ref(0)
const title = t('title')

// initialization
useHeadDefault({ title })

// the manifest's `file_handlers` open calendar files here through the import page
onMounted(() => {
  window.launchQueue?.setConsumer(async ({ files: [fileHandle] }) => {
    if (!fileHandle) return

    const file = await fileHandle.getFile()
    const { parseIcsEvent } = await import('#shared/utils/ical') // keeps the parser out of the page's bundle
    const event = parseIcsEvent({
      ics: await file.text(),
      timeZone: getLocalTimeZone(),
    })

    if (!event) {
      alertError({ messageI18n: t('importFailed') })
      return
    }

    eventImported.value = await getEventImported({
      description: event.description,
      end: event.end,
      isInPerson: event.isInPerson,
      locationName: event.locationName,
      name: event.name ?? '',
      start: event.start,
      url: event.url,
    })
    importCount.value += 1
  })
})
onBeforeUnmount(() => {
  if (authentication.value.isSignedIn) eventImported.value = undefined
})
</script>

<i18n lang="yaml">
de:
  importFailed: Die Datei enthält keine Veranstaltung.
  title: Veranstaltung erstellen
en:
  importFailed: The file contains no event.
  title: Create event
</i18n>
