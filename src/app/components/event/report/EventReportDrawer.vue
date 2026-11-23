<template>
  <AppDrawer v-model:open="isOpen" @animation-end="onAnimationEnd">
    <AppStepPanel v-slot="attributes" :is-active="step === 'default'">
      <EventReportForm
        :id="templateIdForm"
        ref="form"
        v-bind="attributes"
        v-model:error="error"
        :account-id
        :event
        @submit-success="step = 'reportConfirmation'"
      />
    </AppStepPanel>
    <AppStepPanel
      v-slot="attributes"
      :is-active="step === 'reportConfirmation'"
    >
      <div v-bind="attributes" class="text-center">
        {{
          t('contentReportConfirmation', {
            username: event.accountByCreatedBy?.username,
          })
        }}
      </div>
    </AppStepPanel>
    <AppStepPanel v-slot="attributes" :is-active="step === 'blockConfirmation'">
      <div v-bind="attributes" class="text-center">
        {{
          t('contentBlockConfirmation', {
            username: event.accountByCreatedBy?.username,
          })
        }}
      </div>
    </AppStepPanel>
    <AppStepPanel v-slot="attributes" :is-active="step === 'error'">
      <div v-bind="attributes" class="text-center">
        <span v-if="error && error.message">
          {{ error.message }}
        </span>
      </div>
    </AppStepPanel>
    <template #title>
      <AppStepPanel v-slot="attributes" :is-active="step === 'default'">
        <span v-bind="attributes">
          {{ t('titleReport') }}
        </span>
      </AppStepPanel>
      <AppStepPanel
        v-slot="attributes"
        :is-active="step === 'reportConfirmation'"
      >
        <span v-bind="attributes">
          {{ t('titleReportConfirmation') }}
        </span>
      </AppStepPanel>
      <AppStepPanel
        v-slot="attributes"
        :is-active="step === 'blockConfirmation'"
      >
        <span v-bind="attributes">
          {{ t('titleBlockConfirmation') }}
        </span>
      </AppStepPanel>
      <AppStepPanel v-slot="attributes" :is-active="step === 'error'">
        <span v-bind="attributes">
          {{ t('globalError') }}
        </span>
      </AppStepPanel>
    </template>
    <template #footer>
      <AppStepPanel v-slot="attributes" :is-active="step === 'default'">
        <AppButton
          v-bind="attributes"
          :aria-label="t('buttonReportSubmit')"
          :form="templateIdForm"
          :loading="templateForm?.isSubmitting"
          type="submit"
          variant="primary-critical"
        >
          {{ t('buttonReportSubmit') }}
        </AppButton>
        <DrawerClose v-bind="attributes" as-child>
          <AppButton
            :aria-label="t('buttonReportCancel')"
            variant="secondary-critical"
          >
            {{ t('buttonReportCancel') }}
          </AppButton>
        </DrawerClose>
      </AppStepPanel>
      <AppStepPanel
        v-slot="attributes"
        :is-active="step === 'reportConfirmation'"
      >
        <AppButton
          v-bind="attributes"
          :aria-label="t('buttonReportConfirmationBlock')"
          :loading="createAccountBlockMutation.fetching.value"
          variant="secondary-critical"
          @click="blockOrganizer"
        >
          {{ t('buttonReportConfirmationBlock') }}
        </AppButton>
        <DrawerClose v-bind="attributes" as-child>
          <AppButton :aria-label="t('buttonReportConfirmationClose')">
            {{ t('buttonReportConfirmationClose') }}
          </AppButton>
        </DrawerClose>
      </AppStepPanel>
      <AppStepPanel
        v-slot="attributes"
        :is-active="step === 'blockConfirmation'"
      >
        <DrawerClose v-bind="attributes" as-child>
          <AppButton
            :aria-label="t('buttonBlockConfirmation')"
            @click="backToDashboard"
          >
            {{ t('buttonBlockConfirmation') }}
          </AppButton>
        </DrawerClose>
      </AppStepPanel>
      <AppStepPanel v-slot="attributes" :is-active="step === 'error'">
        <AppButton
          v-bind="attributes"
          :aria-label="t('globalTryAgain')"
          variant="primary"
          @click="restart"
        >
          {{ t('globalTryAgain') }}
        </AppButton>
      </AppStepPanel>
    </template>
  </AppDrawer>
</template>

<script setup lang="ts">
import { useMutation } from '@urql/vue'

import { graphql } from '~~/gql/generated'
import type { EventItemFragment } from '~~/gql/generated/graphql'

const localePath = useLocalePath()
const { t } = useI18n()

const { accountId, event } = defineProps<{
  accountId: string
  event: Pick<EventItemFragment, 'accountByCreatedBy' | 'createdBy' | 'rowId'>
}>()

// template
const templateForm = useTemplateRef('form')
const templateIdForm = useId()

// drawer
const isOpen = defineModel<boolean>('open')

// stepper
const { error, restart, step } = useStepper<
  'reportConfirmation' | 'blockConfirmation'
>()
const onAnimationEnd = (isOpen: boolean) => {
  if (isOpen) return

  if (step.value === 'blockConfirmation') {
    backToDashboard()
    return
  }

  restart()
}

// block
const createAccountBlockMutation = useMutation(
  graphql(`
    mutation CreateAccountBlock($input: CreateAccountBlockInput!) {
      createAccountBlock(input: $input) {
        clientMutationId
      }
    }
  `),
)
const blockOrganizer = async () => {
  const result = await createAccountBlockMutation.executeMutation({
    input: {
      accountBlock: {
        blockedAccountId: event.createdBy,
        createdBy: accountId,
      },
    },
  })

  if (!getResultData(result)) {
    error.value = new Error(
      result.error ? t('errorBlock') : t('globalErrorNoData'),
    )
    return
  }

  step.value = 'blockConfirmation'
}
const backToDashboard = async () =>
  await navigateTo(
    localePath({
      name: 'dashboard',
    }),
  )
</script>

<i18n lang="yaml">
de:
  buttonBlockConfirmation: Zurück zum Dashboard
  buttonReportCancel: Abbrechen
  buttonReportConfirmationClose: Schließen
  buttonReportConfirmationBlock: Veranstaltende blockieren
  buttonReportSubmit: Meldung einreichen
  contentBlockConfirmation: "{'@'}{username} wurde blockiert."
  contentReportConfirmation: Danke, dass Du hilfst, @.upper:{'globalSiteName'} sicher zu halten. Wir prüfen Deine Meldung und sagen Dir Bescheid, wie wir entscheiden. Du kannst {'@'}{username} jetzt auch blockieren.
  errorBlock: Das Konto konnte nicht blockiert werden
  titleBlockConfirmation: Konto blockiert
  titleReport: Veranstaltung melden
  titleReportConfirmation: Meldung erhalten
en:
  buttonBlockConfirmation: Back to Dashboard
  buttonReportCancel: Cancel
  buttonReportConfirmationClose: Close
  buttonReportConfirmationBlock: Block organizer
  buttonReportSubmit: Report
  contentBlockConfirmation: The user {'@'}{username} has been blocked.
  contentReportConfirmation: Thank you for helping keep @.upper:{'globalSiteName'} a safe place. We'll review your report and let you know what we decide. You can also block {'@'}{username} now.
  errorBlock: The user could not be blocked
  titleBlockConfirmation: User blocked
  titleReport: Report event
  titleReportConfirmation: Report received
</i18n>
