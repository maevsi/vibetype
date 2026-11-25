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
      <p
        v-if="guest.feedbackReason"
        class="truncate text-body-small text-fg-2"
        :title="guest.feedbackReason"
      >
        {{ guest.feedbackReason }}
      </p>
      <div
        v-if="guest.companionCount || guest.companionCountRequested !== null"
        class="flex flex-wrap items-center gap-2 text-body-small"
      >
        <span v-if="guest.companionCount" class="text-fg-2">
          {{ t('companionCount', { count: guest.companionCount }) }}
        </span>
        <span
          v-if="guest.companionCountRequested !== null"
          class="rounded-full bg-surface-raised px-2 text-fg-1 ring-1 ring-line"
        >
          {{
            t('companionCountRequested', {
              count: guest.companionCountRequested,
            })
          }}
        </span>
      </div>
    </AppTableCell>
    <AppTableCell class="max-w-0">
      <div class="flex items-center justify-evenly gap-4 text-fg-1">
        <AppButton
          :aria-label="sendLabel"
          class="hidden md:block"
          :disabled="
            getEventPublicationState(event) !== 'published' ||
            !isSendable ||
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
              !isSendable ||
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
          <template v-if="guest.companionCountRequested !== null">
            <AppDropdownItem
              :disabled="pending.companions.includes(guest.rowId)"
              @select="
                setCompanionCount(guest.rowId, {
                  companionCount: guest.companionCountRequested,
                })
              "
            >
              <AppIconCheckCircleSolid />
              <span>
                {{ t('companionApprove') }}
              </span>
            </AppDropdownItem>
            <AppDropdownItem
              v-if="guest.companionCountRequested - guest.companionCount > 1"
              :disabled="pending.companions.includes(guest.rowId)"
              @select="isCompanionDrawerOpen = true"
            >
              <AppIconCheckCircleSolid />
              <span>
                {{ t('companionApproveFewer') }}
              </span>
            </AppDropdownItem>
            <AppDropdownItem
              :disabled="pending.companions.includes(guest.rowId)"
              @select="
                setCompanionCount(guest.rowId, {
                  companionCountRequested: null,
                })
              "
            >
              <AppIconXCircleSolid />
              <span>
                {{ t('companionReject') }}
              </span>
            </AppDropdownItem>
          </template>
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
  <GuestCompanionDrawer
    v-if="guest.companionCountRequested !== null"
    v-model:open="isCompanionDrawerOpen"
    :is-pending="pending.companions.includes(guest.rowId)"
    :maximum="guest.companionCountRequested - 1"
    :minimum="guest.companionCount + 1"
    @confirm="onCompanionConfirm"
  />
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
  GuestPatch,
} from '~~/gql/generated/graphql'

const { event, guest } = defineProps<{
  event: Pick<EventItemFragment, 'accountByCreatedBy' | 'publishedAt' | 'slug'>
  guest: Pick<
    GuestItemFragment,
    | 'companionCount'
    | 'companionCountRequested'
    | 'contactByContactId'
    | 'feedback'
    | 'feedbackOverride'
    | 'feedbackReason'
    | 'rowId'
  >
}>()

const alertErrorDetails = useAlertErrorDetails()
const { defaultLocale, locale, t } = useI18n()
const localePath = useLocalePath()
const { copy } = useCopy()
const { shift } = useMagicKeys()

const isSelected = defineModel<boolean>('selected')

// data
const isCompanionDrawerOpen = ref(false)
const isDeleteDrawerOpen = ref(false)
const pending = reactive({
  companions: ref<string[]>([]),
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
          companionCount
          companionCountRequested
          eventByEventId {
            guestCount
            id
          }
          feedbackOverride
          id
          rowId
        }
      }
    }
  `),
)

const updateGuestCompanionByRowIdMutation = useMutation(
  graphql(`
    mutation UpdateGuestByRowIdCompanion($input: UpdateGuestByRowIdInput!) {
      updateGuestByRowId(input: $input) {
        guest {
          companionCount
          companionCountRequested
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
const setCompanionCount = async (
  id: string,
  guestPatch: Pick<GuestPatch, 'companionCount' | 'companionCountRequested'>,
) => {
  pending.companions.push(id)

  const result = await updateGuestCompanionByRowIdMutation.executeMutation({
    input: { guestPatch, rowId: id },
  })

  pending.companions.splice(pending.companions.indexOf(id), 1)

  if (result.error) {
    alertErrorDetails({
      errors: [result.error],
      postgresErrorMap: { postgresVTGCM: t('companionErrorSeats') },
    })
    return false
  }

  if (!getResultData(result)) return false

  toast.success(t('companionSuccess'))
  return true
}
const onCompanionConfirm = async (companionCount: number) => {
  if (await setCompanionCount(guest.rowId, { companionCount }))
    isCompanionDrawerOpen.value = false
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
  () => !!(contact.value?.accountId || contact.value?.emailAddresses?.length),
)
const isSendable = computed(
  () => isEmailable.value || !!contact.value?.phoneNumber,
)
const sendLabel = computed(() =>
  getEventPublicationState(event) !== 'published'
    ? t('disabledReasonDraft')
    : isEmailable.value
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
  companionApprove: Weitere Gäste zusagen
  companionApproveFewer: Weniger weitere Gäste zusagen
  companionCount: '+{count}'
  companionCountRequested: '+{count} angefragt'
  companionErrorSeats: Es sind nicht genug Plätze frei. Erhöhe das Limit in den Veranstaltungseinstellungen oder sage weniger Gäste zu.
  companionReject: Weitere Gäste ablehnen
  companionSuccess: Die Anfrage für weitere Gäste wurde bearbeitet.
  disabledReasonDraft: Veröffentliche die Veranstaltung, um Einladungen zu verschicken.
  copySuccess: Der Einladungslink wurde in die Zwischenablage kopiert.
  disabledReasonContactWayNone: Diesem Kontakt fehlen E-Mail-Adresse und Telefonnummer.
  guestDelete: Gast löschen
  guestFeedbackAccept: Als zugesagt markieren
  guestFeedbackCancel: Als abgesagt markieren
  guestFeedbackReset: Rückmeldung des Gasts verwenden
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
  companionApprove: Approve additional guests
  companionApproveFewer: Approve fewer additional guests
  companionCount: '+{count}'
  companionCountRequested: '+{count} requested'
  companionErrorSeats: Not enough seats are left. Raise the limit in the event settings or approve fewer guests.
  companionReject: Reject additional guests
  companionSuccess: The request for additional guests was processed.
  disabledReasonDraft: Publish the event to send invitations.
  copySuccess: The guest link has been copied to the clipboard.
  disabledReasonContactWayNone: This contact has neither an email address nor a phone number.
  guestDelete: Delete guest
  guestFeedbackAccept: Mark as accepted
  guestFeedbackCancel: Mark as declined
  guestFeedbackReset: Use the guest's feedback
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
