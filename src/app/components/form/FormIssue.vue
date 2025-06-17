<template>
  <form ref="form" class="flex flex-col gap-4" @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="requestor">
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
    <FormField v-slot="{ componentField }" name="email">
      <FormItem>
        <FormLabel>
          <TypographySubtitleSmall>
            {{ t('email') }}
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
    <FormField v-slot="{ componentField }" name="issueName">
      <FormItem>
        <FormLabel>
          <TypographySubtitleSmall>
            {{ t('subject') }}
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
    <FormField v-slot="{ componentField }" name="description">
      <FormItem>
        <FormLabel>
          <TypographySubtitleSmall>
            {{ t('description') }}
          </TypographySubtitleSmall>
        </FormLabel>
        <FormControl>
          <Textarea v-bind="componentField" />
        </FormControl>
        <TypographyLabel v-slot="attributes">
          <FormMessage v-bind="attributes" />
        </TypographyLabel>
      </FormItem>
    </FormField>
    <FormField v-slot="{ value, handleChange }" name="consent" type="checkbox">
      <FormItem>
        <div class="flex gap-3">
          <FormControl class="mt-1">
            <Checkbox :model-value="value" @update:model-value="handleChange" />
          </FormControl>
          <FormLabel>
            <TypographySubtitleMedium>
              {{ t('consent') }}
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
  validationSchema: toTypedSchema(schemaFormIssue),
})
const onSubmit = handleSubmit(async (values) => {
  try {
    await $fetch('/api/service/monday/issue', {
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
  consent: Ich bin damit einverstanden, dass meine persönlichen Daten zum Zweck der Kontaktaufnahme und für statistische Analysen verwendet werden.
  description: Beschreibung
  email: Wie lautet Ihre E-Mail-Adresse?
  name: Wie ist Ihr Name?
  subject: Betreff
en:
  consent: I consent that my personal data is used for the purpose of contacting me and for statistical analysis.
  description: Description
  email: What's your email?
  name: What's your name?
  subject: Subject
</i18n>
