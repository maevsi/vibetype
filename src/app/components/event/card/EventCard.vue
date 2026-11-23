<template>
  <div
    :class="
      cn(
        'relative isolate flex items-center gap-4 rounded-large p-2 has-focus-visible:focus-ring',
        variant !== 'recommendation' && variant !== 'highlight'
          ? 'bg-transparent'
          : 'bg-surface-raised',
        variant === 'recommendation' && 'flex-col items-stretch gap-2',
      )
    "
  >
    <div
      :class="
        cn(
          'relative shrink-0',
          variant === 'recommendation'
            ? 'w-auto'
            : variant === 'highlight'
              ? 'w-40'
              : 'w-20',
        )
      "
    >
      <div
        v-if="!headerImageSrc && (categoryName || formatName)"
        :aria-label="t('heroImage')"
        :class="
          cn(
            'flex w-full items-center justify-center gap-2 bg-surface-raised',
            variant === 'recommendation'
              ? 'aspect-[4/3] max-h-64 rounded-medium bg-surface'
              : variant === 'highlight'
                ? 'h-30 rounded-pill bg-surface'
                : 'h-20 gap-1 rounded-pill',
          )
        "
        role="img"
      >
        <EventIconCategory
          v-if="categoryName"
          :class="
            cn(
              'size-10',
              !variant && 'size-8',
              variant === 'recommendation' && 'size-16',
            )
          "
          :name="categoryName"
        />
        <EventIconFormat
          v-if="formatName"
          :class="
            cn(
              'size-10',
              !variant && 'size-8',
              variant === 'recommendation' && 'size-16',
            )
          "
          :name="formatName"
        />
      </div>
      <AppImage
        v-else
        :alt="t('heroImage')"
        :aspect="
          variant === 'recommendation' || variant === 'highlight'
            ? 'aspect-[4/3]'
            : 'aspect-square'
        "
        :class="
          cn(
            'w-full object-cover',
            variant === 'recommendation'
              ? 'max-h-64 rounded-medium'
              : variant === 'highlight'
                ? 'h-30 rounded-pill'
                : 'h-20 rounded-pill',
          )
        "
        :height="
          variant === 'recommendation'
            ? '300'
            : variant === 'highlight'
              ? '120'
              : '80'
        "
        :src="
          headerImageSrc ||
          `/assets/static/images/event/${getHeroImageName(event.name)}.jpg`
        "
        :width="
          variant === 'recommendation'
            ? '400'
            : variant === 'highlight'
              ? '160'
              : '80'
        "
      />
      <!-- the small list items leave saving to the event page, as a button on their thumbnail is too small to hit -->
      <EventFavoriteButton
        v-if="variant === 'recommendation'"
        class="absolute top-2 right-2 z-20 flex size-10 items-center justify-center rounded-full bg-surface-raised"
        :event
        icon-class="size-5"
      />
      <div
        v-if="variant === 'recommendation'"
        class="absolute top-2 left-2 z-20 flex items-center gap-1 rounded-small bg-info-tint px-2 py-0.5 text-caption text-fg-1"
      >
        <AppIconNetworkIntelligence aria-hidden="true" class="size-3" />
        {{ t('match') }}
      </div>
      <div
        v-if="variant === 'recommendation'"
        aria-hidden="true"
        class="absolute bottom-3 left-3 flex flex-col items-center rounded-medium bg-surface-raised px-4 py-2"
      >
        <AppTime
          class="text-body-small text-link"
          :datetime="event.start"
          :options="{ month: 'short' }"
        />
        <AppTime
          class="text-headline text-fg-1"
          :datetime="event.start"
          :options="{ day: 'numeric' }"
        />
      </div>
      <span
        v-if="!variant && badgeKind"
        :class="
          cn(
            'absolute bottom-1.5 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-small px-2 py-0.5 text-caption whitespace-nowrap text-fg-1',
            badgeKind === 'draft'
              ? 'bg-warning-tint'
              : badgeKind === 'going'
                ? 'bg-success-tint'
                : badgeKind === 'saved'
                  ? 'bg-surface-raised'
                  : 'bg-info-tint',
          )
        "
      >
        <AppIconUsers
          v-if="badgeKind === 'hosting'"
          aria-hidden="true"
          class="size-3"
        />
        <AppIconBookmark
          v-else-if="badgeKind === 'saved'"
          aria-hidden="true"
          class="size-3"
        />
        {{ badgeLabel }}
      </span>
    </div>
    <div
      :class="
        cn(
          'flex min-w-0 flex-1 flex-col gap-1',
          variant === 'recommendation' && 'px-1 pb-1',
        )
      "
    >
      <AppButton
        v-if="event.accountByCreatedBy"
        :aria-label="event.name"
        class="block focus-visible:outline-0"
        size="none"
        :to="
          localePath({
            name: 'event-view-username-event_name',
            params: {
              username: event.accountByCreatedBy.username,
              event_name: event.slug,
            },
          })
        "
        variant="ghost"
      >
        <span class="absolute inset-0 z-10" />
        <EventCardTitle :class="!variant && 'text-headline'">
          {{ event.name }}
        </EventCardTitle>
      </AppButton>
      <EventCardTitle v-else :class="!variant && 'text-headline'">
        {{ event.name }}
      </EventCardTitle>
      <span class="truncate text-body-small text-fg-3">
        <AppTime :datetime="event.start" />
      </span>
      <div
        v-if="
          event.addressByAddressId?.city || distanceText || event.guestCount
        "
        class="flex items-center gap-3 text-body-small text-fg-3"
      >
        <span v-if="event.addressByAddressId?.city" class="min-w-0 truncate">
          {{ event.addressByAddressId.city }}
        </span>
        <span
          v-if="distanceText"
          :aria-label="t('distanceAway', { distance: distanceText })"
          class="flex min-w-0 items-center gap-1"
          role="img"
        >
          <AppIconMapPin aria-hidden="true" class="size-4 shrink-0" />
          <span class="truncate">{{ distanceText }}</span>
        </span>
        <span
          v-if="event.guestCount"
          :aria-label="t('guestCountLabel', event.guestCount)"
          class="flex items-center gap-1"
          role="img"
        >
          <AppIconUsers aria-hidden="true" class="size-4 shrink-0" />
          <span>{{ event.guestCount }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DeepReadonly } from 'vue'

import { cn } from '@/utils/shadcn'

// compiler
export type EventCardBadge = 'draft' | 'going' | 'hosting' | 'saved'
export type EventCardProps = {
  event: DeepReadonly<{
    accountByCreatedBy?: {
      id?: string
      rowId?: string
      username: string
    } | null
    addressByAddressId?: { city?: string | null } | null
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
    eventUploadsByEventId?: {
      nodes: {
        isHeaderImage?: boolean | null
        uploadByUploadId?: { storageKey?: string | null } | null
      }[]
    } | null
    guestCount?: number
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
    isInPerson?: boolean | null
    name: string
    rowId: string
    slug: string
    start: string
  }>
  // replaces the badge derived from the viewer's relation to the event
  badge?: EventCardBadge
  distanceKilometers?: number
  // TODO: turn javascript usage into attribute based styles
  variant?: 'highlight' | 'recommendation' // alias for 'large'
}
const {
  badge = undefined,
  distanceKilometers = undefined,
  event,
  variant = undefined,
} = defineProps<EventCardProps>()

// template
const localePath = useLocalePath()

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
const TUSD_FILES_URL = useTusdFilesUrl()
const headerImageSrc = computed(() => {
  const storageKey = getEventHeaderImageStorageKey(event)
  return storageKey ? TUSD_FILES_URL + storageKey : undefined
})
const store = useStore()
const isCreator = computed(
  () =>
    event.accountByCreatedBy &&
    event.accountByCreatedBy.rowId === store.signedInAccountId,
)
const isDraft = false
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
const badgeKind = computed<EventCardBadge | undefined>(
  () =>
    badge ??
    (isDraft
      ? 'draft'
      : isCreator.value
        ? 'hosting'
        : isGuest.value
          ? 'going'
          : undefined),
)
const { locale, t } = useI18n()
const badgeLabel = computed(() =>
  badgeKind.value === 'draft'
    ? t('draft')
    : badgeKind.value === 'going'
      ? t('going')
      : badgeKind.value === 'hosting'
        ? t('hosting')
        : t('saved'),
)

// distance
const distanceText = computed(() => {
  if (distanceKilometers === undefined) return

  const format = (kilometers: number) =>
    new Intl.NumberFormat(locale.value, {
      maximumFractionDigits: kilometers < 10 ? 1 : 0,
      style: 'unit',
      unit: 'kilometer',
      unitDisplay: 'short',
    }).format(kilometers)

  return distanceKilometers < 1
    ? t('distanceLessThanOneKilometer', { distance: format(1) })
    : format(distanceKilometers)
})
</script>

<i18n lang="yaml">
de:
  distanceAway: '{distance} entfernt'
  distanceLessThanOneKilometer: Weniger als {distance}
  draft: Entwurf
  going: Dabei
  guestCountLabel: Kein Gast | 1 Gast | {count} Gäste
  heroImage: Titelbild der Veranstaltung
  hosting: Von Dir
  match: Match
  saved: Gemerkt
en:
  distanceAway: '{distance} away'
  distanceLessThanOneKilometer: Less than {distance}
  draft: Draft
  going: Going
  guestCountLabel: No guests | 1 guest | {count} guests
  heroImage: Title picture of the event
  hosting: Hosting
  match: Match
  saved: Saved
</i18n>
