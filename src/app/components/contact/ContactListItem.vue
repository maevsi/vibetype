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
      {{ contact.emailAddresses?.join(', ') || '–' }}
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
      {{ t('guestCount', { count: guestCount }) }}
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
          :disabled="contact.createdBy !== store.signedInAccountId"
          size="none"
          variant="ghost"
          @click="emit('edit')"
        >
          <AppIconPencil />
        </AppButton>
        <AppButton
          :aria-label="t('contactMerge')"
          :disabled="
            contact.createdBy !== store.signedInAccountId ||
            contact.accountId === store.signedInAccountId
          "
          size="none"
          variant="ghost"
          @click="emit('merge')"
        >
          <AppIconArrowsPointingIn />
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

const { contact, guestCount, isDeleting } = defineProps<{
  contact: Pick<
    ContactItemFragment,
    | 'accountId'
    | 'accountByAccountId'
    | 'accountByCreatedBy'
    // | 'addressByAddressId'
    | 'createdBy'
    | 'emailAddresses'
    | 'emailAddressHash'
    | 'firstName'
    | 'lastName'
    | 'phoneNumber'
    | 'rowId'
    | 'url'
  >
  guestCount: number
  isDeleting?: boolean
}>()

const emit = defineEmits<{
  edit: []
  delete: []
  merge: []
}>()

const store = useStore()
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  contactEdit: Kontakt bearbeiten
  contactDelete: Kontakt löschen
  contactMerge: Kontakt zusammenführen
  disabledReasonCreatorNot: "Dieser Kontakt wird von {'@'}{creatorUsername} verwaltet."
  guestCount: keiner Veranstaltung | {count} Veranstaltung | {count} Veranstaltungen
en:
  contactEdit: Edit contact
  contactDelete: Delete contact
  contactMerge: Merge contact
  disabledReasonCreatorNot: This contact is managed by {'@'}{creatorUsername}.
  guestCount: no events | {count} event | {count} events
</i18n>
