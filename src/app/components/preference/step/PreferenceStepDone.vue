<template>
  <LayoutPage>
    <LayoutPageResult type="success">
      <template #title>
        {{ t('title') }}
      </template>
      <template #description>
        {{ t('description') }}
      </template>
    </LayoutPageResult>
    <template #bottom>
      <ButtonColored
        :aria-label="t('button')"
        class="w-full max-w-md"
        @click="emit('next')"
      >
        {{ t('button') }}
      </ButtonColored>
    </template>
  </LayoutPage>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  next: []
}>()

const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  button: Zu meinen Vorschlägen!
  description: "@.upper:{'globalSiteName'} ist bereit, dich zu den besten Events zu führen."
  title: Alles klar, du bist startklar!
en:
  button: To my suggestions!
  description: "@.upper:{'globalSiteName'} is ready to guide you to the best events."
  title: All right, you're ready to go!
</i18n>
