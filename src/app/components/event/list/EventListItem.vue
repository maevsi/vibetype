<template>
  <li
    v-if="event && event.accountByCreatedBy?.username"
    :class="'relative isolate rounded-xl border border-(--semantic-base-line) bg-(--semantic-base-surface-1) shadow-xs ring-blue-500/50 has-focus:ring-3'"
  >
    <EventHeroImage :event="event" />
    <div class="flex flex-col gap-1 rounded-t-none p-2 pb-4">
      <Button
        :aria-label="event.name"
        class="focus:ring-0"
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
        <div class="flex items-center justify-between gap-2">
          <TypographyH6 class="truncate text-3xl font-semibold">
            {{ event.name }}
          </TypographyH6>
          <Tag
            v-if="isDraft"
            class="bg-warning-strong self-start text-sm font-medium"
          >
            {{ t('draft') }}
          </Tag>
        </div>
      </Button>
      <TypographySubtitleSmall class="truncate">
        {{ eventStart.format('lll') }}
      </TypographySubtitleSmall>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { EventItemFragment } from '~~/gql/generated/graphql'

export interface Props {
  event: Pick<
    EventItemFragment,
    | 'accountByCreatedBy'
    | 'name'
    | 'start'
    | 'visibility'
    | 'slug'
    | 'end'
    | 'description'
    | 'id'
  >
  isDraft?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isDraft: false,
})

const { t } = useI18n()
const localePath = useLocalePath()
const dateTime = useDateTime()
const eventStart = computed(() => dateTime(props.event.start))
</script>

<i18n lang="yaml">
de:
  draft: Entwurf
en:
  draft: Draft
</i18n>
