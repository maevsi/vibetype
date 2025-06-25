<template>
  <AppDrawer v-model:open="isOpen" @animation-end="onAnimationEnd">
    <AppStep v-slot="attributes" :is-active="step === 'default'">
      <div v-bind="attributes" class="space-y-6 text-center">
        <div class="text-lg">
          {{ t('deleteAccountQuestion') }}
        </div>
      </div>
    </AppStep>
    <AppStep v-slot="attributes" :is-active="step === 'passwordConfirmation'">
      <FormDelete
        ref="deleteForm"
        v-bind="attributes"
        v-model:error="error"
        :mutation="accountDeleteMutation"
        :variables="{ accountId }"
        :item-name-deletion="t('account')"
        :item-name-success="t('account')"
        @success="step = 'accountDeleted'"
      />
    </AppStep>
    <AppStep v-slot="attributes" :is-active="step === 'error'">
      <div v-bind="attributes">
        <LayoutPageResult type="error">
          <template #description>
            {{ error }}
          </template>
        </LayoutPageResult>
      </div>
    </AppStep>
    <AppStep v-slot="attributes" :is-active="step === 'accountDeleted'">
      <div v-bind="attributes">
        <div class="mx-auto flex items-center justify-center rounded-full">
          <AppIconCheck />
        </div>
        <div>
          {{ t('accountDeletedMessage') }}
        </div>
      </div>
    </AppStep>
    <template #title>
      <AppStep v-slot="attributes" :is-active="step === 'default'">
        <span v-bind="attributes">
          {{ t('deleteAccount') }}
        </span>
      </AppStep>
      <AppStep v-slot="attributes" :is-active="step === 'passwordConfirmation'">
        <span v-bind="attributes">
          {{ t('confirmPassword') }}
        </span>
      </AppStep>
      <AppStep v-slot="attributes" :is-active="step === 'error'">
        <span v-bind="attributes">
          {{ t('error') }}
        </span>
      </AppStep>
      <AppStep v-slot="attributes" :is-active="step === 'accountDeleted'">
        <span v-bind="attributes">
          {{ t('accountDeleted') }}
        </span>
      </AppStep>
    </template>
    <template #footer>
      <AppStep v-slot="attributes" :is-active="step === 'default'">
        <ButtonColored
          v-bind="attributes"
          :aria-label="t('stayWithVibetype')"
          variant="primary"
          @click="closeDrawer"
        >
          {{ t('stayWithVibetype') }}
        </ButtonColored>
        <ButtonColored
          v-bind="attributes"
          :aria-label="t('confirmDelete')"
          variant="secondary-critical"
          @click="step = 'passwordConfirmation'"
        >
          {{ t('confirmDelete') }}
        </ButtonColored>
      </AppStep>
      <AppStep v-slot="attributes" :is-active="step === 'error'">
        <ButtonColored
          v-bind="attributes"
          :aria-label="t('cancel')"
          variant="secondary"
          @click="closeDrawer"
        >
          {{ t('cancel') }}
        </ButtonColored>
      </AppStep>
      <AppStep v-slot="attributes" :is-active="step === 'accountDeleted'">
        <ButtonColored
          v-bind="attributes"
          :aria-label="t('toHomepage')"
          variant="primary"
          @click="goToHomepage"
        >
          {{ t('toHomepage') }}
        </ButtonColored>
      </AppStep>
    </template>
  </AppDrawer>
</template>

<script setup lang="ts">
import { useAccountDeleteMutation } from '~~/gql/documents/mutations/account/accountDelete'

const localePath = useLocalePath()
const { t } = useI18n()
const error = ref()
const { accountId } = defineProps<{
  accountId: string
}>()

const isOpen = defineModel<boolean>('isOpen')

const { step } = useStepper<
  'passwordConfirmation' | 'accountDeleted' | 'error'
>()
const onAnimationEnd = (isOpen: boolean) => {
  if (isOpen) return
  step.value = 'default'
}

const accountDeleteMutation = useAccountDeleteMutation()

const closeDrawer = () => {
  isOpen.value = false
}

const goToHomepage = async () => {
  await navigateTo(localePath({ name: 'index' }))
}

watch(
  () => error.value,
  (current) => {
    if (current) {
      step.value = 'error'
    }
  },
)
</script>

<i18n lang="yaml">
de:
  deleteAccount: Account löschen
  deleteAccountQuestion: Möchtest du deinen Account wirklich löschen?
  stayWithVibetype: Nein, ich bleibe bei VIBETYPE
  confirmDelete: Ja, Account löschen
  confirmPassword: Passwort bestätigen
  accountDeleted: Account gelöscht
  accountDeletedMessage: Dein Account wurde gelöscht. Aber wir freuen uns, dich wieder bei VIBETYPE zu sehen!
  toHomepage: Zur Startseite
  cancel: Abbrechen
  account: Account
  error: Fehler
en:
  deleteAccount: Delete account
  deleteAccountQuestion: Do you really want to delete your account?
  stayWithVibetype: No, I'm staying with VIBETYPE
  confirmDelete: Yes, delete my account
  confirmPassword: Confirm password
  accountDeleted: Account deleted
  accountDeletedMessage: Your account was deleted. But we'll be glad to see you again with VIBETYPE!
  toHomepage: To the Homepage
  cancel: Cancel
  account: Account
  error: Error
</i18n>
