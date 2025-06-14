<template>
  <LayoutPage>
    <div class="flex flex-col gap-4 text-center">
      <AppStepIndex :count="4" :index="2" />
      <TypographyH3>
        {{ t('title') }}
      </TypographyH3>
      <div>
        <ul class="flex flex-wrap justify-center gap-5">
          <li v-for="eventFormat in eventFormats" :key="eventFormat.id">
            <PreferenceElement
              v-if="eventFormat.label && eventFormat.label !== eventFormat.name"
              :id="eventFormat.id"
              :name="eventFormat.label"
              :selected="preferenceEventFormatIds"
              @click="togglePreferenceSelection(eventFormat.id)"
            >
              <AppIconPreferenceFormatConference
                v-if="eventFormat.name === 'conference'"
              />
              <AppIconPreferenceFormatDemo
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
              <AppIconPreferenceOther
                v-else-if="eventFormat.name === 'other'"
              />
            </PreferenceElement>
          </li>
        </ul>
      </div>
    </div>
    <template #bottom>
      <ButtonColored
        :aria-label="t('button')"
        class="w-full max-w-md"
        @click="emit('next')"
      >
        {{ t('button') }}
      </ButtonColored>
    </template>
  </LayoutPage>
</template>

<script setup lang="ts">
import { useAllEventFormatsQuery } from '~~/gql/documents/queries/event/eventFormatsAll'
import { useAllPreferenceEventFormatsQuery } from '~~/gql/documents/queries/preference/preferenceEventFormatsAll'
import { useCreatePreferenceEventFormatMutation } from '~~/gql/documents/mutations/preference/preferenceEventFormatCreate'
import { useDeletePreferenceEventFormatByAccountIdAndFormatIdMutation } from '~~/gql/documents/mutations/preference/preferenceEventFormatDeleteByAccountIdAndEventFormat'
import { getPreferenceEventFormatItem } from '~~/gql/documents/fragments/preferenceEventFormatItem'
import { getEventFormatItem } from '~~/gql/documents/fragments/eventFormatItem'

const emit = defineEmits<{
  next: []
}>()

// template
const { t } = useI18n()
const translate = (nameKey: string) => {
  switch (nameKey) {
    case 'conference':
      return t('formatConference')
    case 'demo':
      return t('formatDemo')
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
const allFormatsQuery = await zalgo(useAllEventFormatsQuery())
const allPreferenceEventFormatsQuery = await zalgo(
  useAllPreferenceEventFormatsQuery(),
)
const createPreferenceEventFormatMutation =
  useCreatePreferenceEventFormatMutation()
const deletePreferenceEventFormatByAccountIdAndFormatIdMutation =
  useDeletePreferenceEventFormatByAccountIdAndFormatIdMutation()
const api = getApiData([
  allFormatsQuery,
  allPreferenceEventFormatsQuery,
  createPreferenceEventFormatMutation,
  deletePreferenceEventFormatByAccountIdAndFormatIdMutation,
])

const eventFormats = computed(() =>
  api.value.data.allEventFormats?.nodes
    .map(getEventFormatItem)
    .filter(isNeitherNullNorUndefined)
    .map((item) => ({ ...item, label: translate(item.name) }))
    .sort((a, b) => {
      if (a.name === 'other') return 1
      if (b.name === 'other') return -1
      return a.name.localeCompare(b.name)
    }),
)
const preferenceEventFormatIds = computed(
  () =>
    api.value.data.allPreferenceEventFormats?.nodes
      .map(getPreferenceEventFormatItem)
      .filter(isNeitherNullNorUndefined)
      .map((item) => item.formatId) || [],
)

const store = useStore()
const togglePreferenceSelection = async (formatId: string) => {
  if (preferenceEventFormatIds.value.includes(formatId)) {
    await deletePreferenceEventFormatByAccountIdAndFormatIdMutation.executeMutation(
      {
        input: {
          accountId: store.signedInAccountId,
          formatId,
        },
      },
    )
  } else {
    await createPreferenceEventFormatMutation.executeMutation({
      input: {
        accountId: store.signedInAccountId,
        formatId,
      },
    })
  }
}

const modelError = defineModel<Error>('error')
watch(
  () => api.value.errors,
  (current) => {
    modelError.value = current?.length
      ? new Error(getCombinedErrorMessages(current)[0])
      : undefined
  },
)
</script>

<i18n lang="yaml">
de:
  button: Weiter
  formatConference: Konferenz
  formatDemo: Demonstration
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
  title: Wähle deine bevorzugten Event-Formate!
en:
  button: Next
  formatConference: Conference
  formatDemo: Demo
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
  title: Pick your favorite event formats!
</i18n>
