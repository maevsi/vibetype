<template>
  <!-- <AppError
    v-if="recommendationError"
    :error="{ message: t('recommendationError'), statusCode: 500 }"
  /> -->
  <div>
    <!-- v-else -->
    <LayoutPageTitle :title />
    <div v-if="authentication.isSignedIn" class="flex flex-col gap-8">
      <section
        v-if="queryEventUpcoming"
        :aria-labelledby="templateIdUpcoming"
        class="flex flex-col gap-4"
      >
        <TypographyH3 :id="templateIdUpcoming" class="px-2">
          {{ t('upcomingTitle') }}
        </TypographyH3>
        <AppLoaderLogo
          v-if="queryEventUpcoming.fetching.value"
          class="size-16"
        />
        <CardStateAlert v-else-if="queryEventUpcoming.error.value">
          {{ queryEventUpcoming.error.value.message }}
        </CardStateAlert>
        <CardStateAlert v-else-if="!eventUpcoming">
          {{ t('errorUpcomingUndefined') }}
        </CardStateAlert>
        <EventCard v-else :event="eventUpcoming" variant="highlight" />
      </section>
      <section
        v-if="eventRecommendations?.length"
        :aria-labelledby="templateIdRecommendation"
        class="flex flex-col gap-4"
      >
        <TypographyH3 :id="templateIdRecommendation" class="px-2">
          {{ t('recommendationTitle') }}
        </TypographyH3>
        <LoaderIndicatorPing v-if="eventRecommendationsPending" />
        <template v-else>
          <EventCard
            v-for="event in eventRecommendations"
            :key="event.id"
            :event
            variant="recommendation"
          />
        </template>
      </section>
      <ButtonApp />
    </div>
    <LayoutCallToAction
      v-else
      :call-to-action="t('anonymousCta')"
      :call-to-action-description="t('anonymousCtaDescription')"
    />
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@urql/vue'

import { graphql } from '~~/gql/generated'

// async data
const eventQuery = graphql(`
  query DashboardEventRecommendations($id: UUID!) {
    eventById(id: $id) {
      accountByCreatedBy {
        id
        username
      }
      addressByAddressId {
        id
        location {
          latitude
          longitude
        }
      }
      eventFavoritesByEventId(first: 1) {
        nodes {
          createdBy
          id
        }
      }
      guestsByEventId(first: 1) {
        nodes {
          contactByContactId {
            accountId
            id
          }
          id
        }
      }
      id
      name
      slug
      start
    }
  }
`)
const { $urql } = useNuxtApp()
const jwtName = useJwtName()
const cookieJwt = useCookieJwt()
const authentication = useAuthentication()
const {
  data: eventRecommendations,
  // error: recommendationError,
  pending: eventRecommendationsPending,
} = await useAsyncData('index-recommendations', async () => {
  if (!authentication.value.isSignedIn) return []

  const eventIds = await $fetch(
    '/api/service/reccoom/recommendations',
    cookieJwt.value
      ? {
          headers: {
            cookie: `${jwtName}=${cookieJwt.value}`,
          },
        }
      : undefined,
  )
  const events = (
    await Promise.all(
      eventIds.map(
        async (eventId) =>
          (
            await $urql.value
              .query(eventQuery, {
                id: eventId,
              })
              .toPromise()
          ).data?.eventById,
      ),
    )
  ).filter(isNeitherNullNorUndefined)

  return events
})

// async data - upcoming
// TODO: use custom and more precise database function instead of full fetch and client filtering
const eventUpcomingQuery = graphql(`
  query DashboardEventUpcoming($createdBy: UUID!) {
    allEvents(condition: { createdBy: $createdBy }) {
      nodes {
        accountByCreatedBy {
          id
          username
        }
        end
        id
        name
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
      },
    })
  : undefined
const api = await useApiData([
  ...(queryEventUpcoming ? [queryEventUpcoming] : []),
])

const now = useNow()
const TWELVE_HOURS = 12 * 60 * 60 * 1000
const eventUpcoming = computed(() => {
  if (!api.value.data.allEvents?.nodes) return undefined

  const upcomingEvents = api.value.data.allEvents.nodes
    .filter((event) => {
      if (event.end) {
        return now.value < new Date(event.end)
      }
      const eventStart = new Date(event.start)
      const eventStartPlusDuration = new Date(
        eventStart.getTime() + TWELVE_HOURS,
      )
      return now.value < eventStartPlusDuration
    })
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())

  return upcomingEvents.length ? upcomingEvents[0] : undefined
})

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
  errorUpcomingUndefined: Es fehlen Daten, um dein nächstes Event anzuzeigen.
  # recommendationError: Event-Empfehlungen konnten nicht geladen werden
  recommendationTitle: Das solltest Du nicht verpassen
  title: Dashboard
  upcomingTitle: Dein nächstes Event
en:
  anonymousCta: Find it on {siteName}
  anonymousCtaDescription: Are you missing an overview of events?
  errorUpcomingUndefined: Data to display your upcoming event is missing.
  # recommendationError: Event recommendations could not be loaded
  recommendationTitle: You Should Not Miss
  title: Dashboard
  upcomingTitle: Your upcoming event
</i18n>
