<template>
  <EventDashlet v-if="event.end && event.start">
    <span>
      <ISolarHourglassOutline :title="t('duration')" />
    </span>
    {{
      // @ts-expect-error https://github.com/microsoft/TypeScript/issues/60608
      new Intl.DurationFormat(locale, { style: 'long' }).format(
        getDuration(new Date(event.start), new Date(event.end)),
      )
    }}
  </EventDashlet>
</template>

<script setup lang="ts">
import type { EventItemFragment } from '~~/gql/generated/graphql'

const { event } = defineProps<{
  event: Pick<EventItemFragment, 'end' | 'start'>
}>()

const { t, locale } = useI18n()
</script>

<i18n lang="yaml">
de:
  duration: Dauer
en:
  duration: duration
</i18n>
