<template>
  <AppButton
    v-if="!isApp"
    :aria-label="t('appInstall')"
    :to="localePath('docs-app')"
    variant="secondary"
  >
    {{ t('appInstall') }}
    <template #suffix>
      <AppIconArrowRight />
    </template>
  </AppButton>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const { isApp } = usePlatform()
</script>

<i18n lang="yaml">
de:
  appInstall: "@.upper:{'globalSiteName'}-App installieren, um nichts zu verpassen"
en:
  appInstall: Install the @.upper:{'globalSiteName'} app, don't miss any news
</i18n>
