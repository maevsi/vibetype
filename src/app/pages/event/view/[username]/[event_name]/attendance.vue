<template>
  <Loader :api indicator="ping">
    <div
      v-if="event && route.params.username === store.signedInUsername"
      class="flex flex-col gap-4"
    >
      <LayoutPageTitle :title="t('title')" />
      <AppSteps
        :active="t('qrCodeScan')"
        :steps="[t('qrCodeScan'), t('nfcWrite')]"
      />
      <AppHr />
      <div class="flex flex-col items-center justify-center gap-4">
        <ButtonColored :aria-label="t('qrCodeScan')" @click="qrCodeScan">
          {{ t('qrCodeScan') }}
          <template #prefix>
            <AppIconQrCode />
          </template>
        </ButtonColored>
        <FormInputStateInfo v-if="!guestId">
          {{ t('qrHint') }}
        </FormInputStateInfo>
        <AppAttendanceGuestDynamic v-if="guestId" :guest-id />
        <div v-if="guestId" class="flex flex-col items-center gap-2">
          <ButtonColored
            :aria-label="t('nfcWrite')"
            :disabled="isNfcError"
            class="text-text-bright"
            @click="onClick"
          >
            {{ t('nfcWrite') }}
            <template #prefix>
              <AppIconUserTag />
            </template>
          </ButtonColored>
          <CardStateAlert v-if="isNfcError">
            {{ isNfcWritableErrorMessage }}
          </CardStateAlert>
        </div>
      </div>
      <Modal id="ModalAttendanceScanQrCode" :submit-name="t('close')">
        <LazyAppQrCodeStream @detect="onDetect" @error="modalClose" />
        <template #submit-icon>
          <AppIconXCircleSolid />
        </template>
      </Modal>
    </div>
    <AppError v-else :error="{ statusCode: 403 }" />
  </Loader>
</template>

<script lang="ts">
import { consola } from 'consola'
import type { DetectedBarcode } from 'vue-qrcode-reader'
import type { RouteNamedMap } from 'vue-router/auto-routes'

import { graphql } from '~~/gql/generated'
import { useMutation, useQuery } from '@urql/vue'

const ROUTE_NAME: keyof RouteNamedMap =
  'event-view-username-event_name-attendance___en'
</script>

<script setup lang="ts">
const { t } = useI18n()
const store = useStore()
const alertError = useAlertError()

// validation
const route = useRoute(ROUTE_NAME)
if (route.params.username !== store.signedInUsername) {
  throw createError({
    fatal: true,
    statusCode: 403,
  })
}

// api data
const queryEventAttendance = useQuery({
  query: graphql(`
    query EventAttendance($slug: String!, $username: String!) {
      accountByUsername(username: $username) {
        eventsByCreatedBy(condition: { slug: $slug }) {
          nodes {
            id
            name
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
  if (api.value.isFetching) return t('globalLoading')
  if (route.params.username !== store.signedInUsername) {
    showAppError({ statusCode: 403, message: 'Permission denied' })
    return
  }
  if (!event.value) {
    showAppError({ statusCode: 500, message: 'Event unavailable' })
    return
  }

  return `${t('title')} · ${event.value.name}`
})
useHeadDefault({ title })

// qr code
const qrCodeScan = () => {
  store.modals.push({ id: 'ModalAttendanceScanQrCode' })
}
const modalClose = () => store.modalRemove('ModalAttendanceScanQrCode')
const guestId = ref<string>()
const executeUrqlRequest = useExecuteUrqlRequest()
const createAttendanceMutation = useMutation(
  graphql(`
    mutation AttendanceCreate($attendanceInput: AttendanceInput!) {
      createAttendance(input: { attendance: $attendanceInput }) {
        attendance {
          id
        }
      }
    }
  `),
)
const { siteUrlTyped: siteUrl } = useSiteUrl()
const localePath = useLocalePath()
const onClick = async () => {
  if (!guestId.value) return

  await executeUrqlRequest({
    errorMessageI18n: t('errorAttendanceCreate'),
    request: createAttendanceMutation.executeMutation({
      attendanceInput: {
        guestId: guestId.value,
      },
    }),
  })

  await writeTag(
    `https://${siteUrl.host}/${localePath({
      name: 'attendance-view-id',
      params: { id: guestId.value },
    })}`,
  )
}
const onDetect = async (detectedBarcodes: DetectedBarcode[]) => {
  if (!detectedBarcodes.length || !detectedBarcodes[0]) return
  guestId.value = detectedBarcodes[0].rawValue
  toast.success(t('successDetect'))
  modalClose()
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
const writeTag = async (data: string) => {
  try {
    await new NDEFReader().write(data)
    toast.success(t('successWrite'))
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

      alertError(errorMessage)
      consola.error(errorMessage)
    } else {
      alert(`Unexpected error: ${error}`)
    }
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
  close: Schließen
  errorAttendanceCreate: Beim Erstellen der Anwesenheit ist ein Fehler aufgetreten.
  errorNavigatorPermissionsNotSupported: Navigator-Berechtigungen werden nicht unterstützt! {hintUpdateOrChrome}
  errorNfcAbort: Der NFC-Scan wurde unterbrochen! {hintTryAgain}
  errorNfcNetwork: Die NFC-Übertragung wurde unterbrochen! {hintTryAgain}
  errorNfcNotAllowed: Berechtigung zum NFC-Zugriff fehlt! {hintBrowserSettings}
  errorNfcNotReadable: Zugriff auf den NFC-Adapter nicht möglich. Wird er von einem anderen Programm verwendet?
  errorNfcNotSupported: Es wurde kein kompatibler NFC-Adapter gefunden. {hintUpdateOrChrome}
  hintBrowserSettings: Sieh in deinen Browser-Einstellungen nach.
  hintUpdateOrChrome: Versuche deinen Browser zu aktualisieren oder Google Chrome zu verwenden.
  hintTryAgain: Versuch es noch einmal.
  nfcWrite: NFC-Tag schreiben
  qrCodeScan: Check-in-Code scannen
  qrHint: Lass dir von Gästen den QR-Code auf ihrer Einladungsseite zeigen
  successDetect: Tag erkannt
  successWrite: Tag beschrieben
  title: Check-in
en:
  close: Close
  errorAttendanceCreate: Failed to create attendance.
  errorNavigatorPermissionsNotSupported: Navigator permissions are not supported! {hintUpdateOrChrome}
  errorNfcAbort: The NFC scan was interrupted! {hintTryAgain}
  errorNfcNetwork: The NFC transmission was interrupted! {hintTryAgain}
  errorNfcNotAllowed: Need NFC access permission! {hintBrowserSettings}
  errorNfcNotReadable: Could not access NFC adapter. Is it in use by another program right now?
  errorNfcNotSupported: No compatible NFC adapter was found. {hintUpdateOrChrome}
  hintBrowserSettings: Check your browser settings.
  hintTryAgain: Try again.
  hintUpdateOrChrome: Try updating your browser or use Google Chrome.
  nfcWrite: Write to NFC tag
  qrCodeScan: Scan check in code
  qrHint: Ask guests to show you the QR code on their invitation page
  successDetect: Tag detected
  successWrite: Tag written
  title: Check in
</i18n>
