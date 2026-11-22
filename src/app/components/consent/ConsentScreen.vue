<template>
  <!-- the scroll lock disables pointer events on the body, which this screen would otherwise inherit -->
  <div
    v-if="isVisible"
    ref="screenElement"
    :aria-labelledby="titleId"
    aria-modal="true"
    class="pointer-events-auto fixed inset-0 z-2000 flex flex-col overflow-y-auto overscroll-contain bg-surface"
    data-testid="consent-screen"
    role="dialog"
  >
    <FocusScope as-child loop trapped>
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
    </FocusScope>
  </div>
</template>

<script setup lang="ts">
import { FocusScope, useBodyScrollLock } from 'reka-ui'
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

const screenElement = useTemplateRef<HTMLElement>('screenElement')
const isScrollLocked = useBodyScrollLock()

// the page underneath neither scrolls nor takes focus or assistive technology's attention
watch(
  [isVisible, screenElement],
  ([isVisibleCurrent, screenElementCurrent], _previous, onCleanup) => {
    isScrollLocked.value = isVisibleCurrent

    if (!isVisibleCurrent || !screenElementCurrent) return

    const siblings: Element[] = []

    for (
      let node: Element | null = screenElementCurrent;
      node && node !== document.body;
      node = node.parentElement
    ) {
      for (const sibling of node.parentElement?.children ?? []) {
        if (sibling !== node && !sibling.hasAttribute('inert')) {
          sibling.setAttribute('inert', '')
          siblings.push(sibling)
        }
      }
    }

    onCleanup(() => {
      for (const sibling of siblings) sibling.removeAttribute('inert')
    })
  },
  { flush: 'post' },
)
</script>

<i18n lang="yaml">
de:
  description: "@.upper:{'globalSiteName'} verfolgt dich nicht über Apps oder Webseiten hinweg und zeigt keine Werbung. Entscheide, welche optionalen Funktionen du erlaubst. Das kannst du jederzeit in den Datenschutz-Einstellungen ändern."
  title: Deine Privatsphäre
en:
  description: "@.upper:{'globalSiteName'} does not track you across apps or websites and shows no ads. Choose which optional features you allow. You can change this at any time in the privacy settings."
  title: Your privacy
</i18n>
