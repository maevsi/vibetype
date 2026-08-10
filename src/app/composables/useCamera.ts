export const useCamera = () => {
  const templateCanvasEl = useTemplateRef<HTMLCanvasElement>('canvasEl')
  const templateGalleryInput = useTemplateRef<HTMLInputElement>('galleryInput')
  const templateVideoEl = useTemplateRef<HTMLVideoElement>('videoEl')

  // state
  const cameraError = ref(false)
  const cameraStream = ref<MediaStream>()
  const capturedBase64 = ref<string>()
  const capturedDataUrl = ref<string>()
  const previewUrl = ref<string>()
  const selectedFile = ref<File>()

  // computed
  const hasCapture = computed(
    () => !!capturedDataUrl.value || !!previewUrl.value,
  )
  const isCameraActive = computed(
    () => !!cameraStream.value && !capturedDataUrl.value && !previewUrl.value,
  )

  // watch in case video element mounts after stream starts
  watch(templateVideoEl, (el) => {
    if (el && cameraStream.value) {
      el.srcObject = cameraStream.value
    }
  })

  // camera management
  const stopCameraStream = () => {
    cameraStream.value?.getTracks().forEach((track) => track.stop())
    cameraStream.value = undefined
  }

  const startCameraStream = async () => {
    cameraError.value = false

    try {
      cameraStream.value = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
      })
      await nextTick()

      if (templateVideoEl.value) {
        templateVideoEl.value.srcObject = cameraStream.value
      }
    } catch {
      cameraError.value = true
    }
  }

  // actions
  const handleFileSelect = (event: Event) => {
    const input = event.target as HTMLInputElement
    if (!input.files?.length) return

    const file = input.files[0]
    if (!file) return

    stopCameraStream()

    if (previewUrl.value) {
      URL.revokeObjectURL(previewUrl.value)
    }

    capturedBase64.value = undefined
    capturedDataUrl.value = undefined
    selectedFile.value = file
    previewUrl.value = URL.createObjectURL(file)
  }

  const retake = async () => {
    capturedBase64.value = undefined
    capturedDataUrl.value = undefined

    if (previewUrl.value) {
      URL.revokeObjectURL(previewUrl.value)
      previewUrl.value = undefined
    }

    selectedFile.value = undefined
    await startCameraStream()
  }

  const takePhoto = () => {
    const canvas = templateCanvasEl.value
    const video = templateVideoEl.value
    if (!canvas || !video) return

    canvas.height = video.videoHeight
    canvas.width = video.videoWidth
    canvas.getContext('2d')?.drawImage(video, 0, 0)

    const dataUrl = canvas.toDataURL('image/jpeg', 0.9)
    capturedBase64.value = dataUrl.split(',')[1]
    capturedDataUrl.value = dataUrl

    stopCameraStream()
  }

  const triggerGalleryInput = () => {
    if (!templateGalleryInput.value) return

    templateGalleryInput.value.value = ''
    templateGalleryInput.value.click()
  }

  onMounted(startCameraStream)

  onUnmounted(() => {
    stopCameraStream()

    if (previewUrl.value) {
      URL.revokeObjectURL(previewUrl.value)
    }
  })

  return {
    cameraError,
    capturedBase64,
    capturedDataUrl,
    hasCapture,
    isCameraActive,
    previewUrl,
    selectedFile,
    handleFileSelect,
    retake,
    takePhoto,
    triggerGalleryInput,
  }
}
