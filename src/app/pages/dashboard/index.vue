<template>
  <!-- <AppError
    v-if="recommendationError"
    :error="{ message: t('recommendationError'), status: 500 }"
  /> -->
  <AppLoaderLogo v-if="api.isFetching || eventRecommendationsPending" />
  <div v-else>
    <LayoutCallToAction
      v-if="!authentication.isSignedIn"
      :call-to-action="t('anonymousCta')"
      :call-to-action-description="t('anonymousCtaDescription')"
    />
    <div v-else class="flex flex-col gap-2 px-4 py-2">
      <!-- Your next event -->
      <section
        :aria-labelledby="templateIdUpcoming"
        class="flex flex-col gap-2"
      >
        <div class="flex items-center justify-between">
          <TypographyH3 :id="templateIdUpcoming">
            {{ t('upcomingTitle') }}
          </TypographyH3>
          <AppButton
            v-if="store.signedInUsername"
            :aria-label="t('seeAll')"
            class="text-sm font-semibold text-(--accent-strong)"
            :to="
              localePath({
                name: 'event-view-username',
                params: { username: store.signedInUsername },
              })
            "
          >
            {{ t('seeAll') }}
          </AppButton>
        </div>
        <div class="rounded-3xl bg-(--neutral-level-1) p-2">
          <EventCard
            v-if="eventUpcoming"
            :event="eventUpcoming"
            variant="compact"
          />
          <!-- TODO: DashboardEventUpcoming query fetches only events the user CREATED
               (condition: createdBy). It should ideally include events they are attending.
               This requires a custom DB function. See eventUpcomingQuery. -->
          <p
            v-else
            class="py-2 text-center text-[15px] font-semibold text-(--semantic-base-text-secondary)"
          >
            {{ t('noUpcoming') }}
          </p>
        </div>
      </section>

      <!-- Your top pick (first recommendation) -->
      <section
        v-if="eventRecommendations?.length"
        :aria-labelledby="templateIdTopPick"
        class="flex flex-col gap-2"
      >
        <TypographyH3 :id="templateIdTopPick">
          {{ t('topPickTitle') }}
        </TypographyH3>
        <EventCard :event="eventRecommendations[0]!" variant="recommendation" />
      </section>

      <!-- No recommendations empty state -->
      <section v-else class="flex flex-col gap-2">
        <TypographyH3>{{ t('topPickTitle') }}</TypographyH3>
        <div class="rounded-3xl bg-(--neutral-level-1) p-2">
          <p
            class="py-2 text-center text-[15px] font-semibold text-(--semantic-base-text-secondary)"
          >
            {{ t('noRecommendations') }}
          </p>
        </div>
      </section>

      <!-- You should not miss (recommendations 2+) -->
      <section
        v-if="(eventRecommendations?.length ?? 0) > 1"
        :aria-labelledby="templateIdShouldNotMiss"
        class="flex flex-col gap-2"
      >
        <TypographyH3 :id="templateIdShouldNotMiss">
          {{ t('shouldNotMissTitle') }}
        </TypographyH3>
        <EventCard
          v-for="event in eventRecommendations!.slice(1)"
          :key="event.rowId"
          :event
          variant="recommendation"
        />
      </section>

      <!-- Poster hunting card -->
      <div
        v-if="isFeatureEnabled('poster-hunt').value"
        class="flex flex-col gap-2 rounded-3xl bg-(--neutral-level-1) p-2"
      >
        <div class="px-1 pt-1">
          <p
            class="text-[20px] leading-6.25 font-semibold tracking-[-0.4px] text-(--semantic-base-text-primary)"
          >
            {{ t('posterHuntingTitle') }}
          </p>
          <p class="text-[13px] text-(--semantic-base-text-secondary)">
            {{ t('posterHuntingDescription') }}
          </p>
        </div>
        <div class="flex gap-2">
          <AppButton
            :aria-label="t('takePhoto')"
            class="flex flex-1 items-center justify-center gap-1.5 rounded-2xl bg-(--accent-strong) py-2.5 text-sm font-semibold text-white"
            :to="localePath({ name: 'event-ingest-image' })"
          >
            <AppIconImage class="size-4" />
            {{ t('takePhoto') }}
          </AppButton>
          <AppButton
            :aria-label="t('uploadImage')"
            class="flex flex-1 items-center justify-center gap-1.5 rounded-2xl bg-(--figma-neutral-level-2) py-2.5 text-sm font-semibold text-(--semantic-base-text-primary)"
            :to="localePath({ name: 'event-ingest-image' })"
          >
            <AppIconArrowUpTray class="size-4" />
            {{ t('uploadImage') }}
          </AppButton>
          <AppButton
            :aria-label="t('provideLink')"
            class="flex flex-1 items-center justify-center gap-1.5 rounded-2xl bg-(--figma-neutral-level-2) py-2.5 text-sm font-semibold text-(--semantic-base-text-primary)"
            :to="localePath({ name: 'event-ingest-url' })"
          >
            <AppIconLink class="size-4" />
            {{ t('provideLink') }}
          </AppButton>
        </div>
      </div>

      <!-- Discover new events -->
      <AppButton
        :aria-label="t('discoverEvents')"
        class="flex w-full items-center justify-center rounded-2xl bg-(--accent-strong) py-3 text-[15px] font-semibold text-white"
        :to="localePath({ name: 'event' })"
      >
        {{ t('discoverEvents') }}
      </AppButton>

      <ButtonApp />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@urql/vue'

import { graphql } from '~~/gql/generated'
import { eventHasEnded } from '~~/shared/utils/event'

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
const {
  data: eventRecommendations,
  // error: recommendationError,
  pending: eventRecommendationsPending,
} = await useAsyncData('index-recommendations', async () => {
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
// TODO: use custom and more precise database function instead of full fetch and client filtering
const eventUpcomingQuery = graphql(`
  query DashboardEventUpcoming($createdBy: UUID!) {
    allEvents(condition: { createdBy: $createdBy }) {
      nodes {
        accountByCreatedBy {
          id
          rowId
          username
        }
        end
        eventCategoryMappingsByEventId(first: 1, orderBy: PRIMARY_KEY_ASC) {
          nodes {
            eventCategoryByCategoryId {
              name
            }
          }
        }
        eventFormatMappingsByEventId(first: 1, orderBy: PRIMARY_KEY_ASC) {
          nodes {
            eventFormatByFormatId {
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
      },
    })
  : undefined
const api = await useApiData([
  ...(queryEventUpcoming ? [queryEventUpcoming] : []),
])

const now = useNow()
const eventUpcoming = computed(() => {
  if (!api.value.data.allEvents?.nodes) return undefined

  const upcomingEvents = api.value.data.allEvents.nodes
    .filter((event) => !eventHasEnded(event, now.value))
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())

  return upcomingEvents.length ? upcomingEvents[0] : undefined
})

// page
const { t } = useI18n()
const title = t('title')
useHeadDefault({ title })

// template
const localePath = useLocalePath()
const store = useStore()
const templateIdShouldNotMiss = useId()
const templateIdTopPick = useId()
const templateIdUpcoming = useId()

// feature flags
const { isFeatureEnabled } = useFeatureFlags()
</script>

<i18n lang="yaml">
de:
  anonymousCta: Finde ihn auf {siteName}
  shouldNotMissTitle: Das solltest du nicht verpassen
  anonymousCtaDescription: Dir fehlt der Überblick über Veranstaltungen?
  discoverEvents: Neue Events entdecken
  noRecommendations: Noch keine gefunden
  noUpcoming: Noch nichts geplant
  posterHuntingDescription: Siehst du ein interessantes Event außerhalb von Vibetype?
  posterHuntingTitle: Auf Poster-Jagd
  provideLink: Link eingeben
  # recommendationError: Event-Empfehlungen konnten nicht geladen werden
  seeAll: Alle anzeigen
  takePhoto: Foto aufnehmen
  title: Dashboard
  topPickTitle: Dein Top-Tipp
  uploadImage: Bild hochladen
  upcomingTitle: Dein nächstes Event
en:
  anonymousCta: Find it on {siteName}
  shouldNotMissTitle: You should not miss
  anonymousCtaDescription: Are you missing an overview of events?
  discoverEvents: Discover new events
  noRecommendations: None discovered yet
  noUpcoming: None planned yet
  posterHuntingDescription: Saw an interesting event outside of Vibetype?
  posterHuntingTitle: Poster hunting
  provideLink: Provide link
  # recommendationError: Event recommendations could not be loaded
  seeAll: See all
  takePhoto: Take photo
  title: Dashboard
  topPickTitle: Your top pick
  uploadImage: Upload image
  upcomingTitle: Your next event
</i18n>
