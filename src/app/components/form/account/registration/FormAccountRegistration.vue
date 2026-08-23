<template>
  <div class="flex flex-col gap-4">
    <form class="flex w-full flex-col gap-4" @submit.prevent="handleSubmit">
      <FormAuthPasswordPair
        :password-error="passwordPairValidation.password.error.value"
        :password-placeholder="t('password')"
        :password-strength="passwordStrength"
        :password-value="form.getFieldValue('password')"
        :repetition-error="passwordPairValidation.repetition.error.value"
        :repetition-placeholder="t('passwordRepetition')"
        :repetition-value="form.getFieldValue('passwordRepetition')"
        show-strength
        @password-blur="passwordPairValidation.handlePasswordBlur"
        @repetition-blur="passwordPairValidation.handleRepetitionBlur"
        @update:password-value="handlePasswordInput"
        @update:repetition-value="passwordPairValidation.handleRepetitionInput"
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

const { locale, t } = useI18n()
const captchaIsUsed = defineModel<boolean>('captcha-is-used')

const passwordMessages = computed(() => ({
  minimumLength: t('passwordMinLength'),
  passwordMismatch: t('passwordMismatch'),
  tooWeak: t('passwordTooWeak'),
}))

const passwordPairValidation = usePasswordPairValidation({
  getPassword: () => form.getFieldValue('password'),
  getRepetition: () => form.getFieldValue('passwordRepetition'),
  messages: () => passwordMessages.value,
  setPassword: (value) => form.setFieldValue('password', value),
  setRepetition: (value) => form.setFieldValue('passwordRepetition', value),
})

// form
const formSchema = z
  .object({
    captcha: SCHEMA_CAPTCHA,
    password: getSchemaPasswordV2(locale.value),
    passwordRepetition: z.string().min(1),
  })
  .refine((data) => data.password === data.passwordRepetition, {
    error: t('passwordMismatch'),
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

// zxcvbn is loaded on demand (see passwordStrength.ts), so the meter can only be updated once
// the score for the current input resolves; driven from the same input event as validation
// rather than a watch on the tanstack-form field, whose reads aren't tracked reactively.
const passwordStrength = ref(0)
const handlePasswordInput = async (value: string) => {
  await passwordPairValidation.handlePasswordInput(value)
  passwordStrength.value = await calculatePasswordStrength(value, locale.value)
}

const handleSubmit = async () => {
  const isPasswordPairValid = await passwordPairValidation.validate()

  if (!isPasswordPairValid) return

  form.handleSubmit()
}
</script>

<i18n lang="yaml">
de:
  accountDeletionNotice: Du wirst deinen Account jederzeit löschen können.
  password: Passwort
  passwordMinLength: Mindestens 8 Zeichen erforderlich
  passwordMismatch: Die Passwörter stimmen nicht überein
  passwordRepetition: Passwort bestätigen
  passwordTooWeak: Dieses Passwort ist zu leicht zu erraten. Versuche es länger oder weniger vorhersehbar zu machen.
  register: Passwort speichern
en:
  accountDeletionNotice: "You'll be able to delete your account at any time."
  password: Password
  passwordMinLength: At least 8 characters required
  passwordMismatch: The passwords do not match
  passwordRepetition: Confirm password
  passwordTooWeak: This password is too easy to guess. Try making it longer or less predictable.
  register: Save password
</i18n>
