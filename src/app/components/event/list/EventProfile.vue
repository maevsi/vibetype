<template>
  <div
    class="relative flex items-center rounded-lg border border-solid bg-(--semantic-base-surface-1) px-4 py-4"
    :class="isOrganizing ? 'border-(--accent-strong)' : 'border-transparent'"
  >
    <div class="rounded-md">
      <EventCardHeroImage :event="event" />
    </div>
    <div
      class="ml-4 flex flex-1 flex-col justify-center gap-2 pr-12 text-(--semantic-base-text-primary)"
    >
      <TypographyTitleMedium class="line-clamp-2">
        {{ event.name }}
      </TypographyTitleMedium>
      <TypographySubtitleSmall class="">
        {{ eventStart.format('ddd, D MMMM •') }}
        {{ eventStart.format('h:mm a') }}
      </TypographySubtitleSmall>
    </div>
    <div
      class="text-(semantic-base-primary-button-text) absolute top-2 right-2 rounded-sm px-2 py-1 leading-4 tracking-[0.005em]"
      :class="
        isOrganizing ? 'bg-(--accent-strong)' : 'bg-(--complement-strong)'
      "
    >
      <TypographyLabel>
        {{ isOrganizing ? t('organizing') : t('attending') }}
      </TypographyLabel>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { EventItemFragment } from '~~/gql/generated/graphql'

const { t } = useI18n()

interface Props {
  event: Pick<
    EventItemFragment,
    'accountByCreatedBy' | 'name' | 'start' | 'slug'
  >
  isOrganizing?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isOrganizing: false,
})

const dateTime = useDateTime()
const eventStart = computed(() => dateTime(props.event.start))
</script>

<i18n lang="yaml">
de:
  attending: Du nimmst teil
  organizing: Du organisierst
en:
  attending: You're attending
  organizing: You're organizing
</i18n>
