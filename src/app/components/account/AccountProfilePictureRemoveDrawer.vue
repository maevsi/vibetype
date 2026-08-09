<template>
  <AppDrawer v-model:open="isOpen" @animation-end="onAnimationEnd">
    <AppStep v-slot="attributes" :is-active="step === 'default'">
      <div v-bind="attributes" class="text-center">
        <TypographySubtitleSmall>
          {{ t('profilePictureRemoveQuestion') }}
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
          :aria-label="t('keepProfilePicture')"
          variant="secondary"
          @click="closeDrawer"
        >
          {{ t('keepProfilePicture') }}
        </ButtonColored>
        <ButtonColored
          v-bind="attributes"
          :aria-label="t('profilePictureRemove')"
          :loading="isPending"
          variant="primary-critical"
          @click="removeProfilePicture"
        >
          {{ t('profilePictureRemove') }}
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

const { profilePictureRowId } = defineProps<{
  profilePictureRowId: string
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
const isPending = computed(
  () => deleteProfilePictureByRowIdMutation.fetching.value,
)

const removeProfilePicture = async () => {
  const result = await deleteProfilePictureByRowIdMutation.executeMutation({
    input: { rowId: profilePictureRowId },
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
  keepProfilePicture: Nein, behalten
  profilePictureRemove: Bild entfernen
  profilePictureRemoveQuestion: Möchtest du dein Profilbild wirklich entfernen?
  restart: Erneut versuchen
  title: Profilbild entfernen
en:
  error: Error
  keepProfilePicture: No, keep it
  profilePictureRemove: Remove image
  profilePictureRemoveQuestion: Do you really want to remove your profile picture?
  restart: Try again
  title: Remove profile picture
</i18n>
