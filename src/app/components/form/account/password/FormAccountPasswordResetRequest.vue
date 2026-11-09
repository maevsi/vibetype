<template>
  <form
    class="flex w-full max-w-md flex-col self-center px-3 pt-6 lg:px-6"
    @submit.prevent="handleSubmit"
  >
    <form.Field v-slot="{ field }" name="emailAddress">
      <FormAuthInput
        :aria-invalid="!!emailError"
        :model-value="field.state.value"
        :placeholder="t('emailAddress')"
        type="email"
        @blur="handleEmailBlur(field)"
        @input="handleEmailInput(field, $event)"
      >
        <template #icon>
          <IHeroiconsEnvelope />
        </template>
      </FormAuthInput>
      <p v-if="emailError" class="mt-1 text-sm text-error">
        {{ emailError }}
      </p>
    </form.Field>
    <FormFieldCaptcha v-model:captcha-is-used="captchaIsUsed" :form />
    <FormAuthButton :aria-label="t('send')" class="mt-4" type="submit">
      {{ t('send') }}
    </FormAuthButton>
    <p class="mt-6 text-center text-[15px] text-fg-2">
      {{ t('rememberPassword') }}
      <NuxtLinkLocale
        class="font-semibold text-link underline"
        to="session-create"
      >
        {{ t('signIn') }}
      </NuxtLinkLocale>
    </p>
  </form>
</template>

<script setup lang="ts">
import { useForm } from '@tanstack/vue-form'
import { useMutation } from '@urql/vue'
import { z } from 'zod'

import { graphql } from '~~/gql/generated'

const emit = defineEmits<{
  success: [emailAddress: string]
}>()

const modelError = defineModel<Error>('error')

const { locale, t } = useI18n()

// api data
const passwordResetRequestMutation = useMutation(
  graphql(`
    mutation AccountPasswordResetRequest(
      $input: AccountPasswordResetRequestInput!
    ) {
      accountPasswordResetRequest(input: $input) {
        clientMutationId
      }
    }
  `),
)
const api = await useApiData([passwordResetRequestMutation])
useApiErrorModel({
  errorModel: modelError,
  errors: () => api.value.errors,
})

// validation
const emailTouched = ref(false)
const emailError = ref('')

const validateEmail = (value: string) => {
  if (!value) {
    emailError.value = t('validationEmailRequired')
    return false
  }
  const result = SCHEMA_EMAIL_ADDRESS_REQUIRED.safeParse(value)
  if (!result.success) {
    emailError.value = t('validationEmailInvalid')
    return false
  }
  emailError.value = ''
  return true
}

const handleEmailBlur = (field: {
  handleBlur: () => void
  state: { value: string }
}) => {
  field.handleBlur()
  emailTouched.value = true
  validateEmail(field.state.value)
}

const handleEmailInput = (
  field: { handleChange: (value: string) => void },
  value: string,
) => {
  field.handleChange(value)
  if (emailTouched.value) validateEmail(value)
}

// form
const { csrf } = useCsrf()
const captchaIsUsed = ref<boolean>()

const formSchema = z.object({
  captcha: SCHEMA_CAPTCHA,
  emailAddress: SCHEMA_EMAIL_ADDRESS_REQUIRED,
})

const form = useForm({
  defaultValues: {
    captcha: '',
    emailAddress: '',
  },
  validators: {
    onSubmit: formSchema,
  },
  onSubmit: async ({ value }) => {
    const result = await passwordResetRequestMutation.executeMutation(
      {
        input: {
          emailAddress: value.emailAddress,
          language: locale.value,
          timeZone: useTimeZone(),
        },
      },
      {
        // Replaces the client's fetch options, so the CSRF header has to be repeated.
        fetchOptions: {
          headers: {
            [CSRF_HEADER_NAME]: csrf,
            ...(value.captcha && { [TURNSTILE_HEADER_KEY]: value.captcha }),
          },
        },
      },
    )

    captchaIsUsed.value = true

    if (!getResultData(result)) return

    emit('success', value.emailAddress)
  },
})

const handleSubmit = () => {
  emailTouched.value = true
  const emailValue = form.getFieldValue('emailAddress')
  const isValid = validateEmail(emailValue)
  if (!isValid) return
  form.handleSubmit()
}
</script>

<i18n lang="yaml">
de:
  emailAddress: E-Mail-Adresse
  rememberPassword: 'Erinnerst du dich an dein Passwort? '
  send: Link zum Zurücksetzen senden
  signIn: Anmelden
  validationEmailInvalid: Ungültige E-Mail-Adresse
  validationEmailRequired: E-Mail-Adresse erforderlich
en:
  emailAddress: Email address
  rememberPassword: 'Remember your password? '
  send: Send reset link
  signIn: Sign in
  validationEmailInvalid: Invalid email address
  validationEmailRequired: Email address is required
</i18n>
