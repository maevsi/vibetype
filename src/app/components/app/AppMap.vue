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
    <AppIconMap class="size-10 text-fg-2" />
    <p>{{ t('consentRequired') }}</p>
    <div class="flex flex-col items-center gap-2">
      <AppButton :aria-label="t('consentShow')" @click="showMap">
        {{ t('consentShow') }}
      </AppButton>
      <AppButton
        :aria-label="t('consentOpen')"
        variant="tertiary"
        @click="isConsentOpen = true"
      >
        {{ t('consentOpen') }}
      </AppButton>
    </div>
    <AppModal v-model="isConsentOpen" is-footer-hidden>
      <template #header>{{ t('consentTitle') }}</template>
      <ConsentSettings @decided="isConsentOpen = false" />
    </AppModal>
  </div>
  <div v-else :class="cn('relative isolate', classComputed)">
    <!-- while fullscreen, the map moves to the body: in place, an ancestor's stacking context would keep it below the bottom navigation and the sticky bars -->
    <Teleport :disabled="!isFullscreen" to="body">
      <div
        :class="
          isFullscreen
            ? 'fixed inset-0 z-1500 bg-surface'
            : 'relative size-full'
        "
      >
        <div :id="templateIdMap" class="size-full" />
        <div
          class="pointer-events-none absolute inset-0 z-1000 flex items-center justify-center bg-black/60 p-4 text-center text-white transition-opacity duration-300"
          :class="hint ? 'opacity-100' : 'opacity-0'"
          role="status"
        >
          {{ hint }}
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import {
  useMediaQuery,
  useMounted,
  useScrollLock,
  useTimeoutFn,
} from '@vueuse/core'

import type { FullscreenControl, Map, LatLng } from 'leaflet'
import type { DeepReadonly, HtmlHTMLAttributes, WatchStopHandle } from 'vue'

import type { GeocodeResult } from '#shared/utils/address'
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
  geocode: [result: GeocodeResult]
}>()
const classComputed = computed(() => cn('h-96 w-full text-fg-1', classProps))

const templateIdMap = useId()
const map = ref<Map>()
const mapCenter = ref<LatLng>()
const mapZoom = ref<number>()
// stays false until the view differs from the initial one, so programmatic initial centring never counts as input
const isPositionSet = ref(false)

const { t, locale } = useI18n()
const colorMode = useColorMode()
const isMounted = useMounted()
const isConsented = useIsCookieConsented(EXTERNAL_MEDIA_COOKIE_ID)
const isConsentOpen = ref(false)
const { enabledPurposeIds, save } = usePrivacyConsent()
const showMap = () =>
  save([...enabledPurposeIds.value, EXTERNAL_MEDIA_COOKIE_ID])

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
const isScrollLocked = useScrollLock(import.meta.client ? document.body : null)
watch(isFullscreen, async (isFullscreenValue) => {
  isScrollLocked.value = isFullscreenValue
  // moving the map in the document drops its focus and leaves leaflet with the size of the old place
  await nextTick()
  map.value?.invalidateSize()
  fullscreenControl?.getContainer()?.querySelector('a')?.focus()
})
// leaflet translates its texts only when it renders them, so a locale change needs the controls re-added
watch(locale, () => {
  const mapLocal = map.value
  if (!mapLocal) return
  mapLocal.getContainer().setAttribute('aria-label', t('map'))
  mapLocal.zoomControl?.remove().addTo(mapLocal)
  fullscreenControl?.remove().addTo(mapLocal)
})
let stopMarkerWatch: WatchStopHandle | undefined
const initialize = async () => {
  const {
    DivIcon,
    FullscreenControl,
    LayerGroup,
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
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map.value)
  // the native fullscreen API cannot keep the map while it moves to the body, so leaflet only fills the window
  fullscreenControl = new FullscreenControl({ pseudo: true }).addTo(map.value)

  if (geocoder) {
    const { GeoSearchControl, OpenStreetMapProvider } =
      await import('leaflet-geosearch')
    // the app's own endpoint caches and rate limits requests to the geocoding service, as its usage policy demands
    const provider = new OpenStreetMapProvider({
      params: { 'accept-language': locale.value },
      searchUrl: '/api/service/nominatim/search',
    })
    const geosearch = new GeoSearchControl({
      provider,
      // Nominatim's usage policy forbids autocomplete, so the control only searches on submit instead of suggesting while the user types.
      autoComplete: false,
      clearSearchLabel: t('clearSearch'),
      notFoundMessage: t('notFoundMessage'),
      position: 'topright',
      searchLabel: t('searchLabel'),
      showMarker: false,
      showResultListOnSubmit: true,
      theme: colorMode.value === 'dark' ? 'dark' : 'light',
      updateMap: false,
    })
    geosearch.addTo(map.value)
    // the control reads its texts when it is built, so refresh them when the locale changes
    watch(locale, (localeValue) => {
      provider.options.params = { 'accept-language': localeValue }
      geosearch.setLabels({
        clearSearchLabel: t('clearSearch'),
        notFoundMessage: t('notFoundMessage'),
        searchLabel: t('searchLabel'),
      })
    })
    watch(
      () => colorMode.value,
      (colorModeValue) =>
        geosearch.searchElement.container.classList.toggle(
          'leaflet-geosearch-theme-dark',
          colorModeValue === 'dark',
        ),
    )
    map.value.on('geosearch/error', () => toast.error(t('geocodeError')))
    map.value.on('geosearch/showlocation', (showLocationEvent) => {
      const { location } = showLocationEvent
      map.value?.setView([location.y, location.x], 13)
      emit('geocode', {
        ...getAddressFromNominatim(location.raw),
        label: location.label,
      })
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
  const centerInitial = map.value.getCenter()
  let isFitting = false
  map.value.on('move', () => {
    mapCenter.value = map.value?.getCenter()
    if (!isFitting && mapCenter.value && !mapCenter.value.equals(centerInitial))
      isPositionSet.value = true
  })
  map.value.on('zoomend', () => {
    mapZoom.value = map.value?.getZoom()
  })

  const icon = new DivIcon({
    className: 'text-error',
    html: markerIcon,
    iconAnchor: [15, 25],
    iconSize: [30, 30],
    popupAnchor: [15, 2],
  })
  const markerLayer = new LayerGroup().addTo(map.value)
  // events load page by page, so the markers follow the prop
  stopMarkerWatch = watch(
    () => events,
    (eventsCurrent) => {
      markerLayer.clearLayers()
      const positions: [number, number][] = []
      for (const event of eventsCurrent ?? []) {
        const location = event.addressByAddressId?.location
        if (!location) continue
        positions.push([location.latitude, location.longitude])
        new Marker([location.latitude, location.longitude], { icon }).addTo(
          markerLayer,
        )
      }
      if (!positions.length) return
      isFitting = true
      map.value?.fitBounds(positions, { maxZoom: 15, padding: [30, 30] })
      isFitting = false
    },
    { immediate: true },
  )
}

// the tiles reach a third party, so the map only exists while consent is given
watch(
  [isMounted, isConsented],
  async ([mounted, consented]) => {
    if (mounted && consented) {
      await nextTick()
      if (!map.value) await initialize()
    } else if (map.value) {
      stopMarkerWatch?.()
      map.value.remove()
      map.value = undefined
      isFullscreen.value = false
    }
  },
  { immediate: true },
)
defineExpose({ isPositionSet, map, mapCenter, mapZoom })
</script>

<style>
@import url('leaflet/dist/leaflet.css');
@import url('leaflet-geosearch/assets/css/leaflet.css');

/* mutes the saturated OpenStreetMap tiles, leaving markers, controls and attribution untouched */
.leaflet-tile-pane {
  filter: saturate(0.6) contrast(0.92) brightness(1.03);
}

.dark .leaflet-tile-pane {
  filter: saturate(0.5) contrast(0.9) brightness(0.65);
}
</style>

<i18n lang="yaml">
de:
  clearSearch: Suche leeren
  consentOpen: Datenschutz-Einstellungen
  consentRequired: 'Karte anzeigen: OpenStreetMap erhält deine IP-Adresse.'
  consentShow: Karte anzeigen
  consentTitle: Datenschutz-Einstellungen
  enterFullscreen: Vollbild öffnen
  exitFullscreen: Vollbild beenden
  geocodeError: Die Adresssuche ist fehlgeschlagen. Bitte versuche es später erneut.
  hintTouch: Verschiebe die Karte mit zwei Fingern.
  hintWheel: Zoome die Karte mit {key} + Scrollen.
  map: Karte
  notFoundMessage: Nichts gefunden.
  searchLabel: Adresse eingeben
  zoomIn: Vergrößern
  zoomOut: Verkleinern
en:
  clearSearch: Clear search
  consentOpen: Privacy settings
  consentRequired: 'Show map: OpenStreetMap receives your IP address.'
  consentShow: Show map
  consentTitle: Privacy settings
  enterFullscreen: Enter fullscreen
  exitFullscreen: Exit fullscreen
  geocodeError: The address search failed. Please try again later.
  hintTouch: Use two fingers to move the map.
  hintWheel: Hold {key} and scroll to zoom the map.
  map: Map
  notFoundMessage: Nothing found.
  searchLabel: Enter address
  zoomIn: Zoom in
  zoomOut: Zoom out
</i18n>
