<template>
  <EventDashlet v-if="event">
    <span v-if="event.isArchived" class="block">{{ t('archived') }}</span>
    <span v-else-if="publicationState === 'draft'" class="block">
      {{ t('draft') }}
    </span>
    <i18n-t
      v-else-if="publicationState === 'scheduled'"
      class="block"
      keypath="scheduledAt"
      tag="span"
    >
      <template #date>
        <AppTime :datetime="event.publishedAt!" />
      </template>
    </i18n-t>
    <span v-else-if="event.visibility === EventVisibility.Public" class="block">
      {{ t('public') }}
    </span>
    <span
      v-else-if="event.visibility === EventVisibility.Private"
      class="block"
    >
      {{ t('private') }}
    </span>
    <span v-else class="block">{{ t('bug') }}</span>
    <template #icon>
      <EventIconVisibility
        :is-archived="event.isArchived"
        :publication-state="publicationState"
        :visibility="event.visibility"
      />
    </template>
  </EventDashlet>
</template>

<script setup lang="ts">
import { EventVisibility } from '~~/gql/generated/graphcache'
import type { EventItemFragment } from '~~/gql/generated/graphql'

const { event } = defineProps<{
  event: Pick<EventItemFragment, 'isArchived' | 'publishedAt' | 'visibility'>
}>()

const { t } = useI18n()

const publicationState = computed(() => getEventPublicationState(event))
</script>

<i18n lang="yaml">
de:
  archived: archiviert
  bug: Bug
  draft: Entwurf
  private: privat
  public: öffentlich
  scheduledAt: geplant für {date}
en:
  archived: archived
  bug: bug
  draft: draft
  private: private
  public: public
  scheduledAt: scheduled for {date}
</i18n>
