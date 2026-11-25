<template>
  <AppListItem
    v-if="contact"
    :class="{
      'animate-pulse': pending.deletions.includes(guest.rowId),
    }"
  >
    <Checkbox
      v-model="isSelected"
      :aria-label="t('guestSelect', { name: contactName })"
      class="ml-2"
    />
    <ContactPreview :contact :feedback="guest.feedback" />
    <div class="flex shrink-0 items-center gap-4 text-fg-1">
      <AppButton
        :aria-label="sendLabel"
        class="hidden md:block"
        :disabled="!isSendable"
        :loading="pending.sends.includes(guest.rowId)"
        size="none"
        variant="ghost"
        @click="send(guest)"
      >
        <AppIconPaperAirplane />
        <template #loading />
      </AppButton>
      <AppButton
        :aria-label="t('guestLink')"
        class="hidden md:block"
        size="none"
        variant="ghost"
        @click="copyLink(guest)"
      >
        <AppIconLink />
      </AppButton>
      <AppDropdown>
        <AppDropdownItem
          class="md:hidden"
          :disabled="!isSendable || pending.sends.includes(guest.rowId)"
          @select="send(guest)"
        >
          <AppIconPaperAirplane />
          <span>
            {{ sendLabel }}
          </span>
        </AppDropdownItem>
        <AppDropdownItem class="md:hidden" @select="copyLink(guest)">
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

const { defaultLocale, locale, t } = useI18n()
const localePath = useLocalePath()
const { copy } = useCopy()
const { shift } = useMagicKeys()

const isSelected = defineModel<boolean>('selected')

// data
const isDeleteDrawerOpen = ref(false)
const pending = reactive({
  deletions: ref<string[]>([]),
  edits: ref<string[]>([]),
  feedbacks: ref<string[]>([]),
  sends: ref<string[]>([]),
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
const inviteMutation = useMutation(
  graphql(`
    mutation Invite($input: InviteInput!) {
      invite(input: $input) {
        clientMutationId
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
// called without awaiting anything first, as iOS drops the user activation
// that navigator.share requires once an await runs
const share = async (guest: Pick<GuestItemFragment, 'rowId'>) => {
  if (!import.meta.client) return

  if (!navigator.share) {
    await copyLink(guest)
    return
  }

  try {
    await navigator.share({ text: t('shareText'), url: getLink(guest) })
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') return

    await copyLink(guest)
  }
}
const send = async (guest: Pick<GuestItemFragment, 'rowId'>) => {
  // without an email address to send to, the organizer passes the link on
  // from their own device, e.g. by text message
  if (!isEmailable.value) {
    await share(guest)
    return
  }

  pending.sends.push(guest.rowId)

  const result = await inviteMutation.executeMutation({
    input: {
      guestId: guest.rowId,
      language: locale.value,
    },
  })

  pending.sends.splice(pending.sends.indexOf(guest.rowId), 1)

  if (!getResultData(result)) return

  toast.success(t('sendSuccess'))
}

// computations
const contact = computed(() => getContactItem(guest.contactByContactId))
const isEmailable = computed(
  () => !!(contact.value?.accountId || contact.value?.emailAddress),
)
const isSendable = computed(
  () => isEmailable.value || !!contact.value?.phoneNumber,
)
const sendLabel = computed(() =>
  isEmailable.value
    ? t('guestSend')
    : isSendable.value
      ? t('guestShare')
      : t('disabledReasonContactWayNone'),
)
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
  copySuccess: Der Einladungslink wurde in die Zwischenablage kopiert.
  disabledReasonContactWayNone: Diesem Kontakt fehlen E-Mail-Adresse und Telefonnummer.
  guestDelete: Gast löschen
  guestFeedbackAccept: Als zugesagt markieren
  guestFeedbackCancel: Als abgesagt markieren
  guestFeedbackSuccess: Der Rückmeldestatus wurde aktualisiert.
  guestLink: Einladungslink kopieren
  guestSelect: Gast {name} auswählen
  guestSend: Einladung versenden
  guestShare: Einladung teilen
  guestView: Einladung anzeigen
  sendSuccess: Die Einladung wurde erfolgreich per E-Mail versandt.
  shareText: 'Du bist eingeladen! Hier ist Deine Einladung:'
  # postgresP0002: Die Einladung konnte nicht versandt werden! Möglicherweise hast du aktuell keinen Zugriff auf die notwendigen Daten. Versuche die Seite neu zu laden.
en:
  actions: Actions for {name}
  copySuccess: The guest link has been copied to the clipboard.
  disabledReasonContactWayNone: This contact has neither an email address nor a phone number.
  guestDelete: Delete guest
  guestFeedbackAccept: Mark as accepted
  guestFeedbackCancel: Mark as declined
  guestFeedbackSuccess: The feedback status was updated.
  guestLink: Copy invitation link
  guestSelect: Select guest {name}
  guestSend: Send invitation
  guestShare: Share invitation
  guestView: View invitation
  sendSuccess: The invitation was successfully sent by email.
  shareText: "You're invited! Here is your invitation:"
  # postgresP0002: The guest could not be sent! You may not have access to the necessary data right now. Try reloading the page.
</i18n>
