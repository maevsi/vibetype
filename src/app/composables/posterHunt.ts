import { useEventListener, useMediaQuery } from '@vueuse/core'

const ACCEPT = 'image/jpeg,image/png'

const getFileFromDataUrl = (dataUrl: string) => {
  const binary = atob(dataUrl.split(',')[1] ?? '')

  return new File(
    [Uint8Array.from(binary, (character) => character.charCodeAt(0))],
    'poster.jpg',
    { type: 'image/jpeg' },
  )
}

/** Takes the poster the service worker stored for a share to the app, if any. */
export const takePosterShared = async () => {
  if (!('caches' in globalThis)) return

  const cache = await caches.open(POSTER_SHARE_CACHE_NAME)
  const response = await cache.match(POSTER_SHARE_CACHE_KEY)

  if (!response) return

  await cache.delete(POSTER_SHARE_CACHE_KEY)

  const blob = await response.blob()

  return new File([blob], 'poster', { type: blob.type })
}

/** Holds a poster picked on another page until the ingest page reads it, in memory only. */
export const usePosterPicked = () =>
  useState<File | undefined>(STATE_KEY_POSTER_PICKED)

/** Picks a poster by camera, library or the iOS app's document camera and passes the file to `onPicked`. */
export const usePosterPicker = (onPicked: (file: File) => void) => {
  const { t } = useI18n({ useScope: 'global' })
  const alertError = useAlertError()

  const isPointerCoarse = useMediaQuery('(pointer: coarse)')
  const isPosterScanAvailable = ref(false)

  // desktop browsers ignore `capture` and open the library picker, so the camera is only offered where it works
  const isCameraAvailable = computed(
    () => isPosterScanAvailable.value || isPointerCoarse.value,
  )

  const pick = (capture?: 'environment') => {
    const input = document.createElement('input')

    input.accept = ACCEPT
    input.hidden = true
    input.type = 'file'
    if (capture) input.capture = capture
    input.addEventListener('cancel', () => input.remove())
    input.addEventListener('change', () => {
      const file = input.files?.[0]

      input.remove()
      if (file) onPicked(file)
    })
    // iOS Safari may not fire `change` on a file input outside the document
    document.body.append(input)
    input.click()
  }
  const pickFromCamera = () => {
    if (isPosterScanAvailable.value) {
      window.webkit?.messageHandlers['poster-scan']?.postMessage('poster-scan')
    } else {
      pick('environment')
    }
  }
  const pickFromLibrary = () => pick()

  const handlePosterFromApp = ({ detail }: CustomEvent<string>) => {
    if (detail) onPicked(getFileFromDataUrl(detail))
  }

  onMounted(() => {
    isPosterScanAvailable.value =
      window.webkit?.messageHandlers?.['poster-scan'] !== undefined
  })
  useEventListener('poster-scan-error', () =>
    alertError({ messageI18n: t('globalPosterScanFailed') }),
  )
  useEventListener('poster-scan-result', handlePosterFromApp)
  useEventListener('poster-shared', handlePosterFromApp)

  return { isCameraAvailable, pickFromCamera, pickFromLibrary }
}
