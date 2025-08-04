<template>
  <!-- <AppError
    v-if="recommendationError"
    :error="{ message: t('recommendationError'), statusCode: 500 }"
  /> -->
  <div>
    <!-- v-else -->
    <LayoutPageTitle :title />
    <div v-if="isSignedIn" class="flex flex-col gap-8">
      <section
        :aria-labelledby="templateIdRecommendation"
        class="flex flex-col gap-4"
      >
        <TypographyH3 :id="templateIdRecommendation" class="px-2">
          {{ t('recommendationTitle') }}
        </TypographyH3>
        <LoaderIndicatorPing v-if="pending" />
        <template v-else>
          <EventCard
            v-for="event in events"
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
import { graphql } from '~~/gql/generated'
import type { DashboardEventQueryVariables } from '~~/gql/generated/graphql'

// async data
const eventQuery = graphql(`
  query DashboardEvent($id: UUID!) {
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
const {
  data: events,
  // error: recommendationError,
  pending,
} = await useAsyncData('index-recommendations', async () => {
  const eventIds = [
    (
      await $fetch(
        '/api/service/reccoom/recommendations',
        cookieJwt.value
          ? {
              headers: {
                cookie: `${jwtName}=${cookieJwt.value}`,
              },
            }
          : undefined,
      )
    )[0],
  ]
  const events = (
    await Promise.all(
      eventIds.map(
        async (eventId) =>
          (
            await $urql.value
              .query(eventQuery, {
                id: eventId,
              } satisfies MaybeRefObj<DashboardEventQueryVariables>)
              .toPromise()
          ).data?.eventById,
      ),
    )
  ).filter(isNeitherNullNorUndefined)

  return events
})

// page
const { t } = useI18n()
const title = t('title')
useHeadDefault({ title })

// template
const { isSignedIn } = useAuthInfo()
const templateIdRecommendation = useId()
</script>

<i18n lang="yaml">
de:
  anonymousCta: Finde ihn auf {siteName}
  anonymousCtaDescription: Dir fehlt der Überblick über Veranstaltungen?
  # recommendationError: Event-Empfehlungen konnten nicht geladen werden
  recommendationTitle: Das solltest Du nicht verpassen
  title: Dashboard
en:
  anonymousCta: Find it on {siteName}
  anonymousCtaDescription: Are you missing an overview of events?
  # recommendationError: Event recommendations could not be loaded
  recommendationTitle: You Should Not Miss
  title: Dashboard
</i18n>
