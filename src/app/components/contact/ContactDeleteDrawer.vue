<template>
  <AppConfirmDeleteDrawer
    v-model:open="isOpen"
    :cancel-label="t('keepContact')"
    :confirm-label="t('contactDelete')"
    :error
    :is-pending="isPending"
    :title="t('title')"
    @confirm="onConfirm"
    @restart="restart"
  >
    {{ t('contactDeleteQuestion', { name: contactName }) }}
  </AppConfirmDeleteDrawer>
</template>

<script setup lang="ts">
import { useMutation } from '@urql/vue'

import { graphql } from '~~/gql/generated'
import type { ContactItemFragment } from '~~/gql/generated/graphql'
import { getContactName } from '~~/shared/utils/model'

const { contact, contactRowId } = defineProps<{
  contact: Pick<
    ContactItemFragment,
    'accountByAccountId' | 'accountId' | 'firstName' | 'lastName' | 'nickname'
  >
  contactRowId: string
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

const deleteContactByRowIdMutation = useMutation(
  graphql(`
    mutation DeleteContactByRowId($input: DeleteContactByRowIdInput!) {
      deleteContactByRowId(input: $input) {
        clientMutationId
      }
    }
  `),
)
const { confirm, error, restart } = useMutationConfirmation()
const isPending = computed(() => deleteContactByRowIdMutation.fetching.value)

const onConfirm = async () => {
  const result = await confirm(
    deleteContactByRowIdMutation.executeMutation({
      input: { rowId: contactRowId },
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
  contactDelete: Kontakt löschen
  contactDeleteQuestion: Möchtest du den Kontakt {name} wirklich löschen?
  contactNameUnknown: einen unbenannten Kontakt
  keepContact: Nein, behalten
  title: Kontakt löschen
en:
  contactDelete: Delete contact
  contactDeleteQuestion: Do you really want to delete the contact {name}?
  contactNameUnknown: an unnamed contact
  keepContact: No, keep them
  title: Delete contact
</i18n>
