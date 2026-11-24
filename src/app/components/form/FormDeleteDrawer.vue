<template>
  <div>
    <AppButton
      v-if="!isTriggerHidden"
      :aria-label="t('deletion', { item: itemNameDeletion })"
      class="w-full"
      variant="tertiary-critical"
      @click="isOpen = true"
    >
      {{ t('deletion', { item: itemNameDeletion }) }}
    </AppButton>
    <AppDrawer v-model:open="isOpen" @close="onClose">
      <FormDelete
        :errors-pg-ids
        :item-name-deletion
        :item-name-success
        :mutation
        :variables
        @success="onSuccess"
      />
      <template #title>{{ t('confirmPassword') }}</template>
    </AppDrawer>
  </div>
</template>

<script setup lang="ts">
import type { AnyVariables, UseMutationResponse } from '@urql/vue'

const {
  errorsPgIds = undefined,
  isTriggerHidden = false,
  itemNameDeletion,
  itemNameSuccess,
  mutation,
  variables = undefined,
} = defineProps<{
  errorsPgIds?: Record<string, string>
  isTriggerHidden?: boolean
  itemNameDeletion: string
  itemNameSuccess: string
  mutation: UseMutationResponse<unknown, AnyVariables>
  variables?: Record<string, unknown>
}>()

const emit = defineEmits<{
  success: []
}>()

const { t } = useI18n()
const isOpen = defineModel<boolean>('open', { default: false })

// `success` waits for the drawer to close, so that a navigation its listeners start is not cancelled by the drawer leaving history
let isSucceeded = false
const onSuccess = () => {
  isSucceeded = true
  isOpen.value = false
}
const onClose = () => {
  if (!isSucceeded) return

  isSucceeded = false
  emit('success')
}
</script>

<i18n lang="yaml">
de:
  confirmPassword: Passwort bestätigen
  deletion: '{item} löschen'
en:
  confirmPassword: Confirm password
  deletion: 'Delete {item}'
</i18n>
