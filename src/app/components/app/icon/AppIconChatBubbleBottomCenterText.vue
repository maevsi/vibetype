<template>
  <AppIcon v-slot="attributes">
    <IHeroiconsChatBubbleBottomCenterText
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
  ariaLabel: Sprechblase mit Text
en:
  ariaLabel: Chat bubble with text
</i18n>
