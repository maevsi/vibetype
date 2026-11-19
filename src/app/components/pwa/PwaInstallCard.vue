<template>
  <!-- z-1000 for above map and level with the bottom navigation -->
  <section
    v-if="isVisible"
    :aria-label="t('title')"
    :class="[
      'fixed inset-x-4 z-1000 mx-auto flex max-w-md items-center gap-3 rounded-large border border-line bg-surface-raised p-4 shadow-lg lg:right-4 lg:bottom-4 lg:left-auto lg:mx-0 lg:w-full',
      isMenuRoute ? 'bottom-20' : 'bottom-4',
    ]"
  >
    <div
      aria-hidden="true"
      class="flex size-12 shrink-0 items-center justify-center rounded-large border border-line bg-surface"
    >
      <AppIconLogo class="size-8" />
    </div>
    <div class="min-w-0 flex-1">
      <p class="font-bold">{{ t('title') }}</p>
      <p class="text-sm text-fg-2">
        <template v-if="isIosBrowser">
          <i18n-t keypath="textIos">
            <template #icon>
              <AppIconArrowUpTray
                aria-hidden="true"
                class="inline-block align-text-bottom"
              />
            </template>
          </i18n-t>
        </template>
        <template v-else>{{ t('text') }}</template>
      </p>
    </div>
    <AppButton
      v-if="!isIosBrowser"
      :aria-label="t('install')"
      size="small"
      @click="$pwa?.install()"
    >
      {{ t('install') }}
    </AppButton>
    <AppButton
      :aria-label="t('close')"
      size="icon"
      variant="secondary"
      @click="dismiss"
    >
      <AppIconXMark aria-hidden="true" />
    </AppButton>
  </section>
</template>

<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'

const { $pwa } = useNuxtApp()
const { isApp } = usePlatform()
const { t } = useI18n()
const runtimeConfig = useRuntimeConfig()

const isMenuRoute = useIsMenuRoute()

// `useLocalStorage` only touches the storage on the client, and the card only shows there
const isDismissed = useLocalStorage(`${SITE_NAME}-pwa-install-dismissed`, false)

// client-only facts, resolved after mount to keep hydration stable
const isIosBrowser = ref(false)
onMounted(() => {
  // Safari on iOS and iPadOS never fires `beforeinstallprompt`, so the card explains the manual way instead
  isIosBrowser.value =
    (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
    !window.matchMedia('(display-mode: standalone)').matches &&
    !('standalone' in navigator && navigator.standalone)
})

const isVisible = computed(
  () =>
    !runtimeConfig.public.vio.isTesting &&
    !isApp &&
    !isDismissed.value &&
    ($pwa?.showInstallPrompt || isIosBrowser.value),
)

const dismiss = () => {
  $pwa?.cancelInstall()
  try {
    isDismissed.value = true
  } catch {
    // storage unavailable (e.g. private mode), so the dismissal only lasts until reload
  }
}
</script>

<i18n lang="yaml">
de:
  close: Schließen
  install: Installieren
  text: Füge die App zum Startbildschirm hinzu, für schnellen Zugriff.
  textIos: Tippe auf Teilen {icon}, dann auf „Zum Home-Bildschirm“.
  title: "@.upper:{'globalSiteName'} installieren"
en:
  close: Close
  install: Install
  text: Add to home screen for quick access.
  textIos: Tap Share {icon}, then Add to Home Screen.
  title: Install @.upper:{'globalSiteName'}
</i18n>
