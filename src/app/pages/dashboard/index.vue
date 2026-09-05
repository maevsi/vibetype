<template>
  <div
    v-if="
      api.isFetching ||
      (authentication.isSignedIn && eventRecommendationsPending)
    "
    class="flex flex-1 items-center justify-center"
  >
    <AppLoaderLogo class="size-16" />
  </div>
  <div v-else>
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
    <div v-else class="flex flex-col gap-8">
      <section
        v-if="eventUpcoming"
        :aria-labelledby="templateIdUpcoming"
        class="flex flex-col gap-4"
      >
        <TypographyH3 :id="templateIdUpcoming" class="px-2">
          {{ t('upcomingTitle') }}
        </TypographyH3>
        <EventCard :event="eventUpcoming" variant="highlight" />
      </section>
      <section
        v-if="eventRecommendations?.length"
        :aria-labelledby="templateIdRecommendation"
        class="flex flex-col gap-4"
      >
        <TypographyH3 :id="templateIdRecommendation" class="px-2">
          {{ t('recommendationTitle') }}
        </TypographyH3>
        <EventCard
          v-for="event in eventRecommendations"
          :key="event.rowId"
          :event
          variant="recommendation"
        />
      </section>
      <ButtonApp />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@urql/vue'

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
  useAsyncData('index-recommendations', async () => {
    if (!authentication.value.isSignedIn) return []

    const eventIds = await requestFetch('/api/service/reccoom/recommendations')
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
  })

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
          }
        }
        eventFormatMappingsByEventId(first: 1, orderBy: PRIMARY_KEY_ASC) {
          nodes {
            eventFormatByFormatId {
              id
              name
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
  ? useQuery({
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

const eventUpcoming = computed(() => api.value.data.allEvents?.nodes[0])

// page
const { t } = useI18n()
const title = t('title')
useHeadDefault({ title })

// template
const templateIdRecommendation = useId()
const templateIdUpcoming = useId()
</script>

<i18n lang="yaml">
de:
  anonymousCta: Finde ihn auf {siteName}
  anonymousCtaDescription: Dir fehlt der Überblick über Veranstaltungen?
  recommendationTitle: Das solltest Du nicht verpassen
  title: Dashboard
  upcomingTitle: Dein nächstes Event
en:
  anonymousCta: Find it on {siteName}
  anonymousCtaDescription: Are you missing an overview of events?
  recommendationTitle: You Should Not Miss
  title: Dashboard
  upcomingTitle: Your upcoming event
</i18n>
