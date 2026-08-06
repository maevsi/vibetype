<template>
  <component
    :is="format.component"
    :class="classProps"
    :title="format.title()"
  />
</template>

<script setup lang="ts">
import type { Component, HtmlHTMLAttributes } from 'vue'

import {
  AppIconPreferenceFormatConference,
  AppIconPreferenceFormatDemonstration,
  AppIconPreferenceFormatExhibition,
  AppIconPreferenceFormatFestival,
  AppIconPreferenceFormatHackathon,
  AppIconPreferenceFormatLecture,
  AppIconPreferenceFormatLivePerformance,
  AppIconPreferenceFormatMeetup,
  AppIconPreferenceFormatParty,
  AppIconPreferenceFormatSeminar,
  AppIconPreferenceFormatWorkshop,
  AppIconPreferenceOther,
} from '#components'

const { class: classProps = undefined, name } = defineProps<{
  class?: HtmlHTMLAttributes['class']
  name: string
}>()

const { t } = useI18n()

const formats: Record<string, { component: Component; title: () => string }> = {
  conference: {
    component: AppIconPreferenceFormatConference,
    title: () => t('conference'),
  },
  demo: {
    component: AppIconPreferenceFormatDemonstration,
    title: () => t('demonstration'),
  },
  exhibition: {
    component: AppIconPreferenceFormatExhibition,
    title: () => t('exhibition'),
  },
  festival: {
    component: AppIconPreferenceFormatFestival,
    title: () => t('festival'),
  },
  hackathon: {
    component: AppIconPreferenceFormatHackathon,
    title: () => t('hackathon'),
  },
  lecture: {
    component: AppIconPreferenceFormatLecture,
    title: () => t('lecture'),
  },
  'live-performance': {
    component: AppIconPreferenceFormatLivePerformance,
    title: () => t('livePerformance'),
  },
  meetup: {
    component: AppIconPreferenceFormatMeetup,
    title: () => t('meetup'),
  },
  party: {
    component: AppIconPreferenceFormatParty,
    title: () => t('party'),
  },
  seminar: {
    component: AppIconPreferenceFormatSeminar,
    title: () => t('seminar'),
  },
  workshop: {
    component: AppIconPreferenceFormatWorkshop,
    title: () => t('workshop'),
  },
}

const format = computed(
  () =>
    formats[name] ?? {
      component: AppIconPreferenceOther,
      title: () => t('other'),
    },
)
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
