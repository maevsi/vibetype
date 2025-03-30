<template>
  <EventDashlet v-if="event.isInPerson || event.isRemote">
    <span class="flex gap-2">
      <IFa6RegularHandshake v-if="event.isInPerson" :title="t('inPerson')" />
      <IHeroiconsWifi v-if="event.isRemote" :title="t('remote')" />
    </span>
    {{
      [
        ...(event.isInPerson ? [t('inPerson')] : []),
        ...(event.isRemote ? [t('remote')] : []),
      ].join(', ')
    }}
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
