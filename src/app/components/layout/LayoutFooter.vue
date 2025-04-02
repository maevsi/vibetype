<template>
  <footer class="flex gap-1">
    <Button
      :aria-label="t('terms')"
      class="px-3 py-1 text-[11px] font-semibold"
      :to="localePath('legal-notice')"
    >
      {{ t('terms') }}
    </Button>
    <Button
      :aria-label="t('imprint')"
      class="px-3 py-1 text-[11px] font-semibold"
      :to="localePath('index')"
    >
      {{ t('imprint') }}
    </Button>
    <Button
      :aria-label="t('policy')"
      class="px-3 py-1 text-[11px] font-semibold"
      :to="localePath('privacy-policy')"
    >
      {{ t('policy') }}
    </Button>
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
