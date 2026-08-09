<template>
  <AppDrawer v-model:open="isOpen" @animation-end="onAnimationEnd">
    <AppStep v-slot="attributes" :is-active="step === 'default'">
      <div v-bind="attributes" class="text-center">
        <TypographySubtitleSmall>
          {{ t('contactDeleteQuestion', { name: contactName }) }}
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
          :aria-label="t('keepContact')"
          variant="secondary"
          @click="closeDrawer"
        >
          {{ t('keepContact') }}
        </ButtonColored>
        <ButtonColored
          v-bind="attributes"
          :aria-label="t('contactDelete')"
          :loading="isPending"
          variant="primary-critical"
          @click="deleteContact"
        >
          {{ t('contactDelete') }}
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
import type { ContactItemFragment } from '~~/gql/generated/graphql'
import { getContactName } from '~~/shared/utils/model'

const { contact, contactRowId } = defineProps<{
  contact: Pick<
    ContactItemFragment,
    'accountByAccountId' | 'accountId' | 'firstName' | 'lastName' | 'nickname'
  >
  contactRowId: string
}>()
const emit = defineEmits<{
  success: []
}>()

const contactName = computed(
  () =>
    getContactName({ account: contact.accountByAccountId, contact }) ||
    t('contactNameUnknown'),
)

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

const deleteContactByRowIdMutation = useMutation(
  graphql(`
    mutation DeleteContactByRowId($input: DeleteContactByRowIdInput!) {
      deleteContactByRowId(input: $input) {
        clientMutationId
      }
    }
  `),
)
const isPending = computed(() => deleteContactByRowIdMutation.fetching.value)

const deleteContact = async () => {
  const result = await deleteContactByRowIdMutation.executeMutation({
    input: { rowId: contactRowId },
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
  contactDelete: Kontakt löschen
  contactDeleteQuestion: Möchtest du den Kontakt {name} wirklich löschen?
  contactNameUnknown: einen unbenannten Kontakt
  error: Fehler
  keepContact: Nein, behalten
  restart: Erneut versuchen
  title: Kontakt löschen
en:
  contactDelete: Delete contact
  contactDeleteQuestion: Do you really want to delete the contact {name}?
  contactNameUnknown: an unnamed contact
  error: Error
  keepContact: No, keep them
  restart: Try again
  title: Delete contact
</i18n>
