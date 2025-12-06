<template>
  <AppDrawer v-model:open="isOpen" @animation-end="onAnimationEnd">
    <AppStep v-slot="attributes" :is-active="step === 'default'">
      <EventReportForm
        ref="form"
        v-bind="attributes"
        :account-id
        :event
        @submit-success="step = 'reportConfirmation'"
      />
    </AppStep>
    <AppStep v-slot="attributes" :is-active="step === 'reportConfirmation'">
      <div v-bind="attributes" class="text-center">
        {{
          t('contentReportConfirmation', {
            username: event.accountByCreatedBy?.username,
          })
        }}
      </div>
    </AppStep>
    <AppStep v-slot="attributes" :is-active="step === 'blockConfirmation'">
      <div v-bind="attributes" class="text-center">
        {{
          t('contentBlockConfirmation', {
            username: event.accountByCreatedBy?.username,
          })
        }}
      </div>
    </AppStep>
    <template #title>
      <AppStep v-slot="attributes" :is-active="step === 'default'">
        <span v-bind="attributes">
          {{ t('titleReport') }}
        </span>
      </AppStep>
      <AppStep v-slot="attributes" :is-active="step === 'reportConfirmation'">
        <span v-bind="attributes">
          {{ t('titleReportConfirmation') }}
        </span>
      </AppStep>
      <AppStep v-slot="attributes" :is-active="step === 'blockConfirmation'">
        <span v-bind="attributes">
          {{ t('titleBlockConfirmation') }}
        </span>
      </AppStep>
    </template>
    <template #footer>
      <AppStep v-slot="attributes" :is-active="step === 'default'">
        <ButtonColored
          v-bind="attributes"
          :aria-label="t('buttonReportSubmit')"
          type="submit"
          variant="primary-critical"
          @click="templateForm?.submit"
        >
          {{ t('buttonReportSubmit') }}
        </ButtonColored>
        <DrawerClose v-bind="attributes" as-child>
          <ButtonColored
            :aria-label="t('buttonReportCancel')"
            variant="secondary-critical"
          >
            {{ t('buttonReportCancel') }}
          </ButtonColored>
        </DrawerClose>
      </AppStep>
      <AppStep v-slot="attributes" :is-active="step === 'reportConfirmation'">
        <ButtonColored
          v-bind="attributes"
          :aria-label="t('buttonReportConfirmationBlock')"
          variant="secondary-critical"
          @click="blockOrganizer"
        >
          {{ t('buttonReportConfirmationBlock') }}
        </ButtonColored>
        <DrawerClose v-bind="attributes" as-child>
          <ButtonColored :aria-label="t('buttonReportConfirmationClose')">
            {{ t('buttonReportConfirmationClose') }}
          </ButtonColored>
        </DrawerClose>
      </AppStep>
      <AppStep v-slot="attributes" :is-active="step === 'blockConfirmation'">
        <DrawerClose v-bind="attributes" as-child>
          <ButtonColored
            :aria-label="t('buttonBlockConfirmation')"
            @click="backToDashboard"
          >
            {{ t('buttonBlockConfirmation') }}
          </ButtonColored>
        </DrawerClose>
      </AppStep>
    </template>
  </AppDrawer>
</template>

<script setup lang="ts">
import { useCreateAccountBlockMutation } from '~~/gql/documents/mutations/accountBlock/accountBlockCreate'
import type { EventItemFragment } from '~~/gql/generated/graphql'

const localePath = useLocalePath()
const { t } = useI18n()

const { accountId, event } = defineProps<{
  accountId: string
  event: Pick<EventItemFragment, 'id' | 'accountByCreatedBy' | 'createdBy'>
}>()

// template
const templateForm = useTemplateRef('form')

// drawer
const isOpen = defineModel<boolean>('open')

// stepper
const { step } = useStepper<'reportConfirmation' | 'blockConfirmation'>()
const onAnimationEnd = (isOpen: boolean) => {
  if (isOpen) return

  if (step.value === 'blockConfirmation') {
    backToDashboard()
    return
  }

  step.value = 'default'
}

// block
const createAccountBlockMutation = useCreateAccountBlockMutation()
// const api = await useApiData([createAccountBlockMutation]) // TODO: show loading state, error details
const executeUrqlRequest = useExecuteUrqlRequest()
const blockOrganizer = async () => {
  const result = await executeUrqlRequest({
    errorMessageI18n: t('errorBlock'),
    request: createAccountBlockMutation.executeMutation({
      accountBlockInput: {
        blockedAccountId: event.createdBy,
        createdBy: accountId,
      },
    }),
  })

  if (!result) return

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
  buttonReportConfirmationBlock: Veranstalter blockieren
  buttonReportSubmit: Meldung einreichen
  contentBlockConfirmation: Der Benutzer {username} wurde blockiert.
  contentReportConfirmation: Vielen Dank für die Meldung. Wir werden sie prüfen und dich über unsere Entscheidung benachrichtigen. Du kannst nun den Organisator {username} blockieren oder zur Event-Seite zurückkehren.
  errorBlock: Der Benutzer konnte nicht blockiert werden
  titleBlockConfirmation: Benutzer blockiert
  titleReport: Event melden
  titleReportConfirmation: Meldung erhalten
en:
  buttonBlockConfirmation: Back to Dashboard
  buttonReportCancel: Cancel
  buttonReportConfirmationClose: Close
  buttonReportConfirmationBlock: Block organizer
  buttonReportSubmit: Report
  contentBlockConfirmation: The user {username} has been blocked.
  contentReportConfirmation: Thank you for your report. We will review it and notify you about our decision. You can block the organizer {username} now or return to the event.
  errorBlock: The user could not be blocked
  titleBlockConfirmation: User blocked
  titleReport: Report event
  titleReportConfirmation: Report received
</i18n>
