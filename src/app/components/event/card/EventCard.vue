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
      <EventFavoriteButton
        v-if="!variant || variant === 'recommendation'"
        :class="
          cn(
            'absolute z-20 flex items-center justify-center rounded-full bg-surface-raised',
            variant === 'recommendation'
              ? 'top-2 right-2 size-10'
              : 'top-1 left-1 size-7',
          )
        "
        :event
        :icon-class="variant === 'recommendation' ? 'size-5' : 'size-4'"
      />
      <div
        v-if="variant === 'recommendation'"
        class="absolute top-2 left-2 z-20 flex h-10 items-center gap-2 rounded-pill bg-action-primary px-4 text-body text-on-action-primary"
      >
        <AppIconNetworkIntelligence class="size-5" />
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
        v-if="!variant && (isDraft || isCreator || isGuest)"
        :class="
          cn(
            'absolute bottom-1.5 left-1/2 -translate-x-1/2 rounded-small px-2 py-0.5 text-caption whitespace-nowrap text-fg-1',
            isDraft
              ? 'bg-warning-tint'
              : isCreator
                ? 'bg-info-tint'
                : 'bg-success-tint',
          )
        "
      >
        <template v-if="isDraft">{{ t('isDraft') }}</template>
        <template v-else-if="isCreator">{{ t('isCreator') }}</template>
        <template v-else>{{ t('isGuest') }}</template>
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
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DeepReadonly } from 'vue'

import { cn } from '@/utils/shadcn'

// compiler
export type EventCardProps = {
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
    eventUploadsByEventId?: {
      nodes: {
        isHeaderImage?: boolean | null
        uploadByUploadId?: { storageKey?: string | null } | null
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
  variant?: 'highlight' | 'recommendation' // alias for 'large'
}
const { event, variant = undefined } = defineProps<EventCardProps>()

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
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  heroImage: Titelbild der Veranstaltung
  isCreator: Von dir
  isDraft: Entwurf
  isGuest: Dabei
  match: Match
en:
  heroImage: Title picture of the event
  isCreator: Hosting
  isDraft: Draft
  isGuest: Going
  match: Match
</i18n>
