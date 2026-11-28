<template>
  <AppListItem
    :id="`contact-${contact.rowId}`"
    :class="{ 'animate-pulse': isDeleting }"
  >
    <a
      class="flex min-w-0 flex-1 items-center gap-4 rounded-medium p-2 hover:bg-surface-raised/50"
      :href="editPath"
      @click="onLinkClick"
    >
      <ContactPreview :contact :is-username-linked="false">
        <template v-if="contactWay" #description>{{ contactWay }}</template>
      </ContactPreview>
      <span v-if="guestCount" class="shrink-0 text-body-small text-fg-2">
        {{ t('guestCount', { count: guestCount }) }}
      </span>
      <AppIconChevronRight class="size-5 shrink-0 text-fg-2" />
    </a>
    <AppDropdown>
      <AppDropdownItem
        :disabled="contact.createdBy !== store.signedInAccountId"
        @select="edit"
      >
        <AppIconPencil />
        <span>{{ t('contactEdit') }}</span>
      </AppDropdownItem>
      <AppDropdownItem
        :disabled="
          contact.createdBy !== store.signedInAccountId ||
          contact.accountId === store.signedInAccountId
        "
        @select="emit('merge')"
      >
        <AppIconArrowsPointingIn />
        <span>{{ t('contactMerge') }}</span>
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
    | 'createdBy'
    | 'emailAddresses'
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
  merge: []
}>()

const localePath = useLocalePath()
const route = useRoute()
const router = useRouter()
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
    : contact.emailAddresses?.[0] ||
      getPhoneNumberFormatted(contact.phoneNumber),
)
const editPath = computed(() =>
  localePath({
    name: 'contact-edit-id',
    params: { id: contact.rowId },
    query: { redirect: route.fullPath },
  }),
)

// methods
// the hash lets the list scroll back to this contact after the edit
const onLinkClick = (event: MouseEvent) => {
  // modified and middle clicks keep their native behavior, e.g. opening a new tab
  if (event.button || event.ctrlKey || event.metaKey || event.shiftKey) return

  event.preventDefault()
  edit()
}
const edit = async () => {
  await router.replace({ ...route, hash: `#contact-${contact.rowId}` })
  await navigateTo(editPath.value)
}
</script>

<i18n lang="yaml">
de:
  actions: Aktionen für {name}
  contactDelete: Kontakt löschen
  contactEdit: Kontakt bearbeiten
  contactMerge: Kontakt zusammenführen
  guestCount: '{count} Veranstaltung | {count} Veranstaltungen'
en:
  actions: Actions for {name}
  contactDelete: Delete contact
  contactEdit: Edit contact
  contactMerge: Merge contact
  guestCount: '{count} event | {count} events'
</i18n>
