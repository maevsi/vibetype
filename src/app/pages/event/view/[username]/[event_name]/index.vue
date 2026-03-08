<template>
  <LoaderIndicatorPing v-if="api.isFetching" />
  <AppError
    v-else-if="!account"
    :error="{ message: t('errorAccountMissing'), status: 404 }"
  />
  <AppError
    v-else-if="!event"
    :error="{ message: t('errorEventMissing'), status: 404 }"
  />
  <div v-else class="flex flex-col gap-4">
    <ButtonList
      v-if="!routeQueryIc && event.createdBy === store.signedInAccountId"
      class="justify-center"
    >
      <ButtonColored
        :aria-label="t('guests')"
        :to="
          localePath({
            name: 'event-view-username-event_name-guest',
            params: {
              event_name: route.params.event_name,
              username: route.params.username,
            },
          })
        "
      >
        {{ t('guests') }}
        <template #prefix>
          <AppIconUsers />
        </template>
      </ButtonColored>
      <ButtonColored
        :aria-label="t('attendances')"
        :to="
          localePath({
            name: 'event-view-username-event_name-attendance',
            params: {
              event_name: route.params.event_name,
              username: route.params.username,
            },
          })
        "
      >
        {{ t('attendances') }}
        <template #prefix>
          <AppIconUserCheckBroken />
        </template>
      </ButtonColored>
      <ButtonColored
        :aria-label="t('settings')"
        :to="
          localePath({
            name: 'event-edit-username-event_name',
            params: {
              event_name: route.params.event_name,
              username: route.params.username,
            },
          })
        "
      >
        {{ t('settings') }}
        <template #prefix>
          <AppIconPencil />
        </template>
      </ButtonColored>
    </ButtonList>
    <div class="flex flex-col gap-4">
      <div>
        <div class="relative">
          <EventHeroImage :event />
          <div
            class="absolute inset-x-0 top-0 flex items-center justify-between p-2"
          >
            <div />
            <div>
              <!-- TODO: share & favorite button -->
              <template
                v-if="
                  store.signedInAccountId &&
                  event.createdBy !== store.signedInAccountId
                "
              >
                <AppDropdown>
                  <AppDropdownItem
                    variant="destructive"
                    @select="isOpenReportDrawer = true"
                  >
                    {{ t('report') }}
                  </AppDropdownItem>
                  <template #trigger>
                    <span
                      class="flex size-10.5 items-center justify-center rounded-full bg-(--semantic-base-surface-1)"
                    >
                      <AppIconMoreVertical />
                    </span>
                  </template>
                </AppDropdown>
                <EventReportDrawer
                  v-model:open="isOpenReportDrawer"
                  :account-id="store.signedInAccountId"
                  :event
                />
              </template>
            </div>
          </div>
        </div>
        <Card
          v-if="event?.accountByCreatedBy"
          class="flex flex-col items-stretch gap-6 rounded-t-none"
        >
          <div
            class="flex flex-col items-baseline justify-center md:flex-row md:gap-2"
          >
            <h1 class="m-0">
              {{ event.name }}
            </h1>
            <EventOwner link :username="event.accountByCreatedBy.username" />
          </div>
          <div class="flex flex-col gap-2">
            <EventDashletStart :event />
            <EventDashletDuration :event />
            <EventDashletVisibility :event with-text />
            <EventDashletAttendanceType :event />
            <EventDashletLocation :address :event />
            <EventDashletLink :event />
          </div>
          <AppMap
            v-if="positionInitial"
            class="h-42 rounded-xl"
            :events
            :position-initial
          />
        </Card>
      </div>
      <Card v-if="eventDescriptionTemplate">
        <!-- eslint-disable vue/no-v-html -->
        <LayoutProse class="w-full">
          <div v-html="eventDescriptionTemplate" />
        </LayoutProse>
        <!-- eslint-enable vue/no-v-html -->
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@urql/vue'
import { sanitize } from 'isomorphic-dompurify'

import { graphql } from '~~/gql/generated'

const { t } = useI18n()
const store = useStore()
const route = useRoute('event-view-username-event_name___en')
const localePath = useLocalePath()

const isOpenReportDrawer = ref<boolean>()

// api data
const eventQuery = useQuery({
  query: graphql(`
    query Event($slug: String!, $username: String!) {
      accountByUsername(username: $username) {
        eventsByCreatedBy(condition: { slug: $slug }) {
          nodes {
            accountByCreatedBy {
              id
              rowId
              username
            }
            addressByAddressId {
              id
              location {
                latitude
                longitude
              }
              name
              rowId
            }
            createdBy
            description
            end
            id
            isArchived
            isInPerson
            isRemote
            name
            rowId
            slug
            start
            url
            visibility
          }
        }
        id
        rowId
        username
      }
    }
  `),
  variables: {
    slug: route.params.event_name,
    username: route.params.username,
  },
})
const account = computed(() => eventQuery.data.value?.accountByUsername)
const events = computed(() => account.value?.eventsByCreatedBy.nodes)
const event = computed(() => (events.value ? events.value[0] : undefined))
const address = computed(() => event.value?.addressByAddressId)
const api = await useApiData([eventQuery])

// computations
const eventDescriptionTemplate = computed(() => {
  if (!event.value?.description) return

  const descriptionSanitized = sanitize(event.value.description, {
    ADD_ATTR: ['target'],
  })

  // TODO: split event description and guest invitation texts (https://github.com/maevsi/vibetype/issues/211)
  const descriptionNoTemplates = descriptionSanitized.replace(
    /{{\s*[\w.]+\s*}}/g,
    `[${t('errorTemplate')}]`,
  )

  return descriptionNoTemplates
})
const routeQueryIc = computed(() => route.query.ic)

// page
const description = computed(() =>
  event.value?.description
    ? getStringTruncated({
        string: getTextFromHtml(event.value.description),
        limit: 200,
        isLastWordIncluded: true,
      })
    : undefined,
)
const title = computed(() => {
  if (api.value.isFetching) return t('globalLoading')
  if (!event.value) {
    showAppError({ status: 404, message: 'Event unavailable' })
    return
  }

  return event.value.name
})
useHeadDefault({
  description,
  title,
})
defineOgImageComponent(
  'Event',
  {
    description,
  },
  {
    alt: t('ogImageAlt'),
  },
)

// map
const positionInitial = computed(() =>
  event.value?.addressByAddressId?.location?.latitude &&
  event.value?.addressByAddressId?.location?.longitude
    ? {
        latitude: event.value.addressByAddressId.location.latitude,
        longitude: event.value.addressByAddressId.location.longitude,
        zoomLevel: 18,
      }
    : undefined,
)
</script>

<i18n lang="yaml">
de:
  attendances: Check-in
  errorAccountMissing: Nutzerkonto nicht verfügbar
  errorEventMissing: Veranstaltung nicht verfügbar
  errorTemplate: Wert nur in der Einladung verfügbar
  guests: Gäste
  ogImageAlt: Das Vorschaubild für die Veranstaltung.
  report: Veranstaltung melden
  settings: Bearbeiten
en:
  attendances: Check in
  errorAccountMissing: Account not available
  errorEventMissing: Event not available
  errorTemplate: value available in invitation only
  guests: Guests
  ogImageAlt: The event's preview image.
  report: Report event
  settings: Edit
</i18n>
