<template>
  <QrcodeStream
    @detect="emits('detect', $event)"
    @error="onError"
    @camera-on="onCameraOn"
  >
    <div v-if="loading" class="text-center">
      {{ t('globalLoading') }}
    </div>
  </QrcodeStream>
</template>

<script lang="ts">
import wasmFile from 'zxing-wasm/reader/zxing_reader.wasm?url'
import {
  QrcodeStream,
  setZXingModuleOverrides,
  type DetectedBarcode,
  type EmittedError,
} from 'vue-qrcode-reader'

setZXingModuleOverrides({
  locateFile: (path, prefix) => {
    if (path.endsWith('.wasm')) {
      return wasmFile
    }
    return prefix + path
  },
})

export default {
  components: {
    QrcodeStream,
  },
}
</script>

<script setup lang="ts">
// compiler
const emits = defineEmits<{
  detect: [detectedCodes: DetectedBarcode[]]
  error: [error: EmittedError]
}>()

const { t } = useI18n()

// loading
const loading = ref(true)
const onCameraOn = () => {
  loading.value = false
}

// error
const alertError = useAlertError()
const onError = async (error: Error) => {
  let errorMessage: string = error.message

  if (error.name === 'NotAllowedError') {
    errorMessage = t('errorCameraNotAllowed', {
      hintBrowserSettings: t('hintBrowserSettings'),
    }) as string
  } else if (error.name === 'NotFoundError') {
    errorMessage = t('errorCameraNotFound') as string
  } else if (error.name === 'NotSupportedError') {
    errorMessage = t('errorCameraNotSupported') as string
  } else if (error.name === 'NotReadableError') {
    errorMessage = t('errorCameraNotReadable') as string
  } else if (error.name === 'OverconstrainedError') {
    errorMessage = t('errorCameraOverconstrained') as string
  } else if (error.name === 'StreamApiNotSupportedError') {
    errorMessage = t('errorCameraStreamApiNotSupported') as string
  }

  alertError(errorMessage)
  emits('error', error)
}
</script>

<i18n lang="yaml">
de:
  errorCameraNotAllowed: Berechtigung zum Kamerazugriff fehlt. {hintBrowserSettings}
  errorCameraNotFound: Konnte keine geeignete Kamera finden.
  errorCameraNotReadable: Zugriff auf die Kamera nicht möglich. Wird sie von einem anderen Programm verwendet?
  errorCameraNotSupported: Die Webseite wird nicht über eine sichere Verbindung geladen.
  errorCameraOverconstrained: Frontkamerazugriff ist nicht möglich.
  errorCameraStreamApiNotSupported: Der Browser unterstützt den Zugriff auf Videostreams nicht.
  hintBrowserSettings: Sieh in deinen Browser-Einstellungen nach.
en:
  errorCameraNotAllowed: Need camera access permissions. {hintBrowserSettings}
  errorCameraNotFound: Could not find a suitable camera.
  errorCameraNotReadable: Could not access camera. Is it in use by another program right now?
  errorCameraNotSupported: The web page is not loaded over a secure connection.
  errorCameraOverconstrained: Could not access front camera.
  errorCameraStreamApiNotSupported: Your browser does not support access to video streams.
  hintBrowserSettings: Check your browser settings.
</i18n>
