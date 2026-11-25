<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsArrowsPointingIn
      v-bind="attributes"
      :aria-label="t('ariaLabel')"
    />
  </AppIcon>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  ariaLabel: Pfeile nach innen
en:
  ariaLabel: Arrows pointing in
</i18n>
