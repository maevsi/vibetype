<template>
  <AppConfirmDeleteDrawer
    v-model:open="isOpen"
    :cancel-label="t('keepGroup')"
    :confirm-label="t('groupDelete')"
    :error
    :is-pending="isPending"
    :title="t('title')"
    @confirm="onConfirm"
    @restart="restart"
  >
    {{ t('groupDeleteQuestion', { name: group.name }) }}
  </AppConfirmDeleteDrawer>
</template>

<script setup lang="ts">
import { useMutation } from '@urql/vue'

import { graphql } from '~~/gql/generated'

const { group } = defineProps<{
  group: { name: string; rowId: string }
}>()

const { t } = useI18n()

// data
const isOpen = defineModel<boolean>('open')

// api data
const deleteContactGroupByRowIdMutation = useMutation(
  graphql(`
    mutation DeleteContactGroupByRowId(
      $input: DeleteContactGroupByRowIdInput!
    ) {
      deleteContactGroupByRowId(input: $input) {
        clientMutationId
      }
    }
  `),
)
const { confirm, error, restart } = useMutationConfirmation()

// computations
const isPending = computed(
  () => deleteContactGroupByRowIdMutation.fetching.value,
)

// methods
const onConfirm = async () => {
  const result = await confirm(
    deleteContactGroupByRowIdMutation.executeMutation({
      input: { rowId: group.rowId },
    }),
  )

  if (!result) return

  isOpen.value = false
}
</script>

<i18n lang="yaml">
de:
  groupDelete: Gruppe löschen
  groupDeleteQuestion: Möchtest Du die Gruppe {name} wirklich löschen? Die Kontakte darin bleiben erhalten.
  keepGroup: Nein, behalten
  title: Gruppe löschen
en:
  groupDelete: Delete group
  groupDeleteQuestion: Do you really want to delete the group {name}? The contacts in it are kept.
  keepGroup: No, keep it
  title: Delete group
</i18n>
