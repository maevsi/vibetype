<template>
  <ul class="flex flex-wrap gap-5">
    <li v-for="eventFormat in eventFormats" :key="eventFormat.rowId">
      <PreferenceElement
        v-if="eventFormat.label"
        :id="eventFormat.rowId"
        :name="eventFormat.label"
        :selected="modelValue"
        @click="toggle(eventFormat.rowId)"
      >
        <AppIconPreferenceFormatConference
          v-if="eventFormat.name === 'conference'"
        />
        <AppIconPreferenceFormatDemonstration
          v-else-if="eventFormat.name === 'demo'"
        />
        <AppIconPreferenceFormatExhibition
          v-else-if="eventFormat.name === 'exhibition'"
        />
        <AppIconPreferenceFormatFestival
          v-else-if="eventFormat.name === 'festival'"
        />
        <AppIconPreferenceFormatHackathon
          v-else-if="eventFormat.name === 'hackathon'"
        />
        <AppIconPreferenceFormatLecture
          v-else-if="eventFormat.name === 'lecture'"
        />
        <AppIconPreferenceFormatLivePerformance
          v-else-if="eventFormat.name === 'live-performance'"
        />
        <AppIconPreferenceFormatMeetup
          v-else-if="eventFormat.name === 'meetup'"
        />
        <AppIconPreferenceFormatParty
          v-else-if="eventFormat.name === 'party'"
        />
        <AppIconPreferenceFormatSeminar
          v-else-if="eventFormat.name === 'seminar'"
        />
        <AppIconPreferenceFormatWorkshop
          v-else-if="eventFormat.name === 'workshop'"
        />
        <AppIconPreferenceOther v-else-if="eventFormat.name === 'other'" />
      </PreferenceElement>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useQuery } from '@urql/vue'

import { graphql } from '~~/gql/generated'

const modelValue = defineModel<string[]>({ default: () => [] })

// template
const { t } = useI18n()
const translate = (nameKey: string) => {
  switch (nameKey) {
    case 'conference':
      return t('formatConference')
    case 'demo':
      return t('formatDemonstration')
    case 'exhibition':
      return t('formatExhibition')
    case 'festival':
      return t('formatFestival')
    case 'hackathon':
      return t('formatHackathon')
    case 'lecture':
      return t('formatLecture')
    case 'live-performance':
      return t('formatLivePerformance')
    case 'meetup':
      return t('formatMeetup')
    case 'other':
      return t('formatOther')
    case 'party':
      return t('formatParty')
    case 'seminar':
      return t('formatSeminar')
    case 'workshop':
      return t('formatWorkshop')
    default:
      return undefined
  }
}

// api data
const allEventFormatsQuery = useQuery({
  query: graphql(`
    query AllEventFormatsFormEvent {
      allEventFormats {
        nodes {
          id
          name
          rowId
        }
      }
    }
  `),
})
const api = await useApiData([allEventFormatsQuery])

const eventFormats = computed(() =>
  api.value.data.allEventFormats?.nodes
    .filter(isNeitherNullNorUndefined)
    .map((item) => ({ ...item, label: translate(item.name) }))
    .sort((a, b) => {
      if (a.name === 'other') return 1
      if (b.name === 'other') return -1
      return a.name.localeCompare(b.name)
    }),
)

// methods
const toggle = (formatId: string) => {
  modelValue.value = modelValue.value.includes(formatId)
    ? modelValue.value.filter((id) => id !== formatId)
    : [...modelValue.value, formatId]
}
</script>

<i18n lang="yaml">
de:
  formatConference: Konferenz
  formatDemonstration: Demonstration
  formatExhibition: Ausstellung
  formatFestival: Festival
  formatHackathon: Hackathon
  formatLecture: Vortrag
  formatLivePerformance: Live-Auftritt
  formatMeetup: Meetup
  formatOther: Andere
  formatParty: Party
  formatSeminar: Seminar
  formatWorkshop: Workshop
en:
  formatConference: Conference
  formatDemonstration: Demonstration
  formatExhibition: Exhibition
  formatFestival: Festival
  formatHackathon: Hackathon
  formatLecture: Lecture
  formatLivePerformance: Live Performance
  formatMeetup: Meetup
  formatOther: Other
  formatParty: Party
  formatSeminar: Seminar
  formatWorkshop: Workshop
</i18n>
