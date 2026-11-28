<template>
  <div
    class="flex flex-col gap-2 rounded-medium border border-line p-2 sm:flex-row sm:items-center"
  >
    <span class="text-body-small text-fg-2 sm:mr-auto">
      {{ t('selected', { count: guests.length }) }}
    </span>
    <div class="flex flex-wrap gap-2">
      <AppButton
        :aria-label="t('guestFeedbackAccept')"
        :disabled="isPending"
        :loading="pending === InvitationFeedback.Accepted"
        size="small"
        variant="secondary"
        @click="setFeedback(InvitationFeedback.Accepted)"
      >
        {{ t('guestFeedbackAccept') }}
        <template #prefix>
          <AppIconCheckCircleSolid />
        </template>
      </AppButton>
      <AppButton
        :aria-label="t('guestFeedbackCancel')"
        :disabled="isPending"
        :loading="pending === InvitationFeedback.Canceled"
        size="small"
        variant="secondary"
        @click="setFeedback(InvitationFeedback.Canceled)"
      >
        {{ t('guestFeedbackCancel') }}
        <template #prefix>
          <AppIconXCircleSolid />
        </template>
      </AppButton>
      <AppButton
        :aria-label="t('guestDelete')"
        :disabled="isPending"
        size="small"
        variant="secondary-critical"
        @click="isDeleteDrawerOpen = true"
      >
        {{ t('guestDelete') }}
        <template #prefix>
          <AppIconTrash />
        </template>
      </AppButton>
    </div>
  </div>
  <AppConfirmDeleteDrawer
    v-model:open="isDeleteDrawerOpen"
    :cancel-label="t('keepGuests')"
    :confirm-label="t('guestDelete')"
    :error="deleteError"
    :is-pending="pending === 'delete'"
    :title="t('guestDelete')"
    @confirm="delete_"
    @restart="deleteError = undefined"
  >
    {{ t('guestDeleteQuestion', guests.length) }}
  </AppConfirmDeleteDrawer>
</template>

<script setup lang="ts">
import { useMutation } from '@urql/vue'

import { graphql } from '~~/gql/generated'
import { InvitationFeedback } from '~~/gql/generated/graphcache'
import type { GuestItemFragment } from '~~/gql/generated/graphql'

const { guests } = defineProps<{
  guests: Pick<GuestItemFragment, 'rowId'>[]
}>()

const { t } = useI18n()

// data
const deleteError = ref<Error>()
const isDeleteDrawerOpen = ref(false)
const pending = ref<'delete' | InvitationFeedback>()

// api data
const deleteGuestByRowIdMutation = useMutation(
  graphql(`
    mutation DeleteGuestByRowId($input: DeleteGuestByRowIdInput!) {
      deleteGuestByRowId(input: $input) {
        guest {
          eventByEventId {
            guestCount
            id
          }
          id
          rowId
        }
      }
    }
  `),
)
const updateGuestByRowIdMutation = useMutation(
  graphql(`
    mutation UpdateGuestByRowIdFeedback($input: UpdateGuestByRowIdInput!) {
      updateGuestByRowId(input: $input) {
        guest {
          feedback
          id
          rowId
        }
      }
    }
  `),
)

// computations
const isPending = computed(() => pending.value !== undefined)

// methods
const countFailures = async (
  results: Promise<{ data?: unknown; error?: unknown }>[],
) =>
  (await Promise.allSettled(results)).filter(
    (result) => result.status === 'rejected' || !getResultData(result.value),
  ).length
const delete_ = async () => {
  pending.value = 'delete'
  const total = guests.length
  const failureCount = await countFailures(
    guests.map((guest) =>
      deleteGuestByRowIdMutation.executeMutation({
        input: { rowId: guest.rowId },
      }),
    ),
  )
  pending.value = undefined

  if (failureCount) {
    deleteError.value = new Error(t('failure', { count: failureCount, total }))
    return
  }

  isDeleteDrawerOpen.value = false
}
const report = ({
  failureCount,
  success,
  total,
}: {
  failureCount: number
  success: string
  total: number
}) => {
  if (failureCount) {
    toast.error(t('failure', { count: failureCount, total }))
    return
  }

  toast.success(success)
}
const setFeedback = async (feedback: InvitationFeedback) => {
  pending.value = feedback
  const total = guests.length
  const failureCount = await countFailures(
    guests.map((guest) =>
      updateGuestByRowIdMutation.executeMutation({
        input: { guestPatch: { feedback }, rowId: guest.rowId },
      }),
    ),
  )
  pending.value = undefined

  report({
    failureCount,
    success: t('guestFeedbackSuccess', total),
    total,
  })
}
</script>

<i18n lang="yaml">
de:
  failure: 'Bei {count} von {total} Gästen ist das fehlgeschlagen.'
  guestDelete: Gäste löschen
  guestDeleteQuestion: 'Möchtest Du den ausgewählten Gast wirklich löschen? | Möchtest Du die {count} ausgewählten Gäste wirklich löschen?'
  guestFeedbackAccept: Als zugesagt markieren
  guestFeedbackCancel: Als abgesagt markieren
  guestFeedbackSuccess: 'Der Rückmeldestatus wurde aktualisiert. | Der Rückmeldestatus von {count} Gästen wurde aktualisiert.'
  keepGuests: Nein, behalten
  selected: '{count} ausgewählt'
en:
  failure: 'This failed for {count} of {total} guests.'
  guestDelete: Delete guests
  guestDeleteQuestion: 'Do you really want to delete the selected guest? | Do you really want to delete the {count} selected guests?'
  guestFeedbackAccept: Mark as accepted
  guestFeedbackCancel: Mark as declined
  guestFeedbackSuccess: 'The feedback status was updated. | The feedback status of {count} guests was updated.'
  keepGuests: No, keep them
  selected: '{count} selected'
</i18n>
