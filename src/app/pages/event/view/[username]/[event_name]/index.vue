<template>
  <Loader :api="api">
    <div
      v-if="event && event.accountByCreatedBy?.username"
      class="flex flex-col gap-4"
    >
      <CardStateInfo v-if="routeQueryIc && contact" class="flex flex-col gap-2">
        {{ t('invitationViewFor', { name: contactName }) }}
        <ButtonColored
          :aria-label="t('invitationSelectionClear')"
          :to="
            localePath({
              name: 'event-view-username-event_name-guest',
              params: {
                event_name: route.params.event_name,
                username: route.params.username,
              },
              query: { ...routeQuery, ic: undefined },
            })
          "
        >
          {{ t('invitationSelectionClear') }}
          <template #prefix>
            <IHeroiconsArrowLeft />
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
            v-if="invitation?.feedback === 'ACCEPTED'"
            :aria-label="t('qrCodeShow')"
            @click="qrCodeShow"
          >
            {{ t('qrCodeShow') }}
            <template #prefix>
              <IHeroiconsQrCode />
            </template>
          </ButtonColored>
        </div>
      </div>
      <ButtonList
        v-if="!routeQueryIc && event.createdBy === store.signedInAccountId"
        class="justify-center"
      >
        <ButtonColored
          :aria-label="t('guests')"
          :to="
            localePath({
              name: 'event-view-username-event_name-guest',
              params: {
                event_name: route.params.event_name,
                username: route.params.username,
              },
            })
          "
        >
          {{ t('guests') }}
          <template #prefix>
            <IHeroiconsUsers />
          </template>
        </ButtonColored>
        <ButtonColored
          :aria-label="t('attendances')"
          :to="
            localePath({
              name: 'event-view-username-event_name-attendance',
              params: {
                event_name: route.params.event_name,
                username: route.params.username,
              },
            })
          "
        >
          {{ t('attendances') }}
          <template #prefix>
            <ISolarUserCheckBroken />
          </template>
        </ButtonColored>
        <ButtonColored
          :aria-label="t('settings')"
          :to="
            localePath({
              name: 'event-edit-username-event_name',
              params: {
                event_name: route.params.event_name,
                username: route.params.username,
              },
            })
          "
        >
          {{ t('settings') }}
          <template #prefix>
            <IHeroiconsPencil />
          </template>
        </ButtonColored>
      </ButtonList>
      <div class="flex flex-col gap-4">
        <div>
          <div class="relative">
            <EventHeroImage :event="event" />
            <div
              class="absolute inset-x-0 top-0 flex items-center justify-between px-4 py-2"
            >
              <div>
                <!-- TODO: back button -->
                <!-- <AppButton
                  :aria-label="t('more')"
                  class="flex size-10 items-center justify-center rounded-full bg-(--semantic-base-surface-1)"
                >
                  <AppIconBack />
                </AppButton> -->
              </div>
              <div>
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
                      @select="isReportDrawerOpen = true"
                    >
                      {{ t('report') }}
                    </AppDropdownItem>
                    <template #trigger>
                      <span
                        class="flex size-10 items-center justify-center rounded-full bg-(--semantic-base-surface-1)"
                      >
                        <AppIconMoreVertical />
                      </span>
                    </template>
                  </AppDropdown>
                  <EventReportDrawer
                    v-model:is-open="isReportDrawerOpen"
                    :account-id="store.signedInAccountId"
                    :event
                  />
                </template>
              </div>
            </div>
          </div>
          <Card
            v-if="event"
            class="flex flex-col items-stretch gap-4 rounded-t-none"
          >
            <div
              class="flex flex-col items-baseline justify-center md:flex-row md:gap-2"
            >
              <h1 class="m-0">
                {{ event.name }}
              </h1>
              <EventOwner link :username="event.accountByCreatedBy.username" />
            </div>
            <AppHr />
            <div class="flex flex-row flex-wrap justify-center self-stretch">
              <EventDashletStart
                :contact="contact"
                :event="event"
                :invitation="invitation"
              />
              <EventDashletDuration :event="event" />
              <EventDashletVisibility :event="event" with-text />
              <EventDashletAttendanceType :event="event" />
              <!-- TODO: reenable to address usage -->
              <!-- <EventDashletLocation :event="event" /> -->
              <EventDashletLink :event="event" />
            </div>
            <template v-if="invitation">
              <AppHr />
              <!-- <div
            class="grid grid-cols-6 border-t-2 bg-background-brighten dark:bg-background-darken"
            :class="
              invitation.feedback === 'ACCEPTED'
                ? 'border-green-600 dark:border-green-500'
                : invitation.feedback === 'CANCELED'
                ? 'border-red-600 dark:border-red-500'
                : 'border-text-dark dark:border-text-bright'
            "
          > -->
              <!-- <div
              v-if="invitation.feedback === 'ACCEPTED'"
              class="col-start-2 m-auto rounded-full bg-gray-500 px-2 text-text-bright"
            >
              {{ t('step1Of2') }}
            </div> -->
              <div
                class="flex flex-col items-center gap-2"
                :class="
                  invitation.feedback === 'ACCEPTED'
                    ? 'col-span-3'
                    : 'col-span-6'
                "
              >
                <!-- <span v-if="event.authorUsername !== signedInUsername">
                {{ t('feedbackRequest') }}
              </span> -->
                <div class="flex items-center justify-center gap-4">
                  <ButtonColored
                    v-if="
                      invitation.feedback === null ||
                      invitation.feedback === 'CANCELED'
                    "
                    :aria-label="
                      event.accountByCreatedBy.username !==
                      store.signedInUsername
                        ? t('invitationAccept')
                        : t('invitationAcceptAdmin', {
                            name: contactName,
                          })
                    "
                    @click="accept"
                  >
                    <span>
                      {{
                        event.accountByCreatedBy.username !==
                        store.signedInUsername
                          ? t('invitationAccept')
                          : t('invitationAcceptAdmin', {
                              name: contactName,
                            })
                      }}
                    </span>
                    <template #prefix>
                      <IHeroiconsCheckCircleSolid class="shrink-0" />
                    </template>
                  </ButtonColored>
                  <div
                    v-if="invitation.feedback === 'ACCEPTED'"
                    class="flex items-center font-semibold text-green-600 dark:text-green-500"
                  >
                    <IHeroiconsCheckCircleSolid
                      class="mr-2 shrink-0"
                      title="accepted"
                    />
                    <span>
                      {{
                        event.accountByCreatedBy.username !==
                        store.signedInUsername
                          ? t('invitationAccepted')
                          : t('invitationAcceptedAdmin', {
                              name: contactName,
                            })
                      }}
                    </span>
                  </div>
                  <ButtonColored
                    v-if="
                      invitation.feedback === null ||
                      invitation.feedback === 'ACCEPTED'
                    "
                    :aria-label="
                      event.accountByCreatedBy.username !==
                      store.signedInUsername
                        ? t('invitationCancel')
                        : t('invitationCancelAdmin', {
                            name: contactName,
                          })
                    "
                    @click="cancel"
                  >
                    <span>
                      {{
                        event.accountByCreatedBy.username !==
                        store.signedInUsername
                          ? t('invitationCancel')
                          : t('invitationCancelAdmin', {
                              name: contactName,
                            })
                      }}
                    </span>
                    <template #prefix>
                      <IHeroiconsXCircleSolid class="shrink-0" />
                    </template>
                  </ButtonColored>
                  <div
                    v-if="invitation.feedback === 'CANCELED'"
                    class="flex items-center font-semibold text-(--semantic-critic-text)"
                  >
                    <IHeroiconsXCircleSolid
                      class="mr-2 shrink-0"
                      title="canceled"
                    />
                    <span>
                      {{
                        event.accountByCreatedBy.username !==
                        store.signedInUsername
                          ? t('invitationCanceled')
                          : t('invitationCanceledAdmin', {
                              name: contactName,
                            })
                      }}
                    </span>
                  </div>
                </div>
              </div>
              <!-- <div
              v-if="
                invitation.feedback !== null &&
                invitation.feedback === 'ACCEPTED'
              "
              class="row-start-2 col-span-1 col-start-2 m-auto rounded-full bg-gray-500 px-2 text-text-bright"
            >
              {{ t('step2Of2') }}
            </div>
            <div
              v-if="
                invitation.feedback !== null &&
                invitation.feedback === 'ACCEPTED'
              "
              class="col-span-3"
            >
              <FormInput
                id-label="input-paper-invitation-feedback"
                :title="t('invitationCardKind')"
                type="select"
              >
                <select
                  id="input-paper-invitation-feedback"
                  v-model="invitation.feedbackPaper"
                  @change="paperInvitationFeedback"
                >
                  <option disabled :value="null">
                    {{ t('requestSelection') }}
                  </option>
                  <option value="NONE">
                    {{ t('invitationCardKindNone') }}
                  </option>
                  <option value="PAPER">
                    {{ t('invitationCardKindPaper') }}
                  </option>
                  <option value="DIGITAL">
                    {{ t('invitationCardKindDigital') }}
                  </option>
                </select>
              </FormInput>
            </div> -->
            </template>
          </Card>
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
        <div v-if="invitation" class="flex flex-col items-center gap-2 pb-4">
          <QrcodeVue
            id="qrCode"
            class="bg-white p-4"
            :value="invitation.id"
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
              <IHeroiconsPrinter />
            </template>
          </ButtonColored>
          <ButtonColored
            :aria-label="t('close')"
            @click="store.modalRemove('ModalGuestQrCode')"
          >
            {{ t('close') }}
            <template #prefix>
              <IHeroiconsXMark />
            </template>
          </ButtonColored>
        </template>
      </Modal>
    </div>
    <AppError v-else :status-code="403" />
  </Loader>
</template>

<script setup lang="ts">
import DOMPurify from 'isomorphic-dompurify'
import mustache from 'mustache'
import prntr from 'prntr'
import QrcodeVue from 'qrcode.vue'

import { useUpdateGuestByIdMutation } from '~~/gql/documents/mutations/guest/guestUpdateById'
import {
  InvitationFeedback,
  type GuestItemFragment,
  type GuestPatch,
} from '~~/gql/generated/graphql'
import { useAccountByUsernameQuery } from '~~/gql/documents/queries/account/accountByUsername'
import { getGuestItem } from '~~/gql/documents/fragments/guestItem'
import { getEventItem } from '~~/gql/documents/fragments/eventItem'
import { getAccountItem } from '~~/gql/documents/fragments/accountItem'
import { getContactItem } from '~~/gql/documents/fragments/contactItem'
import { useEventByCreatedByAndSlugQuery } from '~~/gql/documents/queries/event/eventByCreatedByAndSlug'

const { t } = useI18n()
const fireAlert = useFireAlert()
const store = useStore()
const route = useRoute('event-view-username-event_name___en')
const localePath = useLocalePath()
const updateGuestByIdMutation = useUpdateGuestByIdMutation()

// data
const isReportDrawerOpen = ref(false)

// api data
const accountByUsernameQuery = useAccountByUsernameQuery({
  username: route.params.username,
})
const account = computed(() => getAccountItem(api.value.data.accountByUsername))
if (account.value === null) {
  throw showError({
    message: 'Account data missing',
    statusCode: 404,
  })
}
const eventQuery = useEventByCreatedByAndSlugQuery({
  createdBy: account.value?.id,
  slug: route.params.event_name,
  guestId: route.query.ic,
})
const event = computed(() =>
  getEventItem(api.value.data.eventByCreatedByAndSlug),
)
if (event.value === null) {
  throw showError({
    message: 'Event data missing',
    statusCode: 404,
  })
}
const api = await useApiData([accountByUsernameQuery, eventQuery])

// methods
const accept = () => {
  if (invitation.value === undefined) {
    return
  }
  update(invitation.value.id, {
    feedback: InvitationFeedback.Accepted,
  })
}
const cancel = () => {
  if (invitation.value === undefined) {
    return
  }
  update(invitation.value.id, {
    feedback: InvitationFeedback.Canceled,
  })
}
// const paperInvitationFeedback = () => {
//   if (!invitation.value) return

//   update(invitation.value.id, {
//     feedbackPaper: invitation.value.feedbackPaper,
//   })
// }
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

  await showToast({ title: t('success') })
}

// computations
const contact = computed(
  () => getContactItem(invitation?.value?.contactByContactId) || undefined,
)
const contactName = computed(() => {
  return invitation?.value?.contactByContactId && contact.value
    ? getContactName(contact.value)
    : undefined
})
const eventDescriptionTemplate = computed(() => {
  if (!event.value?.description) return

  return DOMPurify.sanitize(
    mustache.render(event.value.description, {
      contact: contact.value,
      event,
      invitation: invitation.value,
    }),
    { ADD_ATTR: ['target'] },
  )
})
const invitation = computed(() => {
  const invitations =
    api.value.data.eventByCreatedByAndSlug?.guestsByEventId.nodes
      .map((x) => getGuestItem(x))
      .filter(isNeitherNullNorUndefined)

  const invitationsMatchingUuid =
    store.signedInUsername === route.params.username && invitations
      ? invitations.filter(
          (invitation: Pick<GuestItemFragment, 'id'>) =>
            invitation.id === route.query.ic,
        )
      : invitations

  if (invitationsMatchingUuid?.length) {
    if (invitationsMatchingUuid.length > 1) {
      // TODO: use await (https://github.com/maevsi/vibetype/issues/61)
      fireAlert({
        level: 'warning',
        text: t('guestIdMultipleWarning'),
      })
    }

    return invitationsMatchingUuid[0]
  }

  return undefined
})
const routeQuery = computed(() => route.query)
const routeQueryIc = computed(() => route.query.ic)

// page
const descriptionSeo = computed(() =>
  eventDescriptionTemplate.value
    ? getStringTruncated({
        string: getTextFromHtml(eventDescriptionTemplate.value),
        limit: 200,
        isLastWordIncluded: true,
      })
    : undefined,
)
const title = computed(() =>
  api.value.isFetching ? t('globalLoading') : event.value?.name || '403',
)
useHeadDefault({
  description: descriptionSeo,
  title,
})
defineOgImageComponent(
  'Event',
  {
    description: descriptionSeo.value,
  },
  {
    alt: t('ogImageAlt'),
  },
)
</script>

<i18n lang="yaml">
de:
  attendances: Check-in
  close: Schließen
  # feedbackRequest: 'Bitte gib eine Rückmeldung, ob du teilnehmen wirst:'
  greeting: Hey{usernameString}!
  greetingDescription: Du wurdest zu folgender Veranstaltung eingeladen.
  guestIdMultipleWarning: Es wurden mehrere Einladungscodes für dieselbe Veranstaltung eingelöst! Diese Seite zeigt die Daten des zuerst gefundenen an.
  guests: Gäste
  hintQrCode: Dieses Bild ist deine Zugangsberechtigung für die Veranstaltung
  invitationAccept: Einladung annehmen
  invitationAcceptAdmin: Einladung im Namen von {name} annehmen
  invitationAccepted: Einladung angenommen
  invitationAcceptedAdmin: Einladung im Namen von {name} angenommen
  invitationCancel: Einladung ablehnen
  invitationCancelAdmin: Einladung im Namen von {name} ablehnen
  invitationCanceled: Einladung abgelehnt
  invitationCanceledAdmin: Einladung im Namen von {name} abgelehnt
  # invitationCardKind: Art der Einladungskarte
  # invitationCardKindNone: Keine
  # invitationCardKindPaper: Papier
  # invitationCardKindDigital: Digital
  invitationSelectionClear: Zurück zur Einladungsübersicht
  invitationViewFor: Du schaust dir die Einladung für {name} an. Nur du und {name} können diese Seite sehen.
  ogImageAlt: Das Vorschaubild für die Veranstaltung.
  print: Drucken
  qrCodeShow: Check-in-Code anzeigen
  report: Veranstaltung melden
  # requestSelection: Bitte auswählen
  settings: Bearbeiten
  # step1Of2: 1/2
  # step2Of2: 2/2
  success: Deine Eingabe wurde erfolgreich gespeichert.
en:
  attendances: Check in
  close: Close
  # feedbackRequest: 'Please confirm if you will attend:'
  greeting: Hey{usernameString}!
  greetingDescription: "You've been invited to the following event."
  guestIdMultipleWarning: Multiple invitation codes have already been redeemed for the same event! This page shows data for the first code found.
  guests: Guests
  hintQrCode: This picture is your access authorization for the event
  invitationAccept: Accept invitation
  invitationAcceptAdmin: Accept invitation on behalf of {name}
  invitationAccepted: Guest accepted
  invitationAcceptedAdmin: Invitation accepted on behalf of {name}
  invitationCancel: Decline invitation
  invitationCancelAdmin: Decline invitation on behalf of {name}
  invitationCanceled: Invitation declined
  invitationCanceledAdmin: Invitation declined on behalf of {name}
  # invitationCardKind: Type of invitation card
  # invitationCardKindNone: None
  # invitationCardKindPaper: Paper
  # invitationCardKindDigital: Digital
  invitationSelectionClear: Back to the invitation overview
  invitationViewFor: You're viewing the invitation for {name}. Only you and {name} can see this page.
  ogImageAlt: The event's preview image.
  print: Print
  qrCodeShow: Show check in code
  report: Report event
  # requestSelection: Please select
  settings: Edit
  # step1Of2: 1/2
  # step2Of2: 2/2
  success: Your input was saved succesfully.
</i18n>
