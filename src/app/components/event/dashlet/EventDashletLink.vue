<template>
  <EventDashlet v-if="event.url">
    <AppLink class="line-clamp-2" is-external :to="event.url">
      {{ event.url }}
    </AppLink>
    <template #icon>
      <IHeroiconsLink :title="t('url')" />
    </template>
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
