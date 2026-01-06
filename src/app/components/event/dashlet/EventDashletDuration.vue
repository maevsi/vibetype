<template>
  <EventDashlet v-if="duration">
    {{ duration }}
    <template #icon>
      <AppIconHourglassOutline :title="t('duration')" />
    </template>
  </EventDashlet>
</template>

<script setup lang="ts">
import type { EventItemFragment } from '~~/gql/generated/graphql'

const { event } = defineProps<{
  event: Pick<EventItemFragment, 'end' | 'start'>
}>()

const { t, locale } = useI18n()
const formatDuration = ({
  duration,
  locale,
}: {
  duration: Duration
  locale: string
}) => {
  if (typeof Intl === 'undefined' || !('DurationFormat' in Intl)) return // TODO: evaluate polyfill

  // @ts-expect-error https://github.com/microsoft/TypeScript/issues/60608
  return new Intl.DurationFormat(locale, { style: 'long' }).format(duration)
}

const duration =
  event.end && event.start
    ? formatDuration({
        duration: getDuration(new Date(event.start), new Date(event.end)),
        locale: locale.value,
      })
    : undefined
</script>

<i18n lang="yaml">
de:
  duration: Dauer
en:
  duration: duration
</i18n>
