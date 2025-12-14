<template>
  <LoaderIndicatorPing v-if="api.isFetching" />
  <AppError
    v-else-if="!guest"
    :error="{ message: t('errorGuestMissing'), statusCode: 404 }"
  />
  <AppError
    v-else-if="!event || !event.accountByCreatedBy"
    :error="{ message: t('errorEventMissing'), statusCode: 404 }"
  />
  <AppError
    v-else-if="!account"
    :error="{ message: t('errorAccountMissing'), statusCode: 404 }"
  />
  <AppContent v-else class="flex flex-col gap-4">
    <CardStateInfo
      v-if="
        account.id === store.signedInAccountId &&
        guest.contactByContactId?.accountId !== store.signedInAccountId
      "
      class="flex flex-col gap-2"
    >
      {{ t('invitationViewFor', { name: contactName }) }}
      <ButtonColored
        :aria-label="t('invitationSelectionClear')"
        :to="
          localePath({
            name: 'event-view-username-event_name-guest',
            params: {
              event_name: event.slug,
              username: account.username,
            },
          })
        "
      >
        {{ t('invitationSelectionClear') }}
        <template #prefix>
          <AppIconArrowLeft />
        </template>
      </ButtonColored>
    </CardStateInfo>
    <div v-if="contact" class="flex flex-col gap-2">
      <div class="flex items-center justify-between gap-2">
        <div>
          <p class="mb-2 text-2xl font-bold">
            {{
              t('greeting', {
                usernameString: contactName ? ' ' + contactName : '',
              })
            }}
          </p>
          <p>{{ t('greetingDescription') }}</p>
        </div>
        <ButtonColored
          v-if="guest.feedback === 'ACCEPTED'"
          :aria-label="t('qrCodeShow')"
          @click="qrCodeShow"
        >
          {{ t('qrCodeShow') }}
          <template #prefix>
            <AppIconQrCode />
          </template>
        </ButtonColored>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <div>
        <div class="relative">
          <EventHeroImage :event />
          <div
            class="absolute inset-x-0 top-0 flex items-center justify-between p-2"
          >
            <div />
            <div>
              <AppButtonIcon
                :aria-label="t('iCalDownload')"
                class="flex size-12 items-center justify-center rounded-full bg-(--semantic-base-surface-1)"
                @click="downloadIcal"
              >
                <AppIconArrowDownTray :title="t('iCalDownload')" />
              </AppButtonIcon>
              <!-- TODO: share & favorite button -->
              <template
                v-if="
                  store.signedInAccountId &&
                  event.createdBy !== store.signedInAccountId
                "
              >
                <AppDropdown>
                  <AppDropdownItem
                    variant="destructive"
                    @select="isOpenReportDrawer = true"
                  >
                    {{ t('report') }}
                  </AppDropdownItem>
                  <template #trigger>
                    <span
                      class="flex size-10.5 items-center justify-center rounded-full bg-(--semantic-base-surface-1)"
                    >
                      <AppIconMoreVertical />
                    </span>
                  </template>
                </AppDropdown>
                <EventReportDrawer
                  v-model:open="isOpenReportDrawer"
                  :account-id="store.signedInAccountId"
                  :event
                />
              </template>
            </div>
          </div>
        </div>
        <Card class="flex flex-col items-stretch gap-6 rounded-t-none">
          <div
            class="flex flex-col items-baseline justify-center md:flex-row md:gap-2"
          >
            <h1 class="m-0">
              {{ event.name }}
            </h1>
            <EventOwner link :username="event.accountByCreatedBy.username" />
          </div>
          <div class="flex flex-col gap-2">
            <EventDashletStart :contact :event :guest />
            <EventDashletDuration :event />
            <EventDashletLocation :address :event />
            <EventDashletVisibility :event with-text />
            <!-- <EventDashletAttendanceType :event />
            <EventDashletLink :event /> -->
          </div>
          <AppMap
            v-if="positionInitial"
            class="h-42 rounded-xl"
            :events
            :position-initial
          />
        </Card>
      </div>
      <div
        class="flex flex-col items-center gap-2"
        :class="guest.feedback === 'ACCEPTED' ? 'col-span-3' : 'col-span-6'"
      >
        <div class="flex items-center justify-center gap-4">
          <ButtonColored
            v-if="guest.feedback === null || guest.feedback === 'CANCELED'"
            :aria-label="
              event.accountByCreatedBy.username !== store.signedInUsername
                ? t('invitationAccept')
                : t('invitationAcceptAdmin', {
                    name: contactName,
                  })
            "
            :disabled="isUpdatingAccept"
            @click="accept"
          >
            <span>
              {{
                event.accountByCreatedBy.username !== store.signedInUsername
                  ? t('invitationAccept')
                  : t('invitationAcceptAdmin', {
                      name: contactName,
                    })
              }}
            </span>
            <template #prefix>
              <LoaderIndicatorSpinner v-if="isUpdatingAccept" class="size-8" />
              <AppIconCheckCircleSolid v-else class="shrink-0" />
            </template>
          </ButtonColored>
          <div
            v-if="guest.feedback === 'ACCEPTED'"
            class="flex items-center font-semibold text-green-600 dark:text-green-500"
          >
            <AppIconCheckCircleSolid
              class="mr-2 shrink-0"
              :title="t('invitationAccepted')"
            />
            <span>
              {{
                event.accountByCreatedBy.username !== store.signedInUsername
                  ? t('invitationAccepted')
                  : t('invitationAcceptedAdmin', {
                      name: contactName,
                    })
              }}
            </span>
          </div>
          <ButtonColored
            v-if="guest.feedback === null || guest.feedback === 'ACCEPTED'"
            :aria-label="
              event.accountByCreatedBy.username !== store.signedInUsername
                ? t('invitationCancel')
                : t('invitationCancelAdmin', {
                    name: contactName,
                  })
            "
            :disabled="isUpdatingCancel"
            @click="cancel"
          >
            <span>
              {{
                event.accountByCreatedBy.username !== store.signedInUsername
                  ? t('invitationCancel')
                  : t('invitationCancelAdmin', {
                      name: contactName,
                    })
              }}
            </span>
            <template #prefix>
              <LoaderIndicatorSpinner v-if="isUpdatingCancel" class="size-8" />
              <AppIconXCircleSolid v-else class="shrink-0" />
            </template>
          </ButtonColored>
          <div
            v-if="guest.feedback === 'CANCELED'"
            class="flex items-center font-semibold text-(--semantic-critic-text)"
          >
            <AppIconXCircleSolid
              class="mr-2 shrink-0"
              :title="t('invitationCanceled')"
            />
            <span>
              {{
                event.accountByCreatedBy.username !== store.signedInUsername
                  ? t('invitationCanceled')
                  : t('invitationCanceledAdmin', {
                      name: contactName,
                    })
              }}
            </span>
          </div>
        </div>
      </div>
      <Card v-if="eventDescriptionTemplate">
        <!-- eslint-disable vue/no-v-html -->
        <LayoutProse class="w-full">
          <div v-html="eventDescriptionTemplate" />
        </LayoutProse>
        <!-- eslint-enable vue/no-v-html -->
      </Card>
    </div>
    <Modal id="ModalGuestQrCode">
      <div v-if="guest" class="flex flex-col items-center gap-2 pb-4">
        <QrcodeVue
          id="qrCode"
          class="bg-white p-4"
          :value="guest.id"
          :size="200"
        />
        <FormInputStateInfo>
          {{ t('hintQrCode') }}
        </FormInputStateInfo>
      </div>
      <template #footer>
        <ButtonColored
          :aria-label="t('print')"
          variant="secondary"
          @click="print"
        >
          {{ t('print') }}
          <template #prefix>
            <AppIconPrinter />
          </template>
        </ButtonColored>
        <ButtonColored
          :aria-label="t('close')"
          @click="store.modalRemove('ModalGuestQrCode')"
        >
          {{ t('close') }}
          <template #prefix>
            <AppIconXMark />
          </template>
        </ButtonColored>
      </template>
    </Modal>
  </AppContent>
</template>

<script setup lang="ts">
import { useQuery } from '@urql/vue'
import downloadJs from 'downloadjs'
import DOMPurify from 'isomorphic-dompurify'
import mustache from 'mustache'
import prntr from 'prntr'
import QrcodeVue from 'qrcode.vue'

import { useUpdateGuestByIdMutation } from '~~/gql/documents/mutations/guest/guestUpdateById'
import { InvitationFeedback } from '~~/gql/generated/graphql'
import type { GuestPatch } from '~~/gql/generated/graphql'
import { graphql } from '~~/gql/generated'
import { useEventUnlockMutation } from '~~/gql/documents/mutations/event/eventUnlock'

// compiler
definePageMeta({
  layout: 'default-no-header',
})

const { t } = useI18n()
const store = useStore()
const route = useRoute('guest-view-id___en')
const localePath = useLocalePath()
const updateGuestByIdMutation = useUpdateGuestByIdMutation()

const isOpenReportDrawer = ref<boolean>()

const eventUnlockMutation = useEventUnlockMutation()
const result = await eventUnlockMutation.executeMutation({
  guestId: route.params.id,
})

const { jwtStore } = await useJwtStore()
const alertError = useAlertError()
try {
  await jwtStore(
    result.data?.eventUnlock?.eventUnlockResponse?.jwt || undefined,
  )
} catch (error) {
  alertError({
    ...(error instanceof Error ? { error } : {}),
    messageI18n: t('jwtStoreFail'),
  })
}

// api data
const eventQuery = useQuery({
  query: graphql(`
    query GuestEvent($id: UUID!) {
      guestById(id: $id) {
        contactByContactId {
          accountId
          createdBy
          firstName
          id
          lastName
          nickname
          nodeId
        }
        contactId
        eventByEventId {
          accountByCreatedBy {
            id
            username
          }
          addressByAddressId {
            id
            location {
              latitude
              longitude
            }
            name
          }
          createdBy
          description
          end
          id
          isArchived
          isInPerson
          isRemote
          name
          nodeId
          slug
          start
          url
          visibility
        }
        eventId
        feedback
        id
        nodeId
      }
    }
  `),
  variables: {
    id: route.params.id,
  },
})
const guest = computed(() => eventQuery.data.value?.guestById)
const event = computed(() => guest.value?.eventByEventId)
const events = computed(() => (event.value ? [event.value] : []))
const address = computed(() => event.value?.addressByAddressId)
const account = computed(() => event.value?.accountByCreatedBy)
const api = await useApiData([eventQuery])

// methods
const isUpdatingAccept = ref<boolean>()
const accept = async () => {
  if (!guest.value) return

  isUpdatingAccept.value = true

  try {
    await update(guest.value.id, {
      feedback: InvitationFeedback.Accepted,
    })
  } finally {
    isUpdatingAccept.value = false
  }
}
const isUpdatingCancel = ref<boolean>()
const cancel = async () => {
  if (!guest.value) return

  isUpdatingCancel.value = true
  try {
    await update(guest.value.id, {
      feedback: InvitationFeedback.Canceled,
    })
  } finally {
    isUpdatingCancel.value = false
  }
}
const downloadIcal = async () => {
  if (!event.value) return

  const response = await useFetch<string>('/api/model/event/ical', {
    body: {
      contact,
      event,
      guest,
    },
    method: 'POST',
  })
  const fileName = `${event.value.accountByCreatedBy ? `${event.value.accountByCreatedBy.username}_` : ''}${event.value.slug}.ics`

  if (!response.data.value) {
    alertError(t('iCalFetchError')) // TODO: add suggestion (https://github.com/maevsi/vibetype/issues/903) })
    return
  }

  downloadJs(
    new Blob([response.data.value]), // Blob necessary for charset utf-8
    fileName,
    'text/calendar',
  )
}
const print = () => {
  prntr({
    printable: 'qrCode',
    type: 'html',
  })
}
const qrCodeShow = () => {
  store.modals.push({ id: 'ModalGuestQrCode' })
}
const update = async (id: string, guestPatch: GuestPatch) => {
  const result = await updateGuestByIdMutation.executeMutation({
    id,
    guestPatch,
  })

  if (result.error || !result.data) return

  toast.success(t('success'))
}

// computations
const eventDescriptionTemplate = computed(() => {
  if (!event.value?.description) return

  return DOMPurify.sanitize(
    mustache.render(event.value.description, {
      contact: contact.value,
      event,
      invitation: guest.value,
    }),
    { ADD_ATTR: ['target'] },
  )
})
const contact = computed(() => guest.value?.contactByContactId)
const contactName = computed(() =>
  contact.value ? getContactName({ contact: contact.value }) : undefined,
)

// map
const positionInitial = computed(() =>
  event.value?.addressByAddressId?.location?.latitude &&
  event.value?.addressByAddressId?.location?.longitude
    ? {
        latitude: event.value.addressByAddressId.location.latitude,
        longitude: event.value.addressByAddressId.location.longitude,
        zoomLevel: 18,
      }
    : undefined,
)

// page
const description = computed(() =>
  event.value?.description
    ? getStringTruncated({
        string: getTextFromHtml(event.value.description),
        limit: 200,
        isLastWordIncluded: true,
      })
    : undefined,
)
const title = computed(() => {
  if (api.value.isFetching) return t('globalLoading')
  if (!event.value) {
    showAppError({ statusCode: 404, message: 'Event unavailable' })
    return
  }

  return event.value.name
})
useHeadDefault({
  description,
  title,
})
defineOgImageComponent(
  'Event',
  {
    description,
  },
  {
    alt: t('ogImageAlt'),
  },
)
</script>

<i18n lang="yaml">
de:
  close: Schließen
  errorAccountMissing: Nutzerkonto nicht verfügbar
  errorEventMissing: Veranstaltung nicht verfügbar
  errorGuestMissing: Gast nicht verfügbar
  greeting: Hey{usernameString}!
  greetingDescription: Du wurdest zu folgender Veranstaltung eingeladen.
  hintQrCode: Dieses Bild ist deine Zugangsberechtigung für die Veranstaltung
  iCalDownload: Als Kalendereintrag herunterladen
  # iCalHint: Die heruntergeladene Datei kann dann mit deiner Kalender-Anwendung geöffnet werden.
  iCalFetchError: iCal-Daten konnten nicht geladen werden!
  invitationAccept: Einladung annehmen
  invitationAcceptAdmin: Einladung im Namen von {name} annehmen
  invitationAccepted: Einladung angenommen
  invitationAcceptedAdmin: Einladung im Namen von {name} angenommen
  invitationCancel: Einladung ablehnen
  invitationCancelAdmin: Einladung im Namen von {name} ablehnen
  invitationCanceled: Einladung abgelehnt
  invitationCanceledAdmin: Einladung im Namen von {name} abgelehnt
  invitationSelectionClear: Zurück zur Einladungsübersicht
  invitationViewFor: Du schaust dir die Einladung für {name} an. Alle Personen, die den Link zu dieser Seite bzw. die ID dieser Einladung kennen, können auf diese Einladung zugreifen und mit ihr interagieren.
  jwtStoreFail: Fehler beim Speichern der Authentifizierungsdaten!
  ogImageAlt: Das Vorschaubild für die Veranstaltung.
  print: Drucken
  qrCodeShow: Check-in-Code anzeigen
  report: Veranstaltung melden
  success: Deine Eingabe wurde erfolgreich gespeichert.
en:
  close: Close
  errorAccountMissing: Account not available
  errorEventMissing: Event not available
  errorGuestMissing: Guest not available
  greeting: Hey{usernameString}!
  greetingDescription: "You've been invited to the following event."
  hintQrCode: This picture is your access authorization for the event
  iCalDownload: Download for your calendar
  # iCalHint: You can open the downloaded file in your calendar app.
  iCalFetchError: Could not get iCal data!
  invitationAccept: Accept invitation
  invitationAcceptAdmin: Accept invitation on behalf of {name}
  invitationAccepted: Invitation accepted
  invitationAcceptedAdmin: Invitation accepted on behalf of {name}
  invitationCancel: Decline invitation
  invitationCancelAdmin: Decline invitation on behalf of {name}
  invitationCanceled: Invitation declined
  invitationCanceledAdmin: Invitation declined on behalf of {name}
  invitationSelectionClear: Back to the invitation overview
  invitationViewFor: You're viewing the invitation for {name}. Anyone knowing the link to this page or this invitation's id can access this invitation and interact with it.
  jwtStoreFail: Failed to store the authentication data!
  ogImageAlt: The event's preview image.
  print: Print
  qrCodeShow: Show check in code
  report: Report event
  success: Your input was saved succesfully.
</i18n>
