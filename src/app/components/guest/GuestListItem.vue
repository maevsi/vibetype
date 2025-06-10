<template>
  <!-- <Loader :api="api" indicator="ping"> -->
  <tr
    v-if="contact"
    :class="{
      'animate-pulse': pending.deletions.includes(guest.id),
    }"
  >
    <LayoutTd class="max-w-0">
      <ContactPreview :contact="contact" :feedback="guest.feedback" />
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
            pending.sends.includes(guest.id)
          "
          @click="send(guest)"
        >
          <IHeroiconsPaperAirplane />
        </ButtonIcon>
        <ButtonIcon
          :aria-label="t('guestLink')"
          class="hidden md:block"
          @click="copyLink(guest)"
        >
          <IHeroiconsLink />
        </ButtonIcon>
        <AppDropdown>
          <AppDropdownItem
            class="md:hidden"
            :disabled="
              (!contact.accountId && !contact.emailAddress) ||
              pending.sends.includes(guest.id)
            "
            @select="send(guest)"
          >
            <IHeroiconsPaperAirplane />
            <span>
              {{
                contact.accountId || contact.emailAddress
                  ? t('guestSend')
                  : t('disabledReasonEmailAddressNone')
              }}
            </span>
          </AppDropdownItem>
          <AppDropdownItem class="md:hidden" @select="copyLink(guest)">
            <IHeroiconsLink />
            <span>
              {{ t('guestLink') }}
            </span>
          </AppDropdownItem>
          <AppDropdownItem
            v-if="event.accountByCreatedBy?.username"
            @select="
              navigateTo(
                localePath({
                  name: 'event-view-username-event_name',
                  params: {
                    event_name: event.slug,
                    username: event.accountByCreatedBy.username,
                  },
                  query: { ic: guest.id },
                }),
              )
            "
          >
            <IHeroiconsEye />
            <span>
              {{ t('guestView') }}
            </span>
          </AppDropdownItem>
          <AppDropdownItem
            :disabled="pending.deletions.includes(guest.id)"
            variant="destructive"
            @select="delete_(guest.id)"
          >
            <IHeroiconsTrash />
            <span>
              {{ t('guestDelete') }}
            </span>
          </AppDropdownItem>
          <template #trigger>
            <IHeroiconsEllipsisVertical />
          </template>
        </AppDropdown>
      </div>
    </LayoutTd>
  </tr>
  <!-- </Loader> -->
</template>

<script setup lang="ts">
import { useDeleteGuestByIdMutation } from '~~/gql/documents/mutations/guest/guestDelete'
import { useInviteMutation } from '~~/gql/documents/mutations/guest/invite'
import { getContactItem } from '~~/gql/documents/fragments/contactItem'
import type {
  EventItemFragment,
  GuestItemFragment,
} from '~~/gql/generated/graphql'

const { event, guest } = defineProps<{
  event: Pick<EventItemFragment, 'accountByCreatedBy' | 'slug'>
  guest: Pick<GuestItemFragment, 'contactByContactId' | 'feedback' | 'id'>
}>()

const { locale, t } = useI18n()
const localePath = useLocalePath()

// data
const pending = reactive({
  deletions: ref<string[]>([]),
  edits: ref<string[]>([]),
  sends: ref<string[]>([]),
})

// api data
const deleteGuestByIdMutation = useDeleteGuestByIdMutation()
const inviteMutation = useInviteMutation()
// const api = getApiData([deleteGuestByIdMutation, inviteMutation])

// methods
const copyLink = async (guest: Pick<GuestItemFragment, 'id'>) => {
  if (!import.meta.client) return

  await copyText(
    `${window.location.origin}${localePath(`guest-unlock`)}?ic=${guest.id}`,
  )

  await showToast({ title: t('copySuccess') })
}
const delete_ = async (id: string) => {
  pending.deletions.push(id)
  await deleteGuestByIdMutation.executeMutation({ id })
  pending.deletions.splice(pending.deletions.indexOf(id), 1)
}
const send = async (guest: Pick<GuestItemFragment, 'id'>) => {
  pending.sends.push(guest.id)

  const result = await inviteMutation.executeMutation({
    guestId: guest.id,
    language: locale.value,
  })

  pending.sends.splice(pending.sends.indexOf(guest.id), 1)

  if (result.error || !result.data) return

  await showToast({ title: t('sendSuccess') })
}

// computations
const contact = computed(() => getContactItem(guest.contactByContactId))
</script>

<i18n lang="yaml">
de:
  copySuccess: Der Einladungslink wurde in die Zwischenablage kopiert.
  disabledReasonEmailAddressNone: Diesem Kontakt fehlt eine E-Mail-Adresse.
  guestDelete: Einladung löschen
  guestLink: Einladungslink kopieren
  guestSend: Einladung versenden
  guestView: Einladung anzeigen
  sendSuccess: Die Einladung wurde erfolgreich per E-Mail versandt.
  # postgresP0002: Die Einladung konnte nicht versandt werden! Möglicherweise hast du aktuell keinen Zugriff auf die notwendigen Daten. Versuche die Seite neu zu laden.
en:
  copySuccess: The guest link has been copied to the clipboard.
  disabledReasonEmailAddressNone: This contact does not have an associated email address.
  guestDelete: Delete guest
  guestLink: Copy guest link
  guestSend: Send guest
  guestView: View guest
  sendSuccess: The guest was successfully sent by email.
  # postgresP0002: The guest could not be sent! You may not have access to the necessary data right now. Try reloading the page.
</i18n>
