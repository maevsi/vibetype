<template>
  <Loader :api is-page>
    <AppError
      v-if="!account"
      :error="{ data: { vibetype: t('errorAccountMissing') }, status: 404 }"
    />
    <AppError
      v-else-if="!event"
      :error="{ data: { vibetype: t('errorEventMissing') }, status: 404 }"
    />
    <div v-else class="flex flex-1 flex-col">
      <!-- the event's name below is the page's heading -->
      <LayoutTopBar>
        <template #actions>
          <div class="flex items-center gap-2">
            <EventShareButton
              class="flex size-12 items-center justify-center rounded-full bg-surface-raised"
              :event
            />
            <EventFavoriteButton
              class="flex size-12 items-center justify-center rounded-full bg-surface-raised"
              :event
            />
            <template v-if="store.signedInAccountId">
              <AppDropdown>
                <AppDropdownItem
                  v-if="event.createdBy === store.signedInAccountId"
                  variant="destructive"
                  @select="isOpenDeleteDrawer = true"
                >
                  <AppIconTrash />
                  <span>{{ t('delete') }}</span>
                </AppDropdownItem>
                <AppDropdownItem
                  v-else
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
              <EventDeleteDrawer
                v-if="event.createdBy === store.signedInAccountId"
                v-model:open="isOpenDeleteDrawer"
                :event-id="event.rowId"
                is-trigger-hidden
              />
              <EventReportDrawer
                v-else
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
          <AppAlert v-if="publicationState === 'draft'">
            {{ t('draftNotice') }}
          </AppAlert>
          <AppAlert v-else-if="publicationState === 'scheduled'">
            <i18n-t keypath="scheduledNotice" tag="span">
              <template #date>
                <AppTime :datetime="event.publishedAt!" />
              </template>
            </i18n-t>
          </AppAlert>
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
            <span
              v-if="eventState"
              :class="
                cn(
                  'absolute right-3 bottom-3 flex items-center gap-1.5 rounded-pill px-3 py-1 text-caption text-fg-1',
                  eventState === 'upcoming'
                    ? 'bg-info-tint'
                    : eventState === 'ongoing'
                      ? 'bg-success-tint'
                      : 'bg-surface-raised text-fg-2',
                )
              "
            >
              <span
                v-if="eventState === 'ongoing'"
                aria-hidden="true"
                class="size-2 rounded-full bg-current motion-safe:animate-pulse"
              />
              {{
                eventState === 'upcoming'
                  ? t('stateUpcoming')
                  : eventState === 'ongoing'
                    ? t('stateOngoing')
                    : t('stateEnded')
              }}
            </span>
          </div>
          <div v-if="event?.accountByCreatedBy" class="flex flex-col gap-1">
            <h1 class="m-0 text-title3">
              {{ event.name }}
            </h1>
            <EventOwner
              :display-name="event.accountByCreatedBy.displayName"
              link
              :username="event.accountByCreatedBy.username"
            />
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
              :aria-label="t('edit')"
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
              {{ t('edit') }}
              <template #prefix>
                <AppIconPencil />
              </template>
            </AppButton>
          </AppButtonGroup>
          <AppFeature
            v-else-if="
              !routeQueryIc &&
              eventState !== 'ended' &&
              (guestOwn || event.visibility === EventVisibility.Public)
            "
            feature="participation"
          >
            <AppButtonGroup class="grid grid-cols-2 gap-2 lg:gap-2">
              <AppButton
                v-if="guestOwn"
                :aria-label="t('participation')"
                class="h-14 flex-col justify-center gap-1 rounded-medium text-body-small"
                size="none"
                :to="
                  localePath({
                    name: 'guest-view-id',
                    params: { id: guestOwn.rowId },
                  })
                "
              >
                {{ t('participation') }}
                <template #prefix>
                  <AppIconTicket />
                </template>
              </AppButton>
              <AppButton
                v-else
                :aria-label="t('participate')"
                class="h-14 flex-col justify-center gap-1 rounded-medium text-body-small"
                :loading="isParticipatePending"
                size="none"
                :to="
                  store.signedInAccountId
                    ? undefined
                    : localePath({
                        name: 'session-create',
                        query: { to: route.fullPath },
                      })
                "
                @click="participate"
              >
                {{ t('participate') }}
                <template #prefix>
                  <AppIconTicket />
                </template>
              </AppButton>
              <!-- inert until the participants can be listed (https://github.com/maevsi/vibetype/issues/769) -->
              <AppButton
                :aria-label="t('participants')"
                class="h-14 flex-col justify-center gap-1 rounded-medium text-body-small"
                inert
                size="none"
                variant="secondary"
              >
                {{ t('participants') }}
                <template #prefix>
                  <AppIconUsers />
                </template>
              </AppButton>
            </AppButtonGroup>
          </AppFeature>
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
                is-static
                :position-initial
              />
            </section>
          </div>
          <section v-if="eventDescriptionTemplate" class="flex flex-col gap-2">
            <h2 class="text-headline">{{ t('about') }}</h2>
            <LayoutProse class="w-full">
              <AppHtml :html="eventDescriptionTemplate" />
            </LayoutProse>
          </section>
        </div>
      </LayoutPage>
    </div>
  </Loader>
</template>

<script setup lang="ts">
import { useMutation } from '@urql/vue'
import { sanitize } from 'isomorphic-dompurify'

import { cn } from '@/utils/shadcn'
import { graphql } from '~~/gql/generated'
import {
  EventVisibility,
  InvitationFeedback,
} from '~~/gql/generated/graphcache'

const { t } = useI18n()
const store = useStore()
const route = useRoute()
const localePath = useLocalePath()
const { $urql } = useNuxtApp()
const alertError = useAlertError()
const executeUrqlRequest = useExecuteUrqlRequest()

const isOpenDeleteDrawer = ref<boolean>()
const isOpenReportDrawer = ref<boolean>()

// api data
const eventQuery = useApiQuery({
  query: graphql(`
    query Event($slug: String!, $username: String!) {
      accountByUsername(username: $username) {
        eventsByCreatedBy(condition: { slug: $slug }) {
          nodes {
            accountByCreatedBy {
              displayName
              id
              rowId
              username
            }
            addressByAddressId {
              city
              country
              id
              line1
              line2
              location {
                latitude
                longitude
              }
              name
              postalCode
              region
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
            eventUploadsByEventId {
              nodes {
                id
                isHeaderImage
                rowId
                uploadByUploadId {
                  id
                  rowId
                  storageKey
                }
              }
            }
            guestsByEventId(first: 1) {
              nodes {
                id
                rowId
              }
            }
            id
            isArchived
            isInPerson
            isRemote
            name
            publishedAt
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
const createGuestMutation = useMutation(
  graphql(`
    mutation CreateGuest($input: CreateGuestInput!) {
      createGuest(input: $input) {
        guest {
          feedback
          id
          rowId
        }
      }
    }
  `),
)
const api = await useApiData([eventQuery])

const publicationState = computed(() =>
  event.value ? getEventPublicationState(event.value) : undefined,
)

// read once on the server, where the data above is awaited before rendering, as `useRobotsRule` is not reactive and a no-op on the client
useRobotsRule(
  event.value &&
    (event.value.visibility !== EventVisibility.Public ||
      getEventPublicationState(event.value) !== 'published')
    ? false
    : undefined,
)

// participation
// an organizer sees every guest of the event, anyone else only their own
const guestOwn = computed(() =>
  event.value?.createdBy === store.signedInAccountId
    ? undefined
    : event.value?.guestsByEventId.nodes[0],
)
const isParticipatePending = ref<boolean>()
const participate = async () => {
  if (!event.value || !store.signedInAccountId) return

  isParticipatePending.value = true

  try {
    const contactOwn = await getOwnContact({
      $urql,
      accountId: store.signedInAccountId,
    })

    if (!contactOwn) throw new Error('The account has no contact of its own')

    const result = await executeUrqlRequest({
      errorMessageI18n: t('participateError'),
      request: createGuestMutation.executeMutation({
        input: {
          guest: {
            contactId: contactOwn.rowId,
            eventId: event.value.rowId,
            feedback: InvitationFeedback.Accepted,
          },
        },
      }),
    })
    const guest = result?.data?.createGuest?.guest

    if (!guest) return

    await navigateTo(
      localePath({ name: 'guest-view-id', params: { id: guest.rowId } }),
    )
  } catch (error) {
    alertError({
      error: error instanceof Error ? error : undefined,
      messageI18n: t('participateError'),
    })
  } finally {
    isParticipatePending.value = false
  }
}

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
const now = useNow()
const eventState = computed(() =>
  event.value ? getEventState(event.value, now.value) : undefined,
)

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
    showAppError({
      data: { vibetype: t('errorEventMissing') },
      message: 'Event unavailable',
      status: 404,
    })
    return
  }

  return t('title', { name: event.value.name })
})
useHeadDefault(
  {
    description,
    title,
    ogTitle: title,
    titleTemplate: '%s',
  },
  { title: event.value?.name },
)
defineEventOgImage({ alt: t('ogImageAlt'), event: event.value })
const postalAddress = computed(() =>
  address.value?.line1 ||
  address.value?.postalCode ||
  address.value?.city ||
  address.value?.country
    ? {
        '@type': 'PostalAddress' as const,
        addressCountry: address.value.country ?? undefined,
        addressLocality: address.value.city ?? undefined,
        addressRegion: address.value.region ?? undefined,
        postalCode: address.value.postalCode ?? undefined,
        streetAddress:
          [address.value.line1, address.value.line2]
            .filter(Boolean)
            .join(', ') || undefined,
      }
    : address.value?.name,
)
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
          address: postalAddress.value,
          latitude: address.value.location?.latitude ?? undefined,
          longitude: address.value.location?.longitude ?? undefined,
          name: address.value.name,
        })
      : event.value?.isRemote && event.value.url
        ? defineVirtualLocation({ url: event.value.url })
        : undefined,
  name: event.value?.name,
  organizer: event.value?.accountByCreatedBy
    ? definePerson({
        name:
          event.value.accountByCreatedBy.displayName ||
          event.value.accountByCreatedBy.username,
      })
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
  delete: Veranstaltung löschen
  details: Details
  draftNotice: Diese Veranstaltung ist ein Entwurf. Nur du kannst sie sehen.
  edit: Bearbeiten
  errorAccountMissing: Dieses Konto existiert nicht. Es wurde möglicherweise gelöscht oder der Nutzername hat sich geändert.
  errorEventMissing: Diese Veranstaltung ist nicht verfügbar. Wenn Dir jemand einen Link geschickt hat, frage nach einem neuen.
  errorTemplate: Wert nur in der Einladung verfügbar
  guests: Gäste
  location: Ort
  ogImageAlt: Das Vorschaubild für die Veranstaltung.
  participants: Teilnehmende
  participate: Teilnehmen
  participateError: Teilnahme fehlgeschlagen
  participation: Deine Teilnahme
  report: Veranstaltung melden
  scheduledNotice: Diese Veranstaltung wird am {date} veröffentlicht. Bis dahin kannst nur du sie sehen.
  stateEnded: Vorbei
  stateOngoing: Läuft gerade
  stateUpcoming: Bevorstehend
  title: "{name} auf @:{'globalSiteName'}"
en:
  about: About the event
  attendances: Check in
  delete: Delete event
  details: Details
  draftNotice: This event is a draft. Only you can see it.
  edit: Edit
  errorAccountMissing: This account doesn't exist. It may have been deleted, or the username changed.
  errorEventMissing: This event isn't available. If someone sent you a link, ask them for a new one.
  errorTemplate: value available in invitation only
  guests: Guests
  location: Location
  ogImageAlt: The event's preview image.
  participants: Participants
  participate: Participate
  participateError: Participation failed
  participation: Your participation
  report: Report event
  scheduledNotice: This event will be published on {date}. Until then, only you can see it.
  stateEnded: Ended
  stateOngoing: Happening now
  stateUpcoming: Upcoming
  title: "{name} on @:{'globalSiteName'}"
</i18n>
