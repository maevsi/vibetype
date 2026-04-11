<template>
  <form
    ref="formRef"
    class="flex flex-col gap-4"
    @submit.prevent="form.handleSubmit"
  >
    <FieldGroup>
      <form.Field v-slot="{ field }" name="itemDescription">
        <Field :data-invalid="isFieldInvalid(field)">
          <FieldLabel :for="field.name">
            <TypographySubtitleSmall>
              {{ t('itemDescription') }}
            </TypographySubtitleSmall>
          </FieldLabel>
          <Textarea
            :id="field.name"
            :name="field.name"
            :model-value="field.state.value"
            :aria-invalid="isFieldInvalid(field)"
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
      <form.Field v-slot="{ field }" name="userName">
        <Field :data-invalid="isFieldInvalid(field)">
          <FieldLabel :for="field.name">
            <TypographySubtitleSmall>
              {{ t('userName') }}
            </TypographySubtitleSmall>
          </FieldLabel>
          <AppInput
            :id="field.name"
            :name="field.name"
            :model-value="field.state.value"
            :aria-invalid="isFieldInvalid(field)"
            type="text"
            @blur="field.handleBlur"
            @input="
              field.handleChange(($event.target as HTMLInputElement).value)
            "
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
            <TypographySubtitleSmall>
              {{ t('userEmailAddress') }}
            </TypographySubtitleSmall>
          </FieldLabel>
          <AppInput
            :id="field.name"
            :name="field.name"
            :model-value="field.state.value"
            :aria-invalid="isFieldInvalid(field)"
            type="email"
            @blur="field.handleBlur"
            @input="
              field.handleChange(($event.target as HTMLInputElement).value)
            "
          />
          <FieldError
            v-if="isFieldInvalid(field)"
            :errors="field.state.meta.errors"
          />
        </Field>
      </form.Field>
      <form.Field v-slot="{ field }" name="userConsent">
        <Field orientation="horizontal" :data-invalid="isFieldInvalid(field)">
          <AppCheckbox
            :id="field.name"
            :model-value="field.state.value"
            required
            class="mt-1"
            @update:model-value="
              (checked) => field.handleChange(checked === true)
            "
          />
          <div class="flex flex-col gap-1">
            <FieldLabel :for="field.name">
              <TypographySubtitleSmall>
                <i18n-t keypath="userConsent">
                  <template #privacyPolicy>
                    <AppLink
                      is-underlined
                      :to="localePath('docs-legal-privacy')"
                    >
                      {{ t('userConsentPrivacyPolicy') }}
                    </AppLink>
                  </template>
                </i18n-t>
              </TypographySubtitleSmall>
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
const formRef = useTemplateRef<HTMLFormElement>('formRef')
const submit = () => formRef.value?.requestSubmit()
defineExpose({ submit })

const captchaIsUsed = ref<boolean>()

const formSchema = z.object({
  captcha: z.string().min(1),
  itemDescription: z.string().min(1).max(10000),
  userConsent: z.boolean().refine((value) => value === true),
  userEmailAddress: z.string().min(1).email().max(1000),
  userName: z.string().max(100),
})

const { $csrfFetch } = useNuxtApp()
const form = useForm({
  defaultValues: {
    captcha: '',
    itemDescription: '',
    userConsent: false,
    userEmailAddress: '',
    userName: '',
  },
  validators: {
    onSubmit: formSchema,
  },
  onSubmit: async ({ value }) => {
    try {
      await $csrfFetch('/api/service/zammad/contact', {
        body: {
          ...value,
          userName: value.userName || undefined,
        },
        headers: {
          ...(value.captcha ? { [TURNSTILE_HEADER_KEY]: value.captcha } : {}),
        },
        method: 'POST',
      })
      emit('success')
    } catch (error) {
      modelError.value = error as Error
    } finally {
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
  itemDescription: Nachricht
  userConsent: 'Ich stimme zu, dass meine Angaben aus diesem Formular gemäß der {privacyPolicy} zur Beantwortung meiner Anfrage verarbeitet werden. Meine Einwilligung zur Datenverarbeitung kann ich jederzeit über dieses Formular widerrufen.'
  userConsentPrivacyPolicy: Datenschutzerklärung
  userEmailAddress: E-Mail-Adresse
  userName: Name
en:
  itemDescription: Message
  userConsent: 'I agree that the information I provide in this form may be processed in accordance with the {privacyPolicy} for the purpose of responding to my inquiry. I can withdraw my consent at any time using this form.'
  userConsentPrivacyPolicy: privacy policy
  userEmailAddress: Email address
  userName: Name
</i18n>
