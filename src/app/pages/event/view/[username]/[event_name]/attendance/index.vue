<template>
  <Loader :api is-page>
    <div
      v-if="event && route.params.username === store.signedInUsername"
      class="flex flex-1 flex-col"
    >
      <LayoutTopBar>{{ t('title') }}</LayoutTopBar>
      <LayoutPage>
        <div class="flex flex-col gap-4">
          <AppStepList
            :active="t('qrCodeScan')"
            :steps="[t('qrCodeScan'), t('nfcWrite')]"
          />
          <AppSeparator />
          <div class="flex flex-col items-center justify-center gap-4">
            <AppButton :aria-label="t('qrCodeScan')" @click="qrCodeScan">
              {{ t('qrCodeScan') }}
              <template #prefix>
                <AppIconQrCode />
              </template>
            </AppButton>
            <p v-if="!guestId" class="text-body-small text-fg-2">
              {{ t('qrHint') }}
            </p>
            <AppAttendanceGuestDynamic v-if="guestId" :guest-id />
            <div v-if="guestId" class="flex flex-col items-center gap-2">
              <AppButton
                :aria-label="t('nfcWrite')"
                class="text-on-action-primary"
                :disabled="isNfcError"
                @click="onClick"
              >
                {{ t('nfcWrite') }}
                <template #prefix>
                  <AppIconUserTag />
                </template>
              </AppButton>
              <AppAlert v-if="isNfcError" variant="error">
                {{ isNfcWritableErrorMessage }}
              </AppAlert>
            </div>
          </div>
        </div>
      </LayoutPage>
    </div>
    <AppError v-else :error="{ status: 403 }" />
  </Loader>
</template>

<script lang="ts">
import { graphql } from '~~/gql/generated'
import { useMutation } from '@urql/vue'
</script>

<script setup lang="ts">
const { t } = useI18n()
const store = useStore()

// validation
await useSignInRequired()
const route = useRoute()
const { createA11yError } = useA11yError()
if (
  store.signedInUsername &&
  route.params.username !== store.signedInUsername
) {
  throw createA11yError({
    status: 403,
  })
}

// api data
const queryEventAttendance = useApiQuery({
  query: graphql(`
    query EventAttendance($slug: String!, $username: String!) {
      accountByUsername(username: $username) {
        eventsByCreatedBy(condition: { slug: $slug }) {
          nodes {
            id
            name
            rowId
            slug
          }
        }
        id
      }
    }
  `),
  variables: {
    slug: route.params.event_name,
    username: route.params.username,
  },
})
const api = await useApiData([queryEventAttendance])
const account = computed(() => api.value.data.accountByUsername)
const event = computed(() => account.value?.eventsByCreatedBy.nodes[0])

// page
const title = computed(() => {
  if (api.value.isFetching && !event.value) return t('globalLoading')
  if (
    store.signedInUsername &&
    route.params.username !== store.signedInUsername
  ) {
    showAppError({
      data: { vibetype: t('errorPermissionDenied') },
      message: 'Permission denied',
      status: 403,
    })
    return
  }
  if (!event.value) {
    showAppError({
      data: { vibetype: t('errorEventMissing') },
      message: 'Event unavailable',
      status: 404,
    })
    return
  }

  return `${t('title')} · ${event.value.name}`
})
useHeadDefault({ title })

// qr code
const qrCodeScan = () =>
  navigateTo(
    localePath({
      name: 'event-view-username-event_name-attendance-scan',
      params: route.params,
    }),
  )
const guestId = computed(() =>
  typeof route.query.guest === 'string' ? route.query.guest : undefined,
)
const executeUrqlRequest = useExecuteUrqlRequest()
const createAttendanceMutation = useMutation(
  graphql(`
    mutation AttendanceCreate($input: CreateAttendanceInput!) {
      createAttendance(input: $input) {
        attendance {
          guestByGuestId {
            attendanceByGuestId {
              checkedOut
              id
              rowId
              updatedAt
            }
            id
            rowId
          }
          id
          rowId
        }
      }
    }
  `),
)
const tagSerialNumberUpdateMutation = useMutation(
  graphql(`
    mutation AttendanceTagSerialNumberUpdate(
      $id: UUID!
      $attendancePatch: AttendancePatch!
    ) {
      updateAttendanceByRowId(
        input: { rowId: $id, attendancePatch: $attendancePatch }
      ) {
        attendance {
          id
          rowId
          tagSerialNumber
        }
      }
    }
  `),
)
const { siteUrlTyped: siteUrl } = useSiteUrl()
const localePath = useLocalePath()
const onClick = async () => {
  if (!guestId.value) return

  const result = await executeUrqlRequest({
    errorMessageI18n: t('errorAttendanceCreate'),
    request: createAttendanceMutation.executeMutation({
      input: {
        attendance: {
          guestId: guestId.value,
        },
      },
    }),
  })
  const attendanceId = result?.data?.createAttendance?.attendance?.rowId
  if (!attendanceId) return

  const tag = await writeTag({
    records: [
      {
        recordType: 'url',
        data: `https://${siteUrl.host}${localePath({
          name: 'attendance-view-id',
          params: { id: attendanceId },
        })}`,
      },
    ],
  })
  if (!tag?.serialNumber) return

  await executeUrqlRequest({
    errorMessageI18n: t('errorTagSerialNumberSave'),
    request: tagSerialNumberUpdateMutation.executeMutation({
      id: attendanceId,
      attendancePatch: { tagSerialNumber: tag.serialNumber },
    }),
  })
}

// nfc
const isNfcWritableErrorMessage = ref<string>()
const checkWriteTag = async () => {
  if (!('NDEFReader' in window)) {
    return Promise.reject(
      Error(
        t('errorNfcNotSupported', {
          hintUpdateOrChrome: t('hintUpdateOrChrome'),
        }) as string,
      ),
    )
  }

  if (!navigator.permissions) {
    return Promise.reject(
      Error(
        t('errorNavigatorPermissionsNotSupported', {
          hintUpdateOrChrome: t('hintUpdateOrChrome'),
        }) as string,
      ),
    )
  } else {
    const nfcPermissionStatus = await navigator.permissions.query({
      name: 'nfc' as PermissionName,
    })

    if (nfcPermissionStatus.state === 'granted') {
      return Promise.resolve()
    } else {
      return Promise.reject(Error(nfcPermissionStatus.state))
    }
  }
}
onMounted(() => {
  checkWriteTag().catch((err: Error) => {
    isNfcWritableErrorMessage.value = err.message
  })
})
const writeTag = async (data: NDEFMessageSource) => {
  const controller = new AbortController()

  try {
    const reader = new NDEFReader()
    // reading the tag first keeps its serial number, which tells this tag apart from a copy of its link later
    const serialNumber = await nfcTagSerialNumberRead({
      reader,
      signal: controller.signal,
    })
    await reader.write(data)
    toast.success(t('successWrite'))
    return { serialNumber }
  } catch (error) {
    if (error instanceof DOMException) {
      let errorMessage: string = error.message

      if (error.name === 'AbortError') {
        errorMessage = t('errorNfcAbort', {
          hintTryAgain: t('hintTryAgain'),
        }) as string
      } else if (error.name === 'NotAllowedError') {
        errorMessage = t('errorNfcNotAllowed', {
          hintBrowserSettings: t('hintBrowserSettings'),
        }) as string
      } else if (error.name === 'NotSupportedError') {
        errorMessage = t('errorNfcNotSupported') as string
      } else if (error.name === 'NotReadableError') {
        errorMessage = t('errorNfcNotReadable') as string
      } else if (error.name === 'NetworkError') {
        errorMessage = t('errorNfcNetwork', {
          hintTryAgain: t('hintTryAgain'),
        }) as string
      }

      toast.warning(t('globalError'), {
        description: errorMessage,
      })
      console.log(errorMessage)
    } else {
      alert(`Unexpected error: ${error}`)
    }
  } finally {
    controller.abort()
  }
}
const isNfcError = computed(() => {
  return !!(
    isNfcWritableErrorMessage.value &&
    isNfcWritableErrorMessage.value !== 'prompt'
  )
})
</script>

<i18n lang="yaml">
de:
  errorAttendanceCreate: Beim Erstellen der Anwesenheit ist ein Fehler aufgetreten.
  errorEventMissing: Diese Veranstaltung ist nicht verfügbar. Wenn Dir jemand einen Link geschickt hat, frage nach einem neuen.
  errorNavigatorPermissionsNotSupported: Navigator-Berechtigungen werden nicht unterstützt! {hintUpdateOrChrome}
  errorNfcAbort: Der NFC-Scan wurde unterbrochen! {hintTryAgain}
  errorNfcNetwork: Die NFC-Übertragung wurde unterbrochen! {hintTryAgain}
  errorNfcNotAllowed: Berechtigung zum NFC-Zugriff fehlt! {hintBrowserSettings}
  errorNfcNotReadable: Zugriff auf den NFC-Adapter nicht möglich. Wird er von einem anderen Programm verwendet?
  errorNfcNotSupported: Es wurde kein kompatibler NFC-Adapter gefunden. {hintUpdateOrChrome}
  errorPermissionDenied: Nur wer diese Veranstaltung organisiert, kann diese Seite öffnen. Wenn es Deine Veranstaltung ist, melde Dich mit dem Konto an, mit dem Du sie erstellt hast.
  errorTagSerialNumberSave: Die Seriennummer des Tags konnte nicht gespeichert werden.
  hintBrowserSettings: Sieh in Deinen Browser-Einstellungen nach.
  hintUpdateOrChrome: Versuche Deinen Browser zu aktualisieren oder Google Chrome zu verwenden.
  hintTryAgain: Versuch es noch einmal.
  nfcWrite: NFC-Tag schreiben
  qrCodeScan: Check-in-Code scannen
  qrHint: Lass Dir von Gästen den QR-Code auf ihrer Einladungsseite zeigen
  successWrite: Tag beschrieben
  title: Check-in
en:
  errorAttendanceCreate: Failed to create attendance.
  errorEventMissing: This event isn't available. If someone sent you a link, ask them for a new one.
  errorNavigatorPermissionsNotSupported: Navigator permissions are not supported! {hintUpdateOrChrome}
  errorNfcAbort: The NFC scan was interrupted! {hintTryAgain}
  errorNfcNetwork: The NFC transmission was interrupted! {hintTryAgain}
  errorNfcNotAllowed: Need NFC access permission! {hintBrowserSettings}
  errorNfcNotReadable: Could not access NFC adapter. Is it in use by another program right now?
  errorNfcNotSupported: No compatible NFC adapter was found. {hintUpdateOrChrome}
  errorPermissionDenied: Only the organizer of this event can open this page. If it's your event, sign in with the account that created it.
  errorTagSerialNumberSave: Failed to save the tag's serial number.
  hintBrowserSettings: Check your browser settings.
  hintTryAgain: Try again.
  hintUpdateOrChrome: Try updating your browser or use Google Chrome.
  nfcWrite: Write to NFC tag
  qrCodeScan: Scan check in code
  qrHint: Ask guests to show you the QR code on their invitation page
  successWrite: Tag written
  title: Check in
</i18n>
