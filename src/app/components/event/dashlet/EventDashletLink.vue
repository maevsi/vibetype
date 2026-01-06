<template>
  <EventDashlet v-if="event.url">
    <AppLink class="line-clamp-2" is-external :to="event.url">
      {{ event.url }}
    </AppLink>
    <template #icon>
      <AppIconLink />
    </template>
  </EventDashlet>
</template>

<script setup lang="ts">
import type { EventItemFragment } from '~~/gql/generated/graphql'

const { event } = defineProps<{
  event: Pick<EventItemFragment, 'url' | 'isRemote'>
}>()
</script>
