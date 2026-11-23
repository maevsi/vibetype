<template>
  <AppDrawer v-model:open="isOpen" @animation-end="onAnimationEnd">
    <AppStepPanel v-slot="attributes" :is-active="step === 'default'">
      <div v-bind="attributes" class="text-center">
        <span class="text-body">
          {{ t('deleteAccountQuestion') }}
        </span>
      </div>
    </AppStepPanel>
    <AppStepPanel v-slot="attributes" :is-active="step === 'password'">
      <FormDelete
        v-bind="attributes"
        v-model:error="error"
        :errors-pg-ids="{
          postgres23503: t('postgres23503'),
          postgres28P01: t('postgres28P01'),
        }"
        is-error-toast-hidden
        is-toast-hidden
        :item-name-deletion="t('account')"
        :item-name-success="t('account')"
        :mutation="accountDeleteMutation"
        @success="step = 'success'"
      />
    </AppStepPanel>
    <AppStepPanel v-slot="attributes" :is-active="step === 'success'">
      <div v-bind="attributes">
        <LayoutPageResult type="success">
          <template #description>
            {{ t('accountDeletedMessage') }}
          </template>
        </LayoutPageResult>
      </div>
    </AppStepPanel>
    <AppStepPanel v-slot="attributes" :is-active="step === 'error'">
      <div v-bind="attributes">
        <LayoutPageResult :message="error?.message" type="error">
          <template #description>
            {{ t('globalTryAgain') }}
          </template>
        </LayoutPageResult>
      </div>
    </AppStepPanel>
    <template #title>
      <AppStepPanel v-slot="attributes" :is-active="step === 'default'">
        <span v-bind="attributes">
          {{ t('deleteAccount') }}
        </span>
      </AppStepPanel>
      <AppStepPanel v-slot="attributes" :is-active="step === 'password'">
        <span v-bind="attributes">
          {{ t('confirmPassword') }}
        </span>
      </AppStepPanel>
      <AppStepPanel v-slot="attributes" :is-active="step === 'success'">
        <span v-bind="attributes">
          {{ t('accountDeleted') }}
        </span>
      </AppStepPanel>
      <AppStepPanel v-slot="attributes" :is-active="step === 'error'">
        <span v-bind="attributes">
          {{ t('error') }}
        </span>
      </AppStepPanel>
    </template>
    <template #footer>
      <AppStepPanel v-slot="attributes" :is-active="step === 'default'">
        <AppButton
          v-bind="attributes"
          :aria-label="t('stay')"
          variant="secondary"
          @click="closeDrawer"
        >
          {{ t('stay') }}
        </AppButton>
        <AppButton
          v-bind="attributes"
          :aria-label="t('confirmDelete')"
          variant="primary-critical"
          @click="step = 'password'"
        >
          {{ t('confirmDelete') }}
        </AppButton>
      </AppStepPanel>
      <AppStepPanel v-slot="attributes" :is-active="step === 'success'">
        <AppButton
          v-bind="attributes"
          :aria-label="t('toHomepage')"
          variant="primary"
          @click="navigateToRoot"
        >
          {{ t('toHomepage') }}
        </AppButton>
      </AppStepPanel>
      <AppStepPanel v-slot="attributes" :is-active="step === 'error'">
        <AppButton
          v-bind="attributes"
          :aria-label="t('restart')"
          variant="tertiary"
          @click="restart"
        >
          {{ t('restart') }}
        </AppButton>
      </AppStepPanel>
    </template>
  </AppDrawer>
</template>

<script setup lang="ts">
import { useMutation } from '@urql/vue'

import { graphql } from '~~/gql/generated'

// stepper
const { error, restart, step } = useStepper<'password' | 'success'>()

// drawer
const jwtDelete = useJwtDelete()
const isOpen = defineModel<boolean>('isOpen')
const closeDrawer = () => {
  isOpen.value = false
}
const navigateToRoot = async () => {
  await jwtDelete()
  await navigateTo(localePath({ name: 'index' }))
}
const onAnimationEnd = async (isOpen: boolean) => {
  if (isOpen) return

  if (step.value === 'success') {
    await navigateToRoot()
  }

  step.value = 'default'
}

// template
const { t } = useI18n()
const localePath = useLocalePath()
const accountDeleteMutation = useMutation(
  graphql(`
    mutation AccountDelete($input: AccountDeleteInput!) {
      accountDelete(input: $input) {
        clientMutationId
      }
    }
  `),
)
</script>

<i18n lang="yaml">
de:
  account: Konto
  accountDeleted: Konto gelöscht
  accountDeletedMessage: Dein Konto wurde gelöscht. Wir würden uns freuen, Dich bei @.upper:{'globalSiteName'} wiederzusehen!
  confirmDelete: Ja, mein Konto löschen
  confirmPassword: Passwort bestätigen
  deleteAccount: Konto löschen
  deleteAccountQuestion: Konto löschen? Alle Deine Veranstaltungen, Kontakte und Dateien auf @.upper:{'globalSiteName'} sind dann endgültig weg, und wir können sie nicht wiederherstellen.
  error: Fehler
  postgres23503: Deine Veranstaltungen sind noch mit Deinem Konto verbunden. Bitte lösche sie zuerst und versuche es dann erneut.
  postgres28P01: Passwort falsch! Überprüfe, ob Du alles richtig geschrieben hast.
  restart: Erneut versuchen
  stay: Nein, ich bleibe bei @.upper:{'globalSiteName'}
  toHomepage: Zur Startseite
en:
  account: Account
  accountDeleted: Account deleted
  accountDeletedMessage: Your account was deleted. We'd be glad to see you again with @.upper:{'globalSiteName'}!
  confirmDelete: Yes, delete my account
  confirmPassword: Confirm password
  deleteAccount: Delete account
  deleteAccountQuestion: Delete your account? All your events, contacts and files on @.upper:{'globalSiteName'} will be gone for good, and we can't bring them back.
  error: Error
  postgres23503: Your events are still connected to your account. Please delete them first, then try again.
  postgres28P01: Password incorrect! Check for spelling mistakes.
  restart: Try again
  stay: No, I'm staying with @.upper:{'globalSiteName'}
  toHomepage: To the Homepage
</i18n>
