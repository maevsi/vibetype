<template>
  <footer class="flex gap-1">
    <LayoutFooterButton
      :aria-label="t('terms')"
      :to="localePath('legal-notice')"
    >
      {{ t('terms') }}
    </LayoutFooterButton>
    <LayoutFooterButton :aria-label="t('imprint')" :to="localePath('index')">
      {{ t('imprint') }}
    </LayoutFooterButton>
    <LayoutFooterButton
      :aria-label="t('policy')"
      :to="localePath('privacy-policy')"
    >
      {{ t('policy') }}
    </LayoutFooterButton>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<i18n lang="yaml">
de:
  terms: Nutzungsbedingungen
  imprint: Impressum
  policy: Datenschutzrichtlinie
en:
  terms: Terms
  imprint: Imprint
  policy: Policy
</i18n>
