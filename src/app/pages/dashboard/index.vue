<template>
  <AppContent>
    <div class="flex items-center justify-between py-2">
      <div class="flex items-center gap-2 p-2">
        <IconLogo class="h-8" />
        <AppTypographyTitle3Emphasized>
          {{ t('globalSiteName') }}
        </AppTypographyTitle3Emphasized>
      </div>
      <div class="flex gap-2">
        <AppFeature feature="poster-hunt">
          <AppButtonNew
            :aria-label="t('hunt')"
            class="px-4"
            :to="localePath('event-ingest-image')"
          >
            {{ t('hunt') }}
            <template #prefix>
              <AppIconCamera />
            </template>
          </AppButtonNew>
        </AppFeature>
        <AppFeature feature="notifications">
          <AppButtonNew
            :aria-label="t('notifications')"
            variant="secondary"
            class="rounded-full"
            :to="localePath('notification')"
          >
            <div class="relative">
              <AppIconBell class="size-6" />
              <div class="absolute top-[0.5px] right-0.75">
                <NotificationIndicator />
              </div>
            </div>
          </AppButtonNew>
        </AppFeature>
      </div>
    </div>
    <div v-if="authentication.isSignedIn" class="flex flex-col gap-8 py-2">
      <section
        v-if="eventUpcoming?.data"
        :aria-labelledby="templateIdUpcoming"
        class="flex flex-col gap-4"
      >
        <TypographyH3 :id="templateIdUpcoming" class="px-1">
          {{ t('upcomingTitle') }}
        </TypographyH3>
        <AppLoaderLogo v-if="eventUpcoming.fetching" />
        <CardStateAlert
          v-else-if="eventUpcoming.error"
          :message="eventUpcoming.error.message"
        />
        <EventCard v-else :event="eventUpcoming.data" variant="highlight" />
      </section>
      <section
        v-if="eventRecommendations?.length"
        :aria-labelledby="templateIdRecommendation"
        class="flex flex-col gap-4"
      >
        <TypographyH3 :id="templateIdRecommendation" class="px-1">
          {{ t('recommendationTitle') }}
        </TypographyH3>
        <AppLoaderLogo v-if="eventRecommendationsPending" />
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
  </AppContent>
</template>

<script setup lang="ts">
import { useQuery } from '@urql/vue'

import { graphql } from '~~/gql/generated'

// compiler
definePageMeta({
  layout: 'default-no-header',
})

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
const queryEventUpcomingVariables = computed(() =>
  authentication.value.isSignedIn
    ? {
        createdBy: authentication.value.signedInAccountId,
      }
    : undefined,
)
const eventUpcomingQuery = graphql(`
  query DashboardEventsByCreatedBy($createdBy: UUID!) {
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
const queryEventUpcoming = computed(() => {
  if (!queryEventUpcomingVariables.value) return undefined
  return useQuery({
    query: eventUpcomingQuery,
    variables: queryEventUpcomingVariables.value,
  })
})
const now = useState('dateTimeNow', () => new Date())
const TWELVE_HOURS = 12 * 60 * 60 * 1000
const upcomingEvents = computed(() => {
  const query = queryEventUpcoming.value
  if (!query) return []

  const events = query.data.value?.allEvents?.nodes || []
  return events
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
})
const eventUpcoming = computed(() => {
  const query = queryEventUpcoming.value
  return {
    data: upcomingEvents.value?.length ? upcomingEvents.value[0] : undefined,
    error: query?.error.value,
    fetching: query?.fetching.value,
  }
})

// page
const { t } = useI18n()
const title = t('title')
useHeadDefault({ title })

// template
const templateIdRecommendation = useId()
const templateIdUpcoming = useId()
const localePath = useLocalePath()
</script>

<i18n lang="yaml">
de:
  anonymousCta: Finde ihn auf {siteName}
  anonymousCtaDescription: Dir fehlt der Überblick über Veranstaltungen?
  hunt: Jagd
  notifications: Benachrichtigungen
  # recommendationError: Event-Empfehlungen konnten nicht geladen werden
  recommendationTitle: Das solltest Du nicht verpassen
  title: Dashboard
  upcomingTitle: Dein nächstes Event
en:
  anonymousCta: Find it on {siteName}
  anonymousCtaDescription: Are you missing an overview of events?
  hunt: Hunt
  notifications: Notifications
  # recommendationError: Event recommendations could not be loaded
  recommendationTitle: You Should Not Miss
  title: Dashboard
  upcomingTitle: Your next event
</i18n>
