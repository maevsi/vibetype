<template>
  <Loader :api>
    <AppError
      v-if="!account"
      :error="{ message: t('errorAccountMissing'), status: 404 }"
    />
    <AppError
      v-else-if="!event"
      :error="{ message: t('errorEventMissing'), status: 404 }"
    />
    <div v-else class="flex flex-1 flex-col">
      <!-- the event's name below is the page's heading -->
      <LayoutTopBar>
        <template #close>
          <div class="flex items-center gap-2">
            <EventShareButton
              class="flex size-12 items-center justify-center rounded-full bg-surface-raised"
              :event
            />
            <EventFavoriteButton
              class="flex size-12 items-center justify-center rounded-full bg-surface-raised"
              :event
            />
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
                    class="flex size-12 items-center justify-center rounded-full bg-surface-raised"
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
        </template>
      </LayoutTopBar>
      <LayoutPage>
        <div class="flex flex-col gap-6">
          <div class="relative">
            <EventHeroImage class="h-64 rounded-large" :event />
            <div
              aria-hidden="true"
              class="absolute bottom-3 left-3 flex flex-col items-center rounded-medium bg-surface px-4 py-2"
            >
              <AppTime
                class="text-body-small text-link"
                :datetime="event.start"
                :options="{ month: 'short' }"
              />
              <AppTime
                class="text-headline text-fg-1"
                :datetime="event.start"
                :options="{ day: 'numeric' }"
              />
            </div>
          </div>
          <div v-if="event?.accountByCreatedBy" class="flex flex-col gap-1">
            <h1 class="m-0 text-title3">
              {{ event.name }}
            </h1>
            <EventOwner link :username="event.accountByCreatedBy.username" />
          </div>
          <AppButtonGroup
            v-if="!routeQueryIc && event.createdBy === store.signedInAccountId"
            class="grid grid-cols-3 gap-2 lg:gap-2"
          >
            <AppButton
              :aria-label="t('guests')"
              class="h-14 flex-col justify-center gap-1 rounded-medium text-body-small"
              size="none"
              :to="
                localePath({
                  name: 'event-view-username-event_name-guest',
                  params: {
                    event_name: route.params.event_name,
                    username: route.params.username,
                  },
                })
              "
              variant="secondary"
            >
              {{ t('guests') }}
              <template #prefix>
                <AppIconUsers />
              </template>
            </AppButton>
            <AppButton
              :aria-label="t('attendances')"
              class="h-14 flex-col justify-center gap-1 rounded-medium text-body-small"
              size="none"
              :to="
                localePath({
                  name: 'event-view-username-event_name-attendance',
                  params: {
                    event_name: route.params.event_name,
                    username: route.params.username,
                  },
                })
              "
              variant="secondary"
            >
              {{ t('attendances') }}
              <template #prefix>
                <AppIconUserCheckBroken />
              </template>
            </AppButton>
            <AppButton
              :aria-label="t('settings')"
              class="h-14 flex-col justify-center gap-1 rounded-medium text-body-small"
              size="none"
              :to="
                localePath({
                  name: 'event-edit-username-event_name',
                  params: {
                    event_name: route.params.event_name,
                    username: route.params.username,
                  },
                })
              "
              variant="secondary"
            >
              {{ t('settings') }}
              <template #prefix>
                <AppIconPencil />
              </template>
            </AppButton>
          </AppButtonGroup>
          <div v-if="event?.accountByCreatedBy" class="flex flex-col gap-6">
            <section class="flex flex-col gap-2">
              <h2 class="text-headline">{{ t('details') }}</h2>
              <div class="flex flex-col gap-2 text-fg-2">
                <EventDashletStart :event />
                <EventDashletDuration :event />
                <EventDashletVisibility :event with-text />
                <EventDashletAttendanceType :event />
                <EventDashletLink :event />
              </div>
            </section>
            <section v-if="isLocationVisible" class="flex flex-col gap-2">
              <h2 class="text-headline">{{ t('location') }}</h2>
              <EventDashletLocation :address class="text-fg-2" :event />
              <AppMap
                v-if="positionInitial"
                class="isolate h-48 rounded-medium"
                :events
                :position-initial
              />
            </section>
          </div>
          <section v-if="eventDescriptionTemplate" class="flex flex-col gap-2">
            <h2 class="text-headline">{{ t('about') }}</h2>
            <!-- eslint-disable vue/no-v-html -->
            <LayoutProse class="w-full">
              <div v-html="eventDescriptionTemplate" />
            </LayoutProse>
            <!-- eslint-enable vue/no-v-html -->
          </section>
        </div>
      </LayoutPage>
    </div>
  </Loader>
</template>

<script setup lang="ts">
import { sanitize } from 'isomorphic-dompurify'

import { graphql } from '~~/gql/generated'

const { t } = useI18n()
const store = useStore()
const route = useRoute()
const localePath = useLocalePath()

const isOpenReportDrawer = ref<boolean>()

// api data
const eventQuery = useApiQuery({
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
            eventCategoryMappingsByEventId(first: 1, orderBy: PRIMARY_KEY_ASC) {
              nodes {
                categoryId
                eventCategoryByCategoryId {
                  id
                  name
                }
                id
              }
            }
            eventFavoritesByEventId(first: 1) {
              nodes {
                createdBy
                id
                rowId
              }
            }
            eventFormatMappingsByEventId(first: 1, orderBy: PRIMARY_KEY_ASC) {
              nodes {
                eventFormatByFormatId {
                  id
                  name
                }
                formatId
                id
              }
            }
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

  // TODO: split event description and guest invitation texts (https://github.com/maevsi/vibetype/issues/2385)
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
  if (api.value.isFetching && !event.value) return t('globalLoading')
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
defineEventOgImage({ alt: t('ogImageAlt'), event: event.value })
defineEvent({
  description,
  endDate: event.value?.end,
  eventAttendanceMode: event.value?.isRemote
    ? event.value.isInPerson
      ? 'MixedEventAttendanceMode'
      : 'OnlineEventAttendanceMode'
    : event.value?.isInPerson
      ? 'OfflineEventAttendanceMode'
      : undefined,
  location:
    event.value?.isInPerson && address.value?.name
      ? definePlace({
          address: address.value.name,
          latitude: address.value.location?.latitude ?? undefined,
          longitude: address.value.location?.longitude ?? undefined,
          name: address.value.name,
        })
      : event.value?.isRemote && event.value.url
        ? defineVirtualLocation({ url: event.value.url })
        : undefined,
  name: event.value?.name,
  organizer: event.value?.accountByCreatedBy
    ? definePerson({ name: event.value.accountByCreatedBy.username })
    : undefined,
  startDate: event.value?.start,
})

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
const isLocationVisible = computed(
  () =>
    (event.value?.isInPerson && !!address.value?.name) ||
    !!positionInitial.value,
)
</script>

<i18n lang="yaml">
de:
  about: Über die Veranstaltung
  attendances: Check-in
  details: Details
  errorAccountMissing: Nutzerkonto nicht verfügbar
  errorEventMissing: Veranstaltung nicht verfügbar
  errorTemplate: Wert nur in der Einladung verfügbar
  guests: Gäste
  location: Ort
  ogImageAlt: Das Vorschaubild für die Veranstaltung.
  report: Veranstaltung melden
  settings: Bearbeiten
en:
  about: About the event
  attendances: Check in
  details: Details
  errorAccountMissing: Account not available
  errorEventMissing: Event not available
  errorTemplate: value available in invitation only
  guests: Guests
  location: Location
  ogImageAlt: The event's preview image.
  report: Report event
  settings: Edit
</i18n>
