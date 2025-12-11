<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsEllipsisVertical
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
  ariaLabel: Mehr Optionen (vertikal)
en:
  ariaLabel: More options
</i18n>
