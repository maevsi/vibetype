<template>
  <div v-if="!isMounted" :class="cn('flex justify-center', classComputed)">
    <AppLoaderLogo class="size-8" />
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
        <Teleport v-if="overlayElement" :to="overlayElement">
          <slot />
        </Teleport>
        <div
          class="pointer-events-none absolute inset-x-4 bottom-4 z-1000 mx-auto w-fit max-w-full rounded-pill bg-black/70 px-4 py-2 text-center text-body-small text-white transition-opacity duration-300"
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

import type { Control, FullscreenControl, Map, LatLng } from 'leaflet'
import type { DeepReadonly, HtmlHTMLAttributes, WatchStopHandle } from 'vue'

import type { GeocodeResult } from '#shared/utils/address'

import { cn } from '@/utils/shadcn'

import markerIcon from '~/assets/icons/map-pin.svg?raw'

const locateIcon =
  '<svg aria-hidden="true" class="size-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="12" cy="12" r="8"/></svg>'

export type AppMapEvent = {
  accountByCreatedBy?: { username: string } | null
  addressByAddressId?: {
    location?: {
      latitude: number
      longitude: number
    } | null
  } | null
  name: string
  slug?: string
}
export type AppMapProps = {
  events?: readonly DeepReadonly<AppMapEvent>[]
  geocoder?: boolean
  isZoomControlHidden?: boolean
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
  isZoomControlHidden = false,
  positionInitial = {
    latitude: 51.12421275782688,
    longitude: 10.283203125000002,
    zoomLevel: 6,
  },
} = defineProps<AppMapProps & { class?: HtmlHTMLAttributes['class'] }>()
const emit = defineEmits<{
  geocode: [result: GeocodeResult]
}>()
const isGeocodeListened = !!getCurrentInstance()?.vnode.props?.onGeocode
const classComputed = computed(() => cn('h-96 w-full text-fg-1', classProps))

const templateIdMap = useId()
const map = ref<Map>()
// leaflet isolates its container, so only an element inside it can lie between the tiles (z-index 400) and the controls (z-index 1000)
const overlayElement = ref<HTMLElement>()
const mapCenter = ref<LatLng>()
const mapZoom = ref<number>()
// stays false until the view differs from the initial one, so programmatic initial centring never counts as input
const isPositionSet = ref(false)

const { t, locale } = useI18n()
const colorMode = useColorMode()
const isMounted = useMounted()
const { isFeatureEnabled } = useFeatureFlags()
const localePath = useLocalePath()
const router = useRouter()

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
let locateControl: Control | undefined
let locateButton: HTMLAnchorElement | undefined
// leaflet translates its texts only when it renders them, so a locale change needs the controls re-added
watch(locale, () => {
  const mapLocal = map.value
  if (!mapLocal) return
  mapLocal.getContainer().setAttribute('aria-label', t('map'))
  mapLocal.zoomControl?.remove().addTo(mapLocal)
  fullscreenControl?.remove().addTo(mapLocal)
  if (locateButton) {
    locateButton.title = t('locate')
    locateButton.setAttribute('aria-label', t('locate'))
  }
})
const locate = () => {
  const mapLocal = map.value
  if (!mapLocal) return

  navigator.geolocation.getCurrentPosition(
    async ({ coords: { latitude, longitude } }) => {
      mapLocal.setView([latitude, longitude], 16)
      // the position may equal the initial centre, which the move handler would not count as input
      isPositionSet.value = true

      // without a listener the lookup would only spend a slot of the rate limit shared by all users
      if (!isGeocodeListened) return

      try {
        const result = await $fetch<{
          address?: Record<string, unknown>
          display_name?: string
          name?: string
        }>('/api/service/nominatim/reverse', {
          query: {
            'accept-language': locale.value,
            lat: latitude,
            lon: longitude,
          },
        })

        if (!result.display_name) throw new Error('no address found')

        emit('geocode', {
          ...getAddressFromNominatim(result),
          label: result.display_name,
        })
      } catch {
        toast.error(t('geocodeError'))
      }
    },
    ({ code, PERMISSION_DENIED, POSITION_UNAVAILABLE }) =>
      toast.error(
        code === PERMISSION_DENIED
          ? t('locateDenied')
          : code === POSITION_UNAVAILABLE
            ? t('locateUnavailable')
            : t('locateTimeout'),
      ),
    { timeout: 10000 },
  )
}
// built from elements, as event names are user input that must not become markup
const getMarkerPopup = (event: DeepReadonly<AppMapEvent>) => {
  const username = event.accountByCreatedBy?.username
  if (!username || !event.slug) {
    const name = document.createElement('span')
    name.textContent = event.name
    return name
  }
  const link = document.createElement('a')
  link.textContent = event.name
  link.href = router.resolve(
    localePath({
      name: 'event-view-username-event_name',
      params: { username, event_name: event.slug },
    }),
  ).href
  // the href keeps opening in a new tab possible, while a plain click stays in the app instead of reloading it
  link.addEventListener('click', (clickEvent) => {
    if (clickEvent.ctrlKey || clickEvent.metaKey || clickEvent.shiftKey) return
    clickEvent.preventDefault()
    navigateTo(link.getAttribute('href'))
  })
  return link
}
let stopMarkerWatch: WatchStopHandle | undefined
const initialize = async () => {
  const {
    Control,
    DivIcon,
    DomEvent,
    DomUtil,
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
    zoomControl: !isZoomControlHidden,
  }).setView(
    [positionInitial.latitude, positionInitial.longitude],
    positionInitial.zoomLevel,
  ) // Kassel: 51.3144643, 9.4957866
  overlayElement.value = DomUtil.create(
    'div',
    'pointer-events-none absolute inset-0 z-500',
    map.value.getContainer(),
  )
  new TileLayer('/api/service/openstreetmap/tile/{z}/{x}/{y}.png', {
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
      // an always open bar has no toggle that could close it and drop the typed text instead of searching
      style: 'bar',
      theme: colorMode.value === 'dark' ? 'dark' : 'light',
      updateMap: false,
    })
    geosearch.addTo(map.value)
    // the bar has no search button, so touch keyboards label their enter key as the search
    geosearch.searchElement.input.enterKeyHint = 'search'
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
  // the privacy policy does not cover reading the device position and sending it to the reverse geocoder yet
  if (
    // the event form searches in a field of its own, so its map has no search control but still takes the position
    (geocoder || isGeocodeListened) &&
    'geolocation' in navigator &&
    isFeatureEnabled('location-live').value
  ) {
    locateControl = new Control({ position: 'topleft' })
    locateControl.onAdd = () => {
      const container = DomUtil.create('div', 'leaflet-bar feature-preview')
      const button = DomUtil.create(
        'a',
        'flex! items-center justify-center',
        container,
      )
      button.href = '#'
      button.role = 'button'
      button.title = t('locate')
      button.setAttribute('aria-label', t('locate'))
      button.innerHTML = locateIcon
      const onActivate = (activateEvent: Event) => {
        activateEvent.preventDefault()
        locate()
      }
      DomEvent.on(button, 'click', onActivate)
      DomEvent.on(button, 'keydown', (keyboardEvent) => {
        if ((keyboardEvent as KeyboardEvent).key === ' ')
          onActivate(keyboardEvent)
      })
      DomEvent.disableClickPropagation(container)
      locateButton = button
      return container
    }
    locateControl.addTo(map.value)
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
    popupAnchor: [0, -22],
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
        // leaflet makes the marker a keyboard button, so it needs the name of the event it marks
        new Marker([location.latitude, location.longitude], {
          icon,
          title: event.name,
        })
          .bindPopup(() => getMarkerPopup(event))
          .addTo(markerLayer)
      }
      if (!positions.length) return
      isFitting = true
      map.value?.fitBounds(positions, { maxZoom: 15, padding: [30, 30] })
      isFitting = false
    },
    { immediate: true },
  )
}

watch(
  isMounted,
  async (mounted) => {
    if (!mounted) return
    await nextTick()
    if (!map.value) await initialize()
  },
  { immediate: true },
)
// the marker watch starts after an await, so vue does not stop it with the component
onBeforeUnmount(() => {
  stopMarkerWatch?.()
  overlayElement.value = undefined
  map.value?.remove()
})
defineExpose({ isPositionSet, map, mapCenter, mapZoom })
</script>

<style>
@import url('leaflet/dist/leaflet.css');
@import url('leaflet-geosearch/assets/css/leaflet.css');

/* leaflet styles its buttons and attribution only light, so dark mode takes the search control's dark colors */
.dark .leaflet-control-attribution {
  background-color: #2b2b2be6;
  color: #e8e8e8;
}

.dark .leaflet-control-attribution a {
  color: #8cc8ff;
}

.dark .leaflet-bar,
.dark .leaflet-bar a {
  border-color: #555;
}

.dark .leaflet-bar a {
  background-color: #2b2b2b;
  color: #e8e8e8;
}

.dark .leaflet-bar a:hover,
.dark .leaflet-bar a:focus {
  background-color: #3a3a3a;
}

.dark .leaflet-bar a.leaflet-disabled {
  background-color: #2b2b2b;
  color: #777;
}
</style>

<i18n lang="yaml">
de:
  clearSearch: Suche leeren
  enterFullscreen: Vollbild öffnen
  exitFullscreen: Vollbild beenden
  geocodeError: Die Adresssuche ist fehlgeschlagen. Bitte versuche es später erneut.
  hintTouch: Verschiebe die Karte mit zwei Fingern.
  hintWheel: Zoome die Karte mit {key} + Scrollen.
  locate: Meinen Standort verwenden
  locateDenied: Der Zugriff auf Deinen Standort wurde verweigert. Erlaube ihn in den Einstellungen Deines Browsers.
  locateTimeout: Dein Standort konnte nicht rechtzeitig ermittelt werden. Bitte versuche es erneut.
  locateUnavailable: Dein Standort ist derzeit nicht verfügbar.
  map: Karte
  notFoundMessage: Nichts gefunden.
  searchLabel: Adresse eingeben
  zoomIn: Vergrößern
  zoomOut: Verkleinern
en:
  clearSearch: Clear search
  enterFullscreen: Enter fullscreen
  exitFullscreen: Exit fullscreen
  geocodeError: The address search failed. Please try again later.
  hintTouch: Use two fingers to move the map.
  hintWheel: Hold {key} and scroll to zoom the map.
  locate: Use my current location
  locateDenied: Access to your location was denied. Allow it in your browser settings.
  locateTimeout: Your location could not be determined in time. Please try again.
  locateUnavailable: Your location is currently unavailable.
  map: Map
  notFoundMessage: Nothing found.
  searchLabel: Enter address
  zoomIn: Zoom in
  zoomOut: Zoom out
</i18n>
