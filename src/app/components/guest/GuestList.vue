<template>
  <Loader :api>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col items-center gap-1">
        <AppButton
          v-if="guests.length"
          :aria-label="t('guestAdd')"
          :disabled="isGuestLimitReached"
          @click="add()"
        >
          {{ t('guestAdd') }}
          <template #prefix>
            <AppIconPlus />
          </template>
        </AppButton>
        <p class="text-center text-fg-2">
          {{
            t('guestsUsed', {
              amountCurrent: api.data.allGuests?.totalCount,
              amountMaximum: event.guestCountMaximum || '∞',
            })
          }}
        </p>
        <div
          v-if="isGuestLimitReached"
          class="text-center text-body-small text-fg-2"
        >
          {{ t('guestLimitReached') }}
          <AppButton
            v-if="event.accountByCreatedBy?.username"
            :aria-label="t('guestLimitRaise')"
            :to="
              localePath({
                name: 'event-edit-username-event_name',
                params: {
                  event_name: event.slug,
                  username: event.accountByCreatedBy.username,
                },
              })
            "
            variant="tertiary"
          >
            {{ t('guestLimitRaise') }}
          </AppButton>
        </div>
      </div>
      <template v-if="event && guests.length">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
          <AppInputSearch v-model="searchString" class="flex-1" />
          <Select v-model="feedbackFilter">
            <SelectTrigger
              :aria-label="t('feedbackFilter')"
              class="w-full sm:w-56"
            >
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
        </div>
        <GuestListActions
          v-if="guestsSelected.length"
          :event
          :guests="guestsSelected"
        />
        <AppTable v-if="guestsFiltered.length" class="border border-line">
          <AppTableHeader>
            <tr>
              <AppTableHead class="w-0" scope="col">
                <Checkbox
                  :aria-label="t('guestSelectAll')"
                  class="bg-surface"
                  :model-value="
                    guestsSelected.length === guestsFiltered.length
                      ? true
                      : guestsSelected.length
                        ? 'indeterminate'
                        : false
                  "
                  @update:model-value="selectAll($event === true)"
                />
              </AppTableHead>
              <AppTableHead scope="col">
                {{ t('contact') }}
              </AppTableHead>
              <AppTableHead scope="col">
                <span class="sr-only">{{ t('actions') }}</span>
              </AppTableHead>
            </tr>
          </AppTableHeader>
          <AppTableBody>
            <GuestListItem
              v-for="guest in guestsFiltered"
              :key="guest.rowId"
              :event
              :guest
              :selected="guestRowIdsSelected.includes(guest.rowId)"
              @update:selected="select(guest.rowId, $event)"
            />
          </AppTableBody>
        </AppTable>
        <AppEmptyState
          v-else
          :description="t('guestNoneFilteredDescription')"
          :title="t('guestNoneFilteredTitle')"
        >
          <AppButton :aria-label="t('guestShowAll')" @click="showAll">
            {{ t('guestShowAll') }}
          </AppButton>
        </AppEmptyState>
        <div
          v-if="api.data.allGuests?.pageInfo.hasNextPage"
          class="flex justify-center"
        >
          <AppButton
            :aria-label="t('globalShowMore')"
            @click="after = api.data.allGuests?.pageInfo.endCursor"
          >
            {{ t('globalShowMore') }}
          </AppButton>
        </div>
      </template>
      <div v-else class="flex flex-col items-center gap-2">
        <AppEmptyState
          class="w-full"
          :description="t('guestNoneDescription')"
          :title="t('guestNoneTitle')"
        >
          <template #icon><AppIconUserPlus /></template>
          <AppButton :aria-label="t('guestAdd')" @click="add()">
            {{ t('guestAdd') }}
            <template #prefix>
              <AppIconPlus />
            </template>
          </AppButton>
        </AppEmptyState>
        <p class="text-body-small text-fg-2">
          {{ t('hintInviteSelf') }}
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
      <AppDrawer
        v-model="isDrawerGuestOpen"
        class="sm:max-w-lg"
        direction="right"
        @close="onDrawerGuestClose"
      >
        <FormGuest
          :event
          :guest-contact-ids-existing="guests.map((i) => i.contactId)"
          @submit-success="onDrawerGuestClose"
        />
        <template #title>
          {{ t('contactSelect') }}
        </template>
        <template #description>
          {{ t('contactSelectDescription') }}
        </template>
      </AppDrawer>
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

import { graphql } from '~~/gql/generated'
import { InvitationFeedback } from '~~/gql/generated/graphcache'
import type {
  AllGuestsQueryVariables,
  EventItemFragment,
  GuestItemFragment,
} from '~~/gql/generated/graphql'
import { getContactItem, getContactSortKey } from '~~/shared/utils/contact'
import { getGuestItem } from '~~/shared/utils/guest'

const { event } = defineProps<{
  event: Pick<
    EventItemFragment,
    | 'accountByCreatedBy'
    | 'createdBy'
    | 'guestCountMaximum'
    | 'isPublished'
    | 'rowId'
    | 'slug'
  >
}>()

const colorMode = useColorMode()
const localePath = useLocalePath()
const { t } = useI18n()
const runtimeConfig = useRuntimeConfig()
const templateDoughnut = useTemplateRef<DoughnutController>('doughnut')

// data
const after = ref<string | null>()
const feedbackFilter = ref<string>('all')
const guestRowIdsSelected = ref<string[]>([])
const isDrawerGuestOpen = ref<boolean>()
const searchString = ref<string>('')
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
const guestsQuery = useApiQuery({
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
const showAll = () => {
  searchString.value = ''
  feedbackFilter.value = 'all'
}
const add = () => {
  guestsQuery.pause()
  isDrawerGuestOpen.value = true
}
const onDrawerGuestClose = () => {
  isDrawerGuestOpen.value = false
  after.value = undefined
  guestsQuery.resume()
}
const select = (guestRowId: string, isSelected?: boolean) => {
  guestRowIdsSelected.value = isSelected
    ? [...guestRowIdsSelected.value, guestRowId]
    : guestRowIdsSelected.value.filter((rowId) => rowId !== guestRowId)
}
const selectAll = (isSelected: boolean) => {
  guestRowIdsSelected.value = isSelected
    ? guestsFiltered.value.map((guest) => guest.rowId)
    : []
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
const getGuestContactSortKey = (
  guest: Pick<GuestItemFragment, 'contactByContactId'>,
) => {
  const contact = getContactItem(guest.contactByContactId)
  return contact ? getContactSortKey(contact) : ''
}
const guests = computed(
  () =>
    api.value.data.allGuests?.nodes
      .map((x) => getGuestItem(x))
      .filter(isNeitherNullNorUndefined)
      .sort((a, b) =>
        getGuestContactSortKey(a).localeCompare(getGuestContactSortKey(b)),
      ) || [],
)
const guestsFiltered = computed(() => {
  const normalizedSearch = searchString.value.toLowerCase().trim()
  const searchStringParts = normalizedSearch.split(/\s+/).filter(Boolean)
  const bySearch = searchStringParts.length
    ? guests.value.filter((guest) =>
        searchStringParts.some((searchStringPart) =>
          getGuestContactSortKey(guest)
            .toLowerCase()
            .includes(searchStringPart),
        ),
      )
    : guests.value

  switch (feedbackFilter.value) {
    case 'all':
      return bySearch
    case 'none':
      return bySearch.filter((guest) => guest.feedback === null)
    default:
      return bySearch.filter((guest) => guest.feedback === feedbackFilter.value)
  }
})
// guests hidden by the search or filter stay out, so an action never touches a guest that is not visible
const isGuestLimitReached = computed(() =>
  event.guestCountMaximum && api.value.data.allGuests?.totalCount
    ? api.value.data.allGuests.totalCount >= event.guestCountMaximum
    : false,
)
const guestsSelected = computed(() =>
  guestsFiltered.value.filter((guest) =>
    guestRowIdsSelected.value.includes(guest.rowId),
  ),
)

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
  actions: Aktionen
  canceled: abgelehnt
  contact: Kontakt
  contactSelect: Kontakt auswählen
  contactSelectDescription: Durchsuche dein Kontaktbuch und wähle die Personen aus, die du einladen möchtest.
  feedback: Rückmeldungen
  feedbackFilter: Nach Rückmeldung filtern
  feedbackFilterAll: Alle
  guestAdd: Gäste hinzufügen
  guestLimitRaise: Limit erhöhen
  guestLimitReached: Das Gästelimit ist erreicht. Erhöhe es in den Veranstaltungseinstellungen, um mehr Personen einzuladen.
  guestNoneDescription: Lade Personen aus deinem Kontaktbuch, per Nutzername oder per E-Mail-Adresse ein. Jeder Gast bekommt einen persönlichen Einladungslink.
  guestNoneFilteredDescription: Versuche es mit einem anderen Namen oder einer anderen Rückmeldung.
  guestNoneFilteredTitle: Keine passenden Gäste
  guestNoneTitle: Noch keine Gäste
  guestSelectAll: Alle angezeigten Gäste auswählen
  guestShowAll: Alle Gäste anzeigen
  guestsUsed: 'Gästekontingent genutzt: {amountCurrent} / {amountMaximum}'
  hintInviteSelf: 'Tipp: Lade dich zuerst selbst ein, um zu sehen, was deine Gäste bekommen.'
  noFeedback: keine Rückmeldung
en:
  accepted: accepted
  actions: Actions
  canceled: declined
  contact: Contact
  contactSelect: Select Contact
  contactSelectDescription: Search your contact book and select the people you want to invite.
  feedback: Guest responses
  feedbackFilter: Filter by feedback
  feedbackFilterAll: All
  guestAdd: Add guests
  guestLimitRaise: Raise limit
  guestLimitReached: Guest limit reached. Raise it in the event settings to invite more people.
  guestNoneDescription: Invite people from your contact book, by username, or by email address. Each guest gets a personal invitation link.
  guestNoneFilteredDescription: Try another name or response filter.
  guestNoneFilteredTitle: No guests match
  guestNoneTitle: No guests yet
  guestSelectAll: Select all shown guests
  guestShowAll: Show all guests
  guestsUsed: 'Guest quota used: {amountCurrent} / {amountMaximum}'
  hintInviteSelf: 'Tip: invite yourself first to see what your guests will get.'
  noFeedback: no response
</i18n>
