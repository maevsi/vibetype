<template>
  <tr
    v-if="contact"
    :class="{
      'animate-pulse': pending.deletions.includes(guest.rowId),
    }"
  >
    <AppTableCell class="w-0">
      <Checkbox
        v-model="isSelected"
        :aria-label="t('guestSelect', { name: contactName })"
      />
    </AppTableCell>
    <AppTableCell class="max-w-0">
      <ContactPreview
        :contact
        :feedback="getGuestFeedback(guest)"
        :is-feedback-override="guest.feedbackOverride !== null"
      />
    </AppTableCell>
    <AppTableCell class="max-w-0">
      <div class="flex items-center justify-evenly gap-4 text-fg-1">
        <AppButton
          :aria-label="sendLabel"
          class="hidden md:block"
          :disabled="
            getEventPublicationState(event) !== 'published' ||
            (!contact.accountId && !contact.emailAddress) ||
            pending.sends.includes(guest.rowId)
          "
          size="none"
          variant="ghost"
          @click="send(guest)"
        >
          <AppIconPaperAirplane />
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
            :disabled="
              getEventPublicationState(event) !== 'published' ||
              (!contact.accountId && !contact.emailAddress) ||
              pending.sends.includes(guest.rowId)
            "
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
              getGuestFeedback(guest) === null ||
              getGuestFeedback(guest) === InvitationFeedback.Canceled
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
              getGuestFeedback(guest) === null ||
              getGuestFeedback(guest) === InvitationFeedback.Accepted
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
            v-if="guest.feedbackOverride !== null"
            :disabled="pending.feedbacks.includes(guest.rowId)"
            @select="setFeedback(guest.rowId, null)"
          >
            <AppIconArrowRotateLeft />
            <span>
              {{ t('guestFeedbackReset') }}
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
          </template>
        </AppDropdown>
      </div>
    </AppTableCell>
  </tr>
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
import { getGuestFeedback } from '~~/shared/utils/guest'
import { getContactName } from '~~/shared/utils/model'
import type {
  EventItemFragment,
  GuestItemFragment,
} from '~~/gql/generated/graphql'

const { event, guest } = defineProps<{
  event: Pick<EventItemFragment, 'accountByCreatedBy' | 'publishedAt' | 'slug'>
  guest: Pick<
    GuestItemFragment,
    'contactByContactId' | 'feedback' | 'feedbackOverride' | 'rowId'
  >
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
          feedbackOverride
          id
          rowId
        }
      }
    }
  `),
)

// methods
const copyLink = async (guest: Pick<GuestItemFragment, 'rowId'>) => {
  if (!import.meta.client) return

  if (
    await copy(
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
      )}`,
    )
  )
    toast.success(t('copySuccess'))
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
const setFeedback = async (
  id: string,
  feedbackOverride: InvitationFeedback | null,
) => {
  pending.feedbacks.push(id)

  const result = await updateGuestByRowIdMutation.executeMutation({
    input: { guestPatch: { feedbackOverride }, rowId: id },
  })

  pending.feedbacks.splice(pending.feedbacks.indexOf(id), 1)

  if (!getResultData(result)) return

  toast.success(t('guestFeedbackSuccess'))
}
const send = async (guest: Pick<GuestItemFragment, 'rowId'>) => {
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
const sendLabel = computed(() =>
  getEventPublicationState(event) !== 'published'
    ? t('disabledReasonDraft')
    : contact.value?.accountId || contact.value?.emailAddress
      ? t('guestSend')
      : t('disabledReasonEmailAddressNone'),
)
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
  disabledReasonDraft: Veröffentliche die Veranstaltung, um Einladungen zu verschicken.
  copySuccess: Der Einladungslink wurde in die Zwischenablage kopiert.
  disabledReasonEmailAddressNone: Diesem Kontakt fehlt eine E-Mail-Adresse.
  guestDelete: Gast löschen
  guestFeedbackAccept: Als zugesagt markieren
  guestFeedbackCancel: Als abgesagt markieren
  guestFeedbackReset: Rückmeldung des Gasts verwenden
  guestFeedbackSuccess: Der Rückmeldestatus wurde aktualisiert.
  guestLink: Einladungslink kopieren
  guestSelect: Gast {name} auswählen
  guestSend: Einladung versenden
  guestView: Einladung anzeigen
  sendSuccess: Die Einladung wurde erfolgreich per E-Mail versandt.
  # postgresP0002: Die Einladung konnte nicht versandt werden! Möglicherweise hast du aktuell keinen Zugriff auf die notwendigen Daten. Versuche die Seite neu zu laden.
en:
  disabledReasonDraft: Publish the event to send invitations.
  copySuccess: The guest link has been copied to the clipboard.
  disabledReasonEmailAddressNone: This contact does not have an associated email address.
  guestDelete: Delete guest
  guestFeedbackAccept: Mark as accepted
  guestFeedbackCancel: Mark as declined
  guestFeedbackReset: Use the guest's feedback
  guestFeedbackSuccess: The feedback status was updated.
  guestLink: Copy invitation link
  guestSelect: Select guest {name}
  guestSend: Send invitation
  guestView: View invitation
  sendSuccess: The invitation was successfully sent by email.
  # postgresP0002: The guest could not be sent! You may not have access to the necessary data right now. Try reloading the page.
</i18n>
