<template>
  <AppDrawer v-model:open="isOpen" @animation-end="onAnimationEnd">
    <AppStep v-slot="attributes" :is-active="step === 'default'">
      <div v-bind="attributes" class="text-center">
        <TypographySubtitleSmall>
          {{ t('unblockAccountQuestion', { username: account.username }) }}
        </TypographySubtitleSmall>
      </div>
    </AppStep>
    <AppStep v-slot="attributes" :is-active="step === 'success'">
      <div v-bind="attributes">
        <LayoutPageResult type="success">
          <template #description>
            {{
              t('unblockAccountConfirmation', { username: account.username })
            }}
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
          {{ t('title') }}
        </span>
      </AppStep>
      <AppStep v-slot="attributes" :is-active="step === 'success'">
        <span v-bind="attributes">
          {{ t('userUnblocked') }}
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
          :aria-label="t('keepBlocked')"
          variant="secondary"
          @click="closeDrawer"
        >
          {{ t('keepBlocked') }}
        </ButtonColored>
        <ButtonColored
          v-bind="attributes"
          :aria-label="t('unblock')"
          @click="unblockUser"
        >
          {{ t('unblock') }}
        </ButtonColored>
      </AppStep>
      <AppStep v-slot="attributes" :is-active="step === 'success'">
        <ButtonColored
          v-bind="attributes"
          :aria-label="t('backToDashboard')"
          variant="primary"
          @click="backToDashboard"
        >
          {{ t('backToDashboard') }}
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
import type { AccountBlockAccountsRecord } from '~~/gql/generated/graphql'

// compiler
const { account } = defineProps<{
  account: AccountBlockAccountsRecord
}>()

const { error, restart, step } = useStepper<'success'>()

// drawer
const isOpen = defineModel<boolean>('open')
const closeDrawer = () => {
  isOpen.value = false
}
const onAnimationEnd = (isOpen: boolean) => {
  if (isOpen) return

  if (step.value === 'success') {
    backToDashboard()
    return
  }

  step.value = 'default'
}

const deleteAccountBlockMutation = useMutation(
  graphql(`
    mutation DeleteAccountBlock($blockedAccountId: UUID!, $createdBy: UUID!) {
      deleteAccountBlockByCreatedByAndBlockedAccountId(
        input: { blockedAccountId: $blockedAccountId, createdBy: $createdBy }
      ) {
        clientMutationId
      }
    }
  `),
)

const unblockUser = async () => {
  const store = useStore()

  const result = await deleteAccountBlockMutation.executeMutation({
    blockedAccountId: account.id,
    createdBy: store.signedInAccountId,
  })

  if (result.error) {
    error.value = result.error
    return
  }

  step.value = 'success'
}

const localePath = useLocalePath()
const backToDashboard = async () =>
  await navigateTo(
    localePath({
      name: 'dashboard',
    }),
  )

// template
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  backToDashboard: Zurück zum Dashboard
  error: Fehler
  keepBlocked: Nein, blockiert lassen
  restart: Erneut versuchen
  title: Benutzer entsperren
  unblock: Ja, entsperren
  unblockAccountConfirmation: Der Benutzer {username} wurde entsperrt.
  unblockAccountQuestion: Möchtest du {username} wirklich entsperren? Er wird dir wieder Einladungen senden können.
  userUnblocked: Benutzer entsperrt
en:
  backToDashboard: Back to Dashboard
  error: Error
  keepBlocked: No, keep blocked
  restart: Try again
  title: Unblock user
  unblock: Yes, unblock
  unblockAccountConfirmation: The user {username} has been unblocked.
  unblockAccountQuestion: Do you really want to unblock the user? He will be able to send you invitations again.
  userUnblocked: User Unblocked
</i18n>
