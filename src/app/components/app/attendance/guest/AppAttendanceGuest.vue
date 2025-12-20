<template>
  <div v-if="guest" class="flex flex-col gap-4">
    <div class="rounded-md border p-4">
      <div class="mb-2">
        <p class="text-sm text-gray-500">{{ t('guest') }}</p>
        <p class="text-lg font-medium">
          {{
            guest.contactByContactId?.nickname ||
            `${guest.contactByContactId?.firstName || ''} ${guest.contactByContactId?.lastName || ''}`.trim() ||
            guest.id
          }}
        </p>
      </div>

      <div class="mt-3 border-t pt-3">
        <p class="text-sm text-gray-500">{{ t('account') }}</p>
        <p class="text-base">
          {{
            guest.contactByContactId?.accountByAccountId?.username ||
            t('noAccount')
          }}
        </p>
      </div>

      <div class="mt-3 border-t pt-3">
        <p class="text-sm text-gray-500">{{ t('status') }}</p>
        <p class="text-base">
          <span v-if="guest.attendanceByGuestId">
            <span v-if="guest.attendanceByGuestId.checkedOut">
              {{ t('checkedOut') }}
              <span
                v-if="guest.attendanceByGuestId.updatedAt"
                class="text-sm text-gray-500"
              >
                {{ formatDateTime(guest.attendanceByGuestId.updatedAt) }}
              </span>
            </span>
            <span v-else>{{ t('checkedIn') }}</span>
          </span>
          <span v-else>{{ t('notCheckedIn') }}</span>
        </p>
      </div>

      <div class="mt-3 border-t pt-3">
        <p class="text-sm text-gray-500">{{ t('feedback') }}</p>
        <p class="text-base">{{ guest.feedback || t('noFeedback') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InvitationFeedback } from '~~/gql/generated/graphql'

export type AppAttendanceGuestProps = {
  contactByContactId?: {
    accountByAccountId?: {
      id: string
      username: string
    } | null
    firstName?: string | null
    id: string
    lastName?: string | null
    language?: string | null
    nickname?: string | null
  } | null
  attendanceByGuestId?: {
    checkedOut?: boolean | null
    id: string
    updatedAt?: string | null
  } | null
  feedback?: InvitationFeedback | null
  id: string
} | null

const { guest } = defineProps<{
  guest: AppAttendanceGuestProps
}>()

const { t } = useI18n()

const formatDateTime = (dateString: string) => {
  return new Date(dateString).toLocaleString()
}
</script>

<i18n lang="yaml">
de:
  account: Konto
  checkedIn: Eingecheckt
  checkedOut: Ausgecheckt
  feedback: Rückmeldung
  guest: Gast
  noAccount: Kein Konto
  noFeedback: Keine Rückmeldung
  notCheckedIn: Nicht eingecheckt
  status: Status
en:
  account: Account
  checkedIn: Checked in
  checkedOut: Checked out
  feedback: Feedback
  guest: Guest
  noAccount: No account
  noFeedback: No feedback
  notCheckedIn: Not checked in
  status: Status
</i18n>
