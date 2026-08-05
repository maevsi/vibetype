<template>
  <AppIconPreferenceFormatConference
    v-if="name === 'conference'"
    :class="classProps"
    :title="t('conference')"
  />
  <AppIconPreferenceFormatDemonstration
    v-else-if="name === 'demo'"
    :class="classProps"
    :title="t('demonstration')"
  />
  <AppIconPreferenceFormatExhibition
    v-else-if="name === 'exhibition'"
    :class="classProps"
    :title="t('exhibition')"
  />
  <AppIconPreferenceFormatFestival
    v-else-if="name === 'festival'"
    :class="classProps"
    :title="t('festival')"
  />
  <AppIconPreferenceFormatHackathon
    v-else-if="name === 'hackathon'"
    :class="classProps"
    :title="t('hackathon')"
  />
  <AppIconPreferenceFormatLecture
    v-else-if="name === 'lecture'"
    :class="classProps"
    :title="t('lecture')"
  />
  <AppIconPreferenceFormatLivePerformance
    v-else-if="name === 'live-performance'"
    :class="classProps"
    :title="t('livePerformance')"
  />
  <AppIconPreferenceFormatMeetup
    v-else-if="name === 'meetup'"
    :class="classProps"
    :title="t('meetup')"
  />
  <AppIconPreferenceFormatParty
    v-else-if="name === 'party'"
    :class="classProps"
    :title="t('party')"
  />
  <AppIconPreferenceFormatSeminar
    v-else-if="name === 'seminar'"
    :class="classProps"
    :title="t('seminar')"
  />
  <AppIconPreferenceFormatWorkshop
    v-else-if="name === 'workshop'"
    :class="classProps"
    :title="t('workshop')"
  />
  <AppIconPreferenceOther v-else :class="classProps" :title="t('other')" />
</template>

<script setup lang="ts">
import type { HtmlHTMLAttributes } from 'vue'

const { class: classProps = undefined, name } = defineProps<{
  class?: HtmlHTMLAttributes['class']
  name: string
}>()

const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  conference: Konferenz
  demonstration: Demonstration
  exhibition: Ausstellung
  festival: Festival
  hackathon: Hackathon
  lecture: Vortrag
  livePerformance: Live-Auftritt
  meetup: Meetup
  other: Andere
  party: Party
  seminar: Seminar
  workshop: Workshop
en:
  conference: Conference
  demonstration: Demonstration
  exhibition: Exhibition
  festival: Festival
  hackathon: Hackathon
  lecture: Lecture
  livePerformance: Live Performance
  meetup: Meetup
  other: Other
  party: Party
  seminar: Seminar
  workshop: Workshop
</i18n>
