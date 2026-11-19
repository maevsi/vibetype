<template>
  <div v-if="!isMounted" :class="cn('flex justify-center', classComputed)">
    <AppLoaderLogo class="size-8" />
  </div>
  <div v-else :class="cn('relative', classComputed)">
    <div :id="templateIdMap" class="size-full" />
    <div
      class="pointer-events-none absolute inset-0 z-1000 flex items-center justify-center bg-black/60 p-4 text-center text-white transition-opacity duration-300"
      :class="hint ? 'opacity-100' : 'opacity-0'"
      role="status"
    >
      {{ hint }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMediaQuery, useMounted, useTimeoutFn } from '@vueuse/core'

import type { FullscreenControl, Map, LatLng } from 'leaflet'
import type { DeepReadonly, HtmlHTMLAttributes } from 'vue'

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
const isMounted = useMounted()

// two-finger and ctrl gestures keep the page scrollable, except in fullscreen where the map is the whole page
const isTouchDevice = useMediaQuery('(hover: none) and (pointer: coarse)')
const isFullscreen = ref(false)
const hint = ref<string>()
const { start: startHintTimeout, stop: stopHintTimeout } = useTimeoutFn(
  () => {
    hint.value = undefined
  },
  1500,
  { immediate: false },
)
const showHint = (message: string) => {
  hint.value = message
  stopHintTimeout()
  startHintTimeout()
}
const applyGestureHandling = () => {
  const mapLocal = map.value
  if (!mapLocal) return
  if (isTouchDevice.value && !isFullscreen.value) mapLocal.dragging.disable()
  else mapLocal.dragging.enable()
}
watch([isFullscreen, isTouchDevice], applyGestureHandling)
let fullscreenControl: FullscreenControl | undefined
// leaflet translates its texts only when it renders them, so a locale change needs the controls re-added
watch(locale, () => {
  const mapLocal = map.value
  if (!mapLocal) return
  mapLocal.getContainer().setAttribute('aria-label', t('map'))
  mapLocal.zoomControl?.remove().addTo(mapLocal)
  fullscreenControl?.remove().addTo(mapLocal)
})
onMounted(async () => {
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

  // with one-finger dragging disabled, leaflet leaves `touch-action: pan-x pan-y` on the container, so the page scrolls and pinching still zooms and pans the map
  const container = map.value.getContainer()
  container.addEventListener(
    'wheel',
    (wheelEvent) => {
      if (isFullscreen.value || wheelEvent.ctrlKey || wheelEvent.metaKey) return
      // stopping only leaflet's zoom, not the default action, keeps the page scrolling
      wheelEvent.stopImmediatePropagation()
      showHint(
        t('hintWheel', {
          key: /Mac|iPhone|iPad/.test(navigator.userAgent) ? '⌘' : 'Ctrl',
        }),
      )
    },
    { capture: true, passive: true },
  )
  container.addEventListener(
    'touchmove',
    (touchEvent) => {
      if (
        !isFullscreen.value &&
        touchEvent.touches.length === 1 &&
        isTouchDevice.value
      )
        showHint(t('hintTouch'))
    },
    { passive: true },
  )
  map.value.on('enterfullscreen', () => {
    isFullscreen.value = true
  })
  map.value.on('exitfullscreen', () => {
    isFullscreen.value = false
  })
  applyGestureHandling()

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
})
defineExpose({ map, mapCenter, mapZoom })
</script>

<style>
@import url('leaflet/dist/leaflet.css');
@import url('leaflet-geosearch/assets/css/leaflet.css');
</style>

<i18n lang="yaml">
de:
  enterFullscreen: Vollbild öffnen
  exitFullscreen: Vollbild beenden
  hintTouch: Verschiebe die Karte mit zwei Fingern.
  hintWheel: Zoome die Karte mit {key} + Scrollen.
  map: Karte
  notFoundMessage: Nichts gefunden.
  zoomIn: Vergrößern
  zoomOut: Verkleinern
en:
  enterFullscreen: Enter fullscreen
  exitFullscreen: Exit fullscreen
  hintTouch: Use two fingers to move the map.
  hintWheel: Hold {key} and scroll to zoom the map.
  map: Map
  notFoundMessage: Nothing found.
  zoomIn: Zoom in
  zoomOut: Zoom out
</i18n>
