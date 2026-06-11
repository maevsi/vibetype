<template>
  <form
    class="flex w-full max-w-md flex-col self-center px-3 pt-6 lg:px-6"
    @submit.prevent="handleSubmit"
  >
    <FormAuthPasswordPair
      :password-error="passwordValidation.error.value"
      :password-placeholder="t('passwordNew')"
      :password-value="form.getFieldValue('password')"
      :repetition-error="passwordConfirmationValidation.error.value"
      :repetition-placeholder="t('passwordConfirm')"
      :repetition-value="form.getFieldValue('passwordConfirm')"
      @password-blur="handlePasswordBlur"
      @repetition-blur="handlePasswordConfirmationBlur"
      @update:password-value="handlePasswordInput"
      @update:repetition-value="handlePasswordConfirmationInput"
    />
    <FormAuthButton :aria-label="t('save')" class="mt-4" type="submit">
      {{ t('save') }}
    </FormAuthButton>
  </form>
</template>

<script setup lang="ts">
import { useForm } from '@tanstack/vue-form'
import { z } from 'zod'
import { useAccountPasswordResetMutation } from '~~/gql/documents/mutations/account/accountPasswordReset'

const { code } = defineProps<{
  code: string
}>()

const emit = defineEmits<{
  success: []
}>()

const modelError = defineModel<Error>('error')

const { t } = useI18n()

// api data
const passwordResetMutation = useAccountPasswordResetMutation()
const api = await useApiData([passwordResetMutation])
watch(
  () => api.value.errors,
  (current) => {
    modelError.value = current?.length
      ? new Error(
          getCombinedErrorMessages(current, {
            postgres22023: t('postgres22023'),
            postgres55000: t('postgres55000'),
            postgresP0002: t('postgresP0002'),
          })[0],
        )
      : undefined
  },
)

// validation
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

const passwordConfirmationValidation = useAuthFieldValidation({
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

  if (passwordConfirmationValidation.touched.value) {
    await passwordConfirmationValidation.validate(
      form.getFieldValue('passwordConfirm'),
    )
  }
}

const handlePasswordConfirmationBlur = async () => {
  await passwordConfirmationValidation.handleBlur(
    form.getFieldValue('passwordConfirm'),
  )
}

const handlePasswordConfirmationInput = async (value: string) => {
  form.setFieldValue('passwordConfirm', value)
  await passwordConfirmationValidation.handleInput(value)
}

// form
const formSchema = z.object({
  password: SCHEMA_PASSWORD_V2,
  passwordConfirm: z.string(),
})

const form = useForm({
  defaultValues: {
    password: '',
    passwordConfirm: '',
  },
  validators: {
    onSubmit: formSchema,
  },
  onSubmit: async ({ value }) => {
    const result = await passwordResetMutation.executeMutation({
      input: {
        code,
        password: value.password,
      },
    })

    if (!getResultData(result)) return

    emit('success')
  },
})

const handleSubmit = async () => {
  passwordValidation.touched.value = true
  passwordConfirmationValidation.touched.value = true

  const isPasswordValid = await passwordValidation.validate(
    form.getFieldValue('password'),
  )
  const isConfirmationValid = await passwordConfirmationValidation.validate(
    form.getFieldValue('passwordConfirm'),
  )

  if (!isPasswordValid || !isConfirmationValid) return

  form.handleSubmit()
}
</script>

<i18n lang="yaml">
de:
  passwordConfirm: Neues Passwort bestätigen
  passwordMinLength: Mindestens 12 Zeichen erforderlich
  passwordMismatch: Passwörter stimmen nicht überein
  passwordNew: Neues Passwort eingeben
  passwordSpecialChar: Mindestens 1 Sonderzeichen erforderlich
  passwordUppercase: Mindestens 1 Großbuchstabe erforderlich
  postgres22023: Das Passwort ist zu kurz! Überlege dir ein längeres.
  postgresP0002: Unbekannter Zurücksetzungslink! Hast du dein Passwort vielleicht schon zurückgesetzt?
  postgres55000: Der Zurücksetzungslink ist abgelaufen!
  save: Neues Passwort speichern
en:
  passwordConfirm: Confirm new password
  passwordMinLength: Minimum 12 characters required
  passwordMismatch: Passwords do not match
  passwordNew: Enter new password
  passwordSpecialChar: At least 1 special character required
  passwordUppercase: At least 1 uppercase letter required
  postgres22023: This password is too short! Think of a longer one.
  postgresP0002: Invalid reset link! Have you perhaps already reset your password?
  postgres55000: Your reset link has expired!
  save: Save new password
</i18n>
