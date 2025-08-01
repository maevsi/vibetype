<template>
  <EventDashlet v-if="event.url">
    <span>
      <IHeroiconsLink :title="t('url')" />
    </span>
    <AppLink class="line-clamp-2" is-external :to="event.url">
      {{ event.url }}
    </AppLink>
  </EventDashlet>
</template>

<script setup lang="ts">
import type { EventItemFragment } from '~~/gql/generated/graphql'

const { event } = defineProps<{
  event: Pick<EventItemFragment, 'url' | 'isRemote'>
}>()

const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  url: Link
en:
  url: Link
</i18n>
