<template>
  <AppDrawer v-model:open="isOpen" @animation-end="onAnimationEnd">
    <AppStep v-slot="attributes" :is-active="step === 'default'">
      <div v-bind="attributes" class="text-center">
        <TypographySubtitleSmall>
          {{ t('blockAccountQuestion', { username: blockedUsername }) }}
        </TypographySubtitleSmall>
      </div>
    </AppStep>
    <AppStep v-slot="attributes" :is-active="step === 'success'">
      <div v-bind="attributes">
        <LayoutPageResult type="success">
          <template #description>
            {{ t('blockAccountConfirmation', { username: blockedUsername }) }}
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
          {{ t('blockAccount') }}
        </span>
      </AppStep>
      <AppStep v-slot="attributes" :is-active="step === 'success'">
        <span v-bind="attributes">
          {{ t('userBlocked') }}
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
          :aria-label="t('confirmBlock')"
          variant="primary-critical"
          @click="blockUser"
        >
          {{ t('confirmBlock') }}
        </ButtonColored>
        <ButtonColored
          v-bind="attributes"
          :aria-label="t('cancel')"
          variant="secondary-critical"
          @click="closeDrawer"
        >
          {{ t('cancel') }}
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
import { useCreateAccountBlockMutation } from '~~/gql/documents/mutations/accountBlock/accountBlockCreate'

// compiler
const { blockedAccountId, blockedUsername, blockingAccountId } = defineProps<{
  blockedAccountId: string
  blockedUsername: string
  blockingAccountId: string
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

// api data
const createAccountBlockMutation = useCreateAccountBlockMutation()
const blockUser = async () => {
  const result = await createAccountBlockMutation.executeMutation({
    accountBlockInput: {
      blockedAccountId,
      createdBy: blockingAccountId,
    },
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
  blockAccount: Benutzer blockieren
  blockAccountQuestion: Möchtest du {username} wirklich blockieren? Du wirst keine Einladungen mehr von diesem Benutzer erhalten.
  blockAccountConfirmation: Der Benutzer {username} wurde blockiert.
  cancel: Abbrechen
  confirmBlock: Ja, blockieren
  error: Fehler
  restart: Erneut versuchen
  userBlocked: Benutzer blockiert
en:
  backToDashboard: Back to Dashboard
  blockAccount: Block User
  blockAccountQuestion: Do you really want to block {username}? You will no longer get invitations from this user.
  blockAccountConfirmation: The user {username} has been blocked.
  cancel: Cancel
  confirmBlock: Yes, block user
  error: Error
  restart: Try again
  userBlocked: User blocked
</i18n>
