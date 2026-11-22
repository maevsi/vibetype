<template>
  <div v-if="api.isFetching && !guest" class="text-body-small text-fg-2">
    {{ t('globalLoading') }}
  </div>
  <div v-else-if="guest?.eventByEventId" class="flex flex-col">
    <AppLink
      :to="localePath({ name: 'guest-view-id', params: { id: guestId } })"
    >
      {{ guest.eventByEventId.name }}
    </AppLink>
    <AppTime
      class="text-body-small text-fg-2"
      :datetime="guest.eventByEventId.start"
    />
    <span
      v-if="guest.eventByEventId.accountByCreatedBy?.username"
      class="text-body-small text-fg-2"
    >
      {{
        t('organizer', {
          username: guest.eventByEventId.accountByCreatedBy.username,
        })
      }}
    </span>
    <span v-if="contactName" class="text-body-small text-fg-2">
      {{ t('invited', { name: contactName }) }}
    </span>
  </div>
  <div v-else class="flex flex-col">
    <span class="font-mono">{{ guestId }}</span>
    <span class="text-body-small text-fg-2">{{ t('unavailable') }}</span>
  </div>
</template>

<script setup lang="ts">
import { graphql } from '~~/gql/generated'

const { guestId } = defineProps<{
  guestId: string
}>()

const { t } = useI18n()
const localePath = useLocalePath()

// api data
const query = useApiQuery({
  query: graphql(`
    query GuestCode($id: UUID!) {
      guestByRowId(rowId: $id) {
        contactByContactId {
          accountByAccountId {
            id
            rowId
            username
          }
          firstName
          id
          lastName
          nickname
          rowId
        }
        eventByEventId {
          accountByCreatedBy {
            id
            rowId
            username
          }
          id
          name
          rowId
          start
        }
        id
        rowId
      }
    }
  `),
  variables: {
    id: guestId,
  },
})
const api = await useApiData([query])

// computations
const guest = computed(() => api.value.data.guestByRowId)
const contactName = computed(() =>
  guest.value?.contactByContactId
    ? getContactName({
        account: guest.value.contactByContactId.accountByAccountId,
        contact: guest.value.contactByContactId,
      })
    : undefined,
)
</script>

<i18n lang="yaml">
de:
  invited: Eingeladen als {name}
  organizer: "Organisiert von {'@'}{username}"
  unavailable: Zu diesem Code passt keine Einladung. Vielleicht gehört er zu einer anderen Veranstaltung. Bitte den Gast, die Einladung erneut zu öffnen.
en:
  invited: Invited as {name}
  organizer: "Organized by {'@'}{username}"
  unavailable: No invitation matches this code. It may belong to another event. Ask the guest to open their invitation again.
</i18n>
