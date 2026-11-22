<template>
  <AppDrawer v-model="isOpen" class="sm:max-w-lg" direction="right">
    <FormGuest
      :event
      :guest-contact-ids-existing="
        api.data.allGuests?.nodes.map((guest) => guest.contactId)
      "
      is-invitation-sent
      @submit-success="isOpen = false"
    />
    <template #title>
      {{ t('title') }}
    </template>
    <template #description>
      {{ t('description') }}
    </template>
  </AppDrawer>
</template>

<script setup lang="ts">
import { graphql } from '~~/gql/generated'
import type { EventItemFragment } from '~~/gql/generated/graphql'

const { event } = defineProps<{
  event: Pick<EventItemFragment, 'rowId'>
}>()

const isOpen = defineModel<boolean>('open', { default: false })

const { t } = useI18n()

// api data
// Only the first page is loaded: the database rejects a duplicate guest for further pages, which the form reports.
const guestsQuery = useApiQuery({
  query: graphql(`
    query EventInviteGuests($eventId: UUID!, $first: Int!) {
      allGuests(condition: { eventId: $eventId }, first: $first) {
        nodes {
          contactId
          id
        }
      }
    }
  `),
  variables: computed(() => ({
    eventId: event.rowId,
    first: ITEMS_PER_PAGE_LARGE,
  })),
  pause: computed(() => !isOpen.value),
  requestPolicy: 'cache-and-network',
})
const api = await useApiData([guestsQuery])
</script>

<i18n lang="yaml">
de:
  description: Wähle Personen aus deinem Kontaktbuch aus, die per E-Mail eingeladen werden sollen.
  title: Freunde einladen
en:
  description: Choose people from your contact book to invite by email.
  title: Invite friends
</i18n>
