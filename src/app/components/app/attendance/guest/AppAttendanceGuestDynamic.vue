<template>
  <AppAttendanceGuest v-if="guest" :guest="guest" />
  <div v-else class="text-sm text-gray-500">{{ t('globalLoading') }}</div>
</template>

<script setup lang="ts">
import { useQuery } from '@urql/vue'

import { graphql } from '~~/gql/generated'
import type { AppAttendanceGuestProps } from './AppAttendanceGuest.vue'

const guest = ref<AppAttendanceGuestProps>()

const { guestId } = defineProps<{
  guestId: string
}>()

const query = await useQuery({
  query: graphql(`
    query AttendanceGuest($id: UUID!) {
      guestById(id: $id) {
        contactByContactId {
          accountByAccountId {
            id
            username
          }
          firstName
          id
          lastName
          language
          nickname
        }
        attendanceByGuestId {
          checkedOut
          id
          updatedAt
        }
        feedback
        id
      }
    }
  `),
  variables: {
    id: guestId,
  },
})

guest.value = query.data.value?.guestById

const { t } = useI18n()
</script>
