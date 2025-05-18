<template>
  <LayoutPage>
    <LayoutPageResult type="success">
      <TypographyBodySmall>
        {{ t('description2') }}
      </TypographyBodySmall>
      <template #description>
        {{ t('description1') }}
      </template>
      <template #title>
        {{ t('title') }}
      </template>
    </LayoutPageResult>
    <template #bottom>
      <ButtonColored
        :aria-label="t('button')"
        class="w-full max-w-md"
        @click="store.navigateBack"
      >
        {{ t('button') }}
      </ButtonColored>
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
