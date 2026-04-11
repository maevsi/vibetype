<template>
  <form ref="formRef" class="flex flex-col gap-4" @submit="onSubmit">
    <form.Field v-slot="{ field }" name="userName">
      <Field>
        <FieldLabel>
          <TypographySubtitleSmall>
            {{ t('userName') }}
          </TypographySubtitleSmall>
        </FieldLabel>
        <FieldContent>
          <Input
            type="text"
            :model-value="field.state.value"
            :aria-invalid="isFieldInvalid(field)"
            @blur="field.handleBlur"
            @input="
              field.handleChange(($event.target as HTMLInputElement).value)
            "
          />
        </FieldContent>
        <FieldError
          v-if="isFieldInvalid(field)"
          :errors="field.state.meta.errors"
        />
      </Field>
    </form.Field>
    <form.Field v-slot="{ field }" name="userEmailAddress">
      <Field>
        <FieldLabel>
          <TypographySubtitleSmall>
            {{ t('userEmailAddress') }}
          </TypographySubtitleSmall>
        </FieldLabel>
        <FieldContent>
          <Input
            type="email"
            :model-value="field.state.value"
            :aria-invalid="isFieldInvalid(field)"
            @blur="field.handleBlur"
            @input="
              field.handleChange(($event.target as HTMLInputElement).value)
            "
          />
        </FieldContent>
        <FieldError
          v-if="isFieldInvalid(field)"
          :errors="field.state.meta.errors"
        />
      </Field>
    </form.Field>
    <form.Field v-slot="{ field }" name="userConsent">
      <Field>
        <div class="flex gap-3">
          <FieldContent class="mt-1">
            <AppCheckbox
              :model-value="field.state.value"
              required
              :aria-invalid="isFieldInvalid(field)"
              @update:model-value="
                (checked) => field.handleChange(checked === true)
              "
            />
          </FieldContent>
          <FieldLabel>
            <TypographySubtitleSmall>
              <i18n-t keypath="userConsent">
                <template #contactForm>
                  <AppLink is-underlined :to="localePath('support-contact')">
                    {{ t('userConsentContactForm') }}
                  </AppLink>
                </template>
                <template #privacyPolicy>
                  <AppLink is-underlined :to="localePath('docs-legal-privacy')">
                    {{ t('userConsentPrivacyPolicy') }}
                  </AppLink>
                </template>
              </i18n-t>
            </TypographySubtitleSmall>
          </FieldLabel>
        </div>
        <FieldError
          v-if="isFieldInvalid(field)"
          :errors="field.state.meta.errors"
        />
      </Field>
    </form.Field>
  </form>
</template>

<script setup lang="ts">
import { useForm } from '@tanstack/vue-form'
import { z } from 'zod'

// compiler
const emit = defineEmits<{
  success: []
}>()

// form
const modelError = defineModel<Error>('error')
const formRef = useTemplateRef<HTMLFormElement>('formRef')

const formSchema = z.object({
  userConsent: z.boolean().refine((value) => value === true),
  userEmailAddress: z.string().min(1).email().max(1000),
  userName: z.string().min(1).max(100),
})

const { $csrfFetch } = useNuxtApp()
const form = useForm({
  defaultValues: {
    userConsent: false,
    userEmailAddress: '',
    userName: '',
  },
  validators: {
    onSubmit: formSchema,
  },
  onSubmit: async ({ value }) => {
    try {
      await $csrfFetch('/api/service/zammad/early-bird', {
        body: value,
        method: 'POST',
      })
      emit('success')
    } catch (error) {
      modelError.value = error as Error
    }
  },
})

const onSubmit = (e: Event) => {
  e.preventDefault()
  e.stopPropagation()
  form.handleSubmit()
}

const submit = () => formRef.value?.requestSubmit()
defineExpose({
  submit,
})

// template
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<i18n lang="yaml">
de:
  userConsent: 'Ich stimme zu, dass meine Angaben aus diesem Formular gemäß der {privacyPolicy} zur Beantwortung meiner Anfrage verarbeitet werden. Meine Einwilligung zur Datenverarbeitung kann ich jederzeit über das {contactForm} widerrufen.'
  userConsentContactForm: Kontaktformular
  userConsentPrivacyPolicy: Datenschutzerklärung
  userEmailAddress: E-Mail-Adresse
  userName: Name
en:
  userConsent: 'I agree that the information I provide in this form may be processed in accordance with the {privacyPolicy} for the purpose of responding to my inquiry. I can withdraw my consent at any time using the {contactForm}.'
  userConsentContactForm: contact form
  userConsentPrivacyPolicy: privacy policy
  userEmailAddress: Email address
  userName: Name
</i18n>
