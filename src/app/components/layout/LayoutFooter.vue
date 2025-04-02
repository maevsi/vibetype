<template>
  <footer class="flex justify-center gap-1">
    <!-- TODO: add terms link -->
    <ButtonColored
      :aria-label="t('terms')"
      size="small"
      :to="localePath('legal-notice')"
      variant="tertiary"
    >
      {{ t('terms') }}
    </ButtonColored>
    <ButtonColored
      :aria-label="t('imprint')"
      size="small"
      :to="localePath('legal-notice')"
      variant="tertiary"
    >
      {{ t('imprint') }}
    </ButtonColored>
    <ButtonColored
      :aria-label="t('policy')"
      size="small"
      :to="localePath('privacy-policy')"
      variant="tertiary"
    >
      {{ t('policy') }}
    </ButtonColored>
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
