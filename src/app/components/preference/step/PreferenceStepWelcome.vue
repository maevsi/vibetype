<template>
  <LayoutPage>
    <div class="flex flex-col items-start gap-3">
      <div
        aria-hidden="true"
        class="flex size-16 items-center justify-center rounded-full bg-surface-raised text-action-primary"
      >
        <AppIconNetworkIntelligence class="size-8" />
      </div>
      <span class="text-heading-large text-balance">
        {{ t('title') }}
      </span>
      <span class="text-body text-fg-2">
        {{ t('description1') }}
      </span>
      <span class="text-caption text-fg-3">
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
      <AppButton
        :aria-label="t('skip')"
        class="w-full max-w-md data-[variant=secondary]:bg-surface"
        variant="secondary"
        @click="emit('skip')"
      >
        {{ t('skip') }}
      </AppButton>
    </template>
  </LayoutPage>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  next: []
  skip: []
}>()

const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  button: Start
  description1: Lass uns gemeinsam @.upper:{'globalSiteName'} helfen, die perfekten Events für dich zu finden! Teile ein paar Infos über dich und deine Vorlieben, und wir schlagen dir Events vor, die genau deinen Geschmack treffen.
  description2: Du kannst deine Präferenzen jederzeit anpassen.
  skip: Überspringen
  title: Lass uns deinen Vibe einrichten
en:
  button: Start
  description1: Let's help @.upper:{'globalSiteName'} uncover the perfect events for you! Share a few details about yourself and your preferences, and we'll suggest events that suit your tastes.
  description2: You can fine-tune your preferences anytime.
  skip: Skip
  title: Let's set up your vibe
</i18n>
