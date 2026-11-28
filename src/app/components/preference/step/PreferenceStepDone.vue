<template>
  <LayoutPage>
    <div class="flex flex-col items-start gap-3">
      <div
        aria-hidden="true"
        class="flex size-16 items-center justify-center rounded-full bg-success-tint text-action-primary"
      >
        <AppIconCheckCircle class="size-8" />
      </div>
      <span class="text-heading-large text-balance">
        {{ t('title') }}
      </span>
      <span class="text-body text-fg-2">
        {{ t('description') }}
      </span>
      <span class="text-body-small text-fg-2">
        {{ t('hint') }}
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
  button: Zu meinen Vorschlägen!
  description: "@.upper:{'globalSiteName'} ist bereit, Dich zu den besten Veranstaltungen zu führen."
  hint: Deine Angaben kannst Du später jederzeit in Deinem Profil unter Einstellungen ändern.
  title: Alles klar, Du bist startklar!
en:
  button: To my suggestions!
  description: "@.upper:{'globalSiteName'} is ready to guide you to the best events."
  hint: You can change your answers anytime in your profile, under settings.
  title: All right, you're ready to go!
</i18n>
