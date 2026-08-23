<template>
  <form class="flex flex-col gap-4" @submit.prevent="handleSubmit">
    <form.Field v-slot="{ field }" name="passwordCurrent">
      <Field>
        <FieldLabel>
          <TypographySubtitleSmall>
            {{ t('passwordCurrent') }}
          </TypographySubtitleSmall>
        </FieldLabel>
        <FieldContent>
          <FormInputPassword
            :aria-invalid="isFieldInvalid(field)"
            :model-value="field.state.value"
            @blur="field.handleBlur"
            @input="field.handleChange($event)"
          />
        </FieldContent>
        <FieldError
          v-if="isFieldInvalid(field)"
          :errors="field.state.meta.errors"
        />
      </Field>
    </form.Field>
    <form.Field v-slot="{ field }" name="passwordNew">
      <Field>
        <FieldLabel>
          <TypographySubtitleSmall>
            {{ t('passwordNew') }}
          </TypographySubtitleSmall>
        </FieldLabel>
        <FieldContent>
          <FormAuthInputPassword
            :aria-invalid="!!passwordNewValidation.error.value"
            :model-value="field.state.value"
            @blur="handlePasswordNewBlur"
            @input="handlePasswordNewInput"
          />
        </FieldContent>
        <FieldError
          v-if="passwordNewValidation.error.value"
          :errors="[{ message: passwordNewValidation.error.value }]"
        />
      </Field>
    </form.Field>
    <FormAuthButton :aria-label="t('passwordChange')" type="submit">
      {{ t('passwordChange') }}
    </FormAuthButton>
    <CardStateAlert v-if="errorMessages?.length">
      <AppSpanList :span="errorMessages" />
    </CardStateAlert>
  </form>
</template>

<script setup lang="ts">
import { useForm } from '@tanstack/vue-form'
import { useMutation } from '@urql/vue'
import { z } from 'zod'

import { graphql } from '~~/gql/generated'

const { locale, t } = useI18n()

// api data
const accountPasswordChangeMutation = useMutation(
  graphql(`
    mutation AccountPasswordChange($input: AccountPasswordChangeInput!) {
      accountPasswordChange(input: $input) {
        clientMutationId
      }
    }
  `),
)
const api = await useApiData([accountPasswordChangeMutation])

const errorMessages = computed(() =>
  api.value.errors.length
    ? getCombinedErrorMessages(api.value.errors, {
        postgres22023: t('postgres22023'),
        postgres28P01: t('postgres28P01'),
      })
    : undefined,
)

// validation
const passwordMessages = computed(() => ({
  minimumLength: t('passwordMinLength'),
  tooWeak: t('passwordTooWeak'),
}))

const passwordNewValidation = useAuthFieldValidation({
  validator: (value: string) =>
    getStrongPasswordError({
      locale: locale.value,
      messages: passwordMessages.value,
      password: value,
    }),
})

const handlePasswordNewBlur = async () => {
  await passwordNewValidation.handleBlur(form.getFieldValue('passwordNew'))
}

const handlePasswordNewInput = async (value: string) => {
  form.setFieldValue('passwordNew', value)
  await passwordNewValidation.handleInput(value)
}

// form
const formSchema = z.object({
  passwordCurrent: SCHEMA_PASSWORD,
  passwordNew: getSchemaPasswordV2(locale.value),
})

const form = useForm({
  defaultValues: {
    passwordCurrent: '',
    passwordNew: '',
  },
  validators: {
    onSubmit: formSchema,
  },
  onSubmit: async ({ value }) => {
    const result = await accountPasswordChangeMutation.executeMutation({
      input: {
        passwordCurrent: value.passwordCurrent,
        passwordNew: value.passwordNew,
      },
    })

    if (!getResultData(result)) return

    toast.success(t('passwordChangeSuccess'))
    form.reset()
  },
})

const handleSubmit = async () => {
  passwordNewValidation.touched.value = true

  const isPasswordNewValid = await passwordNewValidation.validate(
    form.getFieldValue('passwordNew'),
  )

  if (!isPasswordNewValid) return

  form.handleSubmit()
}
</script>

<i18n lang="yaml">
de:
  passwordChange: Passwort ändern
  passwordChangeSuccess: Passwort erfolgreich geändert.
  passwordCurrent: Aktuelles Passwort
  passwordMinLength: Mindestens 8 Zeichen erforderlich
  passwordNew: Neues Passwort
  passwordTooWeak: Dieses Passwort ist zu leicht zu erraten. Versuche es länger oder weniger vorhersehbar zu machen.
  postgres22023: Das neue Passwort ist zu kurz! Überlege dir ein längeres.
  postgres28P01: Aktuelles Passwort falsch! Überprüfe, ob du alles richtig geschrieben hast.
en:
  passwordChange: Change password
  passwordChangeSuccess: Password changed successfully.
  passwordCurrent: Current password
  passwordMinLength: At least 8 characters required
  passwordNew: New password
  passwordTooWeak: This password is too easy to guess. Try making it longer or less predictable.
  postgres22023: Your new password is too short! Think of a longer one.
  postgres28P01: Current password incorrect! Check for spelling mistakes.
</i18n>
