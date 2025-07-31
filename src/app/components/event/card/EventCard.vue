<template>
  <div
    :class="
      cn(
        'has-focus-visible:focus-ring relative isolate flex items-center gap-3 rounded-lg border border-(--faint-line) bg-(--semantic-base-surface-1) p-3 shadow-xs',
        !variant &&
          (isDraft
            ? 'border-(--semantic-warning-strong)'
            : isCreator
              ? 'border-(--accent-strong)'
              : undefined),
        variant === 'highlight' &&
          'bg-(--complement-fancy) text-(--semantic-base-light-text-on-dark)',
        variant === 'recommendation' &&
          'flex-col items-stretch gap-1.5 px-0 pt-0 pb-2',
      )
    "
  >
    <div
      :class="cn('relative w-1/3', variant === 'recommendation' && 'w-auto')"
    >
      <LoaderImage
        :alt="t('heroImage')"
        :aspect="
          !variant || variant === 'highlight'
            ? 'aspect-[130/94]'
            : 'aspect-[366/173]'
        "
        :class="
          cn(
            'h-24 w-full rounded-lg object-cover',
            variant === 'recommendation' && 'h-44 rounded-b-none',
          )
        "
        :height="!variant || variant === 'highlight' ? '94' : '173'"
        :src="`/assets/static/images/event/${getHeroImageName(event.name)}.jpg`"
        :width="!variant || variant === 'highlight' ? '130' : '366'"
      />
      <AppButton
        v-if="
          (!variant || variant === 'recommendation') && store.signedInUsername
        "
        :aria-label="isFavorite ? t('favoriteDelete') : t('favoriteCreate')"
        :class="
          cn(
            'absolute z-20 flex size-5 items-center justify-center rounded-full bg-(--base-white)',
            !variant && 'top-1 left-1',
            variant === 'recommendation' && 'right-2 bottom-2 size-9',
          )
        "
        @click="toggleEventFavorite"
      >
        <AppIconFavoriteFilled
          v-if="isFavorite"
          :class="cn('text-(--complement-strong)', !variant && 'size-3')"
        />
        <AppIconFavorite
          v-else
          :class="
            cn(
              'text-[#5d665f]' /*'text-(--semantic-base-icon-primary)'*/,
              !variant && 'size-3',
            )
          "
        />
      </AppButton>
      <div
        v-if="variant === 'recommendation'"
        class="absolute top-2 left-2 z-20 rounded-3xl bg-(--accent-strong) px-3 py-2"
      >
        <TypographySubtitleSmall
          class="text-(--semantic-base-primary-button-text)"
        >
          {{ t('match') }}
        </TypographySubtitleSmall>
      </div>
    </div>
    <div
      :class="
        cn(
          'flex min-w-0 flex-1 flex-col gap-2 px-1 py-3.5',
          variant === 'recommendation' && 'gap-0 px-2 py-0',
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
      <Component
        :is="
          variant === 'highlight'
            ? TypographyBodySmall
            : TypographySubtitleSmall
        "
        class="truncate"
      >
        <AppTime :datetime="event.start" />
      </Component>
    </div>
    <div
      v-if="!variant && (isDraft || isCreator || isGuest)"
      :class="
        cn(
          'absolute top-1 right-1 rounded-sm px-1.5 py-0.5 text-(--semantic-base-primary-button-text)',
          isDraft
            ? 'bg-(--semantic-warning-strong)'
            : isCreator
              ? 'bg-(--accent-strong)'
              : isGuest
                ? 'bg-(--complement-strong) text-(--base-white)'
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
import type { OperationResult } from '@urql/core'
import { useMutation } from '@urql/vue'
import type { DeepReadonly } from 'vue'

import { cn } from '@/utils/shadcn'
import { graphql } from '~~/gql/generated'

import { TypographyBodySmall, TypographySubtitleSmall } from '#components'

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
          id: string
          accountId?: string | null
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
  variant?:
    | 'highlight'
    // | 'invitation' // TODO: implement invitation
    | 'recommendation' // alias for 'large'
}
const { event, variant = undefined } = defineProps<EventCardProps>()

// template
const localePath = useLocalePath()

// event
const store = useStore()
const isCreator = computed(
  () =>
    event.accountByCreatedBy &&
    event.accountByCreatedBy.id === store.signedInAccountId,
)
const isDraft = false // TODO: implements event drafts
const isGuest = computed(() =>
  event.guestsByEventId?.nodes[0]
    ? event.guestsByEventId.nodes[0].contactByContactId &&
      store.signedInAccountId
      ? event.guestsByEventId.nodes[0].contactByContactId.accountId &&
        event.guestsByEventId.nodes[0].contactByContactId.accountId ===
          store.signedInAccountId
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
const api = await useApiData([
  createEventFavoriteMutation,
  deleteEventFavoriteByIdMutation,
])
const isFavorite = computed(
  () =>
    store.signedInAccountId &&
    event.eventFavoritesByEventId?.nodes[0]?.createdBy &&
    event.eventFavoritesByEventId?.nodes[0]?.createdBy ===
      store.signedInAccountId,
)
const createEventFavorite = async ({
  eventId,
  createdBy,
}: {
  eventId: string
  createdBy: string
}) => {
  const result = await createEventFavoriteMutation.executeMutation({
    input: {
      eventId,
      createdBy,
    },
  })

  processApiResult({ result })
}
const removeEventFavorite = async ({ id }: { id: string }) => {
  const result = await deleteEventFavoriteByIdMutation.executeMutation({
    input: {
      id,
    },
  })

  processApiResult({ result })
}
const toggleEventFavorite = async () => {
  if (isFavorite.value) {
    if (!event.eventFavoritesByEventId?.nodes[0]) return // TODO: error

    await removeEventFavorite({
      id: event.eventFavoritesByEventId.nodes[0].id,
    })
  } else {
    if (!store.signedInAccountId) return // TODO: error

    await createEventFavorite({
      createdBy: store.signedInAccountId,
      eventId: event.id,
    })
  }
}

// utility
const { t } = useI18n()
const apiErrorMessages = computed(() =>
  getCombinedErrorMessages(api.value.errors),
)
const processApiResult = async ({ result }: { result: OperationResult }) => {
  if (result.error) {
    // TODO: confirm design
    await showToast({
      icon: 'error',
      text: apiErrorMessages.value.join('\n'),
      title: t('globalError'),
    })
    return
  }

  if (!result.data) {
    // TODO: confirm design
    await showToast({
      icon: 'error',
      text: t('globalErrorNoData'),
      title: t('globalError'),
    })
    return
  }
}
</script>

<i18n lang="yaml">
de:
  favoriteCreate: Als Favorit markieren
  favoriteDelete: Nicht mehr als Favorit markieren
  heroImage: Titelbild der Veranstaltung
  isCreator: Du organisierst
  isDraft: Im Entwurf
  isGuest: Du nimmst teil
  match: Match
en:
  favoriteCreate: Mark as favorite
  favoriteDelete: Unmark as favorite
  heroImage: Title picture of the event
  isCreator: You're organizing
  isDraft: In Draft
  isGuest: You're attending
  match: Match
</i18n>
