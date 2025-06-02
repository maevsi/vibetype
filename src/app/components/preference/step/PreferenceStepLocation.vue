<template>
  <LayoutPage :aria-hidden>
    <div class="flex flex-col gap-4">
      <AppStepIndex :count="4" :index="4" />
      <TypographyH3 class="text-center">
        {{ t('title') }}
      </TypographyH3>
      <div class="relative isolate -mx-6">
        <AppMap v-if="!ariaHidden" ref="map" geocoder :position-initial />
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
import { useAllPreferenceEventLocationsQuery } from '~~/gql/documents/queries/preference/preferenceEventLocationsAll'
import { useCreatePreferenceEventLocationMutation } from '~~/gql/documents/mutations/preference/preferenceEventLocationCreate'
import { useDeletePreferenceEventLocationByIdMutation } from '~~/gql/documents/mutations/preference/preferenceEventLocationDeleteById'
import { getPreferenceEventLocationItem } from '~~/gql/documents/fragments/preferenceEventLocationItem'

const { ariaHidden } = defineProps<{
  ariaHidden: boolean
}>()

const emit = defineEmits<{
  next: []
}>()

const { t, locale } = useI18n()

// api data
const allPreferenceEventLocationsQuery = await zalgo(
  useAllPreferenceEventLocationsQuery(),
)
const createPreferenceEventLocationMutation =
  useCreatePreferenceEventLocationMutation()
const deletePreferenceEventLocationByIdMutation =
  useDeletePreferenceEventLocationByIdMutation()
const api = getApiData([
  allPreferenceEventLocationsQuery,
  createPreferenceEventLocationMutation,
  deletePreferenceEventLocationByIdMutation,
])

// map - zoom level to radius
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

// map - radius to zoom level
const positionInitial = ref<{
  latitude: number
  longitude: number
  zoomLevel: number
}>()
const getZoomLevelForRadius = ({
  latitude,
  radiusInMeters,
}: {
  latitude: number
  radiusInMeters: number
}) =>
  Math.log2(
    (EARTH_CIRCUMFERENCE_METERS * Math.cos((latitude * Math.PI) / 180)) /
      ((MAP_TILE_SIZE_PIXELS * radiusInMeters) / MAP_CUTOUT_RADIUS_PIXELS),
  )
const preferenceEventLocations = computed(
  () =>
    allPreferenceEventLocationsQuery.data.value?.allAccountPreferenceEventLocations?.nodes
      .map((item) => getPreferenceEventLocationItem(item))
      .filter(isNeitherNullNorUndefined) || [],
)
const preferenceEventLocationFirst = preferenceEventLocations.value[0]
if (preferenceEventLocationFirst) {
  positionInitial.value = {
    latitude: preferenceEventLocationFirst.location.latitude,
    longitude: preferenceEventLocationFirst.location.longitude,
    zoomLevel: getZoomLevelForRadius({
      latitude: preferenceEventLocationFirst.location.latitude,
      radiusInMeters: preferenceEventLocationFirst.radius,
    }),
  }
}

// map - formatters
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

const store = useStore()
const save = async () => {
  const map = templateMap.value

  if (
    map?.mapCenter === undefined ||
    map.mapZoom === undefined ||
    mapCutoutRadiusInMeters.value === undefined
  )
    return

  for (const preferenceEventLocation of preferenceEventLocations.value) {
    const result =
      await deletePreferenceEventLocationByIdMutation.executeMutation({
        input: {
          id: preferenceEventLocation.id,
        },
      })

    if (result.error || !result.data) return
  }

  const result = await createPreferenceEventLocationMutation.executeMutation({
    input: {
      createdBy: store.signedInAccountId,
      location: {
        type: 'Point',
        coordinates: [map.mapCenter.lng, map.mapCenter.lat],
      },
      radius: mapCutoutRadiusInMeters.value,
    },
  })

  if (result.error || !result.data) return

  positionInitial.value = {
    latitude: map.mapCenter.lat,
    longitude: map.mapCenter.lng,
    zoomLevel: getZoomLevelForRadius({
      latitude: map.mapCenter.lat,
      radiusInMeters: mapCutoutRadiusInMeters.value,
    }),
  }

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
