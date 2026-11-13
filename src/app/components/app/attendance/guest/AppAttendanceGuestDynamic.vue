<template>
  <div v-if="api.isFetching && !guest" class="text-body-small text-fg-2">
    {{ t('globalLoading') }}
  </div>
  <CardStateAlert v-else-if="!guest">
    {{ t('globalErrorNoData') }}
  </CardStateAlert>
  <AppAttendanceGuest v-else :guest />
</template>

<script setup lang="ts">
import { graphql } from '~~/gql/generated'

const { guestId } = defineProps<{
  guestId: string
}>()

const query = useApiQuery({
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

const api = await useApiData([query])
const guest = computed(() => api.value.data.guestByRowId)

const { t } = useI18n()
</script>
