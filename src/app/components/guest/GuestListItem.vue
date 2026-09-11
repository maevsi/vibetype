<template>
  <tr
    v-if="contact"
    :class="{
      'animate-pulse': pending.deletions.includes(guest.rowId),
    }"
  >
    <LayoutTd class="max-w-0">
      <ContactPreview :contact :feedback="guest.feedback" />
    </LayoutTd>
    <LayoutTd class="max-w-0">
      <div
        class="text-text-dark dark:text-text-bright flex items-center justify-evenly gap-4"
      >
        <ButtonIcon
          :aria-label="
            contact.accountId || contact.emailAddress
              ? t('guestSend')
              : t('disabledReasonEmailAddressNone')
          "
          class="hidden md:block"
          :disabled="
            (!contact.accountId && !contact.emailAddress) ||
            pending.sends.includes(guest.rowId)
          "
          @click="send(guest)"
        >
          <AppIconPaperAirplane />
        </ButtonIcon>
        <ButtonIcon
          :aria-label="t('guestLink')"
          class="hidden md:block"
          @click="copyLink(guest)"
        >
          <AppIconLink />
        </ButtonIcon>
        <AppDropdown>
          <AppDropdownItem
            class="md:hidden"
            :disabled="
              (!contact.accountId && !contact.emailAddress) ||
              pending.sends.includes(guest.rowId)
            "
            @select="send(guest)"
          >
            <AppIconPaperAirplane />
            <span>
              {{
                contact.accountId || contact.emailAddress
                  ? t('guestSend')
                  : t('disabledReasonEmailAddressNone')
              }}
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
          </template>
        </AppDropdown>
      </div>
    </LayoutTd>
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
import type {
  EventItemFragment,
  GuestItemFragment,
} from '~~/gql/generated/graphql'

const { event, guest } = defineProps<{
  event: Pick<EventItemFragment, 'accountByCreatedBy' | 'slug'>
  guest: Pick<GuestItemFragment, 'contactByContactId' | 'feedback' | 'rowId'>
}>()

const { locale, t } = useI18n()
const localePath = useLocalePath()
const { copy } = useCopy()
const { shift } = useMagicKeys()

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
        clientMutationId
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
const copyLink = async (guest: Pick<GuestItemFragment, 'rowId'>) => {
  if (!import.meta.client) return

  await copy(
    `${window.location.origin}${localePath({
      name: 'guest-view-id',
      params: {
        id: guest.rowId,
      },
    })}`,
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
const setFeedback = async (id: string, feedback: InvitationFeedback) => {
  pending.feedbacks.push(id)

  const result = await updateGuestByRowIdMutation.executeMutation({
    input: { guestPatch: { feedback }, rowId: id },
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
const contact = computed(() => getContactItem(guest.contactByContactId))
</script>

<i18n lang="yaml">
de:
  copySuccess: Der Einladungslink wurde in die Zwischenablage kopiert.
  disabledReasonEmailAddressNone: Diesem Kontakt fehlt eine E-Mail-Adresse.
  guestDelete: Gast löschen
  guestFeedbackAccept: Als zugesagt markieren
  guestFeedbackCancel: Als abgesagt markieren
  guestFeedbackSuccess: Der Rückmeldestatus wurde aktualisiert.
  guestLink: Einladungslink kopieren
  guestSend: Einladung versenden
  guestView: Einladung anzeigen
  sendSuccess: Die Einladung wurde erfolgreich per E-Mail versandt.
  # postgresP0002: Die Einladung konnte nicht versandt werden! Möglicherweise hast du aktuell keinen Zugriff auf die notwendigen Daten. Versuche die Seite neu zu laden.
en:
  copySuccess: The guest link has been copied to the clipboard.
  disabledReasonEmailAddressNone: This contact does not have an associated email address.
  guestDelete: Delete guest
  guestFeedbackAccept: Mark as accepted
  guestFeedbackCancel: Mark as declined
  guestFeedbackSuccess: The feedback status was updated.
  guestLink: Copy invitation link
  guestSend: Send invitation
  guestView: View invitation
  sendSuccess: The invitation was successfully sent by email.
  # postgresP0002: The guest could not be sent! You may not have access to the necessary data right now. Try reloading the page.
</i18n>
