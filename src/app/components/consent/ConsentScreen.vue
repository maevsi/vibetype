<template>
  <div
    v-if="isVisible"
    :aria-labelledby="titleId"
    aria-modal="true"
    class="fixed inset-0 z-2000 flex flex-col overflow-y-auto bg-surface"
    data-testid="consent-screen"
    role="dialog"
  >
    <LayoutPage>
      <div class="flex flex-col items-start gap-3">
        <div
          class="flex size-16 items-center justify-center rounded-full bg-surface-raised text-action-primary"
        >
          <AppIconShieldCheck class="size-8" />
        </div>
        <h1 :id="titleId" class="text-heading-medium">
          {{ t('title') }}
        </h1>
        <p class="text-body text-fg-2">
          {{ t('description') }}
        </p>
      </div>
      <ConsentSettings />
    </LayoutPage>
  </div>
</template>

<script setup lang="ts">
import { isEqual } from 'ufo'

const { t } = useI18n()
const titleId = useId()
const localePath = useLocalePath()
const route = useRoute()
const { isDecided } = usePrivacyConsent()

// the pages that explain the choices stay readable
const isVisible = computed(
  () =>
    !isDecided.value &&
    !isEqual(route.path, localePath('docs-legal-imprint').toString()) &&
    !isEqual(route.path, localePath('docs-legal-privacy').toString()),
)
</script>

<i18n lang="yaml">
de:
  description: Vibetype verfolgt dich nicht über Apps oder Webseiten hinweg und zeigt keine Werbung. Entscheide, welche optionalen Funktionen du erlaubst. Das kannst du jederzeit in den Datenschutz-Einstellungen ändern.
  title: Deine Privatsphäre
en:
  description: Vibetype does not track you across apps or websites and shows no ads. Choose which optional features you allow. You can change this at any time in the privacy settings.
  title: Your privacy
</i18n>
