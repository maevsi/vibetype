<template>
  <div class="flex flex-1 flex-col justify-center">
    <!-- <LayoutPageTitle :title="title" /> -->
    <div class="flex flex-col gap-8 rounded-lg p-8 text-center">
      <div class="flex flex-col gap-4">
        <div class="text-4xl leading-tight font-bold tracking-tight">
          {{ t('descriptionTitle') }}
        </div>
        <div>
          {{ t('descriptionContent') }}
        </div>
      </div>
      <div class="flex flex-col justify-center gap-4 lg:flex-row lg:gap-8">
        <CardButton
          is-external
          :title="t('appStore')"
          to="https://testflight.apple.com/join/kkStPDoc"
        >
          <AppIconAppStore />
        </CardButton>
        <CardButton
          class="lg:h-32"
          is-external
          :title="t('googlePlay')"
          to="https://play.google.com/store/apps/details?id=si.maev.twa"
        >
          <AppIconGooglePlay />
        </CardButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UAParser } from 'ua-parser-js'

// compiler
definePageMeta({
  layout: 'plain',
})

// redirect
const { isApp } = usePlatform()

if (isApp) {
  await navigateTo('/', { replace: true })
}

const { ssrContext } = useNuxtApp()
const userAgent = import.meta.server
  ? ssrContext?.event.headers.get('user-agent')
  : navigator.userAgent

if (userAgent) {
  const { os } = UAParser(userAgent)

  if (os.is('Android')) {
    await navigateTo(
      'https://play.google.com/store/apps/details?id=si.maev.twa',
      { external: true, replace: true },
    )
  }

  if (os.is('iOS')) {
    await navigateTo('https://testflight.apple.com/join/kkStPDoc', {
      external: true,
      replace: true,
    })
  }

  console.debug(
    'Not redirecting, neither Android nor iOS detected',
    JSON.stringify({ os, userAgent }),
  )
}

// template
const { t } = useI18n()
const title = t('title')
useHeadDefault({ title })
</script>

<i18n lang="yaml">
de:
  appStore: "@.upper:{'globalSiteName'} im App Store"
  descriptionContent: Installiere @.upper:{'globalSiteName'} jetzt als App.
  descriptionTitle: Verpasse keine Veranstaltung.
  googlePlay: "@.upper:{'globalSiteName'} in Google Play"
  title: App
en:
  appStore: "@.upper:{'globalSiteName'} on the App Store"
  descriptionContent: Install the @.upper:{'globalSiteName'} app now.
  descriptionTitle: Don't miss any events.
  googlePlay: "@.upper:{'globalSiteName'} on Google Play"
  title: App
</i18n>
