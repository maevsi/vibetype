<template>
  <li
    v-if="event && event.accountByAuthorAccountId?.username"
    :class="{
      'opacity-75': eventEnd.isValid()
        ? eventEnd.isBefore(now)
        : eventStart.isBefore(now),
    }"
  >
    <Button
      :aria-label="event.name"
      is-block
      :to="
        (() => {
          const path = localePath({
            name: 'event-view-username-event_name',
            params: {
              username: event.accountByAuthorAccountId?.username,
              event_name: event.slug,
            },
          })

          return path
        })()
      "
    >
      <div class="relative">
        <EventHeroImage :event="event" />
        <div
          class="absolute bottom-4 left-4 flex flex-col justify-between gap-4 md:flex-row"
        >
          <div
            class="text-text-bright flex min-w-0 flex-col items-baseline md:flex-row md:gap-2"
          >
            <h1 class="m-0 line-clamp-2">
              {{ event.name }}
            </h1>
            <Owner :username="event.accountByAuthorAccountId.username" />
          </div>
        </div>
      </div>
      <Card class="flex flex-col gap-2">
        <div class="flex items-center justify-between gap-2">
          <div
            class="truncate font-medium"
            :class="{
              'text-green-700 dark:text-green-600':
                eventStart.isSameOrAfter(now),
            }"
          >
            {{ formatEventDate(event.start) }}
          </div>
          <Tag
            v-if="event.visibility === 'PRIVATE'"
            class="self-start text-sm font-medium"
          >
            <div class="flex items-center gap-1">
              <IHeroiconsEyeSlash :title="t('private')" />
              {{ t('private') }}
            </div>
          </Tag>

          <Tag
            v-if="isDraft"
            class="bg-warning-strong self-start text-sm font-medium"
          >
            <div class="flex items-center gap-1">
              {{ t('draft') }}
            </div>
          </Tag>
        </div>

        <!-- <div class="flex items-baseline gap-2 truncate">
          <div class="truncate text-xl font-bold">
            {{ event.name }}
          </div>
          <Owner :username="event.accountByAuthorAccountId.username" />
        </div> -->
        <p v-if="eventDescriptionTemplate" class="vio-line-clamp-2">
          {{ eventDescriptionTemplate }}
        </p>
      </Card>
    </Button>
  </li>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import DOMPurify from 'isomorphic-dompurify'
import mustache from 'mustache'
import type { DraftEvent } from '~/composables/storage/LocalStorageStrategy'

import type { EventItemFragment } from '~~/gql/generated/graphql'

export interface Props {
  event: Pick<
    EventItemFragment,
    | 'name'
    | 'accountByAuthorAccountId'
    | 'start'
    | 'visibility'
    | 'slug'
    | 'end'
    | 'description'
    | 'id'
  >
  isDraft?: boolean | DraftEvent
}

const props = withDefaults(defineProps<Props>(), {})

const localePath = useLocalePath()
const dateTime = useDateTime()
const eventStart = computed(() => dateTime(props.event.start))
const formatEventDate = (dateString: string) => {
  if (dateString.includes('ZT')) {
    return dayjs(dateString.split('T')[0]).format('lll')
  } else {
    return dayjs(dateString).format('lll')
  }
}
</script>

<i18n lang="yaml">
de:
  draft: Entwurf
  private: privat
en:
  draft: Draft
  private: private
</i18n>
