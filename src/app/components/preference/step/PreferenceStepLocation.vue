<template>
  <LayoutPage :aria-hidden>
    <div class="flex flex-col gap-4">
      <AppStepIndex :count="5" :index="5" />
      <TypographyH3 class="text-center">
        {{ t('title') }}
      </TypographyH3>
      <div class="relative isolate -mx-6">
        <AppMap v-if="!ariaHidden" ref="map" geocoder />
        <div
          class="pointer-events-none absolute inset-0 z-[400] bg-[#14132699] mask-[radial-gradient(circle_140px_at_center,transparent_0,transparent_139px,black_150px)]"
        />
      </div>
      <TypographyBodyMedium v-if="mapCutoutRadiusInMeters" class="text-center">
        {{ t('radius', { radius: formattedRadius }) }}
      </TypographyBodyMedium>
      <TypographyBodyMedium
        class="text-center text-(--semantic-base-text-secondary)"
      >
        {{ t('description') }}
      </TypographyBodyMedium>
    </div>
    <template #bottom>
      <ButtonColored
        :aria-label="t('button')"
        class="w-full max-w-md"
        @click="save"
      >
        {{ t('button') }}
      </ButtonColored>
    </template>
  </LayoutPage>
</template>

<script setup lang="ts">
import { useUpdateAccountLocationMutation } from '~~/gql/documents/mutations/account/accountLocationUpdate'

const { ariaHidden } = defineProps<{
  ariaHidden: boolean
}>()

const emit = defineEmits<{
  next: []
}>()

const { t, locale } = useI18n()

// api data
const updateAccountLocationMutation = useUpdateAccountLocationMutation()
const api = getApiData([updateAccountLocationMutation])

// map
const EARTH_CIRCUMFERENCE_METERS = 40075016.686
const MAP_CUTOUT_RADIUS_PIXELS = 140
const MAP_TILE_SIZE_PIXELS = 256
const MAP_METERS_PER_PIXEL_AT_ZOOM_0 =
  EARTH_CIRCUMFERENCE_METERS / MAP_TILE_SIZE_PIXELS
const MAP_METERS_PER_PIXEL_AT = ({
  latitude,
  zoom,
}: {
  latitude: number
  zoom: number
}) =>
  (MAP_METERS_PER_PIXEL_AT_ZOOM_0 * Math.cos((latitude * Math.PI) / 180)) /
  Math.pow(2, zoom)
const templateMap = useTemplateRef('map')
const mapCutoutRadiusInMeters = computed(() => {
  const map = templateMap.value

  if (map?.mapCenter === undefined || map.mapZoom === undefined) return

  const metersPerPixel = MAP_METERS_PER_PIXEL_AT({
    latitude: map.mapCenter.lat,
    zoom: map.mapZoom,
  })

  return metersPerPixel * MAP_CUTOUT_RADIUS_PIXELS
})
const formatterKilometers = new Intl.NumberFormat(locale.value, {
  style: 'unit',
  unit: 'kilometer',
  unitDisplay: 'short',
  maximumFractionDigits: 0,
})
const formatterMeters = new Intl.NumberFormat(locale.value, {
  style: 'unit',
  unit: 'meter',
  unitDisplay: 'long',
  maximumFractionDigits: 0,
})
const formattedRadius = computed(() => {
  if (!mapCutoutRadiusInMeters.value) return null

  const radiusInKilometers = mapCutoutRadiusInMeters.value / 1000

  if (mapCutoutRadiusInMeters.value > 1000) {
    const value =
      radiusInKilometers < 25
        ? radiusInKilometers
        : radiusInKilometers <= 50
          ? Math.round(radiusInKilometers / 5) * 5
          : Math.round(radiusInKilometers / 50) * 50

    return formatterKilometers.format(value)
  } else {
    return formatterMeters.format(
      Math.round(mapCutoutRadiusInMeters.value / 50) * 50,
    )
  }
})

const save = async () => {
  const map = templateMap.value

  if (map?.mapCenter === undefined || map.mapZoom === undefined) return

  await updateAccountLocationMutation.executeMutation({
    input: {
      latitude: map.mapCenter.lat,
      longitude: map.mapCenter.lng,
    },
  })

  emit('next')
}

const modelError = defineModel<Error>('error')
watch(
  () => api.value.errors,
  (current) => {
    modelError.value = current?.length
      ? new Error(getCombinedErrorMessages(current)[0])
      : undefined
  },
)
</script>

<i18n lang="yaml">
de:
  button: Weiter
  description: Vibetype schlägt dir gelegentlich auch Events außerhalb dieses Gebiets vor, wenn sie für dich relevant sind.
  radius: 'Umkreis: {radius}'
  title: Welche Gegend interessiert dich am meisten?
  # title: Finde lokale Events, die zu deinem Vibe passen.
en:
  button: Next
  description: Vibetype suggests events outside of this area from time to time too when they're relevant for you.
  radius: 'Radius: {radius}'
  title: Which area is most interesting to you?
  # title: Find local events that match your vibe.
</i18n>
