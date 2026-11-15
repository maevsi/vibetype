<template>
  <LayoutPage>
    <div class="flex flex-col gap-4">
      <span class="text-center text-heading-medium text-balance">
        {{ t('title') }}
      </span>
      <span class="text-body">
        {{ t('description1') }}
      </span>
      <span class="text-center text-body text-fg-2">
        {{ t('description2') }}
      </span>
    </div>
    <template #bottom>
      <AppButton
        :aria-label="t('button')"
        class="w-full max-w-md"
        @click="emit('next')"
      >
        {{ t('button') }}
      </AppButton>
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
  button: Weiter
  description1: Lass uns gemeinsam @.upper:{'globalSiteName'} helfen, die perfekten Events für dich zu finden! Teile ein paar Infos über dich und deine Vorlieben, und wir schlagen dir Events vor, die genau deinen Geschmack treffen.
  description2: Du kannst deine Präferenzen jederzeit anpassen.
  title: Willkommen!
en:
  button: Next
  description1: Let's help @.upper:{'globalSiteName'} uncover the perfect events for you! Share a few details about yourself and your preferences, and we'll suggest events that suit your tastes.
  description2: You can fine-tune your preferences anytime.
  title: Welcome!
</i18n>
