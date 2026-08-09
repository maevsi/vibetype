<template>
  <AppDrawer v-model:open="isOpen" @animation-end="onAnimationEnd">
    <AppStep v-slot="attributes" :is-active="step === 'default'">
      <div v-bind="attributes" class="text-center">
        <TypographySubtitleSmall>
          {{ t('guestDeleteQuestion', { name: contactName }) }}
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
          :aria-label="t('keepGuest')"
          variant="secondary"
          @click="closeDrawer"
        >
          {{ t('keepGuest') }}
        </ButtonColored>
        <ButtonColored
          v-bind="attributes"
          :aria-label="t('guestDelete')"
          :loading="isPending"
          variant="primary-critical"
          @click="deleteGuest"
        >
          {{ t('guestDelete') }}
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

const { contact, guestRowId } = defineProps<{
  contact: Pick<
    ContactItemFragment,
    'accountByAccountId' | 'accountId' | 'firstName' | 'lastName' | 'nickname'
  >
  guestRowId: string
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

const deleteGuestByRowIdMutation = useMutation(
  graphql(`
    mutation DeleteGuestByRowId($input: DeleteGuestByRowIdInput!) {
      deleteGuestByRowId(input: $input) {
        clientMutationId
      }
    }
  `),
)
const isPending = computed(() => deleteGuestByRowIdMutation.fetching.value)

const deleteGuest = async () => {
  const result = await deleteGuestByRowIdMutation.executeMutation({
    input: { rowId: guestRowId },
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
  contactNameUnknown: einen unbenannten Kontakt
  error: Fehler
  guestDelete: Gast löschen
  guestDeleteQuestion: Möchtest du den Gast {name} wirklich löschen?
  keepGuest: Nein, behalten
  restart: Erneut versuchen
  title: Gast löschen
en:
  contactNameUnknown: an unnamed contact
  error: Error
  guestDelete: Delete guest
  guestDeleteQuestion: Do you really want to delete the guest {name}?
  keepGuest: No, keep them
  restart: Try again
  title: Delete guest
</i18n>
