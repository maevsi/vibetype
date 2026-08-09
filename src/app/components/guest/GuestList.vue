<template>
  <Loader :api>
    <div class="flex flex-col gap-4">
      <template v-if="event && guests.length">
        <Select v-model="feedbackFilter">
          <SelectTrigger :aria-label="t('feedbackFilter')" class="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{{ t('feedbackFilterAll') }}</SelectItem>
            <SelectItem :value="InvitationFeedback.Accepted">
              {{ t('accepted') }}
            </SelectItem>
            <SelectItem :value="InvitationFeedback.Canceled">
              {{ t('canceled') }}
            </SelectItem>
            <SelectItem value="none">{{ t('noFeedback') }}</SelectItem>
          </SelectContent>
        </Select>
        <LayoutTable
          v-if="guestsFiltered.length"
          class="border border-neutral-300 dark:border-neutral-600"
        >
          <LayoutThead>
            <tr>
              <LayoutTh scope="col">
                {{ t('contact') }}
              </LayoutTh>
              <LayoutTh scope="col" />
            </tr>
          </LayoutThead>
          <LayoutTbody>
            <GuestListItem
              v-for="guest in guestsFiltered"
              :key="guest.rowId"
              :event
              :guest
            />
          </LayoutTbody>
        </LayoutTable>
        <p v-else class="text-center">
          {{ t('guestNoneFiltered') }}
        </p>
        <div
          v-if="api.data.allGuests?.pageInfo.hasNextPage"
          class="flex justify-center"
        >
          <ButtonColored
            :aria-label="t('globalShowMore')"
            @click="after = api.data.allGuests?.pageInfo.endCursor"
          >
            {{ t('globalShowMore') }}
          </ButtonColored>
        </div>
      </template>
      <div v-else class="flex flex-col items-center gap-2">
        {{ t('guestNone') }}
        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ t('hintInviteSelf') }}
        </p>
      </div>
      <div class="flex flex-col items-center gap-1">
        <ButtonColored
          :aria-label="t('guestAdd')"
          :disabled="
            event.guestCountMaximum && api.data.allGuests?.totalCount
              ? api.data.allGuests.totalCount >= event.guestCountMaximum
              : false
          "
          @click="add()"
        >
          {{ t('guestAdd') }}
          <template #prefix>
            <AppIconPlus />
          </template>
        </ButtonColored>
        <p class="text-center text-gray-500 dark:text-gray-400">
          {{
            t('guestsUsed', {
              amountCurrent: api.data.allGuests?.totalCount,
              amountMaximum: event.guestCountMaximum || '∞',
            })
          }}
        </p>
      </div>
      <div v-if="api.data.allGuests?.totalCount">
        <h2>
          {{ t('feedback') }}
        </h2>
        <div class="m-auto w-3/4 sm:w-1/2 xl:w-1/3 2xl:w-1/4">
          <Doughnut
            v-if="!runtimeConfig.public.vio.isTesting"
            ref="doughnut"
            :data="dataComputed"
            :options
          />
        </div>
      </div>
      <Modal
        v-model="isModalGuestOpen"
        is-footer-hidden
        @close="onModalGuestClose"
      >
        <FormGuest
          :event
          :guest-contact-ids-existing="guests.map((i) => i.contactId)"
          @submit-success="onModalGuestClose"
        />
        <template #header>
          {{ t('contactSelect') }}
        </template>
      </Modal>
    </div>
  </Loader>
</template>

<script setup lang="ts">
import {
  ArcElement,
  CategoryScale,
  Chart,
  DoughnutController,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import { Doughnut } from 'vue-chartjs'

import { useQuery } from '@urql/vue'

import { graphql } from '~~/gql/generated'
import { InvitationFeedback } from '~~/gql/generated/graphcache'
import type {
  AllGuestsQueryVariables,
  EventItemFragment,
} from '~~/gql/generated/graphql'
import { getGuestItem } from '~~/shared/utils/guest'

const { event } = defineProps<{
  event: Pick<
    EventItemFragment,
    'accountByCreatedBy' | 'createdBy' | 'slug' | 'guestCountMaximum' | 'rowId'
  >
}>()

const colorMode = useColorMode()
const { t } = useI18n()
const runtimeConfig = useRuntimeConfig()
const templateDoughnut = useTemplateRef<DoughnutController>('doughnut')

// data
const after = ref<string | null>()
const feedbackFilter = ref<string>('all')
const isModalGuestOpen = ref<boolean>()
const options = {
  plugins: {
    legend: {
      labels: {
        font: {
          fontFamily:
            'Raleway Variable, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
          size: 16,
        },
      },
      onClick: () => {},
    },
  },
}

// api data
const guestsQuery = useQuery({
  query: graphql(`
    query AllGuests($after: Cursor, $eventId: UUID!, $first: Int!) {
      allGuests(
        after: $after
        condition: { eventId: $eventId }
        first: $first
      ) {
        nodes {
          ...GuestItem
        }
        pageInfo {
          hasNextPage
          endCursor
        }
        totalCount
      }
    }
  `),
  variables: computed<AllGuestsQueryVariables>(() => ({
    after: after.value,
    eventId: event.rowId,
    first: ITEMS_PER_PAGE_LARGE,
  })),
})
const api = await useApiData([guestsQuery])

// methods
const add = () => {
  guestsQuery.pause()
  isModalGuestOpen.value = true
}
const onModalGuestClose = () => {
  isModalGuestOpen.value = false
  after.value = undefined
  guestsQuery.resume()
}
const updateChart = () => {
  Chart.defaults.color = colorMode.value === 'dark' ? '#fff' : '#000'

  if (templateDoughnut.value?.chart) {
    templateDoughnut.value?.chart.update()
  }
}

// computations
const dataComputed = computed(() => {
  const datasetData = {
    accepted: 0,
    canceled: 0,
    none: 0,
  }

  if (guests.value) {
    for (const guest of guests.value) {
      switch (guest.feedback) {
        case InvitationFeedback.Accepted:
          datasetData.accepted += 1
          break
        case InvitationFeedback.Canceled:
          datasetData.canceled += 1
          break
        case null:
          datasetData.none += 1
          break
        default:
          console.error('Unexpected guest type.')
      }
    }
  }

  return {
    labels: [t('accepted'), t('canceled'), t('noFeedback')],
    datasets: [
      {
        data: Object.values(datasetData),
        backgroundColor: ['#00FF00', '#FF0000', '#888888'],
      },
    ],
  }
})
const guests = computed(
  () =>
    api.value.data.allGuests?.nodes
      .map((x) => getGuestItem(x))
      .filter(isNeitherNullNorUndefined) || [],
)
const guestsFiltered = computed(() => {
  switch (feedbackFilter.value) {
    case 'all':
      return guests.value
    case 'none':
      return guests.value.filter((guest) => guest.feedback === null)
    default:
      return guests.value.filter(
        (guest) => guest.feedback === feedbackFilter.value,
      )
  }
})

// lifecycle
watch(
  () => colorMode.value,
  (_currentValue, _oldValue) => updateChart(),
)
watch(
  () => templateDoughnut.value?.chart,
  (_currentValue, _oldValue) => updateChart(),
)

// initialization
Chart.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  DoughnutController,
  Title,
  Tooltip,
  Legend,
)
</script>

<i18n lang="yaml">
de:
  accepted: akzeptiert
  canceled: abgelehnt
  contact: Kontakt
  contactSelect: Kontakt auswählen
  feedback: Rückmeldungen
  feedbackFilter: Nach Rückmeldung filtern
  feedbackFilterAll: Alle
  hintInviteSelf: 'Tipp: du kannst dich auch zuerst selbst einladen'
  guestAdd: Gäste hinzufügen
  guestNone: Es wurde noch kein Gast hinzugefügt 😕
  guestNoneFiltered: Keine Gäste entsprechen diesem Filter 😕
  guestsUsed: 'Gästekontingent genutzt: {amountCurrent} / {amountMaximum}'
  noFeedback: keine Rückmeldung
en:
  accepted: accepted
  canceled: declined
  contact: Contact
  contactSelect: Select Contact
  feedback: Guest responses
  feedbackFilter: Filter by feedback
  feedbackFilterAll: All
  hintInviteSelf: 'Hint: you can also invite yourself first'
  guestAdd: Add guests
  guestNone: No guest has been added yet 😕
  guestNoneFiltered: No guests match this filter 😕
  guestsUsed: 'Guest quota used: {amountCurrent} / {amountMaximum}'
  noFeedback: no response
</i18n>
