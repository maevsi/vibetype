<template>
  <footer class="flex justify-center gap-1">
    <ButtonColored
      :aria-label="t('generalTermsAndConditions')"
      size="small"
      :to="localePath('docs-legal-general-terms-and-conditions')"
      variant="tertiary"
    >
      {{ t('generalTermsAndConditions') }}
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
      :aria-label="t('privacyPolicy')"
      size="small"
      :to="localePath('privacy-policy')"
      variant="tertiary"
    >
      {{ t('privacyPolicy') }}
    </ButtonColored>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<i18n lang="yaml">
de:
  generalTermsAndConditions: Nutzungsbedingungen
  imprint: Impressum
  privacyPolicy: Datenschutzrichtlinie
en:
  generalTermsAndConditions: Terms
  imprint: Imprint
  privacyPolicy: Policy
</i18n>
