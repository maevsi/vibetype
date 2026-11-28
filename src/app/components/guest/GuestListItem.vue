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
    <div class="flex min-w-0 flex-1 flex-col gap-1">
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
    </div>
    <div class="flex shrink-0 items-center gap-4 text-fg-1">
      <AppButton
        :aria-label="shareLabel"
        class="hidden md:block"
        :disabled="isDraft"
        size="none"
        variant="ghost"
        @click="void share(guest)"
      >
        <AppIconPaperAirplane />
      </AppButton>
      <AppDropdown>
        <AppDropdownItem
          class="md:hidden"
          :disabled="isDraft"
          @select="share(guest)"
        >
          <AppIconPaperAirplane />
          <span>
            {{ shareLabel }}
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
          <span class="sr-only">{{ t('actions', { name: contactName }) }}</span>
        </template>
      </AppDropdown>
    </div>
  </AppListItem>
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
const isCompanionDrawerOpen = ref(false)
const isDeleteDrawerOpen = ref(false)
const pending = reactive({
  companions: ref<string[]>([]),
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
  const emailAddress = contact.value?.emailAddresses?.[0]

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
const isDraft = computed(() => getEventPublicationState(event) !== 'published')
const shareLabel = computed(() =>
  isDraft.value ? t('disabledReasonDraft') : t('guestShare'),
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
  companionApprove: Weitere Gäste zusagen
  companionApproveFewer: Weniger weitere Gäste zusagen
  companionCount: '+{count}'
  companionCountRequested: '+{count} angefragt'
  companionErrorSeats: Es sind nicht genug Plätze frei. Erhöhe das Limit in den Veranstaltungseinstellungen oder sage weniger Gäste zu.
  companionReject: Weitere Gäste ablehnen
  companionSuccess: Die Anfrage für weitere Gäste wurde bearbeitet.
  contactEdit: Kontakt bearbeiten
  disabledReasonDraft: Veröffentliche die Veranstaltung, um Einladungen zu teilen.
  copySuccess: Der Einladungslink wurde in die Zwischenablage kopiert.
  guestDelete: Gast löschen
  guestFeedbackAccept: Als zugesagt markieren
  guestFeedbackCancel: Als abgesagt markieren
  guestFeedbackReset: Rückmeldung des Gasts verwenden
  guestFeedbackSuccess: Der Rückmeldestatus wurde aktualisiert.
  guestLink: Einladungslink kopieren
  guestSelect: Gast {name} auswählen
  guestShare: Einladung teilen
  guestView: Einladung anzeigen
  shareSubject: Du bist eingeladen!
  shareText: 'Du bist eingeladen! Hier ist Deine Einladung:'
en:
  actions: Actions for {name}
  companionApprove: Approve additional guests
  companionApproveFewer: Approve fewer additional guests
  companionCount: '+{count}'
  companionCountRequested: '+{count} requested'
  companionErrorSeats: Not enough seats are left. Raise the limit in the event settings or approve fewer guests.
  companionReject: Reject additional guests
  companionSuccess: The request for additional guests was processed.
  contactEdit: Edit contact
  disabledReasonDraft: Publish the event to share invitations.
  copySuccess: The guest link has been copied to the clipboard.
  guestDelete: Delete guest
  guestFeedbackAccept: Mark as accepted
  guestFeedbackCancel: Mark as declined
  guestFeedbackReset: Use the guest's feedback
  guestFeedbackSuccess: The feedback status was updated.
  guestLink: Copy invitation link
  guestSelect: Select guest {name}
  guestShare: Share invitation
  guestView: View invitation
  shareSubject: You're invited!
  shareText: "You're invited! Here is your invitation:"
</i18n>
