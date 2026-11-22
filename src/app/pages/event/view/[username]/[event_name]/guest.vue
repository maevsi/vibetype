<template>
  <Loader :api is-page>
    <div
      v-if="event && route.params.username === store.signedInUsername"
      class="flex flex-1 flex-col"
    >
      <LayoutTopBar>{{ t('title') }}</LayoutTopBar>
      <LayoutPage>
        <GuestList :event />
      </LayoutPage>
    </div>
    <AppError v-else :error="{ status: 403 }" />
  </Loader>
</template>

<script setup lang="ts">
import { graphql } from '~~/gql/generated'

// validation
await useSignInRequired()
const route = useRoute()
const store = useStore()
const { createA11yError } = useA11yError()
if (
  store.signedInUsername &&
  route.params.username !== store.signedInUsername
) {
  throw createA11yError({
    status: 403,
  })
}

// api data
const queryEventGuests = useApiQuery({
  query: graphql(`
    query EventGuests($slug: String!, $username: String!) {
      accountByUsername(username: $username) {
        eventsByCreatedBy(condition: { slug: $slug }) {
          nodes {
            accountByCreatedBy {
              id
              rowId
              username
            }
            createdBy
            guestCountMaximum
            guestsByEventId {
              nodes {
                contactByContactId {
                  accountId
                  id
                  rowId
                }
                id
                rowId
              }
              pageInfo {
                hasNextPage
                endCursor
              }
              totalCount
            }
            id
            name
            rowId
            slug
          }
        }
        id
        rowId
      }
    }
  `),
  variables: {
    slug: route.params.event_name,
    username: route.params.username,
  },
})
const api = await useApiData([queryEventGuests])
const account = computed(() => api.value.data.accountByUsername)
const event = computed(() => account.value?.eventsByCreatedBy.nodes[0])

// page
const { t } = useI18n()
const title = computed(() => {
  if (api.value.isFetching && !event.value) return t('globalLoading')
  if (
    store.signedInUsername &&
    route.params.username !== store.signedInUsername
  ) {
    showAppError({
      data: { vibetype: t('errorPermissionDenied') },
      message: 'Permission denied',
      status: 403,
    })
    return
  }
  if (!event.value) {
    showAppError({
      data: { vibetype: t('errorEventMissing') },
      message: 'Event unavailable',
      status: 404,
    })
    return
  }

  return `${t('title')} · ${event.value.name}`
})
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  errorEventMissing: Diese Veranstaltung ist nicht verfügbar. Wenn dir jemand einen Link geschickt hat, frage nach einem neuen.
  errorPermissionDenied: Nur wer diese Veranstaltung organisiert, kann diese Seite öffnen. Wenn es deine Veranstaltung ist, melde dich mit dem Konto an, mit dem du sie erstellt hast.
  title: Gästeliste
en:
  errorEventMissing: This event isn't available. If someone sent you a link, ask them for a new one.
  errorPermissionDenied: Only the organizer of this event can open this page. If it's your event, sign in with the account that created it.
  title: Guest list
</i18n>
