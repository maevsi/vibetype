<template>
  <AppConfirmDeleteDrawer
    v-model:open="isOpen"
    :cancel-label="t('keepProfilePicture')"
    :confirm-label="t('profilePictureRemove')"
    :error
    :is-pending="isPending"
    :title="t('title')"
    @confirm="onConfirm"
    @restart="restart"
  >
    {{ t('profilePictureRemoveQuestion') }}
  </AppConfirmDeleteDrawer>
</template>

<script setup lang="ts">
import { useMutation } from '@urql/vue'

import { graphql } from '~~/gql/generated'

const { profilePictureRowId } = defineProps<{
  profilePictureRowId: string
}>()
const emit = defineEmits<{
  success: []
}>()

const isOpen = defineModel<boolean>('open')

const deleteProfilePictureByRowIdMutation = useMutation(
  graphql(`
    mutation DeleteProfilePictureByRowIdMutation(
      $input: DeleteProfilePictureByRowIdInput!
    ) {
      deleteProfilePictureByRowId(input: $input) {
        clientMutationId
      }
    }
  `),
)
const { confirm, error, restart } = useMutationConfirmation()
const isPending = computed(
  () => deleteProfilePictureByRowIdMutation.fetching.value,
)

const onConfirm = async () => {
  const result = await confirm(
    deleteProfilePictureByRowIdMutation.executeMutation({
      input: { rowId: profilePictureRowId },
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
  keepProfilePicture: Nein, behalten
  profilePictureRemove: Bild entfernen
  profilePictureRemoveQuestion: Möchtest du dein Profilbild wirklich entfernen?
  title: Profilbild entfernen
en:
  keepProfilePicture: No, keep it
  profilePictureRemove: Remove image
  profilePictureRemoveQuestion: Do you really want to remove your profile picture?
  title: Remove profile picture
</i18n>
