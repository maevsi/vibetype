<template>
  <LoaderIndicatorPing v-if="api.isFetching" />
  <AppError
    v-else-if="!account"
    :error="{ message: t('errorAccountMissing'), statusCode: 404 }"
  />
  <AppError
    v-else-if="!event"
    :error="{ message: t('errorEventMissing'), statusCode: 404 }"
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
          <IHeroiconsUsers />
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
          <ISolarUserCheckBroken />
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
          <IHeroiconsPencil />
        </template>
      </ButtonColored>
    </ButtonList>
    <div class="flex flex-col gap-4">
      <div>
        <div class="relative">
          <EventHeroImage :event="event" />
          <div
            class="absolute inset-x-0 top-0 flex items-center justify-between px-4 py-2"
          >
            <div>
              <!-- TODO: back button -->
              <!-- <AppButton
                  :aria-label="t('more')"
                  class="flex size-10 items-center justify-center rounded-full bg-(--semantic-base-surface-1)"
                >
                  <AppIconBack />
                </AppButton> -->
            </div>
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
          class="flex flex-col items-stretch gap-4 rounded-t-none"
        >
          <div
            class="flex flex-col items-baseline justify-center md:flex-row md:gap-2"
          >
            <h1 class="m-0">
              {{ event.name }}
            </h1>
            <EventOwner link :username="event.accountByCreatedBy.username" />
          </div>
          <AppHr />
          <div class="flex flex-row flex-wrap justify-center self-stretch">
            <EventDashletStart :event="event" />
            <EventDashletDuration :event="event" />
            <EventDashletVisibility :event="event" with-text />
            <EventDashletAttendanceType :event="event" />
            <!-- TODO: reenable to address usage -->
            <!-- <EventDashletLocation :event="event" /> -->
            <EventDashletLink :event="event" />
          </div>
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
import DOMPurify from 'isomorphic-dompurify'

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
              username
            }
            createdBy
            description
            end
            id
            isArchived
            isInPerson
            isRemote
            name
            nodeId
            slug
            start
            url
            visibility
          }
        }
        id
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
const event = computed(() => account.value?.eventsByCreatedBy.nodes[0])
const api = await useApiData([eventQuery])

// computations
const eventDescriptionTemplate = computed(() => {
  if (!event.value?.description) return

  return DOMPurify.sanitize(event.value.description, { ADD_ATTR: ['target'] })
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
    showAppError({ statusCode: 404, message: 'Event unavailable' })
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
</script>

<i18n lang="yaml">
de:
  attendances: Check-in
  errorAccountMissing: Nutzerkonto nicht verfügbar
  errorEventMissing: Veranstaltung nicht verfügbar
  guests: Gäste
  ogImageAlt: Das Vorschaubild für die Veranstaltung.
  report: Veranstaltung melden
  settings: Bearbeiten
en:
  attendances: Check in
  errorAccountMissing: Account not available
  errorEventMissing: Event not available
  guests: Guests
  ogImageAlt: The event's preview image.
  report: Report event
  settings: Edit
</i18n>
