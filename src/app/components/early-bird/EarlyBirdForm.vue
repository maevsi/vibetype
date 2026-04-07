<template>
  <LayoutPage>
    <div class="flex flex-col gap-3">
      <TypographyH6 class="text-center">
        {{ t('title') }}
      </TypographyH6>
      <TypographyBodyMedium>
        {{ t('description') }}
      </TypographyBodyMedium>
    </div>
    <FormEarlyBird ref="form" v-model:error="error" @success="emit('next')" />
    <template #bottom>
      <ButtonColored
        :aria-label="t('button')"
        class="w-full max-w-md"
        @click="templateForm?.submit"
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

const alertError = useAlertError()
const error = ref<Error>()
const { t } = useI18n()
const templateForm = useTemplateRef('form')

watch(error, (value) => {
  if (value) {
    alertError({ error: value, messageI18n: t('error') })
  }
})
</script>

<i18n lang="yaml">
de:
  button: Weiter
  description: Bitte gib uns deinen Namen und deine E-Mail-Adresse, damit wir dich über Updates und deinen Beitrag im Früher Vogel Programm informieren können.
  error: Die Registrierung konnte nicht abgeschickt werden.
  title: Wir freuen uns, dich dabei zu haben!
en:
  button: Next
  description: Please provide us with your name and email so that we can inform you about updates and your contribution to the Early Bird program.
  error: The registration could not be submitted.
  title: We are happy to have you on the program!
</i18n>
