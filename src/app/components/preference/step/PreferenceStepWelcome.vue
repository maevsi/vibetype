<template>
  <LayoutPage>
    <div class="flex flex-col gap-4">
      <TypographyH3 class="text-center">
        {{ t('title') }}
      </TypographyH3>
      <TypographyBodyMedium>
        {{ t('description1') }}
      </TypographyBodyMedium>
      <TypographyBodyMedium
        class="text-center text-(--semantic-base-text-secondary)"
      >
        {{ t('description2') }}
      </TypographyBodyMedium>
    </div>
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
  button: Weiter
  description1: Lass uns gemeinsam VIBETYPE helfen, die perfekten Events für dich zu finden! Teile ein paar Infos über dich und deine Vorlieben, und wir schlagen dir Events vor, die genau deinen Geschmack treffen.
  description2: Du kannst deine Präferenzen jederzeit anpassen.
  title: Willkommen!
en:
  button: Next
  description1: Let's help VIBETYPE uncover the perfect events for you! Share a few details about yourself and your preferences, and we'll suggest events that suit your tastes.
  description2: You can fine-tune your preferences anytime.
  title: Welcome!
</i18n>
