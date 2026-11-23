<template>
  <i18n-t class="text-center text-body-small" keypath="notice" tag="p">
    <template #privacyPolicy>
      <AppLink is-underlined :to="localePath('docs-legal-privacy')">
        {{ t('privacyPolicy') }}
      </AppLink>
    </template>
  </i18n-t>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<i18n lang="yaml">
de:
  notice: Wir gehen sorgsam mit Deinen Daten um. Wie genau, erklärt die {privacyPolicy}.
  privacyPolicy: Datenschutzerklärung
en:
  notice: We handle your data with care. The {privacyPolicy} explains how.
  privacyPolicy: privacy policy
</i18n>
