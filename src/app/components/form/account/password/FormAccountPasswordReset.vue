<template>
  <form
    class="flex w-full max-w-md flex-col self-center px-3 pt-6 lg:px-6"
    @submit.prevent="handleSubmit"
  >
    <FormAuthPasswordPair
      :password-error="passwordPairValidation.password.error.value"
      :password-placeholder="t('passwordNew')"
      :password-value="form.getFieldValue('password')"
      :repetition-error="passwordPairValidation.repetition.error.value"
      :repetition-placeholder="t('passwordConfirm')"
      :repetition-value="form.getFieldValue('passwordConfirm')"
      @password-blur="passwordPairValidation.handlePasswordBlur"
      @repetition-blur="passwordPairValidation.handleRepetitionBlur"
      @update:password-value="passwordPairValidation.handlePasswordInput"
      @update:repetition-value="passwordPairValidation.handleRepetitionInput"
    />
    <FormAuthButton :aria-label="t('save')" class="mt-4" type="submit">
      {{ t('save') }}
    </FormAuthButton>
  </form>
</template>

<script setup lang="ts">
import { useForm } from '@tanstack/vue-form'
import { useMutation } from '@urql/vue'
import { z } from 'zod'

import { graphql } from '~~/gql/generated'

const { code } = defineProps<{
  code: string
}>()

const emit = defineEmits<{
  success: []
}>()

const modelError = defineModel<Error>('error')

const { t } = useI18n()

// api data
const passwordResetMutation = useMutation(
  graphql(`
    mutation AccountPasswordReset($input: AccountPasswordResetInput!) {
      accountPasswordReset(input: $input) {
        clientMutationId
      }
    }
  `),
)
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
  tooWeak: t('passwordTooWeak'),
}))

const passwordPairValidation = usePasswordPairValidation({
  getPassword: () => form.getFieldValue('password'),
  getRepetition: () => form.getFieldValue('passwordConfirm'),
  messages: () => passwordMessages.value,
  setPassword: (value) => form.setFieldValue('password', value),
  setRepetition: (value) => form.setFieldValue('passwordConfirm', value),
})

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
  const isPasswordPairValid = await passwordPairValidation.validate()

  if (!isPasswordPairValid) return

  form.handleSubmit()
}
</script>

<i18n lang="yaml">
de:
  passwordConfirm: Neues Passwort bestätigen
  passwordMinLength: Mindestens 8 Zeichen erforderlich
  passwordMismatch: Passwörter stimmen nicht überein
  passwordNew: Neues Passwort eingeben
  passwordTooWeak: Dieses Passwort ist zu leicht zu erraten. Versuche es länger oder weniger vorhersehbar zu machen.
  postgres22023: Das Passwort ist zu kurz! Überlege dir ein längeres.
  postgresP0002: Unbekannter Zurücksetzungslink! Hast du dein Passwort vielleicht schon zurückgesetzt?
  postgres55000: Der Zurücksetzungslink ist abgelaufen!
  save: Neues Passwort speichern
en:
  passwordConfirm: Confirm new password
  passwordMinLength: At least 8 characters required
  passwordMismatch: Passwords do not match
  passwordNew: Enter new password
  passwordTooWeak: This password is too easy to guess. Try making it longer or less predictable.
  postgres22023: This password is too short! Think of a longer one.
  postgresP0002: Invalid reset link! Have you perhaps already reset your password?
  postgres55000: Your reset link has expired!
  save: Save new password
</i18n>
