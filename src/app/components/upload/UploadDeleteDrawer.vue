<template>
  <AppConfirmDeleteDrawer
    v-model:open="isOpen"
    :cancel-label="t('keepUpload')"
    :confirm-label="t('uploadDelete')"
    :error
    :is-pending="isPending"
    :title="t('title')"
    @confirm="onConfirm"
    @restart="restart"
  >
    {{ t('uploadDeleteQuestion') }}
  </AppConfirmDeleteDrawer>
</template>

<script setup lang="ts">
import { useMutation } from '@urql/vue'

import { graphql } from '~~/gql/generated'

const { uploadRowId } = defineProps<{
  uploadRowId: string
}>()
const emit = defineEmits<{
  success: []
}>()

const isOpen = defineModel<boolean>('open')

const deleteUploadByRowIdMutation = useMutation(
  graphql(`
    mutation DeleteUploadByRowId($input: DeleteUploadByRowIdInput!) {
      deleteUploadByRowId(input: $input) {
        clientMutationId
      }
    }
  `),
)
const { confirm, error, restart } = useMutationConfirmation()
const isPending = computed(() => deleteUploadByRowIdMutation.fetching.value)

const onConfirm = async () => {
  const result = await confirm(
    deleteUploadByRowIdMutation.executeMutation({
      input: { rowId: uploadRowId },
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
  keepUpload: Nein, behalten
  title: Bild löschen
  uploadDelete: Bild löschen
  uploadDeleteQuestion: Möchtest du dieses Bild wirklich löschen?
en:
  keepUpload: No, keep it
  title: Delete image
  uploadDelete: Delete image
  uploadDeleteQuestion: Do you really want to delete this image?
</i18n>
