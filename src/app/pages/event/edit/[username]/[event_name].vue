<template>
  <LoaderIndicatorPing v-if="api.isFetching" />
  <AppError
    v-else-if="route.params.username !== store.signedInUsername"
    :error="{ statusCode: 403 }"
  />
  <AppError v-else-if="!event" :error="{ statusCode: 404 }" />
  <div v-else class="flex flex-col gap-4">
    <section>
      <LayoutPageTitle :title="t('title')" />
      <FormEvent :event="event" />
    </section>
    <section>
      <h2>{{ t('titleDelete') }}</h2>
      <FormDelete
        id="deleteEvent"
        :error-pg-ids="{
          postgres28P01: t('postgres28P01'),
          postgresP0002: t('postgresP0002'),
        }"
        :item-name-deletion="t('formDeleteItemNameDeletion')"
        :item-name-success="t('formDeleteItemNameSuccess')"
        :mutation="eventDeleteMutation"
        :variables="{
          id: event.id,
        }"
        @success="navigateTo(localePath(`dashboard`))"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@urql/vue'

import { useEventDeleteMutation } from '~~/gql/documents/mutations/event/eventDelete'
import { graphql } from '~~/gql/generated'

// validation
const route = useRoute('event-edit-username-event_name___en')
const store = useStore()
if (route.params.username !== store.signedInUsername) {
  throw createError({
    statusCode: 403,
  })
}

// api data
const eventQuery = useQuery({
  query: graphql(`
    query EventEdit($slug: String!, $username: String!) {
      accountByUsername(username: $username) {
        eventsByCreatedBy(condition: { slug: $slug }) {
          nodes {
            createdBy
            description
            end
            id
            isArchived
            name
            nodeId
            isArchived
            isInPerson
            isRemote
            slug
            start
            url
            visibility
          }
        }
        id
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
const eventDeleteMutation = useEventDeleteMutation()

// page
const { t } = useI18n()
const title = computed(() => {
  if (api.value.isFetching) return t('globalLoading')
  if (!event.value) {
    showAppError({ statusCode: 404, message: 'Event unavailable' })
    return
  }

  return `${t('title')} · ${event.value.name}`
})
useHeadDefault({ title })

// template
const localePath = useLocalePath()
</script>

<i18n lang="yaml">
de:
  formDeleteItemNameDeletion: Veranstaltung
  formDeleteItemNameSuccess: Veranstaltung
  postgres28P01: Passwort falsch! Überprüfe, ob du alles richtig geschrieben hast.
  postgresP0002: Die Veranstaltung wurde nicht gefunden!
  title: Veranstaltung bearbeiten
  titleDelete: Veranstaltung löschen
en:
  formDeleteItemNameDeletion: event
  formDeleteItemNameSuccess: Event
  postgres28P01: Password incorrect! Check for spelling mistakes.
  postgresP0002: Event could not be found!
  title: Edit event
  titleDelete: Delete event
</i18n>
