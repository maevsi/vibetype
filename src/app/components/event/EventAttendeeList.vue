<template>
  <Loader :api>
    <section
      v-if="attendees?.totalCount"
      :aria-label="t('attendees', { count: attendees.totalCount })"
      class="flex flex-col gap-3"
    >
      <span class="text-heading-medium text-balance">
        {{ t('attendees', { count: attendees.totalCount }) }}
      </span>
      <ul class="flex flex-col gap-3">
        <li v-for="account in attendees.nodes" :key="account.rowId">
          <AccountCard :account />
        </li>
      </ul>
      <AppButton
        v-if="attendees.pageInfo.hasNextPage"
        :aria-label="t('globalShowMore')"
        class="self-center"
        @click="after = attendees.pageInfo.endCursor"
      >
        {{ t('globalShowMore') }}
      </AppButton>
    </section>
  </Loader>
</template>

<script setup lang="ts">
import { graphql } from '~~/gql/generated'

// compiler
const { eventId } = defineProps<{
  eventId: string
}>()

// api data
// Only signed in accounts may execute the attendees field, so this is a
// query of its own that anonymous visitors never send.
const after = ref<string | null>()
const attendeesQuery = useApiQuery({
  query: graphql(`
    query EventAttendees($after: Cursor, $eventId: UUID!, $first: Int!) {
      eventByRowId(rowId: $eventId) {
        attendees(after: $after, first: $first) {
          nodes {
            id
            rowId
            username
          }
          pageInfo {
            endCursor
            hasNextPage
          }
          totalCount
        }
        id
      }
    }
  `),
  variables: computed(() => ({
    after: after.value,
    eventId,
    first: ITEMS_PER_PAGE,
  })),
})
const api = await useApiData([attendeesQuery])
const attendees = computed(
  () => attendeesQuery.data.value?.eventByRowId?.attendees,
)

// template
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  attendees: Zusagen ({count})
en:
  attendees: Attendees ({count})
</i18n>
