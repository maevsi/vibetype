<template>
  <tr
    v-if="contact"
    :key="contact.nodeId"
    :class="{
      'animate-pulse': isDeleting,
    }"
  >
    <LayoutTd>
      <ContactPreview :contact />
    </LayoutTd>
    <LayoutTd class="hidden xl:table-cell">
      {{ contact.emailAddress || '–' }}
    </LayoutTd>
    <!-- <LayoutTd class="hidden xl:table-cell">
      {{ (contact.address || '').replace(/\n/g, ', ') || '–' }}
    </LayoutTd> -->
    <LayoutTd class="hidden xl:table-cell">
      {{ contact.phoneNumber || '–' }}
    </LayoutTd>
    <LayoutTd class="hidden xl:table-cell">
      {{ contact.url || '–' }}
    </LayoutTd>
    <LayoutTd>
      <div class="flex items-center justify-evenly gap-2">
        <ButtonIcon
          :aria-label="
            contact.createdBy !== store.signedInAccountId
              ? t('disabledReasonCreatorNot', {
                  creatorUsername: contact.accountByCreatedBy?.username,
                })
              : t('contactEdit')
          "
          :disabled="contact.createdBy !== store.signedInAccountId || isEditing"
          @click="emit('edit')"
        >
          <AppIconPencil />
        </ButtonIcon>
        <ButtonIcon
          :aria-label="t('contactDelete')"
          :disabled="
            isDeleting || contact.accountId === store.signedInAccountId
          "
          @click="emit('delete')"
        >
          <AppIconTrash />
        </ButtonIcon>
      </div>
    </LayoutTd>
  </tr>
</template>

<script setup lang="ts">
import type { ContactItemFragment } from '~~/gql/generated/graphql'

const { contact, isDeleting, isEditing } = defineProps<{
  contact: Pick<
    ContactItemFragment,
    | 'nodeId'
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
