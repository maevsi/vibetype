<template>
  <div v-if="api.isFetching" class="text-sm text-gray-500">
    {{ t('loading') }}
  </div>
  <AppError v-else-if="!attendance" :error="{ status: 404 }" />
  <div v-else class="flex flex-col gap-4">
    <section class="flex flex-col gap-4">
      <span class="text-3xl font-bold">
        {{ t('contact') }}
      </span>
      <ContactPreview v-if="contact" :contact />
      <CardStateInfo v-else>
        {{ t('errorContactNone') }}
      </CardStateInfo>
      <div class="flex">
        <AppFeature feature="friends">
          <ButtonColored
            v-if="authentication.isSignedIn"
            :aria-label="t('addFriend')"
            :title="t('addFriend')"
            @click="friendAdd"
          >
            {{ t('addFriend') }}
          </ButtonColored>
        </AppFeature>
      </div>
    </section>
    <section v-if="eventApps.length" class="flex flex-col gap-4">
      <span class="text-3xl font-bold">
        {{ t('event') }}
      </span>
      <section v-if="eventApps.length" class="flex flex-col gap-4">
        <span class="text-2xl font-bold">
          {{ t('apps') }}
        </span>
        <ul>
          <template v-for="eventApp in eventApps" :key="eventApp.id">
            <li
              v-if="
                eventApp.appByAppId?.urlAttendance &&
                eventApp.appByAppId.name &&
                eventApp.appByAppId.iconSvg
              "
            >
              <ButtonColored
                :aria-label="eventApp.appByAppId.name"
                :to="
                  eventApp.appByAppId?.urlAttendance.replace(
                    '{attendance.id}',
                    attendance.id,
                  )
                "
              >
                <span class="flex flex-col items-center gap-2">
                  <!-- eslint-disable-next-line vue/no-v-html -->
                  <span class="size-32" v-html="eventApp.appByAppId.iconSvg" />
                  <span class="font-bold">
                    {{ eventApp.appByAppId.name }}
                  </span>
                </span>
              </ButtonColored>
            </li>
          </template>
        </ul>
      </section>
    </section>
    <section v-if="guest?.id" class="flex flex-col gap-4">
      <span class="text-3xl font-bold">
        {{ t('attendance') }}
      </span>
      <div class="flex gap-2">
        <ButtonColored
          :aria-label="t('checkOut')"
          :disabled="!canCheckOut"
          @click="onCheckOut"
        >
          {{ t('checkOut') }}
        </ButtonColored>
      </div>
    </section>
    <section v-if="guest" class="flex flex-col gap-4">
      <span class="text-3xl font-bold">
        {{ t('guest') }}
      </span>
      <div class="flex">
        <ButtonColored
          :aria-label="t('guestView')"
          :to="localePath({ name: 'guest-view-id', params: { id: guest.id } })"
        >
          {{ t('guestView') }}
        </ButtonColored>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useMutation, useQuery } from '@urql/vue'
import type { RouteNamedMap } from 'vue-router/auto-routes'

import { graphql } from '~~/gql/generated'

const ROUTE_NAME: keyof RouteNamedMap = 'attendance-view-id___en'
const route = useRoute(ROUTE_NAME)
const { t } = useI18n()

const csrfRequestFetch = useCsrfRequestFetch()
const store = useStore()
try {
  const { jwtPayload } = await csrfRequestFetch('/api/model/jwt', {
    body: {
      attendanceId: route.params.id,
    },
    method: 'PUT',
  })

  if (!jwtPayload) {
    throw new Error('JWT update failed: no JWT returned')
  }

  store.jwtSet(jwtPayload)
} catch (error) {
  console.error('JWT update failed:', error)
}

// api data
const queryAttendance = useQuery({
  query: graphql(`
    query Attendance($id: UUID!) {
      attendanceById(id: $id) {
        checkedOut
        contactByContactId {
          accountByAccountId {
            id
            username
          }
          firstName
          id
          lastName
          language
          nickname
        }
        guestByGuestId {
          id
        }
        id
        updatedAt
      }
      eventByAttendanceId(attendanceId: $id) {
        id
        name
        eventAppsByEventId {
          nodes {
            id
            appByAppId {
              iconSvg
              id
              name
              url
              urlAttendance
            }
          }
        }
      }
    }
  `),
  variables: {
    id: route.params.id,
  },
})
const api = await useApiData([queryAttendance])
const attendance = computed(() => api.value.data.attendanceById)
const guest = computed(() => attendance.value?.guestByGuestId)
const contact = computed(() => attendance.value?.contactByContactId)
const contactName = computed(() =>
  contact.value ? getContactName({ contact: contact.value }) : undefined,
)
const event = computed(() => api.value.data.eventByAttendanceId)
const eventApps = computed(() => event.value?.eventAppsByEventId.nodes || [])

// auth state (signed-in accounts are typically organizers)
const authentication = useAuthentication()

// check-out mutation
const executeUrqlRequest = useExecuteUrqlRequest()
const checkOutMutation = useMutation(
  graphql(`
    mutation AttendanceCheckOut(
      $id: UUID!
      $attendancePatch: AttendancePatch!
    ) {
      updateAttendanceById(
        input: { id: $id, attendancePatch: $attendancePatch }
      ) {
        attendance {
          id
          checkedOut
        }
      }
    }
  `),
)

const canCheckOut = computed(() =>
  Boolean(attendance.value && !attendance.value.checkedOut),
)

const onCheckOut = async () => {
  if (!attendance.value || attendance.value.checkedOut) return
  await executeUrqlRequest({
    errorMessageI18n: t('errorAttendanceCheckOut'),
    request: checkOutMutation.executeMutation({
      id: attendance.value.id,
      attendancePatch: {
        checkedOut: true,
      },
    }),
  })
}

// contact
const localePath = useLocalePath()
const friendAdd = async () => {
  if (!contact.value?.accountByAccountId?.id) {
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
  if (api.value.isFetching) return t('globalLoading')

  if (contactName.value) {
    return t('title', { name: contactName.value })
  }

  return t('title', { name: t('contactNameUnknown') })
})
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  addFriend: Als Freund hinzufügen
  apps: Apps
  attendance: Anwesenheit
  checkOut: Auschecken
  contact: Kontakt
  contactNameUnknown: einen unbenannten Kontakt
  errorAttendanceCheckOut: Auschecken nicht möglich. Bitte erneut versuchen.
  errorContactNone: Es gibt keine Kontaktinformationen für diesen Gast. Bitte freundlich darum, welche hinzuzufügen!
  errorContactNoAccount: Der Gast hat sein Konto noch nicht zu seinen Kontaktinformationen hinzugefügt. Bitte freundlich darum, dies zu tun!
  event: Veranstaltung
  guest: Gast
  guestView: Einladung anzeigen
  loading: Lädt…
  title: Anwesenheitsdetails für {name}
en:
  addFriend: Add friend
  apps: Apps
  attendance: Attendance
  checkOut: Check out
  contact: Contact
  contactNameUnknown: an unnamed contact
  errorAttendanceCheckOut: Could not check out. Please try again.
  errorContactNone: There is no contact information for this guest. Kindly ask them to add some!
  errorContactNoAccount: The guest has not added contact information about their account yet. Kindly ask them to do so!
  event: Event
  guest: Guest
  guestView: Show invitation
  loading: Loading…
  title: Attendance Details for {name}
</i18n>
