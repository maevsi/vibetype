<template>
  <div
    v-if="event && event.accountByCreatedBy?.username"
    :class="[
      'relative flex items-start gap-6 rounded-xl bg-white p-5 shadow-sm',
      isOrganizing ? 'border border-1 border-(--accent-strong)' : '',
    ]"
  >
    <div class="absolute top-2 right-2">
      <div
        :class="[
          'rounded-lg px-2 py-1 text-sm font-medium',
          isOrganizing
            ? 'bg-(--accent-strong) text-(--semantic-base-primary-button-text)'
            : 'bg-(--complement-strong) text-white',
        ]"
      >
        {{ isOrganizing ? t('organizing') : t('attending') }}
      </div>
    </div>
    <div class="w-1/3 flex-shrink-0 overflow-hidden rounded-lg">
      <EventCardHeroImage :event="event" class="h-full w-full object-cover" />
    </div>
    <div
      class="mt-4 text-base font-semibold text-(--semantic-base-text-primary)"
    >
      <h3
        class="break-words whitespace-pre-wrap text-(--semantic-base-text-primary) dark:text-(--semantic-base-text-primary)"
        :class="{
          'text-lg': event.name.length < 20,
          'text-base': event.name.length > 40,
        }"
      >
        {{ event.name }}
      </h3>
      <p>
        {{ eventStart.format('MMMM D, YYYY h:mm A') }}
      </p>
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
