<template>
  <div :id="templateIdMap" class="h-96 w-full text-[#191911]" />
</template>

<script setup lang="ts">
import type { Map, LatLng } from 'leaflet'
import type { DeepReadonly } from 'vue'

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
  events = undefined,
  geocoder = undefined,
  positionInitial = {
    latitude: 51.12421275782688,
    longitude: 10.283203125000002,
    zoomLevel: 6,
  },
} = defineProps<AppMapProps>()

const templateIdMap = useId()
const map = ref<Map>()
const mapCenter = ref<LatLng>()
const mapZoom = ref<number>()

onMounted(async () => {
  const L = await import('leaflet')
  map.value = L.map(templateIdMap, {
    maxBounds: [
      [-90, -180],
      [90, 180],
    ],
  }).setView(
    [positionInitial.latitude, positionInitial.longitude],
    positionInitial.zoomLevel,
  ) // Kassel: 51.3144643, 9.4957866
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '<a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map.value)

  if (geocoder) {
    const { Geocoder } = await import('leaflet-control-geocoder')
    new Geocoder({ defaultMarkGeocode: false })
      .on('markgeocode', (markGeocodeEvent) => {
        map.value?.setView(markGeocodeEvent.geocode.center, 13)
      })
      .addTo(map.value)
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
    const icon = L.divIcon({
      className: 'text-(--semantic-critic-strong)',
      html: markerIcon,
      iconAnchor: [15, 25],
      iconSize: [30, 30],
      popupAnchor: [15, 2],
    })

    for (const event of events) {
      const location = event.addressByAddressId?.location
      if (!location) continue
      L.marker([location.latitude, location.longitude], { icon }).addTo(
        map.value,
      )
    }
  }
})
defineExpose({ map, mapCenter, mapZoom })
</script>

<style>
@import url('leaflet/dist/leaflet.css');
@import url('leaflet-control-geocoder/Control.Geocoder.css');
</style>
