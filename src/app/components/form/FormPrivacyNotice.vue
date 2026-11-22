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
  notice: Wie wir deine Daten verarbeiten, erfährst du in der {privacyPolicy}.
  privacyPolicy: Datenschutzerklärung
en:
  notice: You can find out how we process your data in the {privacyPolicy}.
  privacyPolicy: privacy policy
</i18n>
