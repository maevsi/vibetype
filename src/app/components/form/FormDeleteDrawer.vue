<template>
  <div>
    <AppButton
      :aria-label="t('deletion', { item: itemNameDeletion })"
      class="w-full"
      variant="tertiary-critical"
      @click="isOpen = true"
    >
      {{ t('deletion', { item: itemNameDeletion }) }}
    </AppButton>
    <AppDrawer v-model:open="isOpen">
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
  itemNameDeletion,
  itemNameSuccess,
  mutation,
  variables = undefined,
} = defineProps<{
  errorsPgIds?: Record<string, string>
  itemNameDeletion: string
  itemNameSuccess: string
  mutation: UseMutationResponse<unknown, AnyVariables>
  variables?: Record<string, unknown>
}>()

const emit = defineEmits<{
  success: []
}>()

const { t } = useI18n()
const isOpen = ref(false)

const onSuccess = () => {
  isOpen.value = false
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
