<template>
  <Loader :api>
    <AppError
      v-if="!guest"
      :error="{ message: t('errorGuestMissing'), status: 404 }"
    />
    <AppError
      v-else-if="!event || !event.accountByCreatedBy"
      :error="{ message: t('errorEventMissing'), status: 404 }"
    />
    <AppError
      v-else-if="!account"
      :error="{ message: t('errorAccountMissing'), status: 404 }"
    />
    <div v-else class="flex flex-col gap-4">
      <CardStateInfo v-if="isOrganizerPreview" class="flex flex-col gap-2">
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
            v-if="guest.feedback === InvitationFeedback.Accepted"
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
                <ButtonIcon
                  :aria-label="t('iCalDownload')"
                  class="flex size-12 items-center justify-center rounded-full bg-(--semantic-base-surface-1)"
                  @click="downloadIcal"
                >
                  <AppIconArrowDownTray :title="t('iCalDownload')" />
                </ButtonIcon>
                <!-- TODO: share & favorite button (https://github.com/maevsi/vibetype/issues/2480) -->
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
          :class="
            guest.feedback === InvitationFeedback.Accepted
              ? 'col-span-3'
              : 'col-span-6'
          "
        >
          <div
            v-if="isOrganizerPreview"
            class="flex items-center justify-center gap-4"
          >
            <div
              v-if="guest.feedback === InvitationFeedback.Accepted"
              class="flex items-center font-semibold text-(--semantic-accent-text)"
            >
              <AppIconCheckCircleSolid class="mr-2 shrink-0" />
              <span>
                {{ t('invitationAcceptedAdmin', { name: contactName }) }}
              </span>
            </div>
            <div
              v-else-if="guest.feedback === InvitationFeedback.Canceled"
              class="flex items-center font-semibold text-(--semantic-critic-text)"
            >
              <AppIconXCircleSolid class="mr-2 shrink-0" />
              <span>
                {{ t('invitationCanceledAdmin', { name: contactName }) }}
              </span>
            </div>
            <div v-else class="flex items-center font-semibold">
              <span>{{
                t('invitationPendingAdmin', { name: contactName })
              }}</span>
            </div>
          </div>
          <div v-else class="flex items-center justify-center gap-4">
            <ButtonColored
              v-if="
                guest.feedback === null ||
                guest.feedback === InvitationFeedback.Canceled
              "
              :aria-label="t('invitationAccept')"
              :loading="isUpdatingAccept"
              @click="accept"
            >
              <span>{{ t('invitationAccept') }}</span>
              <template #prefix>
                <AppIconCheckCircleSolid class="shrink-0" />
              </template>
            </ButtonColored>
            <div
              v-if="guest.feedback === InvitationFeedback.Accepted"
              class="flex items-center font-semibold text-(--semantic-accent-text)"
            >
              <AppIconCheckCircleSolid
                class="mr-2 shrink-0"
                :title="t('invitationAccepted')"
              />
              <span>{{ t('invitationAccepted') }}</span>
            </div>
            <ButtonColored
              v-if="
                guest.feedback === null ||
                guest.feedback === InvitationFeedback.Accepted
              "
              :aria-label="t('invitationCancel')"
              :loading="isUpdatingCancel"
              @click="cancel"
            >
              <span>{{ t('invitationCancel') }}</span>
              <template #prefix>
                <AppIconXCircleSolid class="shrink-0" />
              </template>
            </ButtonColored>
            <div
              v-if="guest.feedback === InvitationFeedback.Canceled"
              class="flex items-center font-semibold text-(--semantic-critic-text)"
            >
              <AppIconXCircleSolid
                class="mr-2 shrink-0"
                :title="t('invitationCanceled')"
              />
              <span>{{ t('invitationCanceled') }}</span>
            </div>
          </div>
        </div>
        <Card v-if="eventDescriptionHtml">
          <!-- eslint-disable vue/no-v-html -->
          <LayoutProse class="w-full">
            <div v-html="eventDescriptionHtml" />
          </LayoutProse>
          <!-- eslint-enable vue/no-v-html -->
        </Card>
      </div>
      <Modal v-model="isModalGuestQrCodeOpen">
        <div v-if="guest" class="flex flex-col items-center gap-2 pb-4">
          <QrcodeVue id="qrCode" :margin="4" :size="232" :value="guest.rowId" />
          <p class="text-sm text-(--semantic-base-text-secondary)">
            {{ t('hintQrCode') }}
          </p>
        </div>
        <template #footer>
          <ButtonColored
            v-if="isTicketShareable"
            :aria-label="t('ticketShare')"
            :disabled="!ticketFile"
            :loading="isTicketFetching"
            variant="secondary"
            @click="ticketShare"
          >
            {{ t('ticketShare') }}
            <template #prefix>
              <AppIconShare />
            </template>
          </ButtonColored>
          <!-- the iOS app's share sheet covers saving and printing, whereas Android's usually lacks a print target -->
          <ButtonColored
            v-if="!isIos"
            :aria-label="t('ticketDownload')"
            :disabled="!ticketFile"
            :loading="isTicketFetching"
            variant="secondary"
            @click="ticketDownload"
          >
            {{ t('ticketDownload') }}
            <template #prefix>
              <AppIconArrowDownTray />
            </template>
          </ButtonColored>
          <ButtonColored
            :aria-label="t('close')"
            @click="isModalGuestQrCodeOpen = false"
          >
            {{ t('close') }}
            <template #prefix>
              <AppIconXMark />
            </template>
          </ButtonColored>
        </template>
      </Modal>
    </div>
  </Loader>
</template>

<script setup lang="ts">
import { useMutation } from '@urql/vue'
import downloadJs from 'downloadjs'
import { sanitize } from 'isomorphic-dompurify'
import QrcodeVue from 'qrcode.vue'

import { InvitationFeedback } from '~~/gql/generated/graphcache'
import type { GuestPatch } from '~~/gql/generated/graphql'
import { graphql } from '~~/gql/generated'

const { isIos } = usePlatform()
const { locale, t } = useI18n()
const route = useRoute()
const localePath = useLocalePath()
const updateGuestByRowIdMutation = useMutation(
  graphql(`
    mutation UpdateGuestByRowId($input: UpdateGuestByRowIdInput!) {
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
const store = useStore()

const isModalGuestQrCodeOpen = ref<boolean>()
const isOpenReportDrawer = ref<boolean>()
const alertError = useAlertError()

// api data
const jwtUpdateGuestAdd = import.meta.server
  ? useJwtUpdateGuestAdd({ guestId: route.params.id })
  : undefined
const jwt = jwtUpdateGuestAdd ? await jwtUpdateGuestAdd() : undefined
const eventQuery = useApiQuery({
  query: graphql(`
    query GuestEvent($id: UUID!) {
      guestByRowId(rowId: $id) {
        contactByContactId {
          accountByAccountId {
            id
            rowId
            username
          }
          createdBy
          firstName
          id
          lastName
          nickname
          rowId
        }
        eventByEventId {
          accountByCreatedBy {
            id
            rowId
            username
          }
          addressByAddressId {
            id
            location {
              latitude
              longitude
            }
            name
            rowId
          }
          createdBy
          description
          end
          eventCategoryMappingsByEventId(first: 1, orderBy: PRIMARY_KEY_ASC) {
            nodes {
              categoryId
              eventCategoryByCategoryId {
                id
                name
              }
              id
            }
          }
          eventFormatMappingsByEventId(first: 1, orderBy: PRIMARY_KEY_ASC) {
            nodes {
              eventFormatByFormatId {
                id
                name
              }
              formatId
              id
            }
          }
          id
          isArchived
          isInPerson
          isRemote
          name
          rowId
          slug
          start
          url
          visibility
        }
        feedback
        id
        rowId
      }
    }
  `),
  variables: {
    id: route.params.id,
  },
  ...(jwt
    ? {
        context: {
          fetchOptions: {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          },
        },
      }
    : {}),
})

const guest = computed(() => eventQuery.data.value?.guestByRowId)
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
    await update(guest.value.rowId, {
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
    await update(guest.value.rowId, {
      feedback: InvitationFeedback.Canceled,
    })
  } finally {
    isUpdatingCancel.value = false
  }
}
const { $csrfFetch } = useNuxtApp()
const downloadIcal = async () => {
  if (!event.value) return

  const response = await $csrfFetch('/api/model/event/ical', {
    body: {
      event: event.value,
      guest: guest.value,
    },
    method: 'POST',
  })
  const fileName = `${event.value.accountByCreatedBy ? `${event.value.accountByCreatedBy.username}_` : ''}${event.value.slug}.ics`

  if (!response.data.value) {
    alertError(t('iCalFetchError'))
    return
  }

  downloadJs(
    new Blob([response.data.value]), // Blob necessary for charset utf-8
    fileName,
    'text/calendar',
  )
}
const isTicketShareable = ref<boolean>()
const isTicketFetching = ref<boolean>()
const ticketFile = ref<File>()
onMounted(() => {
  isTicketShareable.value = !!navigator.canShare?.({
    files: [new File([], 'ticket.pdf', { type: 'application/pdf' })],
  })
})
const ticketFetch = async () => {
  if (!event.value || !guest.value || ticketFile.value) return

  isTicketFetching.value = true

  try {
    const blob = await $csrfFetch('/api/model/guest/ticket', {
      body: { guestId: guest.value.rowId, locale: locale.value },
      method: 'POST',
      responseType: 'blob',
    })

    ticketFile.value = new File([blob], `${event.value.slug}.pdf`, {
      type: 'application/pdf',
    })
  } catch (error) {
    alertError({
      error: error instanceof Error ? error : undefined,
      messageI18n: t('ticketError'),
    })
  } finally {
    isTicketFetching.value = false
  }
}
watch(isModalGuestQrCodeOpen, (isOpen) => {
  if (isOpen) ticketFetch()
})
// called without awaiting anything first, as iOS drops the user activation
// that navigator.share requires once an await runs
const ticketShare = async () => {
  if (!ticketFile.value) return

  try {
    await navigator.share({ files: [ticketFile.value] })
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') return

    alertError({
      error: error instanceof Error ? error : undefined,
      messageI18n: t('ticketShareError'),
    })
  }
}
const ticketDownload = () => {
  if (!ticketFile.value) return

  downloadJs(ticketFile.value, ticketFile.value.name, 'application/pdf')
}
const qrCodeShow = () => {
  isModalGuestQrCodeOpen.value = true
}
const update = async (id: string, guestPatch: GuestPatch) => {
  const result = await updateGuestByRowIdMutation.executeMutation({
    input: { rowId: id, guestPatch },
  })

  if (!getResultData(result)) return

  toast.success(t('success'))
}

// computations
const eventDescriptionHtml = computed(() => {
  if (!event.value?.description) return

  return sanitize(event.value.description, { ADD_ATTR: ['target'] })
})
const contact = computed(() => guest.value?.contactByContactId)
const contactAccount = computed(() => contact.value?.accountByAccountId)
const contactName = computed(() =>
  contact.value
    ? getContactName({ account: contactAccount.value, contact: contact.value })
    : undefined,
)
const isOrganizerPreview = computed(
  () =>
    account.value?.rowId === store.signedInAccountId &&
    guest.value?.contactByContactId?.accountByAccountId?.rowId !==
      store.signedInAccountId,
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
    showAppError({ status: 404, message: 'Event unavailable' })
    return
  }

  return event.value?.name
})
useHeadDefault({
  description,
  title,
})
defineOgImage(
  'Event.takumi',
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
  invitationAccepted: Einladung angenommen
  invitationAcceptedAdmin: Einladung im Namen von {name} angenommen
  invitationCancel: Einladung ablehnen
  invitationCanceled: Einladung abgelehnt
  invitationCanceledAdmin: Einladung im Namen von {name} abgelehnt
  invitationPendingAdmin: '{name} hat noch nicht geantwortet.'
  invitationSelectionClear: Zurück zur Einladungsübersicht
  invitationViewFor: Du schaust dir die Einladung für {name} an. Alle Personen, die den Link zu dieser Seite bzw. die ID dieser Einladung kennen, können auf diese Einladung zugreifen und mit ihr interagieren.
  ogImageAlt: Das Vorschaubild für die Veranstaltung.
  qrCodeShow: Check-in-Code anzeigen
  report: Veranstaltung melden
  success: Deine Eingabe wurde erfolgreich gespeichert.
  ticketDownload: Ticket herunterladen
  ticketError: Das Ticket konnte nicht erstellt werden.
  ticketShare: Ticket teilen
  ticketShareError: Das Ticket konnte nicht geteilt werden.
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
  invitationAccepted: Invitation accepted
  invitationAcceptedAdmin: Invitation accepted on behalf of {name}
  invitationCancel: Decline invitation
  invitationCanceled: Invitation declined
  invitationCanceledAdmin: Invitation declined on behalf of {name}
  invitationPendingAdmin: '{name} has not responded yet.'
  invitationSelectionClear: Back to the invitation overview
  invitationViewFor: You're viewing the invitation for {name}. Anyone knowing the link to this page or this invitation's id can access this invitation and interact with it.
  ogImageAlt: The event's preview image.
  qrCodeShow: Show check in code
  report: Report event
  success: Your input was saved succesfully.
  ticketDownload: Download ticket
  ticketError: The ticket could not be created.
  ticketShare: Share ticket
  ticketShareError: The ticket could not be shared.
</i18n>
