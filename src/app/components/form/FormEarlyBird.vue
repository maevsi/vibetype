<template>
  <form ref="form" class="flex flex-col gap-4" @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="name">
      <FormItem>
        <FormLabel>
          <TypographySubtitleMedium>
            {{ t('name') }}
          </TypographySubtitleMedium>
        </FormLabel>
        <FormControl>
          <AppInput v-bind="componentField" type="text" />
        </FormControl>
        <TypographyLabel v-slot="attributes">
          <FormMessage v-bind="attributes" />
        </TypographyLabel>
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="emailAddress">
      <FormItem>
        <FormLabel>
          <TypographySubtitleMedium>
            {{ t('emailAddress') }}
          </TypographySubtitleMedium>
        </FormLabel>
        <FormControl>
          <AppInput v-bind="componentField" type="text" />
        </FormControl>
        <TypographyLabel v-slot="attributes">
          <FormMessage v-bind="attributes" />
        </TypographyLabel>
      </FormItem>
    </FormField>
    <FormField
      v-slot="{ value, handleChange }"
      name="agreement"
      type="checkbox"
    >
      <FormItem>
        <div class="flex gap-3">
          <FormControl class="mt-1">
            <AppCheckbox
              :model-value="value"
              required
              @update:model-value="handleChange"
            />
          </FormControl>
          <FormLabel>
            <TypographySubtitleMedium>
              {{ t('agreement') }}
            </TypographySubtitleMedium>
          </FormLabel>
        </div>
        <TypographyLabel v-slot="attributes">
          <FormMessage v-bind="attributes" />
        </TypographyLabel>
      </FormItem>
    </FormField>
  </form>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'

const emit = defineEmits<{
  submit: []
  success: []
}>()

const fireAlert = useFireAlert()
const { t } = useI18n()
const templateForm = useTemplateRef('form')

// form
const submit = () => {
  templateForm.value?.dispatchEvent(
    new Event('submit', { bubbles: true, cancelable: true }),
  )
}
const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(schemaFormEarlyBird),
})
const onSubmit = handleSubmit(async (values) => {
  try {
    await $fetch('/api/service/monday/early-bird', {
      method: 'POST',
      body: values,
    })
    emit('success')
  } catch (error) {
    // TODO: implement form error page
    await fireAlert({
      error,
      level: 'error',
      text: t('error'),
      title: t('globalError'),
    })
  }
})

defineExpose({
  submit,
})
</script>

<i18n lang="yaml">
de:
  agreement: Mit deiner Teilnahme stimmst du zu, dass wir deine Kontaktdaten speichern und dich im Rahmen des Programms kontaktieren dürfen.
  error: Die Anmeldung für das Early Bird-Programm scheint nicht geklappt zu haben. Bitte versuche es noch einmal oder wende dich an den Support, wenn das Problem weiterhin besteht.
  emailAddress: E-Mail-Adresse
  name: Name
en:
  agreement: By participating, you agree that we may save your contact details and contact you as part of the program.
  error: The registration for the Early Bird program does not seem to have worked. Please try again or contact support if the problem persists.
  emailAddress: Email address
  name: Name
</i18n>
