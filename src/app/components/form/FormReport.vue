<template>
  <form ref="form" class="flex flex-col gap-4" @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="name">
      <FormItem>
        <FormLabel>
          <TypographySubtitleSmall>
            {{ t('name') }}
          </TypographySubtitleSmall>
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
          <div class="flex flex-col gap-1">
            <TypographySubtitleSmall>
              {{ t('emailAddress') }}
            </TypographySubtitleSmall>
            <TypographyCaption>
              {{ t('emailCaption') }}
            </TypographyCaption>
          </div>
        </FormLabel>
        <FormControl>
          <AppInput v-bind="componentField" type="text" />
        </FormControl>
        <TypographyLabel v-slot="attributes">
          <FormMessage v-bind="attributes" />
        </TypographyLabel>
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="message">
      <FormItem>
        <FormLabel>
          <div class="flex flex-col gap-1">
            <TypographySubtitleSmall>
              {{ t('message') }}
            </TypographySubtitleSmall>
            <TypographyCaption>
              {{ t('messageCaption') }}
            </TypographyCaption>
          </div>
        </FormLabel>
        <FormControl>
          <Textarea v-bind="componentField" />
        </FormControl>
        <TypographyLabel v-slot="attributes">
          <FormMessage v-bind="attributes" />
        </TypographyLabel>
      </FormItem>
    </FormField>
    <FormField
      v-slot="{ value, handleChange }"
      name="privacyConsent"
      type="checkbox"
    >
      <FormItem>
        <div class="flex gap-3">
          <FormControl class="mt-1">
            <AppCheckbox
              :model-value="value"
              @update:model-value="handleChange"
            />
          </FormControl>
          <FormLabel>
            <TypographySubtitleMedium>
              {{ t('privacyConsent') }}
            </TypographySubtitleMedium>
          </FormLabel>
        </div>
        <TypographyLabel v-slot="attributes">
          <FormMessage v-bind="attributes" />
        </TypographyLabel>
      </FormItem>
    </FormField>
    <FormField
      v-slot="{ value, handleChange }"
      name="accuracyConfirmation"
      type="checkbox"
    >
      <FormItem>
        <div class="flex gap-3">
          <FormControl class="mt-1">
            <AppCheckbox
              :model-value="value"
              @update:model-value="handleChange"
            />
          </FormControl>
          <FormLabel>
            <TypographySubtitleMedium>
              {{ t('accuracyConfirmation') }}
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
  success: []
}>()

const modelError = defineModel<Error>('error')

const { t } = useI18n()
const templateForm = useTemplateRef('form')

// form
const submit = () => {
  templateForm.value?.dispatchEvent(
    new Event('submit', { bubbles: true, cancelable: true }),
  )
}
const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(schemaFormReport),
})
const onSubmit = handleSubmit(async (values) => {
  try {
    await $fetch('/api/service/monday/report', {
      method: 'POST',
      body: values,
    })
    emit('success')
  } catch (error) {
    modelError.value = error as Error
  }
})

defineExpose({
  submit,
})
</script>

<i18n lang="yaml">
de:
  accuracyConfirmation: Ich stelle sicher, nach bestem Wissen und Gewissen, dass alle oben offengelegten Informationen korrekt und wahrheitsgemäß sind.
  emailAddress: Ihre E-Mail-Adresse
  emailCaption: Wird verwendet, um Ihnen eine Empfangsbestätigung und Updates zu Ihrer Meldung zu senden.
  message: Ihre Inhaltsmeldung
  messageCaption: Beschreiben Sie den beanstandeten Inhalt präzise, damit wir eventuelle Probleme so schnell wie möglich identifizieren und lösen können.
  name: Name
  privacyConsent: Mit der Übermittlung erkenne ich an, dass maevsi meine Daten in Übereinstimmung mit Vibetypes Datenschutzrichtlinie verarbeiten wird.
en:
  accuracyConfirmation: I ensure, to the best of my ability and knowledge, that all the information disclosed above is accurate and true.
  emailAddress: Your email address
  emailCaption: Used to send you a confirmation of reception and updates to your report.
  message: Your content report
  messageCaption: Describe the offending content precisely so we can identify and resolve any issue as soon as possible.
  name: Name
  privacyConsent: By submitting, I acknowledge that maevsi will process my data in accordance with Vibetype's Privacy Policy.
</i18n>
