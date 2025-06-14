<template>
  <div
    v-if="event && event.accountByCreatedBy?.username"
    class="flex flex-col gap-8"
  >
    <LayoutPageTitle :title="t('eventLive')" :is-centered="true" />
    <div class="text-center">
      <TypographySubtitleSmall>
        {{ t('shareEvent') }}
      </TypographySubtitleSmall>
    </div>
    <EventListItem :key="event.id" :event="event" />
    <EventShare
      :share-url="`${baseUrl}/event/view/${route.params.username}/${route.params.event_name}`"
    />
    <div class="flex flex-col gap-2">
      <ButtonColored
        variant="primary"
        class="w-full"
        :aria-label="t('inviteGuests')"
        :to="
          localePath({
            name: 'event-view-username-event_name-guest',
            params: {
              event_name: route.params.event_name,
              username: route.params.username,
            },
          })
        "
      >
        {{ t('inviteGuests') }}
      </ButtonColored>
      <ButtonColored
        variant="secondary"
        class="w-full"
        :aria-label="t('toDashboard')"
        :to="localePath(`dashboard`)"
      >
        {{ t('toDashboard') }}
      </ButtonColored>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAccountByUsernameQuery } from '~~/gql/documents/queries/account/accountByUsername'
import { getEventItem } from '~~/gql/documents/fragments/eventItem'
import { getAccountItem } from '~~/gql/documents/fragments/accountItem'
import { useEventByCreatedByAndSlugQuery } from '~~/gql/documents/queries/event/eventByCreatedByAndSlug'
import type { RouteNamedMap } from 'vue-router/auto-routes'

const ROUTE_NAME: keyof RouteNamedMap =
  'event-view-username-event_name-published___en'

const localePath = useLocalePath()

const { t } = useI18n()
const route = useRoute(ROUTE_NAME)
const baseUrl = import.meta.client
  ? window.location.origin
  : 'https://vibetype.app'

const accountByUsernameQuery = await zalgo(
  useAccountByUsernameQuery({
    username: route.params.username,
  }),
)
const accountId = computed(
  () =>
    getAccountItem(accountByUsernameQuery.data.value?.accountByUsername)?.id,
)

const eventQuery = await zalgo(
  useEventByCreatedByAndSlugQuery({
    createdBy: accountId,
    slug: route.params.event_name,
    guestId: route.query.ic,
  }),
)

const event = computed(() => {
  return getEventItem(eventQuery.data.value?.eventByCreatedByAndSlug)
})
</script>

<i18n lang="yaml">
de:
  eventLive: Deine Veranstaltung ist live!
  inviteGuests: Gäste einladen
  toDashboard: Zum Dashboard
  shareEvent: Jetzt kannst du deine Veranstaltung teilen
en:
  eventLive: Your event is live!
  inviteGuests: Invite Guests
  toDashboard: To Dashboard
  shareEvent: Now you can share your event
</i18n>
