<template>
  <footer class="flex justify-center gap-1">
    <ButtonColored
      :aria-label="t('terms')"
      size="small"
      :to="localePath('docs-legal-terms')"
      variant="tertiary"
    >
      {{ t('terms') }}
    </ButtonColored>
    <ButtonColored
      :aria-label="t('imprint')"
      size="small"
      :to="localePath('docs-legal-imprint')"
      variant="tertiary"
    >
      {{ t('imprint') }}
    </ButtonColored>
    <ButtonColored
      :aria-label="t('privacy')"
      size="small"
      :to="localePath('docs-legal-privacy')"
      variant="tertiary"
    >
      {{ t('privacy') }}
    </ButtonColored>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<i18n lang="yaml">
de:
  imprint: Impressum
  privacy: Datenschutz
  terms: Nutzungsbedingungen
en:
  imprint: Imprint
  privacy: Privacy
  terms: Terms
</i18n>
