<template>
  <div class="flex flex-1 flex-col">
    <LayoutTopBar>{{ title }}</LayoutTopBar>
    <LayoutPage>
      <LazyAppQrCodeStream @detect="onDetect" @error="attendanceShow()" />
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
import type { DetectedBarcode } from 'vue-qrcode-reader'

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

// page
const title = t('title')
useHeadDefault({ title })

// qr code
const localePath = useLocalePath()
const attendanceShow = (guest?: string) =>
  navigateTo(
    localePath({
      name: 'event-view-username-event_name-attendance',
      params: route.params,
      query: guest ? { guest } : undefined,
    }),
    { replace: true },
  )
const onDetect = async (detectedBarcodes: DetectedBarcode[]) => {
  const guestId = detectedBarcodes[0]?.rawValue

  if (!guestId) return

  toast.success(t('successDetect'))
  await attendanceShow(guestId)
}
</script>

<i18n lang="yaml">
de:
  successDetect: Tag erkannt
  title: Check-in-Code scannen
en:
  successDetect: Tag detected
  title: Scan check in code
</i18n>
