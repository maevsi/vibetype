<template>
  <div v-if="!isMounted" :class="cn('flex justify-center', classComputed)">
    <AppLoaderLogo class="size-8" />
  </div>
  <div
    v-else-if="!isConsented"
    :class="
      cn(
        'flex flex-col items-center justify-center gap-4 p-6 text-center',
        classComputed,
      )
    "
  >
    <p>{{ t('consentRequired') }}</p>
    <AppButton
      v-if="!isIos"
      :aria-label="t('consentOpen')"
      variant="tertiary"
      @click="openCookieControl"
    >
      {{ t('consentOpen') }}
    </AppButton>
  </div>
  <div v-else :id="templateIdMap" :class="classComputed" />
</template>

<script setup lang="ts">
import { useMounted } from '@vueuse/core'

import type { FullscreenControl, Map, LatLng } from 'leaflet'
import type { DeepReadonly, HtmlHTMLAttributes } from 'vue'

import { EXTERNAL_MEDIA_COOKIE_ID } from '~~/node/static'

import { cn } from '@/utils/shadcn'

import markerIcon from '~/assets/icons/map-pin.svg?raw'

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
const classComputed = computed(() => cn('h-96 w-full text-fg-1', classProps))

const templateIdMap = useId()
const map = ref<Map>()
const mapCenter = ref<LatLng>()
const mapZoom = ref<number>()

const { t, locale } = useI18n()
const { isIos } = usePlatform()
const cookieControl = useCookieControl()
const isConsented = useIsCookieConsented(EXTERNAL_MEDIA_COOKIE_ID)
const openCookieControl = () => (cookieControl.isModalActive.value = true)
const isMounted = useMounted()
let fullscreenControl: FullscreenControl | undefined
// leaflet translates its texts only when it renders them, so a locale change needs the controls re-added
watch(locale, () => {
  const mapLocal = map.value
  if (!mapLocal) return
  mapLocal.getContainer().setAttribute('aria-label', t('map'))
  mapLocal.zoomControl?.remove().addTo(mapLocal)
  fullscreenControl?.remove().addTo(mapLocal)
})
const initialize = async () => {
  const {
    DivIcon,
    FullscreenControl,
    Map: LeafletMap,
    Marker,
    TileLayer,
  } = await import('leaflet')
  map.value = new LeafletMap(templateIdMap, {
    maxBounds: [
      [-90, -180],
      [90, 180],
    ],
    translate: (text) =>
      (
        ({
          'Enter fullscreen': t('enterFullscreen'),
          'Exit fullscreen': t('exitFullscreen'),
          Map: t('map'),
          'Zoom in': t('zoomIn'),
          'Zoom out': t('zoomOut'),
        }) as Record<string, string>
      )[text] ?? text,
  }).setView(
    [positionInitial.latitude, positionInitial.longitude],
    positionInitial.zoomLevel,
  ) // Kassel: 51.3144643, 9.4957866
  new TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map.value)
  fullscreenControl = new FullscreenControl().addTo(map.value)

  if (geocoder) {
    const { GeoSearchControl, OpenStreetMapProvider } =
      await import('leaflet-geosearch')
    const geosearch = new GeoSearchControl({
      provider: new OpenStreetMapProvider(),
      // Nominatim's usage policy forbids autocomplete, so the control only searches on submit instead of suggesting while the user types.
      autoComplete: false,
      notFoundMessage: t('notFoundMessage'),
      position: 'topright',
      showMarker: false,
      showResultListOnSubmit: true,
      updateMap: false,
    })
    geosearch.addTo(map.value)
    // the control reads its texts when it is built, so refresh them when the locale changes
    watch(locale, () =>
      geosearch.setLabels({ notFoundMessage: t('notFoundMessage') }),
    )
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
      className: 'text-error',
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
}

// the tiles and the geocoder reach third parties, so the map only exists while consent is given
watch(
  [isMounted, isConsented],
  async ([mounted, consented]) => {
    if (mounted && consented) {
      await nextTick()
      if (!map.value) await initialize()
    } else if (map.value) {
      map.value.remove()
      map.value = undefined
    }
  },
  { immediate: true },
)
defineExpose({ map, mapCenter, mapZoom })
</script>

<style>
@import url('leaflet/dist/leaflet.css');
@import url('leaflet-geosearch/assets/css/leaflet.css');
</style>

<i18n lang="yaml">
de:
  consentOpen: Cookie-Einstellungen öffnen
  consentRequired: Zum Anzeigen der Karte werden Daten vom Drittanbieter OpenStreetMap geladen, wobei deine IP-Adresse übertragen wird. Bitte stimme dem dafür in den Cookie-Einstellungen unter externe Inhalte zu.
  enterFullscreen: Vollbild öffnen
  exitFullscreen: Vollbild beenden
  map: Karte
  notFoundMessage: Nichts gefunden.
  zoomIn: Vergrößern
  zoomOut: Verkleinern
en:
  consentOpen: Open cookie settings
  consentRequired: Displaying the map loads data from the third party OpenStreetMap and transfers your IP address. Please consent to this under external content in the cookie settings.
  enterFullscreen: Enter fullscreen
  exitFullscreen: Exit fullscreen
  map: Map
  notFoundMessage: Nothing found.
  zoomIn: Zoom in
  zoomOut: Zoom out
</i18n>
