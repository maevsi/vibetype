<template>
  <div
    :class="
      cn(
        'group has-focus-visible:focus-ring relative isolate flex items-center gap-4 rounded-3xl p-2',
        'data-[variant=highlight]:bg-(--neutral-level-1)',
        'data-[variant=recommendation]:bg-(--neutral-level-1)',
        variant === 'recommendation' &&
          'flex-col items-stretch gap-1.5 px-0 pt-0 pb-2',
      )
    "
    :data-variant="variant"
  >
    <div class="relative">
      <LoaderImage
        :alt="t('heroImage')"
        :aspect="
          variant === 'highlight'
            ? 'aspect-[160/120]'
            : variant === 'recommendation'
              ? 'aspect-[344/260]'
              : 'aspect-square'
        "
        :class="
          cn(
            'size-24 rounded-2xl object-cover',
            'group-data-[variant=highlight]:h-30 group-data-[variant=highlight]:w-40',
            'group-data-[variant=recommendation]:h-65 group-data-[variant=recommendation]:w-full',
          )
        "
        :height="
          variant === 'highlight'
            ? '120'
            : variant === 'recommendation'
              ? '260'
              : '96'
        "
        :src="`/assets/static/images/event/${getHeroImageName(event.name)}.jpg`"
        :width="
          variant === 'highlight'
            ? '160'
            : variant === 'recommendation'
              ? '344'
              : '96'
        "
      />
      <AppButton
        v-if="variant === 'recommendation' && authentication.isSignedIn"
        :aria-label="isFavorite ? t('favoriteDelete') : t('favoriteCreate')"
        class="absolute top-2 right-2 z-20 flex size-10 items-center justify-center rounded-full bg-(--neutral-level-1)"
        @click="toggleEventFavorite"
      >
        <AppIconFavoriteFilled
          v-if="isFavorite"
          class="size-4 text-(--complement-strong)"
        />
        <AppIconFavorite v-else class="size-4 text-(--neutral-level-6)" />
      </AppButton>
      <div
        v-if="variant === 'recommendation'"
        class="absolute top-2 left-2 z-20 rounded-[20px] bg-(--primary-green-middle-dark) px-4 py-2"
      >
        <AppTypographyCaption1Emphasized class="text-(--base-white)">
          {{ t('match') }}
        </AppTypographyCaption1Emphasized>
      </div>
      <div
        v-if="variant === 'recommendation'"
        class="absolute bottom-2 left-2 z-20 rounded-[20px] bg-(--neutral-level-1) px-4 py-2"
      >
        <AppTypographySubheadlineEmphasized class="text-(--base-white)">
          <AppTime :datetime="event.start" />
        </AppTypographySubheadlineEmphasized>
      </div>
    </div>
    <div
      :class="
        cn(
          'flex min-w-0 flex-1 flex-col gap-1 py-1',
          variant === 'recommendation' && 'gap-1 px-2 py-0',
        )
      "
    >
      <AppButton
        v-if="event.accountByCreatedBy"
        :aria-label="event.name"
        class="focus-visible:ring-0"
        is-block
        :to="
          localePath({
            name: 'event-view-username-event_name',
            params: {
              username: event.accountByCreatedBy.username,
              event_name: event.slug,
            },
          })
        "
      >
        <span class="absolute inset-0 z-10" />
        <EventCardTitle :variant>
          {{ event.name }}
        </EventCardTitle>
      </AppButton>
      <EventCardTitle v-else :variant>
        {{ event.name }}
      </EventCardTitle>
      <AppTypographyFootnoteEmphasized
        v-if="variant !== 'recommendation'"
        class="truncate"
      >
        <AppTime :datetime="event.start" />
      </AppTypographyFootnoteEmphasized>
    </div>
    <div
      v-if="!variant && (isDraft || isCreator || isGuest)"
      :class="
        cn(
          'absolute top-1 right-1 rounded-2xl px-3 py-1.5',
          isDraft
            ? 'bg-(--warning-yellow-light) text-(--warning-yellow-middle-dark)'
            : isCreator
              ? 'bg-(--secondary-blue-light) text-(--secondary-blue-middle-dark)'
              : isGuest
                ? 'bg-(--primary-green-light) text-(--primary-green-middle-dark)'
                : undefined,
        )
      "
    >
      <TypographyLabel v-slot="attributes">
        <div v-if="isDraft" v-bind="attributes">
          {{ t('isDraft') }}
        </div>
        <div v-else-if="isCreator" v-bind="attributes">
          {{ t('isCreator') }}
        </div>
        <div v-else-if="isGuest" v-bind="attributes">
          {{ t('isGuest') }}
        </div>
      </TypographyLabel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMutation } from '@urql/vue'
import type { DeepReadonly } from 'vue'

import { cn } from '@/utils/shadcn'
import { graphql } from '~~/gql/generated'

// compiler
export type EventCardProps = {
  event: DeepReadonly<{
    accountByCreatedBy?: {
      id?: string
      username: string
    } | null
    eventFavoritesByEventId?: {
      nodes: {
        createdBy: string
        id: string
      }[]
    } | null
    guestsByEventId?: {
      nodes: {
        contactByContactId?: {
          accountId?: string | null
          id: string
        } | null
        id: string
      }[]
    } | null
    id: string
    name: string
    slug: string
    start: string
  }>
  // TODO: turn javascript usage into attribute based styles
  variant?: 'highlight' | 'recommendation' // alias for 'large'
}
const { event, variant = undefined } = defineProps<EventCardProps>()

// template
const localePath = useLocalePath()

// event
const authentication = useAuthentication()
const store = useStore()
const isCreator = computed(
  () =>
    event.accountByCreatedBy &&
    event.accountByCreatedBy.id === authentication.value.signedInAccountId,
)
const isDraft = false // TODO: implements event drafts
const isGuest = computed(() =>
  event.guestsByEventId?.nodes[0]
    ? event.guestsByEventId.nodes[0].contactByContactId &&
      authentication.value.isSignedIn
      ? event.guestsByEventId.nodes[0].contactByContactId.accountId &&
        event.guestsByEventId.nodes[0].contactByContactId.accountId ===
          authentication.value.signedInAccountId
      : store.jwtDecoded &&
          'guests' in store.jwtDecoded &&
          Array.isArray(store.jwtDecoded.guests)
        ? store.jwtDecoded.guests.includes(event.guestsByEventId.nodes[0].id)
        : undefined
    : undefined,
)

// event favorite
const createEventFavoriteMutation = useMutation(
  graphql(`
    mutation CreateEventFavorite($input: EventFavoriteInput!) {
      createEventFavorite(input: { eventFavorite: $input }) {
        eventFavorite {
          createdBy
          eventId
          id
          nodeId
        }
      }
    }
  `),
)
const deleteEventFavoriteByIdMutation = useMutation(
  graphql(`
    mutation DeleteEventFavoriteById($input: DeleteEventFavoriteByIdInput!) {
      deleteEventFavoriteById(input: $input) {
        clientMutationId
      }
    }
  `),
)
// TODO: show loading state, error details
// const api = await useApiData([
//   createEventFavoriteMutation,
//   deleteEventFavoriteByIdMutation,
// ])
const isFavorite = computed(
  () =>
    authentication.value.isSignedIn &&
    event.eventFavoritesByEventId?.nodes[0]?.createdBy &&
    event.eventFavoritesByEventId?.nodes[0]?.createdBy ===
      authentication.value.signedInAccountId,
)
const executeUrqlRequest = useExecuteUrqlRequest()
const { t } = useI18n()
const toggleEventFavorite = async () => {
  if (isFavorite.value) {
    if (!event.eventFavoritesByEventId?.nodes[0]) return // TODO: error

    await executeUrqlRequest({
      errorMessageI18n: t('favoriteDeleteError'),
      request: deleteEventFavoriteByIdMutation.executeMutation({
        input: {
          id: event.eventFavoritesByEventId.nodes[0].id,
        },
      }),
    })
  } else {
    if (!authentication.value.isSignedIn) return // TODO: error

    await executeUrqlRequest({
      errorMessageI18n: t('favoriteCreateError'),
      request: createEventFavoriteMutation.executeMutation({
        input: {
          createdBy: authentication.value.signedInAccountId,
          eventId: event.id,
        },
      }),
    })
  }
}
</script>

<i18n lang="yaml">
de:
  favoriteCreate: Als Favorit markieren
  favoriteCreateError: Favorit konnte nicht hinzugefügt werden
  favoriteDelete: Nicht mehr als Favorit markieren
  favoriteDeleteError: Favorit konnte nicht entfernt werden
  heroImage: Titelbild der Veranstaltung
  isCreator: Veranstaltend
  isDraft: Entwurf
  # isFavorite: Favorit
  isGuest: Teilnehmend
  match: Match
en:
  favoriteCreate: Mark as favorite
  favoriteCreateError: Favorite could not be added
  favoriteDelete: Unmark as favorite
  favoriteDeleteError: Favorite could not be removed
  heroImage: Title picture of the event
  isCreator: Hosting
  isDraft: Draft
  # isFavorite: Favorite
  isGuest: Going
  match: Match
</i18n>
