<template>
  <tr
    v-if="contact"
    :key="contact.rowId"
    :class="{
      'animate-pulse': isDeleting,
    }"
  >
    <AppTableCell>
      <ContactPreview :contact />
    </AppTableCell>
    <AppTableCell class="hidden xl:table-cell">
      {{ contact.emailAddress || '–' }}
    </AppTableCell>
    <!-- <AppTableCell class="hidden xl:table-cell">
      {{ (contact.address || '').replace(/\n/g, ', ') || '–' }}
    </AppTableCell> -->
    <AppTableCell class="hidden xl:table-cell">
      {{ getPhoneNumberFormatted(contact.phoneNumber) || '–' }}
    </AppTableCell>
    <AppTableCell class="hidden xl:table-cell">
      {{ contact.url || '–' }}
    </AppTableCell>
    <AppTableCell>
      <div class="flex items-center justify-evenly gap-2">
        <AppButton
          :aria-label="
            contact.createdBy !== store.signedInAccountId
              ? t('disabledReasonCreatorNot', {
                  creatorUsername: contact.accountByCreatedBy?.username,
                })
              : t('contactEdit')
          "
          :disabled="contact.createdBy !== store.signedInAccountId || isEditing"
          size="none"
          variant="ghost"
          @click="emit('edit')"
        >
          <AppIconPencil />
        </AppButton>
        <AppButton
          :aria-label="t('contactDelete')"
          :disabled="
            isDeleting || contact.accountId === store.signedInAccountId
          "
          size="none"
          variant="ghost"
          @click="emit('delete')"
        >
          <AppIconTrash />
        </AppButton>
      </div>
    </AppTableCell>
  </tr>
</template>

<script setup lang="ts">
import type { ContactItemFragment } from '~~/gql/generated/graphql'

const { contact, isDeleting, isEditing } = defineProps<{
  contact: Pick<
    ContactItemFragment,
    | 'accountId'
    | 'accountByAccountId'
    | 'accountByCreatedBy'
    // | 'addressByAddressId'
    | 'createdBy'
    | 'emailAddress'
    | 'emailAddressHash'
    | 'firstName'
    | 'lastName'
    | 'phoneNumber'
    | 'rowId'
    | 'url'
  >
  isDeleting?: boolean
  isEditing?: boolean
}>()

const emit = defineEmits<{
  edit: []
  delete: []
}>()

const store = useStore()
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  contactEdit: Kontakt bearbeiten
  contactDelete: Kontakt löschen
  disabledReasonCreatorNot: 'Dieser Kontakt wird von {creatorUsername} verwaltet.'
en:
  contactEdit: Edit contact
  contactDelete: Delete contact
  disabledReasonCreatorNot: This contact is managed by {creatorUsername}.
</i18n>
