<template>
  <AppListItem :class="{ 'animate-pulse': isDeleting }">
    <NuxtLink
      class="flex min-w-0 flex-1 items-center gap-4 rounded-medium p-2 hover:bg-surface-raised/50"
      :to="editPath"
    >
      <ContactPreview :contact :is-username-linked="false">
        <template v-if="contactWay" #description>{{ contactWay }}</template>
      </ContactPreview>
      <span v-if="guestCount" class="shrink-0 text-body-small text-fg-2">
        {{ t('guestCount', { count: guestCount }) }}
      </span>
      <AppIconChevronRight class="size-5 shrink-0 text-fg-2" />
    </NuxtLink>
    <AppDropdown>
      <AppDropdownItem @select="navigateTo(editPath)">
        <AppIconPencil />
        <span>{{ t('contactEdit') }}</span>
      </AppDropdownItem>
      <AppDropdownItem
        :disabled="isDeleting || contact.accountId === store.signedInAccountId"
        variant="destructive"
        @select="emit('delete')"
      >
        <AppIconTrash />
        <span>{{ t('contactDelete') }}</span>
      </AppDropdownItem>
      <template #trigger>
        <AppIconEllipsisVertical />
        <span class="sr-only">{{ t('actions', { name: contactName }) }}</span>
      </template>
    </AppDropdown>
  </AppListItem>
</template>

<script setup lang="ts">
import type { ContactItemFragment } from '~~/gql/generated/graphql'
import { getContactName } from '~~/shared/utils/model'

const { contact, guestCount, isDeleting } = defineProps<{
  contact: Pick<
    ContactItemFragment,
    | 'accountId'
    | 'accountByAccountId'
    | 'accountByCreatedBy'
    | 'emailAddress'
    | 'emailAddressHash'
    | 'firstName'
    | 'lastName'
    | 'nickname'
    | 'phoneNumber'
    | 'rowId'
  >
  guestCount: number
  isDeleting?: boolean
}>()

const emit = defineEmits<{
  delete: []
}>()

const localePath = useLocalePath()
const route = useRoute()
const store = useStore()
const { t } = useI18n()

// computations
const contactName = computed(() =>
  getContactName({ account: contact.accountByAccountId, contact }),
)
// the username already shows below the name, so the other ways to reach someone only fill in for contacts without one
const contactWay = computed(() =>
  contact.accountByAccountId?.username
    ? undefined
    : contact.emailAddress || getPhoneNumberFormatted(contact.phoneNumber),
)
const editPath = computed(() =>
  localePath({
    name: 'contact-edit-id',
    params: { id: contact.rowId },
    query: { redirect: route.fullPath },
  }),
)
</script>

<i18n lang="yaml">
de:
  actions: Aktionen für {name}
  contactDelete: Kontakt löschen
  contactEdit: Kontakt bearbeiten
  guestCount: '{count} Veranstaltung | {count} Veranstaltungen'
en:
  actions: Actions for {name}
  contactDelete: Delete contact
  contactEdit: Edit contact
  guestCount: '{count} event | {count} events'
</i18n>
