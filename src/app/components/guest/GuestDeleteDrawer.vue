<template>
  <AppConfirmDeleteDrawer
    v-model:open="isOpen"
    :cancel-label="t('keepGuest')"
    :confirm-label="t('guestDelete')"
    :error
    :is-pending="isPending"
    :title="t('title')"
    @confirm="onConfirm"
    @restart="restart"
  >
    {{ t('guestDeleteQuestion', { name: contactName }) }}
  </AppConfirmDeleteDrawer>
</template>

<script setup lang="ts">
import { useMutation } from '@urql/vue'

import { graphql } from '~~/gql/generated'
import type { ContactItemFragment } from '~~/gql/generated/graphql'
import { getContactName } from '~~/shared/utils/model'

const { contact, guestRowId } = defineProps<{
  contact: Pick<
    ContactItemFragment,
    'accountByAccountId' | 'accountId' | 'firstName' | 'lastName' | 'nickname'
  >
  guestRowId: string
}>()
const emit = defineEmits<{
  success: []
}>()

const contactName = computed(
  () =>
    getContactName({ account: contact.accountByAccountId, contact }) ||
    t('contactNameUnknown'),
)

const isOpen = defineModel<boolean>('open')

const deleteGuestByRowIdMutation = useMutation(
  graphql(`
    mutation DeleteGuestByRowId($input: DeleteGuestByRowIdInput!) {
      deleteGuestByRowId(input: $input) {
        clientMutationId
      }
    }
  `),
)
const { confirm, error, restart } = useMutationConfirmation()
const isPending = computed(() => deleteGuestByRowIdMutation.fetching.value)

const onConfirm = async () => {
  const result = await confirm(
    deleteGuestByRowIdMutation.executeMutation({
      input: { rowId: guestRowId },
    }),
  )

  if (!result) return

  isOpen.value = false
  emit('success')
}

// template
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  contactNameUnknown: einen unbenannten Kontakt
  guestDelete: Gast löschen
  guestDeleteQuestion: Möchtest du den Gast {name} wirklich löschen?
  keepGuest: Nein, behalten
  title: Gast löschen
en:
  contactNameUnknown: an unnamed contact
  guestDelete: Delete guest
  guestDeleteQuestion: Do you really want to delete the guest {name}?
  keepGuest: No, keep them
  title: Delete guest
</i18n>
