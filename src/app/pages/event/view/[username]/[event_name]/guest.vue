<template>
  <Loader :api="api">
    <div
      v-if="event && route.params.username === store.signedInUsername"
      class="flex flex-col gap-4"
    >
      <LayoutPageTitle :title="t('title')" />
      <GuestList :event="event" />
    </div>
    <AppError v-else :status-code="403" />
  </Loader>
</template>

<script setup lang="ts">
import { useAccountByUsernameQuery } from '~~/gql/documents/queries/account/accountByUsername'
import { useEventByCreatedByAndSlugQuery } from '~~/gql/documents/queries/event/eventByCreatedByAndSlug'
import { getAccountItem } from '~~/gql/documents/fragments/accountItem'
import { getEventItem } from '~~/gql/documents/fragments/eventItem'

const route = useRoute('event-view-username-event_name-guest___en')
const { t } = useI18n()
const store = useStore()

// validation
if (route.params.username !== store.signedInUsername) {
  throw createError({
    statusCode: 403,
  })
}

// api data
const accountByUsernameQuery = useAccountByUsernameQuery({
  username: route.params.username,
})
const account = computed(() => getAccountItem(api.value.data.accountByUsername))
if (account.value === null) {
  throw showError({
    message: 'Account data missing',
    statusCode: 404,
  })
}
const eventQuery = useEventByCreatedByAndSlugQuery({
  createdBy: account.value?.id,
  slug: route.params.event_name,
})
const event = computed(() =>
  getEventItem(api.value.data.eventByCreatedByAndSlug),
)
if (event.value === null) {
  throw showError({
    message: 'Event data missing',
    statusCode: 404,
  })
}
const api = await useApiData([accountByUsernameQuery, eventQuery])

// computations
const title = computed(() => {
  if (api.value.isFetching) return t('globalLoading')

  if (!event.value || route.params.username !== store.signedInUsername)
    return '403'

  return `${t('title')} · ${event.value.name}`
})

// initialization
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  title: Gäste
en:
  title: Guests
</i18n>
