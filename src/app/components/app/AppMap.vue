<template>
  <div v-if="!isMounted" :class="cn('flex justify-center', classComputed)">
    <AppLoaderLogo class="size-8" />
  </div>
  <div v-else :id="templateIdMap" :class="classComputed" />
</template>

<script setup lang="ts">
import { useMounted } from '@vueuse/core'

import type { Map, LatLng } from 'leaflet'
import type { DeepReadonly, HtmlHTMLAttributes } from 'vue'

import { cn } from '@/utils/shadcn'

import markerIcon from '~/assets/icons/location-on.svg?raw'

export type AppMapEvent = {
  addressByAddressId?: {
    location?: {
      latitude: number
      longitude: number
    } | null
  } | null
}
export type AppMapProps = {
  events?: readonly DeepReadonly<AppMapEvent>[]
  geocoder?: boolean
  positionInitial?: {
    latitude: number
    longitude: number
    zoomLevel: number
  }
}
const {
  class: classProps = undefined,
  events = undefined,
  geocoder = undefined,
  positionInitial = {
    latitude: 51.12421275782688,
    longitude: 10.283203125000002,
    zoomLevel: 6,
  },
} = defineProps<AppMapProps & { class?: HtmlHTMLAttributes['class'] }>()
const emit = defineEmits<{
  geocode: [name: string]
}>()
const classComputed = computed(() =>
  cn('h-96 w-full text-[#191911]', classProps),
)

const templateIdMap = useId()
const map = ref<Map>()
const mapCenter = ref<LatLng>()
const mapZoom = ref<number>()

const isMounted = useMounted()
onMounted(async () => {
  const {
    DivIcon,
    Map: LeafletMap,
    Marker,
    TileLayer,
  } = await import('leaflet')
  map.value = new LeafletMap(templateIdMap, {
    maxBounds: [
      [-90, -180],
      [90, 180],
    ],
  }).setView(
    [positionInitial.latitude, positionInitial.longitude],
    positionInitial.zoomLevel,
  ) // Kassel: 51.3144643, 9.4957866
  new TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map.value)

  if (geocoder) {
    const { GeoSearchControl, OpenStreetMapProvider } =
      await import('leaflet-geosearch')
    new GeoSearchControl({
      provider: new OpenStreetMapProvider(),
      // Nominatim's usage policy forbids autocomplete, so the control only searches on submit instead of suggesting while the user types.
      autoComplete: false,
      notFoundMessage: 'Nothing found.',
      position: 'topright',
      showMarker: false,
      showResultListOnSubmit: true,
      updateMap: false,
    }).addTo(map.value)
    map.value.on('geosearch/showlocation', (showLocationEvent) => {
      const { location } = showLocationEvent
      map.value?.setView([location.y, location.x], 13)
      emit('geocode', location.label)
    })
  }

  mapCenter.value = map.value.getCenter()
  mapZoom.value = map.value.getZoom()
  map.value.on('move', () => {
    mapCenter.value = map.value?.getCenter()
  })
  map.value.on('zoomend', () => {
    mapZoom.value = map.value?.getZoom()
  })

  if (events && events.length) {
    const icon = new DivIcon({
      className: 'text-(--critic-red-middle)',
      html: markerIcon,
      iconAnchor: [15, 25],
      iconSize: [30, 30],
      popupAnchor: [15, 2],
    })

    for (const event of events) {
      const location = event.addressByAddressId?.location
      if (!location) continue
      new Marker([location.latitude, location.longitude], { icon }).addTo(
        map.value,
      )
    }
  }
})
defineExpose({ map, mapCenter, mapZoom })
</script>

<style>
@import url('leaflet/dist/leaflet.css');
@import url('leaflet-geosearch/assets/css/leaflet.css');
</style>
