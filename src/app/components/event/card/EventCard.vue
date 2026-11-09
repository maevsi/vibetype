<template>
  <div
    :class="
      cn(
        'has-focus-visible:focus-ring relative isolate flex items-center gap-3 rounded-lg border border-(--semantic-base-line) bg-(--semantic-base-surface-1) p-3 shadow-xs',
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
      <div
        v-if="categoryName || formatName"
        :aria-label="t('heroImage')"
        :class="
          cn(
            'flex h-24 w-full items-center justify-center gap-2 rounded-lg border border-(--semantic-base-line)',
            variant === 'recommendation' && 'h-44 rounded-b-none',
          )
        "
        role="img"
      >
        <EventIconCategory
          v-if="categoryName"
          :class="cn('size-10', variant === 'recommendation' && 'size-16')"
          :name="categoryName"
        />
        <EventIconFormat
          v-if="formatName"
          :class="cn('size-10', variant === 'recommendation' && 'size-16')"
          :name="formatName"
        />
      </div>
      <LoaderImage
        v-else
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
      <EventFavoriteButton
        v-if="!variant || variant === 'recommendation'"
        :class="
          cn(
            'absolute z-20 flex size-5 items-center justify-center rounded-full bg-(--semantic-base-light-text-on-dark)',
            !variant && 'top-1 left-1',
            variant === 'recommendation' && 'right-2 bottom-2 size-9',
          )
        "
        :event
        :icon-class="!variant && 'size-3'"
      />
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
                ? 'bg-(--complement-strong) text-(--semantic-base-light-text-on-dark)'
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
import type { DeepReadonly } from 'vue'

import { cn } from '@/utils/shadcn'

import { TypographyBodySmall, TypographySubtitleSmall } from '#components'

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
  isCreator: Du organisierst
  isDraft: Im Entwurf
  isGuest: Du nimmst teil
  match: Match
en:
  heroImage: Title picture of the event
  isCreator: You're organizing
  isDraft: In Draft
  isGuest: You're attending
  match: Match
</i18n>
