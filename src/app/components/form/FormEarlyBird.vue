<template>
  <form class="flex flex-col gap-5" @submit.prevent="form.handleSubmit">
    <form.Field v-slot="{ field }" name="userName">
      <Field>
        <FieldLabel :for="field.name">
          <span class="text-body">
            {{ t('userName') }}
          </span>
        </FieldLabel>
        <FieldContent>
          <Input
            :id="field.name"
            :aria-invalid="isFieldInvalid(field)"
            :model-value="field.state.value"
            :name="field.name"
            type="text"
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
        <FieldLabel :for="field.name">
          <span class="text-body">
            {{ t('userEmailAddress') }}
          </span>
        </FieldLabel>
        <FieldContent>
          <Input
            :id="field.name"
            :aria-invalid="isFieldInvalid(field)"
            :model-value="field.state.value"
            :name="field.name"
            type="email"
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
            <Checkbox
              :id="field.name"
              :aria-invalid="isFieldInvalid(field)"
              :model-value="field.state.value"
              required
              @update:model-value="
                (checked) => field.handleChange(checked === true)
              "
            />
          </FieldContent>
          <FieldLabel :for="field.name">
            <span class="text-body">
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
            </span>
          </FieldLabel>
        </div>
        <FieldError
          v-if="isFieldInvalid(field)"
          :errors="field.state.meta.errors"
        />
      </Field>
    </form.Field>
    <FormFieldCaptcha v-model:captcha-is-used="captchaIsUsed" :form />
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
const isSubmitting = defineModel<boolean>('isSubmitting')
const captchaIsUsed = ref<boolean>()

const formSchema = z.object({
  captcha: SCHEMA_CAPTCHA,
  userConsent: SCHEMA_CONSENT_REQUIRED,
  userEmailAddress: SCHEMA_EMAIL_ADDRESS_REQUIRED,
  userName: SCHEMA_USER_NAME_REQUIRED,
})

const { $csrfFetch } = useNuxtApp()
const form = useForm({
  defaultValues: {
    captcha: '',
    userConsent: false,
    userEmailAddress: '',
    userName: '',
  },
  validators: {
    onSubmit: formSchema,
  },
  onSubmit: async ({ value }) => {
    isSubmitting.value = true

    try {
      await $csrfFetch('/api/service/zammad/early-bird', {
        body: value,
        headers: {
          ...(value.captcha ? { [TURNSTILE_HEADER_KEY]: value.captcha } : {}),
        },
        method: 'POST',
      })
      emit('success')
    } catch (error) {
      modelError.value = error as Error
    } finally {
      isSubmitting.value = false
      captchaIsUsed.value = true
    }
  },
})

// template
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<i18n lang="yaml">
de:
  userConsent: Ich bin einverstanden, dass @.upper:{'globalSiteName'} meine Angaben aus diesem Formular nutzt, damit ich am Früher-Vogel-Programm teilnehmen und dazu kontaktiert werden kann, wie in der {privacyPolicy} beschrieben. Diese Einwilligung kann ich jederzeit über das {contactForm} widerrufen.
  userConsentContactForm: Kontaktformular
  userConsentPrivacyPolicy: Datenschutzerklärung
  userEmailAddress: E-Mail-Adresse
  userName: Name
en:
  userConsent: I agree that @.upper:{'globalSiteName'} uses the details I enter here so I can take part in the Early Bird program and be contacted about it, as described in the {privacyPolicy}. I can withdraw this consent anytime via the {contactForm}.
  userConsentContactForm: contact form
  userConsentPrivacyPolicy: privacy policy
  userEmailAddress: Email address
  userName: Name
</i18n>
