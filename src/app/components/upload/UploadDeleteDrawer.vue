<template>
  <AppDrawer v-model:open="isOpen" @animation-end="onAnimationEnd">
    <AppStep v-slot="attributes" :is-active="step === 'default'">
      <div v-bind="attributes" class="text-center">
        <TypographySubtitleSmall>
          {{ t('uploadDeleteQuestion') }}
        </TypographySubtitleSmall>
      </div>
    </AppStep>
    <AppStep v-slot="attributes" :is-active="step === 'error'">
      <div v-bind="attributes">
        <LayoutPageResult type="error">
          <template v-if="error" #description>
            {{ error.message }}
          </template>
        </LayoutPageResult>
      </div>
    </AppStep>
    <template #title>
      <AppStep v-slot="attributes" :is-active="step === 'default'">
        <span v-bind="attributes">
          {{ t('title') }}
        </span>
      </AppStep>
      <AppStep v-slot="attributes" :is-active="step === 'error'">
        <span v-bind="attributes">
          {{ t('error') }}
        </span>
      </AppStep>
    </template>
    <template #footer>
      <AppStep v-slot="attributes" :is-active="step === 'default'">
        <ButtonColored
          v-bind="attributes"
          :aria-label="t('keepUpload')"
          variant="secondary"
          @click="closeDrawer"
        >
          {{ t('keepUpload') }}
        </ButtonColored>
        <ButtonColored
          v-bind="attributes"
          :aria-label="t('uploadDelete')"
          :loading="isPending"
          variant="primary-critical"
          @click="deleteUpload"
        >
          {{ t('uploadDelete') }}
        </ButtonColored>
      </AppStep>
      <AppStep v-slot="attributes" :is-active="step === 'error'">
        <ButtonColored
          v-bind="attributes"
          :aria-label="t('restart')"
          variant="tertiary"
          @click="restart"
        >
          {{ t('restart') }}
        </ButtonColored>
      </AppStep>
    </template>
  </AppDrawer>
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

const { error, restart, step } = useStepper()

// drawer
const isOpen = defineModel<boolean>('open')
const closeDrawer = () => {
  isOpen.value = false
}
const onAnimationEnd = (isOpen: boolean) => {
  if (isOpen) return

  step.value = 'default'
}

const deleteUploadByRowIdMutation = useMutation(
  graphql(`
    mutation DeleteUploadByRowId($input: DeleteUploadByRowIdInput!) {
      deleteUploadByRowId(input: $input) {
        clientMutationId
      }
    }
  `),
)
const isPending = computed(() => deleteUploadByRowIdMutation.fetching.value)

const deleteUpload = async () => {
  const result = await deleteUploadByRowIdMutation.executeMutation({
    input: { rowId: uploadRowId },
  })

  if (!getResultData(result)) {
    error.value = result.error ?? new Error(t('globalErrorNoData'))
    return
  }

  closeDrawer()
  emit('success')
}

// template
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  error: Fehler
  keepUpload: Nein, behalten
  restart: Erneut versuchen
  title: Bild löschen
  uploadDelete: Bild löschen
  uploadDeleteQuestion: Möchtest du dieses Bild wirklich löschen?
en:
  error: Error
  keepUpload: No, keep it
  restart: Try again
  title: Delete image
  uploadDelete: Delete image
  uploadDeleteQuestion: Do you really want to delete this image?
</i18n>
