<template>
  <EventDashlet v-if="event">
    <span v-if="event.isArchived" class="block">{{ t('archived') }}</span>
    <span v-else-if="!event.isPublished" class="block">{{ t('draft') }}</span>
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
        :is-published="event.isPublished"
        :visibility="event.visibility"
      />
    </template>
  </EventDashlet>
</template>

<script setup lang="ts">
import { EventVisibility } from '~~/gql/generated/graphcache'
import type { EventItemFragment } from '~~/gql/generated/graphql'

const { event } = defineProps<{
  event: Pick<EventItemFragment, 'isArchived' | 'isPublished' | 'visibility'>
}>()

const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  archived: archiviert
  bug: Bug
  draft: Entwurf
  private: privat
  public: öffentlich
en:
  archived: archived
  bug: bug
  draft: draft
  private: private
  public: public
</i18n>
