<template>
  <div v-if="guest" class="flex flex-col gap-4">
    <div class="rounded-medium border p-4">
      <div class="mb-2">
        <p class="text-body-small text-fg-2">
          {{ t('guest') }}
        </p>
        <p class="text-headline">
          {{
            guest.contactByContactId?.nickname ||
            `${guest.contactByContactId?.firstName || ''} ${guest.contactByContactId?.lastName || ''}`.trim() ||
            guest.rowId
          }}
        </p>
      </div>

      <div class="mt-3 border-t pt-3">
        <p class="text-body-small text-fg-2">
          {{ t('account') }}
        </p>
        <p class="text-body">
          {{
            guest.contactByContactId?.accountByAccountId?.username ||
            t('noAccount')
          }}
        </p>
      </div>

      <div class="mt-3 border-t pt-3">
        <p class="text-body-small text-fg-2">
          {{ t('status') }}
        </p>
        <p class="text-body">
          <span v-if="guest.attendanceByGuestId">
            <span v-if="guest.attendanceByGuestId.checkedOut">
              {{ t('checkedOut') }}
              <span
                v-if="guest.attendanceByGuestId.updatedAt"
                class="text-body-small text-fg-2"
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
        <p class="text-body-small text-fg-2">
          {{ t('feedback') }}
        </p>
        <p class="text-body">{{ guest.feedback || t('noFeedback') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InvitationFeedback } from '~~/gql/generated/graphql'

const { guest } = defineProps<{
  guest: {
    contactByContactId?: {
      accountByAccountId?: {
        id: string
        rowId: string
        username: string
      } | null
      firstName?: string | null
      id: string
      lastName?: string | null
      language?: string | null
      nickname?: string | null
      rowId: string
    } | null
    attendanceByGuestId?: {
      checkedOut?: boolean | null
      id: string
      rowId: string
      updatedAt?: string | null
    } | null
    feedback?: InvitationFeedback | null
    id: string
    rowId: string
  } | null
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
