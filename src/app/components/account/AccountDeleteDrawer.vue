<template>
  <AppDrawer v-model:open="isOpen" @animation-end="onAnimationEnd">
    <AppStep v-slot="attributes" :is-active="step === 'default'">
      <div v-bind="attributes" class="text-center">
        <TypographySubtitleSmall>
          {{ t('deleteAccountQuestion') }}
        </TypographySubtitleSmall>
      </div>
    </AppStep>
    <AppStep v-slot="attributes" :is-active="step === 'password'">
      <FormDelete
        ref="deleteForm"
        v-bind="attributes"
        v-model:error="error"
        :errors-pg-ids="{
          postgres23503: t('postgres23503'),
          postgres28P01: t('postgres28P01'),
        }"
        is-toast-hidden
        :item-name-deletion="t('account')"
        :item-name-success="t('account')"
        :mutation="accountDeleteMutation"
        :variables="{ accountId }"
        @success="step = 'success'"
      />
    </AppStep>
    <AppStep v-slot="attributes" :is-active="step === 'success'">
      <div v-bind="attributes">
        <LayoutPageResult type="success">
          <template #description>
            {{ t('accountDeletedMessage') }}
          </template>
        </LayoutPageResult>
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
          {{ t('deleteAccount') }}
        </span>
      </AppStep>
      <AppStep v-slot="attributes" :is-active="step === 'password'">
        <span v-bind="attributes">
          {{ t('confirmPassword') }}
        </span>
      </AppStep>
      <AppStep v-slot="attributes" :is-active="step === 'success'">
        <span v-bind="attributes">
          {{ t('accountDeleted') }}
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
          :aria-label="t('stay')"
          variant="secondary"
          @click="closeDrawer"
        >
          {{ t('stay') }}
        </ButtonColored>
        <ButtonColored
          v-bind="attributes"
          :aria-label="t('confirmDelete')"
          variant="primary-critical"
          @click="step = 'password'"
        >
          {{ t('confirmDelete') }}
        </ButtonColored>
      </AppStep>
      <AppStep v-slot="attributes" :is-active="step === 'success'">
        <ButtonColored
          v-bind="attributes"
          :aria-label="t('toHomepage')"
          variant="primary"
          @click="navigateToRoot"
        >
          {{ t('toHomepage') }}
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

// compiler
const { accountId } = defineProps<{
  accountId: string
}>()

// stepper
const { error, restart, step } = useStepper<'password' | 'success'>()

// drawer
const jwtDelete = await useJwtDelete()
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
    mutation AccountDelete($password: String!) {
      accountDelete(input: { password: $password }) {
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
  accountDeletedMessage: Dein Konto wurde gelöscht. Wir würden uns freuen, dich bei @.upper:{'globalSiteName'} wiederzusehen!
  confirmDelete: Ja, mein Konto löschen
  confirmPassword: Passwort bestätigen
  deleteAccount: Konto löschen
  deleteAccountQuestion: Willst du dein Konto wirklich löschen? All deine Veranstaltungen, Kontakte und Dateien auf @.upper:{'globalSiteName'} werden unwiederbringlich verschwinden!
  error: Fehler
  postgres23503: Dir gehören noch Daten! Lösche erst all deine Veranstaltungen.
  postgres28P01: Passwort falsch! Überprüfe, ob du alles richtig geschrieben hast.
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
  deleteAccountQuestion: Do you really want to delete your account? All your events, contacts and files on @.upper:{'globalSiteName'} will vanish forever!
  error: Error
  postgres23503: There's still some data connected to your account! Delete all your events first.
  postgres28P01: Password incorrect! Check for spelling mistakes.
  restart: Try again
  stay: No, I'm staying with @.upper:{'globalSiteName'}
  toHomepage: To the Homepage
</i18n>
