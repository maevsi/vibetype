<template>
  <LoaderPage v-if="api.isFetching && !attendance" />
  <AppError v-else-if="!attendance" :error="{ status: 404 }" />
  <div v-else class="flex flex-1 flex-col">
    <LayoutTopBar>{{ title }}</LayoutTopBar>
    <LayoutPage>
      <div class="flex flex-col gap-4">
        <section v-if="isOwn && event" class="flex flex-col gap-4">
          <span class="text-heading-large">
            {{ t('event') }}
          </span>
          <AppButton
            v-if="event.accountByCreatedBy"
            :aria-label="event.name"
            class="self-start"
            :to="
              localePath({
                name: 'event-view-username-event_name',
                params: {
                  event_name: event.slug,
                  username: event.accountByCreatedBy.username,
                },
              })
            "
          >
            {{ event.name }}
          </AppButton>
          <span v-else>{{ event.name }}</span>
          <p>
            {{
              attendance.checkedOut && attendance.updatedAt
                ? t('statusCheckedOut', {
                    time: dateTimeFormat(attendance.updatedAt),
                  })
                : t('statusCheckedIn', {
                    time: dateTimeFormat(attendance.createdAt),
                  })
            }}
          </p>
        </section>
        <section v-else class="flex flex-col gap-4">
          <span class="text-heading-large">
            {{ t('contact') }}
          </span>
          <ContactPreview v-if="contact" :contact />
          <AppAlert v-else>
            {{ t('errorContactNone') }}
          </AppAlert>
          <div class="flex">
            <AppFeature feature="friends">
              <AppButton
                v-if="authentication.isSignedIn"
                :aria-label="t('addFriend')"
                :title="t('addFriend')"
                @click="friendAdd"
              >
                {{ t('addFriend') }}
              </AppButton>
            </AppFeature>
          </div>
        </section>
        <section v-if="eventApps.length" class="flex flex-col gap-4">
          <span class="text-heading-large">
            {{ t('event') }}
          </span>
          <section v-if="eventApps.length" class="flex flex-col gap-4">
            <span class="text-heading-medium">
              {{ t('apps') }}
            </span>
            <ul>
              <template v-for="eventApp in eventApps" :key="eventApp.rowId">
                <li
                  v-if="
                    eventApp.appByAppId?.urlAttendance &&
                    eventApp.appByAppId.name &&
                    eventApp.appByAppId.iconSvg
                  "
                >
                  <AppButton
                    :aria-label="eventApp.appByAppId.name"
                    :to="
                      eventApp.appByAppId?.urlAttendance.replace(
                        '{attendance.rowId}',
                        attendance.rowId,
                      )
                    "
                  >
                    <span class="flex flex-col items-center gap-2">
                      <!-- eslint-disable vue/no-v-html -->
                      <span
                        class="size-32"
                        v-html="eventApp.appByAppId.iconSvg"
                      />
                      <!-- eslint-enable vue/no-v-html -->
                      <span class="font-bold">
                        {{ eventApp.appByAppId.name }}
                      </span>
                    </span>
                  </AppButton>
                </li>
              </template>
            </ul>
          </section>
        </section>
        <section v-if="isOwn || isOrganizer" class="flex flex-col gap-4">
          <span class="text-heading-large">
            {{ t('attendance') }}
          </span>
          <div class="flex gap-2">
            <AppButton
              :aria-label="isOwn ? t('leave') : t('checkOut')"
              :disabled="!canCheckOut"
              :loading="checkOutMutation.fetching.value"
              @click="onCheckOut"
            >
              {{ isOwn ? t('leave') : t('checkOut') }}
            </AppButton>
            <AppButton
              v-if="isOrganizer"
              :aria-label="t('tagVerify')"
              :loading="isTagVerifying"
              @click="onTagVerify"
            >
              {{ t('tagVerify') }}
              <template #prefix>
                <AppIconUserTag />
              </template>
            </AppButton>
          </div>
        </section>
        <section v-if="guest" class="flex flex-col gap-4">
          <span class="text-heading-large">
            {{ t('guest') }}
          </span>
          <div class="flex">
            <AppButton
              :aria-label="t('guestView')"
              :to="
                localePath({
                  name: 'guest-view-id',
                  params: { id: guest.rowId },
                })
              "
            >
              {{ t('guestView') }}
            </AppButton>
          </div>
        </section>
      </div>
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
import { useMutation } from '@urql/vue'

import { graphql } from '~~/gql/generated'

const route = useRoute()
const { locale, t } = useI18n()

const store = useStore()
// anonymous sessions keep their guest claims only in the token this request returns, as the store drops them
const guestClaims = ref<string[]>([])
try {
  const { data: jwtUpdateData, error: jwtUpdateError } =
    await useCsrfRequestFetch('/api/model/jwt', {
      body: {
        attendanceId: route.params.id,
      },
      method: 'PUT',
    })

  if (jwtUpdateError.value) throw jwtUpdateError.value

  if (!jwtUpdateData.value?.jwtPayload) {
    throw new Error('JWT update failed: no JWT returned')
  }

  store.jwtSet(jwtUpdateData.value.jwtPayload)
  guestClaims.value = jwtUpdateData.value.jwtPayload.guests
} catch (error) {
  console.error('JWT update failed:', error)
}

// api data
const queryAttendance = useApiQuery({
  query: graphql(`
    query Attendance($id: UUID!) {
      attendanceByRowId(rowId: $id) {
        checkedOut
        contactByContactId {
          accountByAccountId {
            id
            rowId
            username
          }
          firstName
          id
          lastName
          language
          nickname
          rowId
        }
        createdAt
        guestByGuestId {
          contactByContactId {
            accountId
            id
          }
          id
          rowId
        }
        id
        rowId
        tagSerialNumber
        updatedAt
      }
      eventByAttendanceId(attendanceId: $id) {
        accountByCreatedBy {
          id
          username
        }
        createdBy
        id
        name
        slug
        eventAppsByEventId {
          nodes {
            id
            appByAppId {
              iconSvg
              id
              name
              rowId
              url
              urlAttendance
            }
            rowId
          }
        }
        rowId
      }
    }
  `),
  variables: {
    id: route.params.id,
  },
})
const api = await useApiData([queryAttendance])
const attendance = computed(() => api.value.data.attendanceByRowId)
const guest = computed(() => attendance.value?.guestByGuestId)
const contact = computed(() => attendance.value?.contactByContactId)
const contactName = computed(() =>
  contact.value ? getContactName({ contact: contact.value }) : undefined,
)
const event = computed(() => api.value.data.eventByAttendanceId)
const eventApps = computed(() => event.value?.eventAppsByEventId.nodes || [])

// auth state
const authentication = useAuthentication()
const isOrganizer = computed(
  () =>
    !!store.signedInAccountId &&
    event.value?.createdBy === store.signedInAccountId,
)
const isOwn = computed(() => {
  if (!guest.value) return false

  const accountId = guest.value.contactByContactId?.accountId

  return (
    (!!accountId && accountId === store.signedInAccountId) ||
    guestClaims.value.includes(guest.value.rowId)
  )
})

// check-out mutation
const executeUrqlRequest = useExecuteUrqlRequest()
const checkOutMutation = useMutation(
  graphql(`
    mutation AttendanceCheckOut(
      $id: UUID!
      $attendancePatch: AttendancePatch!
    ) {
      updateAttendanceByRowId(
        input: { rowId: $id, attendancePatch: $attendancePatch }
      ) {
        attendance {
          id
          checkedOut
          rowId
          updatedAt
        }
      }
    }
  `),
)

const canCheckOut = computed(() =>
  Boolean(
    attendance.value &&
    !attendance.value.checkedOut &&
    (isOwn.value || isOrganizer.value),
  ),
)

const onCheckOut = async () => {
  if (!attendance.value || attendance.value.checkedOut) return
  await executeUrqlRequest({
    errorMessageI18n: t('errorAttendanceCheckOut'),
    request: checkOutMutation.executeMutation({
      id: attendance.value.rowId,
      attendancePatch: {
        checkedOut: true,
      },
    }),
  })
}

const timeZone = useTimeZone()
const dateTimeFormat = (dateTime: string) =>
  Intl.DateTimeFormat(locale.value, {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone,
  }).format(new Date(dateTime))

// tag
const isTagVerifying = ref(false)
const onTagVerify = async () => {
  if (!attendance.value) return

  if (!attendance.value.tagSerialNumber) {
    toast.info(t('tagVerifyNone'))
    return
  }

  if (!('NDEFReader' in window)) {
    toast.error(t('errorNfcNotSupported'))
    return
  }

  const controller = new AbortController()
  isTagVerifying.value = true

  try {
    const serialNumber = await nfcTagSerialNumberRead({
      reader: new NDEFReader(),
      signal: controller.signal,
    })

    // a copied link on another tag, or a tag whose serial number cannot be read, both fail here
    if (serialNumber === attendance.value.tagSerialNumber) {
      toast.success(t('tagVerifySuccess'))
    } else {
      toast.error(t('tagVerifyMismatch'))
    }
  } catch (error) {
    toast.error(t('errorTagVerify'), {
      description: error instanceof Error ? error.message : undefined,
    })
  } finally {
    controller.abort()
    isTagVerifying.value = false
  }
}

// contact
const localePath = useLocalePath()
const friendAdd = async () => {
  if (!contact.value?.accountByAccountId?.rowId) {
    toast.info(t('errorContactNoAccount'))
    return
  }

  await navigateTo(
    localePath({
      name: 'account-view-username',
      params: { username: contact.value.accountByAccountId.username },
      query: { action: 'add-friend' },
    }),
  )
}

// page
const title = computed(() => {
  if (api.value.isFetching && !attendance.value) return t('globalLoading')

  if (isOwn.value) return t('titleOwn')

  if (contactName.value) {
    return t('title', { name: contactName.value })
  }

  return t('title', { name: t('contactNameUnknown') })
})
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  addFriend: Freundschaft hinzufügen
  apps: Apps
  attendance: Anwesenheit
  checkOut: Auschecken
  contact: Kontakt
  contactNameUnknown: einen unbenannten Kontakt
  errorAttendanceCheckOut: Auschecken nicht möglich. Bitte erneut versuchen.
  errorContactNone: Für diesen Gast gibt es noch keine Kontaktinformationen. Bitte die Person gern darum, welche zu ergänzen.
  errorContactNoAccount: Diese Person hat ihr Konto noch nicht mit ihren Kontaktinformationen verknüpft. Bitte sie gern darum.
  errorNfcNotSupported: Es wurde kein kompatibler NFC-Adapter gefunden. Versuche deinen Browser zu aktualisieren oder Google Chrome zu verwenden.
  errorTagVerify: Der Tag konnte nicht gelesen werden.
  event: Veranstaltung
  guest: Gast
  guestView: Einladung anzeigen
  leave: Veranstaltung verlassen
  statusCheckedIn: Eingecheckt am {time}
  statusCheckedOut: Verlassen am {time}
  tagVerify: Tag prüfen
  tagVerifyMismatch: Dieser Tag ist nicht der für diese Anwesenheit beschriebene. Prüfe die Einladung des Gastes stattdessen von Hand.
  tagVerifyNone: Für diese Anwesenheit ist kein Tag gespeichert.
  tagVerifySuccess: Dieser Tag ist der für diese Anwesenheit beschriebene.
  title: Anwesenheitsdetails für {name}
  titleOwn: Deine Anwesenheit
en:
  addFriend: Add friend
  apps: Apps
  attendance: Attendance
  checkOut: Check out
  contact: Contact
  contactNameUnknown: an unnamed contact
  errorAttendanceCheckOut: Could not check out. Please try again.
  errorContactNone: There's no contact information for this guest yet. Feel free to ask them to add some.
  errorContactNoAccount: This guest hasn't linked their account to their contact information yet. Feel free to ask them to.
  errorNfcNotSupported: No compatible NFC adapter was found. Try updating your browser or use Google Chrome.
  errorTagVerify: Could not read the tag.
  event: Event
  guest: Guest
  guestView: Show invitation
  leave: Leave event
  statusCheckedIn: Checked in on {time}
  statusCheckedOut: Left on {time}
  tagVerify: Verify tag
  tagVerifyMismatch: This tag is not the one written for this attendance. Check the guest's invitation by hand instead.
  tagVerifyNone: No tag is stored for this attendance.
  tagVerifySuccess: This tag is the one written for this attendance.
  title: Attendance Details for {name}
  titleOwn: Your Attendance
</i18n>
