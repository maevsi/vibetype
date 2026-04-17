<template>
  <div class="flex flex-col gap-4">
    <form
      class="flex w-full flex-col gap-4"
      @submit.prevent="form.handleSubmit"
    >
      <form.Field v-slot="{ field }" name="password">
        <Field>
          <FieldContent>
            <div class="relative">
              <IHeroiconsKey
                class="pointer-events-none absolute top-4 left-4 z-10 size-5 text-gray-500 dark:text-gray-400"
              />
              <FormInputPassword
                :aria-invalid="!!passwordError"
                input-class="h-13 rounded-2xl border-transparent bg-gray-100 pl-12 text-[17px] dark:bg-gray-800"
                :model-value="field.state.value"
                :placeholder="t('password')"
                @blur="handlePasswordBlur(field)"
                @input="field.handleChange($event)"
              />
              <Progress
                :model-value="calculatePasswordStrength(field.state.value)"
                class="mt-2"
              />
            </div>
          </FieldContent>
          <p v-if="passwordError" class="text-sm text-red-600">
            {{ passwordError }}
          </p>
        </Field>
      </form.Field>
      <form.Field v-slot="{ field }" name="passwordRepetition">
        <Field>
          <FieldContent>
            <div class="relative">
              <IHeroiconsLockClosed
                class="pointer-events-none absolute top-4 left-4 z-10 size-5 text-gray-500 dark:text-gray-400"
              />
              <FormInputPassword
                :aria-invalid="!!passwordRepError"
                input-class="h-13 rounded-2xl border-transparent bg-gray-100 pl-12 text-[17px] dark:bg-gray-800"
                :model-value="field.state.value"
                :placeholder="t('passwordRepetition')"
                @blur="handlePasswordRepBlur(field)"
                @input="field.handleChange($event)"
              />
            </div>
          </FieldContent>
          <p v-if="passwordRepError" class="text-sm text-red-600">
            {{ passwordRepError }}
          </p>
        </Field>
      </form.Field>
      <FormFieldCaptcha v-model:captcha-is-used="captchaIsUsed" :form />
      <ButtonColored
        :aria-label="t('register')"
        class="h-13! w-full rounded-2xl! text-[17px]! text-white! dark:bg-green-700!"
        type="submit"
      >
        {{ t('register') }}
      </ButtonColored>
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

// password validation: 12 chars, 1 uppercase, 1 special character
const schemaPasswordRegistration = z
  .string()
  .min(12, t('passwordMinLength'))
  .regex(/[A-Z]/, t('passwordUppercase'))
  .regex(/[^A-Za-z0-9]/, t('passwordSpecialChar'))

const passwordError = ref('')
const passwordTouched = ref(false)
const passwordRepError = ref('')
const passwordRepTouched = ref(false)

const validatePassword = (value: string) => {
  if (!value) {
    passwordError.value = t('passwordMinLength')
    return false
  }
  const result = schemaPasswordRegistration.safeParse(value)
  passwordError.value = result.success
    ? ''
    : result.error.errors[0]?.message || ''
  return result.success
}

const validatePasswordRep = (password: string, repetition: string) => {
  if (!repetition) {
    passwordRepError.value = ''
    return false
  }
  if (password !== repetition) {
    passwordRepError.value = t('passwordMismatch')
    return false
  }
  passwordRepError.value = ''
  return true
}

const handlePasswordBlur = (field: {
  handleBlur: () => void
  state: { value: string }
}) => {
  field.handleBlur()
  passwordTouched.value = true
  validatePassword(field.state.value)
}

const handlePasswordRepBlur = (field: {
  handleBlur: () => void
  state: { value: string }
}) => {
  field.handleBlur()
  passwordRepTouched.value = true
  validatePasswordRep(form.getFieldValue('password'), field.state.value)
}

// form
const formSchema = z
  .object({
    captcha: SCHEMA_CAPTCHA,
    password: SCHEMA_PASSWORD,
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

// watch password field to revalidate while typing (after first blur)
watch(
  () => form.getFieldValue('password'),
  (value) => {
    if (passwordTouched.value) validatePassword(value)
    if (passwordRepTouched.value) {
      validatePasswordRep(value, form.getFieldValue('passwordRepetition'))
    }
  },
)

// watch password repetition field to revalidate while typing (after first blur)
watch(
  () => form.getFieldValue('passwordRepetition'),
  (value) => {
    if (passwordRepTouched.value) {
      validatePasswordRep(form.getFieldValue('password'), value)
    }
  },
)
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
