<template>
  <Loader :api is-page>
    <AppError v-if="!event" :error="{ status: 404 }" />
    <div v-else class="flex flex-1 flex-col">
      <LayoutTopBar>{{ t('title') }}</LayoutTopBar>
      <LayoutPage>
        <FormEvent :event />
      </LayoutPage>
    </div>
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
const eventQuery = useApiQuery({
  query: graphql(`
    query EventEdit($slug: String!, $username: String!) {
      accountByUsername(username: $username) {
        eventsByCreatedBy(condition: { slug: $slug }) {
          nodes {
            addressByAddressId {
              city
              country
              id
              line1
              line2
              location {
                latitude
                longitude
              }
              name
              postalCode
              region
              rowId
            }
            createdBy
            description
            end
            eventCategoryMappingsByEventId {
              nodes {
                categoryId
                id
              }
            }
            eventFormatMappingsByEventId {
              nodes {
                formatId
                id
              }
            }
            id
            guestCountMaximum
            isArchived
            isInPerson
            isRemote
            name
            rowId
            slug
            start
            url
            visibility
          }
        }
        id
        rowId
        username
      }
    }
  `),
  variables: {
    slug: route.params.event_name,
    username: route.params.username,
  },
})
const api = await useApiData([eventQuery])
const account = computed(() => api.value.data?.accountByUsername)
const event = computed(() => account.value?.eventsByCreatedBy.nodes[0])

// page
const { t } = useI18n()
const title = computed(() => {
  if (api.value.isFetching && !event.value) return t('globalLoading')
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

// template
</script>

<i18n lang="yaml">
de:
  errorEventMissing: Diese Veranstaltung ist nicht verfügbar. Wenn dir jemand einen Link geschickt hat, frage nach einem neuen.
  title: Veranstaltung bearbeiten
en:
  errorEventMissing: This event isn't available. If someone sent you a link, ask them for a new one.
  title: Edit event
</i18n>
