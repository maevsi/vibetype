<template>
  <EventDashlet v-if="event.isInPerson || event.isRemote">
    {{
      [
        ...(event.isInPerson ? [t('inPerson')] : []),
        ...(event.isRemote ? [t('remote')] : []),
      ].join(', ')
    }}
    <template #icon>
      <span class="flex gap-2">
        <AppIconMapPin v-if="event.isInPerson" :title="t('inPerson')" />
        <AppIconWifi v-if="event.isRemote" :title="t('remote')" />
      </span>
    </template>
  </EventDashlet>
</template>

<script setup lang="ts">
import type { EventItemFragment } from '~~/gql/generated/graphql'

const { event } = defineProps<{
  event: Pick<EventItemFragment, 'isInPerson' | 'isRemote'>
}>()

const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  inPerson: vor Ort
  remote: digital
en:
  inPerson: in person
  remote: remote
</i18n>
