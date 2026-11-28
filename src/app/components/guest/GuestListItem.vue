<template>
  <AppListItem
    v-if="contact"
    :id="`guest-${guest.rowId}`"
    :class="{
      'animate-pulse': pending.deletions.includes(guest.rowId),
    }"
  >
    <Checkbox
      v-if="isSelectionEnabled"
      v-model="isSelected"
      :aria-label="t('guestSelect', { name: contactName })"
      class="ml-2"
    />
    <ContactPreview :contact :feedback="guest.feedback" />
    <div class="flex shrink-0 items-center gap-4 text-fg-1">
      <AppButton
        :aria-label="t('guestShare')"
        class="hidden md:block"
        size="none"
        variant="ghost"
        @click="void share(guest)"
      >
        <AppIconPaperAirplane />
      </AppButton>
      <AppDropdown>
        <AppDropdownItem class="md:hidden" @select="share(guest)">
          <AppIconPaperAirplane />
          <span>
            {{ t('guestShare') }}
          </span>
        </AppDropdownItem>
        <AppDropdownItem @select="copyLink(guest)">
          <AppIconLink />
          <span>
            {{ t('guestLink') }}
          </span>
        </AppDropdownItem>
        <AppDropdownItem
          v-if="event.accountByCreatedBy?.username"
          @select="
            navigateTo(
              localePath({
                name: 'guest-view-id',
                params: {
                  id: guest.rowId,
                },
              }),
            )
          "
        >
          <AppIconEye />
          <span>
            {{ t('guestView') }}
          </span>
        </AppDropdownItem>
        <AppDropdownItem
          v-if="contact.createdBy === store.signedInAccountId"
          @select="editContact"
        >
          <AppIconPencil />
          <span>
            {{ t('contactEdit') }}
          </span>
        </AppDropdownItem>
        <AppDropdownItem
          v-if="
            guest.feedback === null ||
            guest.feedback === InvitationFeedback.Canceled
          "
          :disabled="pending.feedbacks.includes(guest.rowId)"
          @select="setFeedback(guest.rowId, InvitationFeedback.Accepted)"
        >
          <AppIconCheckCircleSolid />
          <span>
            {{ t('guestFeedbackAccept') }}
          </span>
        </AppDropdownItem>
        <AppDropdownItem
          v-if="
            guest.feedback === null ||
            guest.feedback === InvitationFeedback.Accepted
          "
          :disabled="pending.feedbacks.includes(guest.rowId)"
          @select="setFeedback(guest.rowId, InvitationFeedback.Canceled)"
        >
          <AppIconXCircleSolid />
          <span>
            {{ t('guestFeedbackCancel') }}
          </span>
        </AppDropdownItem>
        <AppDropdownItem
          :disabled="pending.deletions.includes(guest.rowId)"
          variant="destructive"
          @select="onDeleteSelect(guest.rowId)"
        >
          <AppIconTrash />
          <span>
            {{ t('guestDelete') }}
          </span>
        </AppDropdownItem>
        <template #trigger>
          <AppIconEllipsisVertical />
          <span class="sr-only">{{ t('actions', { name: contactName }) }}</span>
        </template>
      </AppDropdown>
    </div>
  </AppListItem>
  <GuestDeleteDrawer
    v-if="contact"
    v-model:open="isDeleteDrawerOpen"
    :contact
    :guest-row-id="guest.rowId"
  />
</template>

<script setup lang="ts">
import { useMutation } from '@urql/vue'
import { useMagicKeys } from '@vueuse/core'

import { InvitationFeedback } from '~~/gql/generated/graphcache'
import { graphql } from '~~/gql/generated'
import { getContactItem } from '~~/shared/utils/contact'
import { getContactName } from '~~/shared/utils/model'
import type {
  EventItemFragment,
  GuestItemFragment,
} from '~~/gql/generated/graphql'

const { event, guest } = defineProps<{
  event: Pick<EventItemFragment, 'accountByCreatedBy' | 'slug'>
  guest: Pick<GuestItemFragment, 'contactByContactId' | 'feedback' | 'rowId'>
}>()

const { defaultLocale, t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const router = useRouter()
const store = useStore()
const { copy } = useCopy()
const { shift } = useMagicKeys()
const isSelectionEnabled = useFeatureFlags().isFeatureEnabled('guest-selection')

const isSelected = defineModel<boolean>('selected')

// data
const isDeleteDrawerOpen = ref(false)
const pending = reactive({
  deletions: ref<string[]>([]),
  edits: ref<string[]>([]),
  feedbacks: ref<string[]>([]),
})

// api data
const deleteGuestByRowIdMutation = useMutation(
  graphql(`
    mutation DeleteGuestByRowId($input: DeleteGuestByRowIdInput!) {
      deleteGuestByRowId(input: $input) {
        guest {
          eventByEventId {
            guestCount
            id
          }
          id
          rowId
        }
      }
    }
  `),
)
const updateGuestByRowIdMutation = useMutation(
  graphql(`
    mutation UpdateGuestByRowIdFeedback($input: UpdateGuestByRowIdInput!) {
      updateGuestByRowId(input: $input) {
        guest {
          feedback
          id
          rowId
        }
      }
    }
  `),
)

// methods
const getLink = (guest: Pick<GuestItemFragment, 'rowId'>) =>
  // the guest's language is unknown here, so the mark lets the server pick it
  `${window.location.origin}${localePath(
    {
      name: 'guest-view-id',
      params: {
        id: guest.rowId,
      },
      query: { language: 'auto' },
    },
    defaultLocale,
  )}`
const copyLink = async (guest: Pick<GuestItemFragment, 'rowId'>) => {
  if (!import.meta.client) return

  if (await copy(getLink(guest))) toast.success(t('copySuccess'))
}
const delete_ = async (id: string) => {
  pending.deletions.push(id)
  await deleteGuestByRowIdMutation.executeMutation({ input: { rowId: id } })
  pending.deletions.splice(pending.deletions.indexOf(id), 1)
}
// the hash lets the list scroll back to this guest after the edit
const editContact = async () => {
  if (!contact.value) return

  await router.replace({ ...route, hash: `#guest-${guest.rowId}` })
  await navigateTo(
    localePath({
      name: 'contact-edit-id',
      params: { id: contact.value.rowId },
      query: { redirect: route.fullPath },
    }),
  )
}
const onDeleteSelect = (id: string) => {
  if (shift?.value) {
    delete_(id)
    return
  }

  isDeleteDrawerOpen.value = true
}
const setFeedback = async (id: string, feedback: InvitationFeedback) => {
  pending.feedbacks.push(id)

  const result = await updateGuestByRowIdMutation.executeMutation({
    input: { guestPatch: { feedback }, rowId: id },
  })

  pending.feedbacks.splice(pending.feedbacks.indexOf(id), 1)

  if (!getResultData(result)) return

  toast.success(t('guestFeedbackSuccess'))
}
// the organizer passes the link on from their own device, as German courts
// treat invitations the platform sends itself as its advertising, which needs
// each invitee's prior consent (§ 7 UWG, BGH I ZR 65/14)
// called without awaiting anything first, as iOS drops the user activation
// that navigator.share requires once an await runs
const share = async (guest: Pick<GuestItemFragment, 'rowId'>) => {
  if (!import.meta.client) return

  if (!navigator.share) {
    await shareFallback(guest)
    return
  }

  try {
    await navigator.share({ text: t('shareText'), url: getLink(guest) })
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') return

    await shareFallback(guest)
  }
}
// without a share sheet, a known email address opens a draft in the
// organizer's own mail app
const shareFallback = async (guest: Pick<GuestItemFragment, 'rowId'>) => {
  const emailAddress = contact.value?.emailAddress

  if (!emailAddress) {
    await copyLink(guest)
    return
  }

  // mailto wants spaces as %20, which URLSearchParams writes as +
  const query = new URLSearchParams({
    body: `${t('shareText')}\n\n${getLink(guest)}`,
    subject: t('shareSubject'),
  })
    .toString()
    .replaceAll('+', '%20')
  window.location.href = `mailto:${emailAddress}?${query}`
}

// computations
const contact = computed(() => getContactItem(guest.contactByContactId))
const contactName = computed(() =>
  contact.value
    ? getContactName({
        account: contact.value.accountByAccountId,
        contact: contact.value,
      })
    : undefined,
)
</script>

<i18n lang="yaml">
de:
  actions: Aktionen für {name}
  contactEdit: Kontakt bearbeiten
  copySuccess: Der Einladungslink wurde in die Zwischenablage kopiert.
  guestDelete: Gast löschen
  guestFeedbackAccept: Als zugesagt markieren
  guestFeedbackCancel: Als abgesagt markieren
  guestFeedbackSuccess: Der Rückmeldestatus wurde aktualisiert.
  guestLink: Einladungslink kopieren
  guestSelect: Gast {name} auswählen
  guestShare: Einladung teilen
  guestView: Einladung anzeigen
  shareSubject: Du bist eingeladen!
  shareText: 'Du bist eingeladen! Hier ist Deine Einladung:'
en:
  actions: Actions for {name}
  contactEdit: Edit contact
  copySuccess: The guest link has been copied to the clipboard.
  guestDelete: Delete guest
  guestFeedbackAccept: Mark as accepted
  guestFeedbackCancel: Mark as declined
  guestFeedbackSuccess: The feedback status was updated.
  guestLink: Copy invitation link
  guestSelect: Select guest {name}
  guestShare: Share invitation
  guestView: View invitation
  shareSubject: You're invited!
  shareText: "You're invited! Here is your invitation:"
</i18n>
