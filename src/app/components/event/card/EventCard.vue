<template>
  <!-- recommendation (full card) variant -->
  <div
    v-if="variant === 'recommendation'"
    class="relative cursor-pointer overflow-hidden rounded-3xl bg-(--neutral-level-1)"
  >
    <!-- Image section -->
    <div class="relative px-2 pt-2">
      <LoaderImage
        :alt="t('heroImage')"
        aspect="aspect-[4/3]"
        class="w-full rounded-2xl object-cover"
        height="300"
        :src="`/assets/static/images/event/${getHeroImageName(event.name)}.jpg`"
        width="400"
      />
      <!-- Match score badge (feature-flagged) -->
      <EventMatchScoreBadge
        v-if="isFeatureEnabled('match-scores').value"
        class="absolute top-4 left-4 z-20"
        :score="95"
      />
      <!-- Heart toggle button -->
      <AppButton
        v-if="store.signedInUsername"
        :aria-label="isFavorite ? t('favoriteDelete') : t('favoriteCreate')"
        class="absolute top-4 right-4 z-20 flex size-10 items-center justify-center rounded-full bg-white shadow-md"
        @click="toggleEventFavorite"
      >
        <AppIconFavoriteFilled
          v-if="isFavorite"
          class="text-(--complement-strong)"
        />
        <AppIconFavorite
          v-else
          class="text-(--semantic-base-dark-text-on-light)"
        />
      </AppButton>
      <!-- Date badge -->
      <div
        class="absolute bottom-3 left-4 z-20 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-2 shadow-sm"
      >
        <span class="text-sm font-semibold text-(--accent-strong)">{{
          dateParts.month
        }}</span>
        <span
          class="text-sm font-semibold text-(--semantic-base-text-primary)"
          >{{ dateParts.day }}</span
        >
        <span aria-hidden="true" class="h-4 w-px bg-(--neutral-level-5)" />
        <span
          class="text-sm font-semibold text-(--semantic-base-text-primary)"
          >{{ dateParts.time }}</span
        >
        <span
          v-if="dateParts.period"
          class="text-xs font-semibold text-(--semantic-base-text-secondary)"
          >{{ dateParts.period }}</span
        >
      </div>
    </div>
    <!-- Content section -->
    <div class="flex flex-col gap-1 px-3 pt-2 pb-3">
      <!-- Title -->
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
        <span
          class="line-clamp-2 text-[20px] leading-6.25 font-semibold tracking-[-0.4px] wrap-break-word text-(--semantic-base-text-primary)"
          >{{ event.name }}</span
        >
      </AppButton>
      <span
        v-else
        class="line-clamp-2 text-[20px] leading-[25px] font-semibold tracking-[-0.4px] wrap-break-word text-(--semantic-base-text-primary)"
        >{{ event.name }}</span
      >
      <!-- Location -->
      <div v-if="address?.name" class="flex items-center gap-1.5">
        <AppIconMapPin
          class="size-4 shrink-0 text-(--semantic-base-text-secondary)"
        />
        <span
          class="truncate text-[13px] font-semibold text-(--semantic-base-text-secondary)"
          >{{ address.name }}</span
        >
      </div>
      <!-- Footer row -->
      <div class="flex items-center gap-2.5 pt-1">
        <EventAttendeeAvatarStack
          v-if="isAttendeeStacksEnabled && attendeeAvatars.length > 0"
          :avatars="attendeeAvatars"
        />
        <AppButton
          v-if="event.accountByCreatedBy"
          :aria-label="t('joinNow')"
          class="relative z-20 flex h-10 flex-1 items-center justify-center rounded-2xl bg-(--accent-strong) text-[15px] font-semibold text-white hover:bg-(--accent-strong-hover)"
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
          {{ t('joinNow') }}
        </AppButton>
      </div>
    </div>
  </div>

  <!-- compact variant -->
  <div
    v-else-if="variant === 'compact'"
    class="relative flex cursor-pointer gap-3 transition-opacity hover:opacity-90"
  >
    <LoaderImage
      :alt="t('heroImage')"
      aspect="aspect-[4/3]"
      class="w-40 shrink-0 rounded-2xl object-cover"
      height="120"
      :src="`/assets/static/images/event/${getHeroImageName(event.name)}.jpg`"
      width="160"
    />
    <div class="flex min-w-0 flex-1 flex-col justify-center gap-1">
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
        <span
          class="line-clamp-2 text-[20px] leading-6.25 font-semibold tracking-[-0.4px] wrap-break-word text-(--semantic-base-text-primary)"
          >{{ event.name }}</span
        >
      </AppButton>
      <span
        v-else
        class="line-clamp-2 text-[20px] leading-[25px] font-semibold tracking-[-0.4px] wrap-break-word text-(--semantic-base-text-primary)"
        >{{ event.name }}</span
      >
      <AppTime
        class="text-[13px] text-(--semantic-base-text-secondary)"
        :datetime="event.start"
      />
    </div>
  </div>

  <!-- default / highlight variants (unchanged) -->
  <div
    v-else
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
      )
    "
  >
    <div class="relative w-1/3">
      <div
        v-if="categoryName || formatName"
        :aria-label="t('heroImage')"
        class="flex h-24 w-full items-center justify-center gap-2 rounded-lg border border-(--faint-line)"
        role="img"
      >
        <EventIconCategory
          v-if="categoryName"
          class="size-10"
          :name="categoryName"
        />
        <EventIconFormat v-if="formatName" class="size-10" :name="formatName" />
      </div>
      <LoaderImage
        v-else
        :alt="t('heroImage')"
        aspect="aspect-[130/94]"
        class="h-24 w-full rounded-lg object-cover"
        height="94"
        :src="`/assets/static/images/event/${getHeroImageName(event.name)}.jpg`"
        width="130"
      />
      <AppButton
        v-if="!variant && store.signedInUsername"
        :aria-label="isFavorite ? t('favoriteDelete') : t('favoriteCreate')"
        class="absolute top-1 left-1 z-20 flex size-5 items-center justify-center rounded-full bg-(--base-white)"
        @click="toggleEventFavorite"
      >
        <AppIconFavoriteFilled
          v-if="isFavorite"
          class="size-3 text-(--complement-strong)"
        />
        <AppIconFavorite
          v-else
          class="size-3 text-(--semantic-base-dark-text-on-light)"
        />
      </AppButton>
    </div>
    <div :class="cn('flex min-w-0 flex-1 flex-col gap-2 px-1 py-3.5')">
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
import { useMutation } from '@urql/vue'
import type { DeepReadonly } from 'vue'

import { cn } from '@/utils/shadcn'
import { graphql } from '~~/gql/generated'

import { TypographyBodySmall, TypographySubtitleSmall } from '#components'

// compiler
export type EventCardProps = {
  address?: { name?: string | null } | null
  event: DeepReadonly<{
    accountByCreatedBy?: {
      id?: string
      rowId?: string
      username: string
    } | null
    eventFavoritesByEventId?: {
      nodes: {
        createdBy: string
        id: string
        rowId: string
      }[]
    } | null
    eventCategoryMappingsByEventId?: {
      nodes: {
        eventCategoryByCategoryId?: { name: string } | null
      }[]
    } | null
    eventFormatMappingsByEventId?: {
      nodes: {
        eventFormatByFormatId?: { name: string } | null
      }[]
    } | null
    guestsByEventId?: {
      nodes: {
        contactByContactId?: {
          accountId?: string | null
          id: string
          rowId: string
        } | null
        id: string
        rowId: string
      }[]
    } | null
    id: string
    name: string
    rowId: string
    slug: string
    start: string
  }>
  // TODO: turn javascript usage into attribute based styles
  variant?:
    | 'compact'
    | 'highlight'
    // | 'invitation' // TODO: implement invitation
    | 'recommendation' // alias for 'large'
}
const {
  address = undefined,
  event,
  variant = undefined,
} = defineProps<EventCardProps>()

// template
const localePath = useLocalePath()

// feature flags
const { isFeatureEnabled } = useFeatureFlags()
const isAttendeeStacksEnabled = isFeatureEnabled('attendee-avatar-stacks').value

// event
const categoryName = computed(
  () =>
    event.eventCategoryMappingsByEventId?.nodes[0]?.eventCategoryByCategoryId
      ?.name,
)
const formatName = computed(
  () =>
    event.eventFormatMappingsByEventId?.nodes[0]?.eventFormatByFormatId?.name,
)
const store = useStore()
const isCreator = computed(
  () =>
    event.accountByCreatedBy &&
    event.accountByCreatedBy.rowId === store.signedInAccountId,
)
const isDraft = false // TODO: implements event drafts
const isGuest = computed(() =>
  event.guestsByEventId?.nodes[0]
    ? event.guestsByEventId.nodes[0].contactByContactId &&
      store.signedInAccountId
      ? event.guestsByEventId.nodes[0].contactByContactId.accountId &&
        event.guestsByEventId.nodes[0].contactByContactId.accountId ===
          store.signedInAccountId
      : store.jwtPayload &&
          'guests' in store.jwtPayload &&
          Array.isArray(store.jwtPayload.guests)
        ? store.jwtPayload.guests.includes(event.guestsByEventId.nodes[0].rowId)
        : undefined
    : undefined,
)

const attendeeAvatars = computed(() =>
  (event.guestsByEventId?.nodes ?? []).map((guest) => ({
    alt: t('attendeeAvatar'),
    id: guest.id,
  })),
)

// date parts for recommendation card
const { locale, t } = useI18n()
const dateParts = computed(() => {
  const date = new Date(event.start)
  const timeParts = new Intl.DateTimeFormat(locale.value, {
    hour: 'numeric',
    minute: '2-digit',
  }).formatToParts(date)

  const get = (type: string) =>
    timeParts.find((p) => p.type === type)?.value ?? ''

  return {
    month: new Intl.DateTimeFormat(locale.value, {
      month: 'short',
    }).format(date),
    day: String(new Date(event.start).getDate()),
    time: `${get('hour')}:${get('minute')}`,
    period: timeParts.find((p) => p.type === 'dayPeriod')?.value,
  }
})

// event favorite
const createEventFavoriteMutation = useMutation(
  graphql(`
    mutation CreateEventFavorite($input: CreateEventFavoriteInput!) {
      createEventFavorite(input: $input) {
        eventFavorite {
          createdBy
          eventByEventId {
            id
          }
          eventId
          id
          rowId
        }
      }
    }
  `),
)
const deleteEventFavoriteByRowIdMutation = useMutation(
  graphql(`
    mutation DeleteEventFavoriteByRowId(
      $input: DeleteEventFavoriteByRowIdInput!
    ) {
      deleteEventFavoriteByRowId(input: $input) {
        clientMutationId
      }
    }
  `),
)
// TODO: show loading state, error details
// const api = await useApiData([
//   createEventFavoriteMutation,
//   deleteEventFavoriteByRowIdMutation,
// ])
// `favoriteOverride` tracks the result of the latest toggle locally: some
// callers (e.g. the dashboard recommendations) pass in an `event` snapshot
// that never refreshes from the cache, so `isFavorite` can't rely on the
// prop alone to reflect a toggle performed in this component instance.
// `undefined` = defer to the prop, `null` = locally unfavorited.
const favoriteOverride = ref<{ createdBy: string; rowId: string } | null>()
const currentFavorite = computed(() =>
  favoriteOverride.value === undefined
    ? event.eventFavoritesByEventId?.nodes[0]
    : favoriteOverride.value,
)
const isFavorite = computed(
  () =>
    !!(
      store.signedInAccountId &&
      currentFavorite.value?.createdBy &&
      currentFavorite.value.createdBy === store.signedInAccountId
    ),
)
const executeUrqlRequest = useExecuteUrqlRequest()
const toggleEventFavorite = async () => {
  if (isFavorite.value) {
    const favorite = currentFavorite.value
    if (!favorite) return // TODO: error

    const result = await executeUrqlRequest({
      errorMessageI18n: t('favoriteDeleteError'),
      request: deleteEventFavoriteByRowIdMutation.executeMutation({
        input: {
          rowId: favorite.rowId,
        },
      }),
    })
    if (result) favoriteOverride.value = null
  } else {
    if (!store.signedInAccountId) return // TODO: error

    const result = await executeUrqlRequest({
      errorMessageI18n: t('favoriteCreateError'),
      request: createEventFavoriteMutation.executeMutation({
        input: {
          eventFavorite: {
            createdBy: store.signedInAccountId,
            eventId: event.rowId,
          },
        },
      }),
    })
    const created = result?.data?.createEventFavorite?.eventFavorite
    if (created)
      favoriteOverride.value = {
        createdBy: created.createdBy,
        rowId: created.rowId,
      }
  }
}
</script>

<i18n lang="yaml">
de:
  attendeeAvatar: Teilnehmer
  favoriteCreate: Als Favorit markieren
  favoriteCreateError: Favorit konnte nicht hinzugefügt werden
  favoriteDelete: Nicht mehr als Favorit markieren
  favoriteDeleteError: Favorit konnte nicht entfernt werden
  heroImage: Titelbild der Veranstaltung
  isCreator: Du organisierst
  isDraft: Im Entwurf
  isGuest: Du nimmst teil
  joinNow: Jetzt beitreten
en:
  attendeeAvatar: Attendee
  favoriteCreate: Mark as favorite
  favoriteCreateError: Favorite could not be added
  favoriteDelete: Unmark as favorite
  favoriteDeleteError: Favorite could not be removed
  heroImage: Title picture of the event
  isCreator: You're organizing
  isDraft: In Draft
  isGuest: You're attending
  joinNow: Join now
</i18n>
