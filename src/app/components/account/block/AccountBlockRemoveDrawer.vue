<template>
  <AppDrawer v-model="isOpen" @animation-end="onAnimationEnd">
    <AppStepPanel v-slot="attributes" :is-active="step === 'default'">
      <div v-bind="attributes" class="text-center">
        <span class="text-body">
          {{ t('unblockAccountQuestion') }}
        </span>
      </div>
    </AppStepPanel>
    <AppStepPanel v-slot="attributes" :is-active="step === 'success'">
      <div v-bind="attributes">
        <LayoutPageResult type="success">
          <template #description>
            {{
              t('unblockAccountConfirmation', { username: account.username })
            }}
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
          {{ t('title') }}
        </span>
      </AppStepPanel>
      <AppStepPanel v-slot="attributes" :is-active="step === 'success'">
        <span v-bind="attributes">
          {{ t('userUnblocked') }}
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
          :aria-label="t('keepBlocked')"
          variant="secondary"
          @click="closeDrawer"
        >
          {{ t('keepBlocked') }}
        </AppButton>
        <AppButton
          v-bind="attributes"
          :aria-label="t('unblock')"
          :loading="deleteAccountBlockMutation.fetching.value"
          @click="unblockUser"
        >
          {{ t('unblock') }}
        </AppButton>
      </AppStepPanel>
      <AppStepPanel v-slot="attributes" :is-active="step === 'success'">
        <AppButton
          v-bind="attributes"
          :aria-label="t('ok')"
          variant="primary"
          @click="closeDrawer"
        >
          {{ t('ok') }}
        </AppButton>
        <AppButton
          v-bind="attributes"
          :aria-label="t('toProfile')"
          variant="secondary"
          @click="toProfile"
        >
          {{ t('toProfile') }}
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
import type { AccountBlockAccountsRecord } from '~~/gql/generated/graphcache'

// compiler
const { account } = defineProps<{
  account: AccountBlockAccountsRecord
}>()
const emit = defineEmits<{
  success: []
}>()

const { error, restart, step } = useStepper<'success'>()

// drawer
const isOpen = defineModel<boolean>('open')
const closeDrawer = () => {
  isOpen.value = false
}
const onAnimationEnd = (isOpen: boolean) => {
  if (isOpen) return

  step.value = 'default'
}

const deleteAccountBlockMutation = useMutation(
  graphql(`
    mutation DeleteAccountBlock(
      $input: DeleteAccountBlockByCreatedByAndBlockedAccountIdInput!
    ) {
      deleteAccountBlockByCreatedByAndBlockedAccountId(input: $input) {
        clientMutationId
      }
    }
  `),
)

const store = useStore()
const unblockUser = async () => {
  if (!account.id || !store.signedInAccountId) {
    error.value = new Error(t('errorDataMissingBlock'))
    return
  }

  const result = await deleteAccountBlockMutation.executeMutation({
    input: {
      blockedAccountId: account.id,
      createdBy: store.signedInAccountId,
    },
  })

  if (!getResultData(result)) {
    error.value = result.error ?? new Error(t('globalErrorNoData'))
    return
  }

  step.value = 'success'
  emit('success')
}

const localePath = useLocalePath()
const toProfile = async () => {
  if (!account.username) {
    error.value = new Error(t('errorDataMissingNavigate'))
    return
  }

  await navigateTo(
    localePath({
      name: 'account-view-username',
      params: { username: account.username },
    }),
  )
}

// template
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  error: Fehler
  errorDataMissingBlock: Wir konnten diese Person nicht entsperren. Bitte lade die Seite neu und versuche es erneut.
  errorDataMissingNavigate: Wir konnten dieses Profil nicht öffnen. Bitte lade die Seite neu und versuche es erneut.
  keepBlocked: Nein, gesperrt lassen
  ok: OK
  restart: Erneut versuchen
  title: Konto entsperren
  toProfile: Zum Profil
  unblock: Ja, entsperren
  unblockAccountConfirmation: "{'@'}{username} wurde entsperrt."
  unblockAccountQuestion: Diese Person entsperren? Sie kann Dich dann wieder einladen.
  userUnblocked: Konto entsperrt
en:
  error: Error
  errorDataMissingBlock: We couldn't unblock this person. Please reload the page and try again.
  errorDataMissingNavigate: We couldn't open this profile. Please reload the page and try again.
  keepBlocked: No, keep blocked
  ok: OK
  restart: Try again
  title: Unblock user
  toProfile: To profile
  unblock: Yes, unblock
  unblockAccountConfirmation: The user {'@'}{username} has been unblocked.
  unblockAccountQuestion: Unblock this person? They'll be able to invite you again.
  userUnblocked: User unblocked
</i18n>
