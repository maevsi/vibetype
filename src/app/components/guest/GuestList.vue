<template>
  <Loader :api>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col items-center gap-1">
        <p v-if="event.guestCountMaximum" class="text-center text-fg-2">
          {{
            t('guestsUsed', {
              amountCurrent: api.data.allGuests?.totalCount,
              amountMaximum: event.guestCountMaximum,
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
      <AppLoaderProgress
        v-if="!isComplete"
        :count="guests.length"
        :total="api.data.allGuests?.totalCount ?? 0"
      />
      <template v-else-if="event && guests.length">
        <div class="flex items-center gap-2">
          <div class="min-w-0 flex-1">
            <AppInputSearch v-model="searchString" class="h-12" />
          </div>
          <AppButton
            :aria-label="t('guestAdd')"
            class="shrink-0"
            :disabled="isGuestLimitReached"
            size="icon"
            @click="add()"
          >
            <AppIconPlus />
          </AppButton>
        </div>
        <div
          :aria-label="t('feedbackFilter')"
          class="flex flex-wrap gap-2"
          role="group"
        >
          <AppButton
            v-for="filter in feedbackFilters"
            :key="filter.value"
            :aria-label="`${filter.label} ${filter.count}`"
            :aria-pressed="feedbackFilter === filter.value"
            size="small"
            :variant="feedbackFilter === filter.value ? 'primary' : 'secondary'"
            @click="feedbackFilter = filter.value"
          >
            {{ filter.label }}
            <span class="tabular-nums opacity-70">{{ filter.count }}</span>
          </AppButton>
        </div>
        <GuestListActions
          v-if="isSelectionEnabled && guestsSelected.length"
          :guests="guestsSelected"
        />
        <template v-if="guestsFiltered.length">
          <AppSelectionItem v-if="isSelectionEnabled" class="items-center px-2">
            <template #control="ariaAttributes">
              <Checkbox
                v-bind="ariaAttributes"
                :model-value="
                  guestsSelected.length === guestsFiltered.length
                    ? true
                    : guestsSelected.length
                      ? 'indeterminate'
                      : false
                "
                @update:model-value="selectAll($event === true)"
              />
            </template>
            <span class="text-body-small text-fg-2">
              {{ t('guestSelectAll', { count: guestsFiltered.length }) }}
            </span>
          </AppSelectionItem>
          <AppList>
            <GuestListItem
              v-for="guest in guestsRendered"
              :key="guest.rowId"
              :event
              :guest
              :selected="guestRowIdsSelected.includes(guest.rowId)"
              @update:selected="select(guest.rowId, $event)"
            />
          </AppList>
          <div
            v-if="guestsRendered.length < guestsFiltered.length"
            :key="limit"
            ref="sentinel"
          />
        </template>
        <AppEmptyState
          v-else
          :description="t('guestNoneFilteredDescription')"
          :title="t('guestNoneFilteredTitle')"
        >
          <AppButton :aria-label="t('guestShowAll')" @click="showAll">
            {{ t('guestShowAll') }}
          </AppButton>
        </AppEmptyState>
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
import { refDebounced } from '@vueuse/core'

import { graphql } from '~~/gql/generated'
import { InvitationFeedback } from '~~/gql/generated/graphcache'
import type {
  AllGuestsQueryVariables,
  EventItemFragment,
  GuestItemFragment,
} from '~~/gql/generated/graphql'
import {
  getContactItem,
  getContactSearchText,
  getContactSortKey,
  isSearchTextMatch,
} from '~~/shared/utils/contact'
import { getGuestItem } from '~~/shared/utils/guest'

const { event } = defineProps<{
  event: Pick<
    EventItemFragment,
    'accountByCreatedBy' | 'createdBy' | 'slug' | 'guestCountMaximum' | 'rowId'
  >
}>()

const localePath = useLocalePath()
const isSelectionEnabled = useFeatureFlags().isFeatureEnabled('guest-selection')
const { t } = useI18n()

// data
const after = ref<string | null>()
const feedbackFilter = ref<string>('all')
const guestRowIdsSelected = ref<string[]>([])
const isDrawerGuestOpen = ref<boolean>()
const searchString = ref<string>('')
const searchStringDebounced = refDebounced(searchString, 200)

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
const isFeedbackFilterMatch = (
  guest: Pick<GuestItemFragment, 'feedback'>,
  filter: string,
) =>
  filter === 'all' ||
  (filter === 'none' ? guest.feedback === null : guest.feedback === filter)
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

// computations
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
// the search text is built once per data change instead of once per keystroke
const guestsIndexed = computed(() =>
  guests.value.map((guest) => {
    const contact = getContactItem(guest.contactByContactId)
    return { guest, searchText: contact ? getContactSearchText(contact) : '' }
  }),
)
// the counts follow the search, so each one tells how many guests its filter would show
const guestsSearched = computed(() =>
  searchStringDebounced.value.trim()
    ? guestsIndexed.value
        .filter(({ searchText }) =>
          isSearchTextMatch(searchText, searchStringDebounced.value),
        )
        .map(({ guest }) => guest)
    : guests.value,
)
const feedbackFilters = computed(() =>
  [
    { label: t('feedbackFilterAll'), value: 'all' },
    { label: t('feedbackFilterAccepted'), value: InvitationFeedback.Accepted },
    { label: t('feedbackFilterCanceled'), value: InvitationFeedback.Canceled },
    { label: t('feedbackFilterNone'), value: 'none' },
  ].map((filter) => ({
    ...filter,
    count: guestsSearched.value.filter((guest) =>
      isFeedbackFilterMatch(guest, filter.value),
    ).length,
  })),
)
const guestsFiltered = computed(() =>
  guestsSearched.value.filter((guest) =>
    isFeedbackFilterMatch(guest, feedbackFilter.value),
  ),
)
const { limit, sentinel } = useRenderLimit([
  searchStringDebounced,
  feedbackFilter,
])
const guestsRendered = computed(() =>
  guestsFiltered.value.slice(0, limit.value),
)
const isGuestLimitReached = computed(() =>
  event.guestCountMaximum && api.value.data.allGuests?.totalCount
    ? api.value.data.allGuests.totalCount >= event.guestCountMaximum
    : false,
)
// guests hidden by the search or filter stay out, so an action never touches a guest that is not visible
const guestsSelected = computed(() =>
  guestsFiltered.value.filter((guest) =>
    guestRowIdsSelected.value.includes(guest.rowId),
  ),
)

// lifecycle
// Sorting, searching, filtering and counting happen in the client, which needs every page to be complete.
const isComplete = usePagesAll(after, () => api.value.data.allGuests?.pageInfo)
useRowHighlight('guest', isComplete, (rowId) => {
  const index = guestsFiltered.value.findIndex((guest) => guest.rowId === rowId)
  if (index >= limit.value) limit.value = index + 1
})
</script>

<i18n lang="yaml">
de:
  contactSelect: Kontakt auswählen
  contactSelectDescription: Durchsuche Dein Kontaktbuch und wähle die Personen aus, die Du einladen möchtest.
  feedbackFilter: Nach Rückmeldung filtern
  feedbackFilterAccepted: Zugesagt
  feedbackFilterAll: Alle
  feedbackFilterCanceled: Abgesagt
  feedbackFilterNone: Keine Rückmeldung
  guestAdd: Gäste hinzufügen
  guestLimitRaise: Limit erhöhen
  guestLimitReached: Das Gästelimit ist erreicht. Erhöhe es in den Veranstaltungseinstellungen, um mehr Personen einzuladen.
  guestNoneDescription: Lade Personen aus Deinem Kontaktbuch, per Nutzername oder per E-Mail-Adresse ein. Alle Gäste bekommen einen persönlichen Einladungslink.
  guestNoneFilteredDescription: Versuche es mit einem anderen Namen oder einer anderen Rückmeldung.
  guestNoneFilteredTitle: Keine passenden Gäste
  guestNoneTitle: Noch keine Gäste
  guestSelectAll: Alle angezeigten auswählen ({count})
  guestShowAll: Alle Gäste anzeigen
  guestsUsed: 'Gästekontingent genutzt: {amountCurrent} / {amountMaximum}'
  hintInviteSelf: 'Tipp: Lade Dich zuerst selbst ein, um zu sehen, was Deine Gäste bekommen.'
en:
  contactSelect: Select Contact
  contactSelectDescription: Search your contact book and select the people you want to invite.
  feedbackFilter: Filter by response
  feedbackFilterAccepted: Accepted
  feedbackFilterAll: All
  feedbackFilterCanceled: Declined
  feedbackFilterNone: No response
  guestAdd: Add guests
  guestLimitRaise: Raise limit
  guestLimitReached: Guest limit reached. Raise it in the event settings to invite more people.
  guestNoneDescription: Invite people from your contact book, by username, or by email address. Each guest gets a personal invitation link.
  guestNoneFilteredDescription: Try another name or response filter.
  guestNoneFilteredTitle: No guests match
  guestNoneTitle: No guests yet
  guestSelectAll: Select all shown ({count})
  guestShowAll: Show all guests
  guestsUsed: 'Guest quota used: {amountCurrent} / {amountMaximum}'
  hintInviteSelf: 'Tip: invite yourself first to see what your guests will get.'
</i18n>
