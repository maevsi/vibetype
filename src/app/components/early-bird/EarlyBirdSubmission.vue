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
        {{ t('description1') }}
      </span>
      <span class="text-body-small text-fg-3">
        {{ t('description2') }}
      </span>
    </div>
    <template #bottom>
      <AppButton
        :aria-label="t('button')"
        class="w-full max-w-md"
        @click="store.navigateBack"
      >
        {{ t('button') }}
      </AppButton>
    </template>
  </LayoutPage>
</template>

<script setup lang="ts">
const store = useStore()
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  button: OK
  description1: Vielen Dank für Ihre Teilnahme am Early Bird Programm!
  description2: Wenn du für eine unserer Initiativen ausgewählt wirst, melden wir uns per E-Mail bei dir. Bleib gespannt – wir freuen uns auf die Zusammenarbeit!
  title: Ihre Anmeldung wurde erfolgreich eingereicht!
en:
  button: OK
  description1: Thank you for joining the Early Bird program!
  description2: If you are selected for one of our initiatives, we will contact you by e-mail. Stay tuned - we look forward to working with you!
  title: Your application was submitted successfully!
</i18n>
