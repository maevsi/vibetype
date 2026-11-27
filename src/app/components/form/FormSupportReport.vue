<template>
  <form class="flex flex-col gap-4" @submit.prevent="form.handleSubmit">
    <FieldGroup>
      <form.Field v-slot="{ field }" name="itemDescription">
        <Field :data-invalid="isFieldInvalid(field)">
          <FieldLabel :for="field.name">
            <span class="text-body">
              {{ t('itemDescription') }}
            </span>
          </FieldLabel>
          <Textarea
            :id="field.name"
            :aria-invalid="isFieldInvalid(field)"
            :model-value="field.state.value"
            :name="field.name"
            rows="8"
            @blur="field.handleBlur"
            @input="
              field.handleChange(($event.target as HTMLTextAreaElement).value)
            "
          />
          <FieldError
            v-if="isFieldInvalid(field)"
            :errors="field.state.meta.errors"
          />
        </Field>
      </form.Field>
      <form.Field v-slot="{ field }" name="itemUrl">
        <Field :data-invalid="isFieldInvalid(field)">
          <FieldLabel :for="field.name">
            <span class="text-body">
              {{ t('itemUrl') }}
            </span>
          </FieldLabel>
          <AppInput
            :id="field.name"
            :aria-invalid="isFieldInvalid(field)"
            :model-value="field.state.value"
            :name="field.name"
            type="url"
            @blur="field.handleBlur"
            @update:model-value="field.handleChange"
          />
          <FieldError
            v-if="isFieldInvalid(field)"
            :errors="field.state.meta.errors"
          />
        </Field>
      </form.Field>
      <form.Field v-slot="{ field }" name="userName">
        <Field :data-invalid="isFieldInvalid(field)">
          <FieldLabel :for="field.name">
            <span class="text-body">
              {{ t('userName') }}
            </span>
          </FieldLabel>
          <AppInput
            :id="field.name"
            :aria-invalid="isFieldInvalid(field)"
            :model-value="field.state.value"
            :name="field.name"
            type="text"
            @blur="field.handleBlur"
            @update:model-value="field.handleChange"
          />
          <FieldError
            v-if="isFieldInvalid(field)"
            :errors="field.state.meta.errors"
          />
        </Field>
      </form.Field>
      <form.Field v-slot="{ field }" name="userEmailAddress">
        <Field :data-invalid="isFieldInvalid(field)">
          <FieldLabel :for="field.name">
            <span class="text-body">
              {{ t('userEmailAddress') }}
            </span>
          </FieldLabel>
          <AppInput
            :id="field.name"
            :aria-invalid="isFieldInvalid(field)"
            :model-value="field.state.value"
            :name="field.name"
            type="email"
            @blur="field.handleBlur"
            @update:model-value="field.handleChange"
          />
          <FieldError
            v-if="isFieldInvalid(field)"
            :errors="field.state.meta.errors"
          />
        </Field>
      </form.Field>
      <form.Field v-slot="{ field }" name="userConsentAccuracy">
        <Field :data-invalid="isFieldInvalid(field)" orientation="horizontal">
          <Checkbox
            :id="field.name"
            class="mt-1"
            :model-value="field.state.value"
            required
            @update:model-value="
              (checked) => field.handleChange(checked === true)
            "
          />
          <div class="flex flex-col gap-1">
            <FieldLabel :for="field.name">
              <span class="text-body">
                {{ t('userConsentAccuracy') }}
              </span>
            </FieldLabel>
            <FieldError
              v-if="isFieldInvalid(field)"
              :errors="field.state.meta.errors"
            />
          </div>
        </Field>
      </form.Field>
      <form.Field v-slot="{ field }" name="userConsentProcessing">
        <Field :data-invalid="isFieldInvalid(field)" orientation="horizontal">
          <Checkbox
            :id="field.name"
            class="mt-1"
            :model-value="field.state.value"
            required
            @update:model-value="
              (checked) => field.handleChange(checked === true)
            "
          />
          <div class="flex flex-col gap-1">
            <FieldLabel :for="field.name">
              <span class="text-body">
                <i18n-t keypath="userConsentProcessing">
                  <template #contactForm>
                    <AppLink is-underlined :to="localePath('support-contact')">
                      {{ t('userConsentProcessingContactForm') }}
                    </AppLink>
                  </template>
                  <template #privacyPolicy>
                    <AppLink
                      is-underlined
                      :to="localePath('docs-legal-privacy')"
                    >
                      {{ t('userConsentProcessingPrivacyPolicy') }}
                    </AppLink>
                  </template>
                </i18n-t>
              </span>
            </FieldLabel>
            <FieldError
              v-if="isFieldInvalid(field)"
              :errors="field.state.meta.errors"
            />
          </div>
        </Field>
      </form.Field>
      <FormFieldCaptcha v-model:captcha-is-used="captchaIsUsed" :form />
    </FieldGroup>
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
  itemDescription: SCHEMA_ITEM_DESCRIPTION_REQUIRED,
  itemUrl: SCHEMA_URL_HTTPS_REQUIRED,
  userConsentAccuracy: SCHEMA_CONSENT_REQUIRED,
  userConsentProcessing: SCHEMA_CONSENT_REQUIRED,
  userEmailAddress: SCHEMA_EMAIL_ADDRESS_OPTIONAL,
  userName: SCHEMA_USER_NAME_OPTIONAL,
})

const { $csrfFetch } = useNuxtApp()
const form = useForm({
  defaultValues: {
    captcha: '',
    itemDescription: '',
    itemUrl: '',
    userConsentAccuracy: false,
    userConsentProcessing: false,
    userEmailAddress: '',
    userName: '',
  },
  validators: {
    onSubmit: formSchema,
  },
  onSubmit: async ({ value }) => {
    isSubmitting.value = true

    try {
      await $csrfFetch('/api/service/zammad/report', {
        body: {
          ...value,
          userEmailAddress: value.userEmailAddress || undefined,
          userName: value.userName || undefined,
        },
        headers: {
          ...(value.captcha ? { [TURNSTILE_HEADER_KEY]: value.captcha } : {}),
        },
        method: 'POST',
      })
      form.reset(value)
      emit('success')
    } catch (error) {
      modelError.value = error as Error
    } finally {
      isSubmitting.value = false
      captchaIsUsed.value = true
    }
  },
})

useFormLeaveConfirmation(form)

// template
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<i18n lang="yaml">
de:
  itemDescription: Begründung, warum der Inhalt rechtswidrig ist
  itemUrl: Genauer Ort des Inhalts (URL)
  userConsentAccuracy: Ich bin in gutem Glauben überzeugt, dass die Angaben und Behauptungen in dieser Meldung richtig und vollständig sind.
  userConsentProcessing: Ich bin einverstanden, dass @.upper:{'globalSiteName'} meine Angaben aus diesem Formular nutzt, um meine Anfrage zu beantworten, wie in der {privacyPolicy} beschrieben. Diese Einwilligung kann ich jederzeit über das {contactForm} widerrufen.
  userConsentProcessingContactForm: Kontaktformular
  userConsentProcessingPrivacyPolicy: Datenschutzerklärung
  userEmailAddress: E-Mail-Adresse
  userName: Name
en:
  itemDescription: Explanation of why the content is illegal
  itemUrl: Exact location of the content (URL)
  userConsentAccuracy: I believe in good faith that the information and claims in this report are accurate and complete.
  userConsentProcessing: I agree that @.upper:{'globalSiteName'} uses the details I enter here to answer my request, as described in the {privacyPolicy}. I can withdraw this consent anytime via the {contactForm}.
  userConsentProcessingContactForm: contact form
  userConsentProcessingPrivacyPolicy: privacy policy
  userEmailAddress: Email address
  userName: Name
</i18n>
