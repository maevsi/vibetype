<template>
  <div v-if="query.fetching" class="text-sm text-gray-500">
    {{ t('globalLoading') }}
  </div>
  <CardStateAlert v-else-if="!guest">
    {{ t('globalErrorNoData') }}
  </CardStateAlert>
  <AppAttendanceGuest v-else :guest />
</template>

<script setup lang="ts">
import { useQuery } from '@urql/vue'

import { graphql } from '~~/gql/generated'

const { guestId } = defineProps<{
  guestId: string
}>()

const query = await useQuery({
  query: graphql(`
    query AttendanceGuest($id: UUID!) {
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
          language
          nickname
          rowId
        }
        attendanceByGuestId {
          checkedOut
          id
          rowId
          updatedAt
        }
        feedback
        id
        rowId
      }
    }
  `),
  variables: {
    id: guestId,
  },
})

const guest = computed(() => query.data.value?.guestByRowId)

const { t } = useI18n()
</script>
