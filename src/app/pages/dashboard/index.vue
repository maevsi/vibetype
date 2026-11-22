<template>
  <div class="flex flex-1 flex-col">
    <!-- <AppError
      v-if="recommendationError"
      :error="{ message: t('recommendationError'), status: 500 }"
    /> -->
    <LayoutTopBar>
      <span class="inline-flex items-center gap-2">
        <AppIconLogo aria-hidden="true" class="size-8" />
        <AppIconLogoText aria-hidden="true" class="h-4.5" />
        <span class="sr-only">{{ title }}</span>
      </span>
      <template #actions>
        <AppButton
          :aria-label="t('hunt')"
          class="px-4 py-2 text-body-small font-semibold"
          size="none"
          :to="localePath('event-ingest-image')"
        >
          <AppIconCamera class="size-4" />
          {{ t('hunt') }}
        </AppButton>
        <AppFeature feature="notifications">
          <AppButton
            :aria-label="t('notifications')"
            size="icon"
            :to="localePath('notification')"
            variant="secondary"
          >
            <AppIconBellAlert />
          </AppButton>
        </AppFeature>
      </template>
    </LayoutTopBar>
    <LayoutPage>
      <AppLoaderPlaceholder
        v-if="!authentication.isSignedIn || isLoading"
        class="flex-col items-stretch justify-start gap-4"
      >
        <EventCardSkeleton variant="highlight" />
        <EventCardSkeleton
          v-for="index in 2"
          :key="index"
          variant="recommendation"
        />
      </AppLoaderPlaceholder>
      <div v-else class="flex flex-col gap-4">
        <section
          :aria-labelledby="templateIdUpcoming"
          class="flex flex-col gap-2"
        >
          <div class="flex items-center justify-between gap-2">
            <h2 :id="templateIdUpcoming" class="py-1 text-title3 text-balance">
              {{ t('upcomingTitle') }}
            </h2>
            <AppLink
              v-if="eventUpcoming && menuTargets.events"
              class="text-body-small text-link hover:text-link-hover"
              :to="menuTargets.events"
            >
              {{ t('seeAll') }}
            </AppLink>
          </div>
          <EventCard
            v-if="eventUpcoming"
            :event="eventUpcoming"
            variant="highlight"
          />
          <div
            v-else
            class="flex flex-col items-center gap-4 rounded-medium bg-surface-raised p-12 text-center text-fg-2"
          >
            <p>{{ t('upcomingEmpty') }}</p>
            <AppButton
              :aria-label="t('upcomingCreate')"
              :to="localePath('event-create')"
              variant="primary"
            >
              <AppIconAdd />
              {{ t('upcomingCreate') }}
            </AppButton>
          </div>
        </section>
        <section
          v-if="hasNoPreferences"
          :aria-labelledby="templateIdPreference"
          class="flex flex-col gap-4 rounded-medium bg-surface-raised p-2"
        >
          <div class="flex flex-col gap-1 px-2 pt-2">
            <h2 :id="templateIdPreference" class="text-headline">
              {{ t('preferenceTitle') }}
            </h2>
            <p class="text-body-small text-fg-2">
              {{ t('preferenceDescription') }}
            </p>
          </div>
          <AppButton
            :aria-label="t('preferenceAction')"
            class="w-full"
            :to="localePath('preference-create')"
            variant="primary"
          >
            <AppIconNetworkIntelligence />
            {{ t('preferenceAction') }}
          </AppButton>
        </section>
        <section
          v-if="eventTopPick"
          :aria-labelledby="templateIdTopPick"
          class="flex flex-col gap-2"
        >
          <h2 :id="templateIdTopPick" class="py-1 text-title3 text-balance">
            {{ t('topPickTitle') }}
          </h2>
          <EventCard :event="eventTopPick" variant="recommendation" />
        </section>
        <section
          v-if="!eventTopPick || eventRecommendationsOther.length"
          :aria-labelledby="templateIdRecommendation"
          class="flex flex-col gap-2"
        >
          <h2
            :id="templateIdRecommendation"
            class="py-1 text-title3 text-balance"
          >
            {{ t('recommendationTitle') }}
          </h2>
          <div
            v-if="eventRecommendationsOther.length"
            class="flex flex-col gap-4"
          >
            <EventCard
              v-for="event in eventRecommendationsOther"
              :key="event.rowId"
              :event
              variant="recommendation"
            />
          </div>
          <div
            v-else
            class="flex flex-col items-center gap-4 rounded-medium bg-surface-raised p-12 text-center text-fg-2"
          >
            <p>{{ t('recommendationEmpty') }}</p>
            <AppButton
              v-if="hasNoPreferences"
              :aria-label="t('preferenceAction')"
              :to="localePath('preference-create')"
              variant="primary"
            >
              <AppIconNetworkIntelligence />
              {{ t('preferenceAction') }}
            </AppButton>
          </div>
        </section>
        <section
          :aria-labelledby="templateIdPosterHunt"
          class="flex flex-col gap-4 rounded-medium bg-surface-raised p-2"
        >
          <div class="flex flex-col gap-1 px-2 pt-2">
            <h2 :id="templateIdPosterHunt" class="text-headline">
              {{ t('posterHuntTitle') }}
            </h2>
            <p class="text-body-small text-fg-2">
              {{ t('posterHuntDescription') }}
            </p>
          </div>
          <div class="grid auto-cols-fr grid-flow-col gap-2">
            <AppButton
              v-if="isCameraAvailable"
              :aria-label="t('posterHuntPhoto')"
              class="h-15 flex-col justify-center gap-1 rounded-small p-2 text-caption"
              size="none"
              @click="pickFromCamera"
            >
              <AppIconCamera />
              {{ t('posterHuntPhoto') }}
            </AppButton>
            <AppButton
              :aria-label="t('posterHuntImage')"
              class="h-15 flex-col justify-center gap-1 rounded-small bg-surface p-2 text-caption text-fg-1"
              size="none"
              variant="ghost"
              @click="pickFromLibrary"
            >
              <AppIconArrowUpTray />
              {{ t('posterHuntImage') }}
            </AppButton>
            <AppButton
              :aria-label="t('posterHuntLink')"
              class="h-15 flex-col justify-center gap-1 rounded-small bg-surface p-2 text-caption text-fg-1"
              size="none"
              :to="localePath('event-ingest-url')"
              variant="ghost"
            >
              <AppIconLink />
              {{ t('posterHuntLink') }}
            </AppButton>
          </div>
        </section>
        <AppButton
          v-if="!eventUpcoming"
          :aria-label="t('discover')"
          class="w-full"
          :to="localePath('event')"
        >
          {{ t('discover') }}
        </AppButton>
      </div>
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
import { graphql } from '~~/gql/generated'

// async data
const eventQuery = graphql(`
  query DashboardEventRecommendations($id: UUID!) {
    eventByRowId(rowId: $id) {
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
        rowId
      }
      eventCategoryMappingsByEventId(first: 1, orderBy: PRIMARY_KEY_ASC) {
        nodes {
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
          contactByContactId {
            accountId
            id
            rowId
          }
          id
          rowId
        }
      }
      id
      name
      rowId
      slug
      start
    }
  }
`)
const { $urql } = useNuxtApp()
const requestFetch = useRequestFetch()
const authentication = useAuthentication()

// validation
await useSignInRequired()

const { data: eventRecommendations, pending: eventRecommendationsPending } =
  useAsyncData(
    'index-recommendations',
    async () => {
      const eventIds = await requestFetch(
        '/api/service/reccoom/recommendations',
      )
      const events = (
        await Promise.all(
          eventIds.map(
            async (recommendation) =>
              (
                await $urql.value
                  .query(eventQuery, {
                    id: recommendation.event_id,
                  })
                  .toPromise()
              ).data?.eventByRowId,
          ),
        )
      ).filter(isNeitherNullNorUndefined)

      return events
    },
    { enabled: () => authentication.value.isSignedIn },
  )

// async data - upcoming
const eventUpcomingQuery = graphql(`
  query DashboardEventUpcoming($createdBy: UUID!) {
    allEvents(
      condition: { createdBy: $createdBy, hasEnded: false }
      first: 1
      orderBy: START_ASC
    ) {
      nodes {
        accountByCreatedBy {
          id
          rowId
          username
        }
        eventCategoryMappingsByEventId(first: 1, orderBy: PRIMARY_KEY_ASC) {
          nodes {
            eventCategoryByCategoryId {
              id
              name
            }
            id
          }
        }
        eventFormatMappingsByEventId(first: 1, orderBy: PRIMARY_KEY_ASC) {
          nodes {
            eventFormatByFormatId {
              id
              name
            }
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
        id
        name
        rowId
        slug
        start
      }
    }
  }
`)
const queryEventUpcoming = authentication.value.isSignedIn
  ? useApiQuery({
      query: eventUpcomingQuery,
      variables: {
        createdBy: authentication.value.signedInAccountId,
      },
    })
  : undefined

// async data - preferences
// The setup flow starts with the size step and each step may be left empty,
// so any stored preference counts as set up
const preferenceCountQuery = graphql(`
  query DashboardPreferenceCount {
    allPreferenceEventCategories {
      totalCount
    }
    allPreferenceEventFormats {
      totalCount
    }
    allPreferenceEventLocations {
      totalCount
    }
    allPreferenceEventSizes {
      totalCount
    }
  }
`)
const queryPreferenceCount = authentication.value.isSignedIn
  ? useApiQuery({ query: preferenceCountQuery })
  : undefined
const api = await useApiData([
  ...(queryEventUpcoming ? [queryEventUpcoming] : []),
  ...(queryPreferenceCount ? [queryPreferenceCount] : []),
])

// Only data that is still missing counts, so refreshing cached data keeps
// showing it instead of a loader
const isLoading = computed(
  () =>
    (api.value.isFetching && !api.value.data.allEvents) ||
    (eventRecommendationsPending.value && !eventRecommendations.value),
)

const hasNoPreferences = computed(
  () =>
    api.value.data.allPreferenceEventCategories !== undefined &&
    [
      api.value.data.allPreferenceEventCategories,
      api.value.data.allPreferenceEventFormats,
      api.value.data.allPreferenceEventLocations,
      api.value.data.allPreferenceEventSizes,
    ].every((connection) => connection?.totalCount === 0),
)

const eventUpcoming = computed(() => api.value.data.allEvents?.nodes[0])

const eventTopPick = computed(() => eventRecommendations.value?.[0])
const eventRecommendationsOther = computed(
  () => eventRecommendations.value?.slice(1) ?? [],
)

// page
const { t } = useI18n()
const title = t('title')
useHeadDefault({ title })

// poster hunt
const posterPicked = usePosterPicked()
const { isCameraAvailable, pickFromCamera, pickFromLibrary } = usePosterPicker(
  async (file) => {
    posterPicked.value = file
    await navigateTo(localePath('event-ingest-image'))
  },
)

// template
const localePath = useLocalePath()
const menuTargets = useMenuTargets()
const templateIdPosterHunt = useId()
const templateIdPreference = useId()
const templateIdRecommendation = useId()
const templateIdTopPick = useId()
const templateIdUpcoming = useId()
</script>

<i18n lang="yaml">
de:
  discover: Neue Veranstaltungen entdecken
  hunt: Jagd
  notifications: Benachrichtigungen
  posterHuntDescription: Du hast eine spannende Veranstaltung außerhalb von @.upper:{'globalSiteName'} gesehen?
  posterHuntImage: Bild hochladen
  posterHuntLink: Link angeben
  posterHuntPhoto: Foto aufnehmen
  posterHuntTitle: Plakatjagd
  preferenceAction: KI einrichten
  preferenceDescription: Sag uns, was Dir gefällt, und Du bekommst Veranstaltungen, die zu Dir passen.
  preferenceTitle: Stell Deinen Vibe ein
  recommendationEmpty: Noch nichts entdeckt
  recommendationTitle: Das solltest Du nicht verpassen
  seeAll: Alle ansehen
  title: Dashboard
  topPickTitle: Dein Top-Tipp
  upcomingCreate: Event planen
  upcomingEmpty: Noch nichts geplant
  upcomingTitle: Dein nächstes Event
en:
  discover: Discover new events
  hunt: Hunt
  notifications: Notifications
  posterHuntDescription: Saw an interesting event outside of @.upper:{'globalSiteName'}?
  posterHuntImage: Upload image
  posterHuntLink: Provide link
  posterHuntPhoto: Take photo
  posterHuntTitle: Poster hunting
  preferenceAction: Set up AI
  preferenceDescription: Tell us what you like and get events that fit you.
  preferenceTitle: Set up your vibe
  recommendationEmpty: None discovered yet
  recommendationTitle: You should not miss
  seeAll: See all
  title: Dashboard
  topPickTitle: Your top pick
  upcomingCreate: Plan an event
  upcomingEmpty: None planned yet
  upcomingTitle: Your next event
</i18n>
