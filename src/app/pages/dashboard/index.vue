<template>
  <div class="flex flex-1 flex-col">
    <!-- <AppError
      v-if="recommendationError"
      :error="{ message: t('recommendationError'), status: 500 }"
    /> -->
    <LayoutPageTitle :title />
    <LayoutCallToAction
      v-if="!authentication.isSignedIn"
      :call-to-action="t('anonymousCta')"
      :call-to-action-description="t('anonymousCtaDescription')"
    />
    <AppLoaderPlaceholder
      v-else-if="isLoading"
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
        <h2 :id="templateIdUpcoming" class="py-1 text-title3 text-balance">
          {{ t('upcomingTitle') }}
        </h2>
        <EventCard
          v-if="eventUpcoming"
          :event="eventUpcoming"
          variant="highlight"
        />
        <p
          v-else
          class="rounded-medium bg-surface-raised p-12 text-center text-fg-2"
        >
          {{ t('upcomingEmpty') }}
        </p>
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
        <p
          v-else
          class="rounded-medium bg-surface-raised p-12 text-center text-fg-2"
        >
          {{ t('recommendationEmpty') }}
        </p>
      </section>
      <AppFeature feature="poster-hunt">
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
          <AppButton
            :aria-label="t('posterHuntImage')"
            class="h-15 flex-col justify-center gap-1 rounded-small bg-surface p-2 text-caption text-fg-1"
            size="none"
            :to="localePath('event-ingest-image')"
            variant="ghost"
          >
            <AppIconArrowUpTray />
            {{ t('posterHuntImage') }}
          </AppButton>
        </section>
      </AppFeature>
      <AppButton
        v-if="!eventUpcoming"
        :aria-label="t('discover')"
        class="w-full"
        :to="localePath('event')"
      >
        {{ t('discover') }}
      </AppButton>
      <ButtonApp />
    </div>
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
  query DashboardEventUpcoming($createdBy: UUID!, $now: Datetime!) {
    allEvents(
      condition: { createdBy: $createdBy }
      filter: { effectiveEnd: { greaterThanOrEqualTo: $now } }
      orderBy: START_ASC
      first: 1
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
        now: useNow().value.toISOString(),
      },
    })
  : undefined
const api = await useApiData([
  ...(queryEventUpcoming ? [queryEventUpcoming] : []),
])

// Only data that is still missing counts, so refreshing cached data keeps
// showing it instead of a loader
const isLoading = computed(
  () =>
    (api.value.isFetching && !api.value.data.allEvents) ||
    (eventRecommendationsPending.value && !eventRecommendations.value),
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

// template
const localePath = useLocalePath()
const templateIdPosterHunt = useId()
const templateIdRecommendation = useId()
const templateIdTopPick = useId()
const templateIdUpcoming = useId()
</script>

<i18n lang="yaml">
de:
  anonymousCta: Finde ihn auf @.upper:{'globalSiteName'}
  anonymousCtaDescription: Dir fehlt der Überblick über Veranstaltungen?
  discover: Neue Veranstaltungen entdecken
  posterHuntDescription: Du hast eine spannende Veranstaltung außerhalb von @.upper:{'globalSiteName'} gesehen?
  posterHuntImage: Bild hochladen
  posterHuntTitle: Plakatjagd
  recommendationEmpty: Noch nichts entdeckt
  recommendationTitle: Das solltest Du nicht verpassen
  title: Dashboard
  topPickTitle: Dein Top-Tipp
  upcomingEmpty: Noch nichts geplant
  upcomingTitle: Dein nächstes Event
en:
  anonymousCta: Find it on @.upper:{'globalSiteName'}
  anonymousCtaDescription: Are you missing an overview of events?
  discover: Discover new events
  posterHuntDescription: Saw an interesting event outside of @.upper:{'globalSiteName'}?
  posterHuntImage: Upload image
  posterHuntTitle: Poster hunting
  recommendationEmpty: None discovered yet
  recommendationTitle: You should not miss
  title: Dashboard
  topPickTitle: Your top pick
  upcomingEmpty: None planned yet
  upcomingTitle: Your next event
</i18n>
