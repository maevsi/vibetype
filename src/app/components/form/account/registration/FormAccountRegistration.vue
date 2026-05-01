<template>
  <div class="flex flex-col gap-4">
    <form
      class="flex w-full flex-col gap-4"
      @submit.prevent="form.handleSubmit"
    >
      <FormAuthPasswordPair
        :password-error="passwordValidation.error.value"
        :password-placeholder="t('password')"
        :password-strength="
          calculatePasswordStrength(form.getFieldValue('password'))
        "
        :password-value="form.getFieldValue('password')"
        :repetition-error="passwordRepetitionValidation.error.value"
        :repetition-placeholder="t('passwordRepetition')"
        :repetition-value="form.getFieldValue('passwordRepetition')"
        show-strength
        @password-blur="handlePasswordBlur"
        @repetition-blur="handlePasswordRepetitionBlur"
        @update:password-value="handlePasswordInput"
        @update:repetition-value="handlePasswordRepetitionInput"
      />
      <FormFieldCaptcha v-model:captcha-is-used="captchaIsUsed" :form />
      <FormAuthButton :aria-label="t('register')" type="submit">
        {{ t('register') }}
      </FormAuthButton>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        {{ t('accountDeletionNotice') }}
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useForm } from '@tanstack/vue-form'
import { z } from 'zod'

const emit = defineEmits<{
  submit: [
    values: {
      captcha: string
      password: string
    },
  ]
}>()

const { t } = useI18n()
const captchaIsUsed = defineModel<boolean>('captcha-is-used')

const passwordMessages = computed(() => ({
  minimumLength: t('passwordMinLength'),
  passwordMismatch: t('passwordMismatch'),
  specialCharacter: t('passwordSpecialChar'),
  uppercase: t('passwordUppercase'),
}))

const passwordValidation = useAuthFieldValidation({
  validator: (value: string) =>
    getStrongPasswordError({
      messages: passwordMessages.value,
      password: value,
    }),
})

const passwordRepetitionValidation = useAuthFieldValidation({
  validator: (value: string) =>
    getPasswordConfirmationError({
      messages: passwordMessages.value,
      password: form.getFieldValue('password'),
      repetition: value,
    }),
})

const handlePasswordBlur = async () => {
  await passwordValidation.handleBlur(form.getFieldValue('password'))
}

const handlePasswordInput = async (value: string) => {
  form.setFieldValue('password', value)
  await passwordValidation.handleInput(value)

  if (passwordRepetitionValidation.touched.value) {
    await passwordRepetitionValidation.validate(
      form.getFieldValue('passwordRepetition'),
    )
  }
}

const handlePasswordRepetitionBlur = async () => {
  await passwordRepetitionValidation.handleBlur(
    form.getFieldValue('passwordRepetition'),
  )
}

const handlePasswordRepetitionInput = async (value: string) => {
  form.setFieldValue('passwordRepetition', value)
  await passwordRepetitionValidation.handleInput(value)
}

// form
const formSchema = z
  .object({
    captcha: SCHEMA_CAPTCHA,
    password: SCHEMA_PASSWORD_V2,
    passwordRepetition: z.string().min(1),
  })
  .refine((data) => data.password === data.passwordRepetition, {
    message: t('passwordMismatch'),
    path: ['passwordRepetition'],
  })

const form = useForm({
  defaultValues: {
    captcha: '',
    password: '',
    passwordRepetition: '',
  },
  validators: {
    onSubmit: formSchema,
  },
  onSubmit: async ({ value }) => {
    emit('submit', {
      captcha: value.captcha,
      password: value.password,
    })
  },
})
</script>

<i18n lang="yaml">
de:
  accountDeletionNotice: Du wirst deinen Account jederzeit löschen können.
  password: Passwort
  passwordMinLength: Mindestens 12 Zeichen erforderlich
  passwordMismatch: Die Passwörter stimmen nicht überein
  passwordRepetition: Passwort bestätigen
  passwordSpecialChar: Mindestens 1 Sonderzeichen erforderlich
  passwordUppercase: Mindestens 1 Großbuchstabe erforderlich
  register: Passwort speichern
en:
  accountDeletionNotice: "You'll be able to delete your account at any time."
  password: Password
  passwordMinLength: At least 12 characters required
  passwordMismatch: The passwords do not match
  passwordRepetition: Confirm password
  passwordSpecialChar: At least 1 special character required
  passwordUppercase: At least 1 uppercase letter required
  register: Save password
</i18n>
